
jawa.monad.liftSideEffects = function(tm, lift, m) {};

jawa.monad.listStateContErrEvn = function() {
	// e -> (a -> (s -> [Maybe(ans, s)])) -> (s -> [Maybe(ans, s)])

	var monad = jawa.monad.compose(
		jawa.monad.EnvT,
		jawa.monad.ErrT,
		jawa.monad.ContT,
		jawa.monad.StateT,
		jawa.monad.List
	);

	// var tq = new jawa.monad.TailQueue();	
	var async = function (fn) {
		// tq.append(fn);
        jawa.tail.run(fn);
	};

    monad.async = async;
	
	var baseBind = monad.bind;
	monad.bind = function(m, f) {
		return baseBind(m, function(a) {
			return function(e) {return function(k) {return function(s) {
				return async(function() {
					return f(a)(e)(k)(s);
				});
			};};};
		});
	};

    var numOfThreads = 1;
    var zeroThreadEvent = new $j.CustomEvent();
	
	var baseFork = monad.fork;
	monad.fork = function(a) {
		// tq.deltaNumOfThreads(a.length - 1);
        numOfThreads += a.length - 1;
        if (numOfThreads == 0) {
            zeroThreadEvent.fire();
        }
		return baseFork(a);
	};
	
	monad._run = function(m, state, env) {return function(cont, abort) {
        cont = cont || function(a) {return a;};
        abort = abort || function(e) {throw e;};
        state = state || {};
		env = env || {};

		var k = function(a) {return function(s) {
			switch(a[0]) {
				case 'just': 
					cont(a[1]); 
	    			return [a[1]];
				case 'nothing':
					abort(a[1]);
					return a[1];
				default:
			}
		};};
		return m(env)(k)(state);
	};};
	
	monad.run = function(m, state, env) {return function(cont, abort) {
        cont = cont || function(a) {return a;};
        abort = abort || function(e) {throw e;};
        state = state || {};
		env = env || {};

		var res = [];
        /*
		tq.endEvent.subscribe(function(e, args) {
			return cont(res);
		}); */
		
        zeroThreadEvent.addListener(function() {
			return cont(res);
		});

        var aborted = false;
		// return tq.append(function() {
		return jawa.tail.run(function() {
			return monad._run(m, state, env)(
				function() {
					var a = arguments[0];
					// res.unshift(a);
					res.push(a);
					// tq.cleanUpThread();
                    numOfThreads--;
                    if (numOfThreads == 0) {
                        cont(res);
                    }
				},
				// abort
                function(e) {
                    if (aborted) {return;}
                    aborted = true;
                    abort(e);
                }
			); 
		});
	};};

	monad.mor = function(m1, m2) {
		return function(e) {return function(k) {return function(s) {
			return m1(e)(function(a) {return function(s) {
				switch(a[0]) {
					case 'just':
						return k(a)(s);
					case 'nothing': 
						s['__exception__'] = a[1];
						return m2(e)(k)(s);
					default:
				}
			};})(s);
		};};};
	};

	monad.morList = function(ms) {
		if (ms.length == 0) {
			return monad.fail('All cases failed.');
		}
		if (ms.length == 1) {
			return ms[0];
		}
		var m = ms.shift();
		return monad.mor(m, monad.morList(ms));
	};
	
	monad.mpor = function(m1, m2) {
		return function(e) {return function(k) {return function(s) {
			var state = 'fresh';
			var k1 = function(a) {return function(s) {
				switch(a[0]) {
				case 'just':
					switch (state) {
					case 'fresh': state = 'succ1'; return k(a)(s);
					case 'fail1': return k(a)(s);
					case 'succ1': return;
					}
				case 'nothing': 
					switch(state) {
					case 'fresh': state = 'fail1'; return;
					case 'fail1': return k(a)(s);
					case 'succ1': return;
					}
				default:
				}
			};} 
			var res1 = m1(e)(k1)(s);
			return state == 'succ1'? res1: m2(e)(k1)(s);
		};};};
	};
	
	monad.mporList = function(ms) {
		if (ms.length == 0) {
			return monad.fail('All cases failed.');
		}
		if (ms.length == 1) {
			return ms[0];
		}
		var m = ms.shift();
		return monad.mpor(m, monad.mporList(ms));
	};
	
	return monad;
};
