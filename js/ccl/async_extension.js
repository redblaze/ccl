
jawa.ccl.Primitives.extendClass(function(cls) {
	var bind = jawa.cps.bind;
	var unit = jawa.cps.unit;

	/*
	var toFun = function(f) {
		return function() {
			var args = jawa.util.toArray(arguments);
			return function(cont, abort) {return function(k) {return function(s) {
				return f.apply(this, args)(
					function(a) {
						cont(['just', a])(k)(s);
					},
					function(e) {
						abort(e)(k)(s);
					}	
				);
			};};};
		};
	};
	*/
	
	var cps2fun = function(cps) {
		return function(cont, abort) {return function(r) {return function(k) {return function(s) {
			return cps(function(a) {
				cont(['just', a])(r)(k)(s);
			},
			function(e) {
				abort(e)(r)(k)(s);
			});
		};};};};
	};
	
	var toFun = function(f) {return function() {
		var cps = f.apply(this, arguments);
		return cps2fun(cps);
	};};

	cls.toFun = toFun;
	
	jawa.util.extendObj(cls.async, {
		'cps': cps2fun,
		'timeout': toFun(function(time) {
			return jawa.cps.bind(jawa.timer.sleep(time), function() {
				return jawa.cps.unit();
			});
		}),
		'curl': toFun(function(url, trans) {
			return bind(jawa.ajax.runM({
				action: '/ajax/curl',
				args: {format: 'json', url: url, trans: trans}
			}), function(o) {
				switch(trans) {
					case 'xml2json': 
						return unit(eval('(' + o + ')'));
						// return unit(jawa.json.decode(o));
					default: return unit(jawa.php.base64Decode(o));
				}
			});
		}),
        'wait': function(a) {return function(cont, abort) {return function(e) {return function(k) {return function(s) {
            jawa.GlobalRegistry.set("continuation", function(a) {
                cont(['just', a])(e)(k)(s);
                return jawa.GlobalRegistry.get('finalResult');
            });
            a = a == null ? 'please click continue' : a;
            var fn = jawa.GlobalRegistry.get('onCCLWait');
            return fn(a);
		};};};};},
		'break': function() {return function(cont, abort) {return function(e) {return function(k) {return function(s) {
			// alert(jawa.json.encode(s));
			alert('break point');
			cont(['just', null])(e)(k)(s);
		};};};};},
        /*
		'apply': function(f, args) {
			return f.apply(this, args);
		} */
		'apply': function(f, args) {return function(cont, abort) {
            try {
			    return f.apply(this, args)(cont, abort);
            } catch(e) {
                return abort(e);
            }
		};}
	});
});

/*
jawa.ccl.Interpreter.extendClass(function(cls) {
	var monad = jawa.monad.listErrStateCont;

	def(cls, 'interpWhile', function(b, e) {
		var me = this;
		var monad = this.monad;
        
        var _interpWhile = function() {
            return monad.bind(me.interpExpr(b), function(vb) {
                if (vb) {
                    return monad.bind(me.interpExpr(e), function() {
                        return _interpWhile();
                    });
                } else {
                    return monad.unit();
                }
            });
        };
		
        return monad.bind(monad.readEnv, function(r) {
            return monad.callcc(function(breakCont) {
				var r1 = jawa.util.clone(r);
				r1['break'] = cls.cont2fun(breakCont);
                return monad.bind(monad.callcc(function(continueCont) {
				    r1['continue'] = cls.cont2fun(continueCont);
                    return monad.unit();
                }), function() {
				    return monad.inEnv(r1, _interpWhile());
                })
            });
        });
	}); 
	
	def(cls, 'interpFunApp', function(fun, args) {
		var me = this;
		var monad = this.monad;
		
		var fail = function(e) {
			Untangly.Logger.info(e);
			if (jawa.lang.isString(e)) {
				e = {"status": "ccl_internal_error", "message": e};
			}
			e.CCLStack = jawa.util.dig(e, 'CCLStack', []);
			e.CCLStack.push(jawa.ccl.PrettyPrint.pp(['fun_app', fun, args]));
			return monad.fail(e);
		};
		
		var ms = [];
		for (var i = 0; i < args.length; i++) {
			ms.push(me.interpExpr(args[i]));
		}
		if (fun[0] == 'lvar') {
			var funName = fun[1];
			return monad.bind(monad.sequence(ms), function(vs) {
				return monad.bind(monad.dumpState(), function(s) {
					var fn = jawa.util.dig(s, funName);
					if (!jawa.util.isNull(fn)) {
						return monad.bind(monad.callcc(function(cont) {
							try {
								return (fn.apply(this, vs))(cont, fail);
							} catch(e) {
								return fail(funName + ' is not a function.');
							}
						}), function(a) {
							return monad.fork(a);
						});
					}
					var fn = jawa.util.dig(jawa.ccl.Primitives.async, funName);
					if (!jawa.util.isNull(fn)) { 
						return monad.callcc(function(cont) {
							return (fn.apply(this, vs))(cont, fail);
						});
					}
					var fn = jawa.util.dig(jawa.ccl.Primitives.sync, funName);
					if (!jawa.util.isNull(fn)) { 
						try {
							return monad.unit(fn.apply(this, vs)); 
						} catch(e) {
							return fail(e);
						}
					}
					return fail('The function "' + funName + '" is not defined.');
				});
			});
		} else {
			return monad.bind(me.interpExpr(fun), function(fn) {
				if (!YAHOO.lang.isFunction(fn)) {
					// return fail('"' + jawa.json.encode(fun) + '" is not a function.')
					return fail('"' + jawa.ccl.PrettyPrint(fun) + '" is not a function.')
				}
				return monad.bind(monad.sequence(ms), function(vs) {
					return monad.bind(monad.callcc(function(cont) {
						return (fn.apply(this, vs))(cont, fail);
					}), function(a) {
						return monad.fork(a);
					});
				});
			});
		}
	});
	
	def(cls, 'interpLambda', function(fargs, expr) {
		var me = this;
		var monad = this.monad;
		
		return monad.bind(monad.dumpState(), function(s) {
			return monad.unit(function() {
				var args = jawa.util.toArray(arguments);
				s = jawa.util.clone(s);
				for (var i = 0; i < fargs.length; i++) {
					s[fargs[i]] = args[i];
				}
				s['__args__'] = args;
				return function(cont, abort) {return function(r) {return function(k) {return function(fooS) {
					return cls.run(expr, s, r)(
						function(a) {
							return cont(['just', a])(r)(k)(fooS);
						},
						function(e) {
							return abort(e)(r)(k)(fooS);
						}
					);
				};};};};
			});
		});
	});
});
*/
