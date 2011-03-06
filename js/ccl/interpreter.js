jawa.ccl.Interpreter = function() {
    var cps = $j.cps;
    var parse = $j.ccl.Parser.parse;

    var cls = function() {
        this.init.apply(this, arguments);
    };
    var obj = cls.prototype;

    var cont2fun = function(cont0) {
        return function(a) {
            a = a === undefined? null: a;
            return function(cont, abort) {
                return function(r) {
                    return function(k) {
                        return function(s) {
                            return cont0(['just', a])(r)(k)(s);
                        };
                    };
                };
            };
        };
    };
    var run = function(prog, s, r) {
        var interp = new this();
        var monad = interp.monad;
        var m = monad.bind(monad.readEnv, function(r) {
            var r1 = $o.clone(r);
            return monad.callcc( function(returnCont) {
                r1['return'] = cont2fun(returnCont);
                return monad.inEnv(r1, interp.interpExpr(prog));
            });
        });
        return monad.run(m, s, r);
    };
    var _run = function(prog, s, r) {
        var interp = new this();
        var monad = interp.monad;
        var m = monad.bind(monad.readEnv, function(r) {
            var r1 = $o.clone(r);
            return monad.callcc( function(returnCont) {
                r1['return'] = cont2fun(returnCont);
                return monad.bind(monad.inEnv(r1, interp.interpExpr(prog)), function(o) {
                    return monad.dumpState();
                });
            });
        });
        return cps.bind(monad.run(m, s, r), function(o) {
            return cps.unit(o[0]);
        });
    };
    var applyCCLFunction = function(cclFun, args) {
        args = args || [];
        var interp = new this();
        var monad = interp.monad;
        var s = {
            "__foo__": cclFun,
            "__args__": args
        };
        var prog = jawa.ccl.Parser.parse('apply(__foo__, __args__);');
        return monad.run(interp.interpExpr(prog), s);
    };
    var _parseAndRun = function(source, s, r, onCCLWait) {
        return function(cont, abort) {
            onCCLWait = onCCLWait ||
            function(a, cont) {
                return cont(a);
            };

            r['onCCLWait'] = onCCLWait;
            abort = abort ||
            function(e) {throw(e);
            };

            try {
                var prog = jawa.ccl.Parser.parse(source);
            } catch(e) {
                return abort(e);
            }
            return cls._run(prog, s, r)(cont, abort);
        };
    };
    /*
     var parseAndRun = function(source, s, r) {return function(cont, abort) {
     // jawa.GlobalRegistry.set('onCCLWait', cont);
     r['onCCLWait'] = cont;
     abort = jawa.util.or(abort, function(e) {throw(e);});
     try {
     var prog = jawa.ccl.Parser.parse(source);
     } catch(e) {
     return abort(e);
     }
     return cls.run(prog, s, r)(cont, abort);
     };}; */

    var parseAndRun = function(source, s, r, onCCLWait) {
        return function(cont, abort) {
            onCCLWait = onCCLWait ||
            function(a, cont) {
                return cont(a);
            };

            r['onCCLWait'] = onCCLWait;
            var res;
            abort = abort ||
            function(e) {throw(e);
            };

            try {
                var prog = jawa.ccl.Parser.parse(source);
            } catch(e) {
                return abort(e);
            }
            cls.run(prog, s, r)( function(a) {
                cont(a);
                res = a;
            }, abort);
            return res;
        };
    };
    /*
     var saveContinuationState = function() {
     var savedOnCCLWait = jawa.GlobalRegistry.get('onCCLWait');
     var savedContinuation = jawa.GlobalRegistry.get('continuation');
     var recover = function() {
     jawa.GlobalRegistry.set('onCCLWait', savedOnCCLWait);
     jawa.GlobalRegistry.set('continuation', savedContinuation);
     };
     return recover;
     };

     var _safeParseAndRun = function(source, s, r) {
     var recover = cls.saveContinuationState();
     return jawa.cps.bind(cls._parseAndRun(source, s, r), function(o) {
     recover();
     return jawa.cps.unit(o);
     });
     };

     var safeParseAndRun = function(source, s, r) {
     var recover = cls.saveContinuationState();
     return jawa.cps.bind(cls.parseAndRun(source, s, r), function(o) {
     recover();
     return jawa.cps.unit(o);
     });
     }; */

    obj.init = function() {
        this.monad = jawa.monad.listStateContErrEvn();
    };
    obj.interpExpr = function(expr) {
        switch(expr[0]) {
            case 'lvar':
                return this.interpLVar(expr[1]);
            case 'or':
                return this.interpOr(expr[1]);
            case 'por':
                return this.interpPor(expr[1]);
            case 'seq':
                return this.interpSeq(expr[1]);
            case 'fun_app':
                return this.interpFunApp(expr[1], expr[2]);
            case 'fork':
                return this.interpFork(expr[1]);
            case 'const':
                return this.interpConst(expr[1]);
            case 'assign':
                return this.interpAsgn(expr[1], expr[2]);
            case 'assign_fork':
                return this.interpAsgn(expr[1], ['fork', expr[2]]);
            case 'code':
                return this.interpCode(expr[1]);
            case 'escape':
                return this.monad.fail('cannot escape outside code: ' + jawa.json.encode(expr));
            case 'decode':
                return this.interpDecode(expr[1]);
            case 'switch':
                return this.interpSwitch(expr[1]);
            case 'while':
                return this.interpWhile(expr[1], expr[2]);
            case 'foreach':
                return this.interpForeach(expr[1], expr[2], expr[3]);
            case 'obj_foreach':
                return this.interpObjForeach(expr[1], expr[2], expr[3], expr[4]);
            case 'obj':
                return this.interpObj(expr[1]);
            case 'lambda':
                return this.interpLambda(expr[1], expr[2]);
            case 'sub':
                return this.interpSub(expr[1], expr[2]);
            case 'dot':
                return this.interpDot(expr[1], expr[2]);
            case 'land':
                return this.interpLand(expr[1], expr[2]);
            case 'lor':
                return this.interpLor(expr[1], expr[2]);
            case 'paren':
                return this.interpExpr(expr[1]);
            case 'let':
                return this.interpLet(expr[1], expr[2], expr[3]);
            case 'imp_var':
                return this.interpImpVar(expr[1]);
            default:
                return this.monad.fail('unrecognized statement in interpExpr: ' + jawa.json.encode(expr));
        }
    };
    obj.interpOr = function(cases) {
        var me = this;
        var monad = this.monad;

        var ms = [];
        for(var i = 0; i < cases.length; i++) {
            ms.push(me.interpExpr(cases[i]));
        }
        return monad.morList(ms);
    };
    obj.interpPor = function(cases) {
        var me = this;
        var monad = this.monad;

        var ms = [];
        for(var i = 0; i < cases.length; i++) {
            ms.push(me.interpExpr(cases[i]));
        }
        return monad.mporList(ms);
    };
    obj.interpSeq = function(items) {
        var me = this;
        var monad = this.monad;

        var ms = [];
        for(var i = 0; i < items.length; i++) {
            ms.push(me.interpExpr(items[i]));
        }
        return monad.bind(monad.sequence(ms), function(vs) {
            if (vs.length == 0) {
                return monad.fail('seq expression cannot be empty.');
            }
            return monad.unit(vs[vs.length - 1]);
        });
    };
    obj.interpAsgn = function(lexp, expr) {
        var me = this;
        var monad = this.monad;

        return monad.bind(me.interpExpr(expr), function(a) {
            switch (lexp[0]) {
                case 'lvar':
                    return monad.bind(monad.writeVar(lexp[1], a), function(foo) {
                        return monad.unit(a);
                    });
                case 'sub':
                    return monad.bind(me.interpExpr(lexp[1]), function(o) {
                        return monad.bind(me.interpExpr(lexp[2]), function(i) {
                            o[i] = a;
                            return monad.unit(a);
                        });
                    });
                case 'dot':
                    return monad.bind(me.interpExpr(lexp[1]), function(o) {
                        var i = lexp[2];
                        o[i] = a;
                        return monad.unit(a);
                    });
                default:
                    return monad.fail('unrecognized left expression tag: ' + lexp[0] + ' in: ' + jawa.json.encode([lexp, expr]));
            }
        });
    };
    obj.interpFork = function(expr) {
        var me = this;
        var monad = this.monad;

        return monad.bind(me.interpExpr(expr), function(a) {
            if (!YAHOO.lang.isArray(a)) {
                return monad.fail('Must fork on an array.');
            }
            return monad.fork(a);
        });
    };
    obj.interpLVar = function(name) {
        var me = this;
        var monad = this.monad;

        return monad.bind(monad.readVar(name), function(a) {
            if (a === undefined) {
                return monad.fail('no left variable: ' + name + ' is defined.');
            } else {
                return monad.unit(a);
            }
        });
    };
    obj.interpSub = function(e1, e2) {
        var me = this;
        var monad = this.monad;

        return monad.bind(me.interpExpr(e1), function(a) {
            return monad.bind(me.interpExpr(e2), function(b) {
                if (!jawa.lang.isObject(a) && !jawa.lang.isArray(a)) {
                    return monad.fail('cannot apply sub on non-array or non-object: ' + jawa.json.encode(a));
                }
                return monad.unit(a[b]);
            });
        });
    };
    obj.interpDot = function(e1, i) {
        var me = this;
        var monad = this.monad;

        return monad.bind(me.interpExpr(e1), function(a) {
            if (!jawa.lang.isObject(a) && !jawa.lang.isArray(a)) {
                return monad.fail('cannot find index "' + i + '" on non-array or non-object: ' + jawa.json.encode(a));
            }
            return monad.unit(a[i]);
        });
    };
    obj.interpConst = function(expr) {
        var me = this;
        var monad = this.monad;

        if (YAHOO.lang.isString(expr)) {
            // expr = expr.replace(/\\\\/g, '\\');
            // expr = expr.replace(/\\"/g, '"'); // '
        }
        return monad.unit(expr);
    };
    obj.interpCode = function(expr) {
        var me = this;
        var monad = this.monad;

        var _rec = function(expr, level) {
            var _map = function(es) {
                var ms = [];
                for(var i = 0; i < es.length; i ++) {
                    var e = es[i];
                    ms.push(_rec(e, level));
                }
                return ms;
            };
            switch(expr[0]) {
                case 'code':
                    return monad.bind(_rec(expr[1], level + 1), function(e) {
                        return monad.unit(['code', e]);
                    });
                case 'escape':
                    if (level > 1) {
                        return monad.bind(_rec(expr[1], level - 1), function(e) {
                            return monad.unit(['escape', e]);
                        });
                    } else {
                        return monad.bind(me.interpExpr(expr[1]), function(a) {
                            if (a[0] != 'code') {
                                return monad.fail("cannot escape something that is not code in : " + jawa.json.encode(expr));
                            }
                            return monad.unit(a[1]);
                        });
                    }
                case 'decode':
                    return monad.bind(_rec(expr[1], level), function(e) {
                        return monad.unit(['decode', e]);
                    });
                case 'const':
                case 'imp_var':
                case 'lvar':
                    return monad.unit(expr);
                case 'or':
                    return monad.bind(monad.sequence(_map(expr[1])), function(es) {
                        return monad.unit(['or', es]);
                    });
                case 'por':
                    return monad.bind(monad.sequence(_map(expr[1])), function(es) {
                        return monad.unit(['por', es]);
                    });
                case 'seq':
                    return monad.bind(monad.sequence(_map(expr[1])), function(es) {
                        return monad.unit(['seq', es]);
                    });
                case 'fun_app':
                    return monad.bind(_rec(expr[1], level), function(e1) {
                        return monad.bind(monad.sequence(_map(expr[2])), function(e2s) {
                            return monad.unit(['fun_app', e1, e2s]);
                        });
                    });
                case 'fork':
                    return monad.bind(_rec(expr[1], level), function(e) {
                        return monad.unit(['fork', e]);
                    });
                case 'assign':
                    return monad.bind(_rec(expr[1], level), function(e1) {
                        return monad.bind(_rec(expr[2], level), function(e2) {
                            return monad.unit(['assign', e1, e2]);
                        });
                    });
                case 'assign_fork':
                    return monad.bind(_rec(expr[1], level), function(e1) {
                        return monad.bind(_rec(expr[2], level), function(e2) {
                            return monad.unit(['assign_fork', e1, e2]);
                        });
                    });
                case 'switch':
                    var cases = expr[1];
                    var ms = []
                    for(var i = 0; i < cases.length; i++) {
                        ms.push(monad.bind(monad.unit(cases[i]), function(c) {
                            var cond = c[0];
                            var handler = c[1];
                            return monad.bind(_rec(cond, level), function(e1) {
                                return monad.bind(_rec(handler, level), function(e2) {
                                    return monad.unit([e1, e2]);
                                });
                            })
                        }));
                    }
                    return monad.bind(monad.sequence(ms), function(es) {
                        return monad.unit(['switch', es]);
                    });
                case 'while':
                    return monad.bind(_rec(expr[1], level), function(e1) {
                        return monad.bind(_rec(expr[2], level), function(e2) {
                            return monad.unit(['while', e1, e2]);
                        });
                    })
                case 'foreach':
                    return monad.bind(_rec(expr[1], level), function(e1) {
                        return monad.bind(_rec(expr[3], level), function(e3) {
                            return monad.unit(['foreach', e1, expr[2], e3]);
                        });
                    })
                case 'obj_foreach':
                    return monad.bind(_rec(expr[1], level), function(e1) {
                        return monad.bind(_rec(expr[4], level), function(e4) {
                            return monad.unit(['obj_foreach', e1, expr[2], expr[3], e4]);
                        });
                    })
                case 'obj':
                    var mappings = expr[1];
                    var ms = [];
                    for(var i = 0; i < mappings.length; i++) {
                        ms.push(monad.bind(monad.unit(mappings[i]), function(mapping) {
                            var label = mapping[0];
                            var value = mapping[1];
                            return monad.bind(_rec(label, level), function(e1) {
                                return monad.bind(_rec(value, level), function(e2) {
                                    return monad.unit([e1, e2]);
                                });
                            });
                        }));
                    }
                    return monad.bind(monad.sequence(ms), function(es) {
                        return monad.unit(['obj', es]);
                    });
                case 'lambda':
                    return monad.bind(_rec(expr[2], level), function(e) {
                        return monad.unit(['lambda', expr[1], e]);
                    });
                case 'sub':
                    return monad.bind(_rec(expr[1], level), function(e1) {
                        return monad.bind(_rec(expr[2], level), function(e2) {
                            return monad.unit(['sub', e1, e2]);
                        });
                    });
                case 'dot':
                    return monad.bind(_rec(expr[1], level), function(e1) {
                        return monad.unit(['dot', e1, expr[2]]);
                    });
                case 'land':
                    return monad.bind(_rec(expr[1], level), function(e1) {
                        return monad.bind(_rec(expr[2]), function(e2) {
                            return monad.unit(['land', e1, e2]);
                        });
                    });
                case 'lor':
                    return monad.bind(_rec(expr[1], level), function(e1) {
                        return monad.bind(_rec(expr[2]), function(e2) {
                            return monad.unit(['lor', e1, e2]);
                        });
                    });
                case 'paren':
                    return _rec(expr[1], level);
                case 'let':
                    return monad.bind(_rec(expr[2], level), function(e2) {
                        return monad.bind(_rec(expr[3], level), function(e3) {
                            return monad.unit(['let', expr[1], e2, e3]);
                        });
                    });
                default:
                    return monad.fail('unrecognized statement in interpCode: ' + jawa.json.encode(expr));
            }
        };
        return monad.bind(_rec(expr, 1), function(e) {
            return monad.unit(['code', e]);
        });
    };
    obj.interpDecode = function(expr) {
        var me = this;
        var monad = this.monad;

        return monad.bind(me.interpExpr(expr), function(a) {
            if (a[0] != 'code') {
                return monad.fail("cannot decode something that is not code in: " + jawa.json.encode(expr));
            }
            return me.interpExpr(a[1]);
        });
    };
    obj.interpSwitch = function(cases) {
        var me = this;
        var monad = this.monad;

        var _interpSwitch = function(cases, i) {
            if (i == cases.length) {
                throw 'all cases in switch fail';
            }
            var case0 = cases[i];
            return monad.bind(me.interpExpr(case0[0]), function(a) {
                if (a) {
                    return me.interpExpr(case0[1]);
                }
                return _interpSwitch(cases, i+1);
            });
        };
        return _interpSwitch(cases, 0);
    };
    obj.interpForeach = function(l, name, e) {
        var expr = ['decode', [
        'fun_app', ['lvar', '__foreach__'], [
        l, ['const', name], ['code', e]
        ]
        ]];
        return this.interpExpr(expr);
    };
    obj.interpObjForeach = function(e, keyName, valueName, body) {
        var expr = ['decode', [
        'fun_app', ['lvar', '__objForeach__'], [
        e, ['const', keyName], ['const', valueName], ['code', body]
        ]
        ]];
        return this.interpExpr(expr);
    };
    obj.interpObj = function(mappings) {
        var me = this;
        var monad = this.monad;

        var _interpObj = function(mappings, i) {
            if (i == mappings.length) {
                return monad.bind(monad.unit() , function() {
                    return monad.unit({});
                });
            }
            var mapping = mappings[i];
            return monad.bind(me.interpExpr(mapping[0]), function(key) {
                return monad.bind(me.interpExpr(mapping[1]), function(val) {
                    return monad.bind(_interpObj(mappings, i+1), function(o) {
                        o[key] = val;
                        return monad.unit(o);
                    });
                });
            });
        };
        return _interpObj(mappings, 0);
    };
    obj.interpLand = function(e1, e2) {
        var me = this;
        var monad = this.monad;

        return monad.bind(me.interpExpr(e1), function(a) {
            if (a) {
                return me.interpExpr(e2);
            } else {
                return monad.unit(0);
            }
        });
    };
    obj.interpLor = function(e1, e2) {
        var me = this;
        var monad = this.monad;

        return monad.bind(me.interpExpr(e1), function(a) {
            if (a) {
                return monad.unit(1);
            } else {
                return me.interpExpr(e2);
            }
        });
    };
    obj.interpImpVar = function(name) {
        var me = this;
        var monad = this.monad;

        return monad.bind(monad.readEnv, function(r) {
            var a = r[name];
            if (a === undefined) {
                return monad.fail('no implicit variable: ' + name + ' is defined.');
            } else {
                return monad.unit(a);
            }
        });
    };
    obj.interpLet = function(name, value, body) {
        var me = this;
        var monad = this.monad;

        return monad.bind(monad.readEnv, function(r) {
            return monad.bind(me.interpExpr(value), function(a) {
                var r1 = $o.clone(r);
                r1[name] = a;
                return monad.inEnv(r1, me.interpExpr(body));
            });
        });
    };
    obj.interpWhile = function(b, e) {
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
            return monad.callcc( function(breakCont) {
                var r1 = $o.clone(r);
                r1['break'] = cont2fun(breakCont);
                return monad.bind(monad.callcc( function(continueCont) {
                    r1['continue'] = cont2fun(continueCont);
                    return monad.unit();
                }), function() {
                    return monad.inEnv(r1, _interpWhile());
                })
            });
        });
    };
    obj.interpFunApp = function(fun, args) {
        var me = this;
        var monad = this.monad;

        var fail = function(e) {
            if ($o.ofType(e, 'string')) {
                e = {"status": "ccl_internal_error", "message": e};
            }
            if (!e.CCLStack) {
                e.CCLStack = [];
            }
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
                    var fn = s[funName];
                    if (fn) {
                        return monad.bind(monad.callcc( function(cont) {
                            try {
                                return (fn.apply(this, vs))(cont, fail);
                            } catch(e) {
                                return fail(funName + ' is not a function.');
                            }
                        }), function(a) {
                            return monad.fork(a);
                        });
                    }
                    var fn = jawa.ccl.Primitives.async[funName];
                    if (fn) {
                        return monad.callcc( function(cont) {
                            return (fn.apply(this, vs))(cont, fail);
                        });
                    }
                    var fn = jawa.ccl.Primitives.sync[funName];
                    if (fn) {
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
                    return fail('"' + jawa.ccl.PrettyPrint.pp(fun) + '" is not a function.')
                }
                return monad.bind(monad.sequence(ms), function(vs) {
                    return monad.bind(monad.callcc( function(cont) {
                        return (fn.apply(this, vs))(cont, fail);
                    }), function(a) {
                        return monad.fork(a);
                    });
                });
            });
        }
    };
    obj.interpLambda = function(fargs, expr) {
        var me = this;
        var monad = this.monad;

        return monad.bind(monad.dumpState(), function(s) {
            return monad.unit( function() {
                // var args = jawa.util.toArray(arguments);
                var args = $a.toArray(arguments);
                s = $o.clone(s);
                for (var i = 0; i < fargs.length; i++) {
                    s[fargs[i]] = args[i];
                }
                s['__args__'] = args;
                return function(cont, abort) {
                    return function(r) {
                        return function(k) {
                            return function(fooS) {
                                var res = cls.run(expr, s, r)( function(a) {
                                    return cont(['just', a])(r)(k)(fooS);
                                }, function(e) {
                                    return abort(e)(r)(k)(fooS);
                                }
                                );
                                /*
                                 var res = monad.async(function() {
                                 var res = cls.run(expr, s, r)(
                                 function(a) {
                                 return monad.async(function() {
                                 return cont(['just', a])(r)(k)(fooS);
                                 });
                                 },
                                 function(e) {
                                 return abort(e)(r)(k)(fooS);
                                 }
                                 );
                                 return res;
                                 }); */
                                return res;
                            };
                        };
                    };
                };
            });
        });
    };
    $o.extend(cls, {
        run: run,
        _run: _run,
        applyCCLFunction: applyCCLFunction,
        _parseAndRun: _parseAndRun,
        parseAndRun: parseAndRun,
        _safeParseAndRun: _safeParseAndRun,
        safeParseAndRun: safeParseAndRun
    });

    return cls;
}();