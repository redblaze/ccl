
jawa.monad.liftSideEffects = function(tm, lift, m) {};

jawa.monad.listErrStateCont = function() {
	// (a -> (s -> [Maybe(ans, s)])) -> (s -> [Maybe(ans, s)])
  	// var monad = jawa.monad.ContT(jawa.monad.StateT(jawa.monad.ErrT(jawa.monad.List())));
	
	// (Maybe a -> (s -> [(ans, s)])) -> (s -> [(ans, s)])
  	// var monad = jawa.monad.ErrT(jawa.monad.ContT(jawa.monad.StateT(jawa.monad.List())));
	var monad = jawa.monad.compose(
		jawa.monad.ErrT,
		jawa.monad.ContT,
		jawa.monad.StateT,
		jawa.monad.List
	);

	var tq = new jawa.monad.TailQueue();	
	var async = function (fn) {
		tq.append(fn);
	};
	
	var baseBind = monad.bind;
	monad.bind = function(m, f) {
		return baseBind(m, function(a) {
			return function(k) {return function(s) {
				return async(function() {
					return f(a)(k)(s);
				});
			};};
		});
	};
	
	var baseFork = monad.fork;
	monad.fork = function(a) {
		tq.deltaNumOfThreads(a.length - 1);
		return baseFork(a);
	};
	
	monad._run = function(m, state) {return function(cont, abort) {
		cont = jawa.util.or(cont, jawa.util.id);
		abort = jawa.util.or(abort, function(e) {throw(e);});
		state = jawa.util.or(state, {});
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
		return m(k)(state);
	};};
	
	monad.run = function(m, state) {return function(cont, abort) {
		cont = jawa.util.or(cont, jawa.util.id);
		abort = jawa.util.or(abort, function(e) {throw(e);});
		state = jawa.util.or(state, {});
		var res = [];
		tq.endEvent.subscribe(function(e, args) {
			return cont(res);
		});
		return tq.append(function() {
			return monad._run(m, state)(
				function() {
					var a = arguments[0];
					res.unshift(a);
					tq.cleanUpThread();
				},
				abort
			); 
		});
	};};

	monad.mor = function(m1, m2) {
		return function(k) {return function(s) {
			return m1(function(a) {return function(s) {
				switch(a[0]) {
					case 'just':
						return k(a)(s);
					case 'nothing': 
						s['__exception__'] = a[1];
						return m2(k)(s);
					default:
				}
			};})(s);
		};};
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
	
	monad.checkPoint = function(f) {
		return function(k) {
			return function(s0) {
				return f(function(a) {
					return function(foo) { 
						return function(s) {
							k(a)(s0);
						}; 
					};
				})(k)(s0);
			};
		};
	};
	
	monad.mpor = function(m1, m2) {
		return function(k) {return function(s) {
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
			var res1 = m1(k1)(s);
			return state == 'succ1'? res1: m2(k1)(s);
		};};
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