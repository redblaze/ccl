
ccl.Primitives = function() {
    eval(Shortcut);

    var cps2fun = function(cps) {
        return function(cont, abort) {
            return function(r) {
                return function(k) {
                    return function(s) {
                        return cps( function(a) {
                            cont(['just', a])(r)(k)(s);
                        }, function(e) {
                            abort(e)(r)(k)(s);
                        });
                    };
                };
            };
        };
    };

    var toFun = function(f) {
        return function() {
            var cps = f.apply(this, arguments);
            return cps2fun(cps);
        };
    };

    var cls = {};

    cls.sync = {
        '+': function(a, b) {
            return a + b;
        },
        '-': function(a, b) {
            return a - b;
        },
        '*': function(a, b) {
            return a * b;
        },
        '/': function(a, b) {
            if (b == 0) { throw 'dividedBy0';
            }
            return a / b;
        } ,
        '==': function(a, b) {
            return a == b;
        },
        '!=': function(a, b) {
            return a != b;
        },
        '>=': function(a, b) {
            return a >= b;
        },
        '>': function(a, b) {
            return a > b;
        },
        '<=': function(a, b) {
            return a <= b;
        },
        '<': function(a, b) {
            return a < b;
        },
        '#': function(a, b) {
            var res = a[b];
            if (!res) { throw 'undefinedIndex';
            }
            return res;
        },
        '~': function(a, b) {
            var ptn = new RegExp(b, 'i');
            var res = jawa.regex.matchAll(a, ptn);
            if (res.length == 0) {
                throw 'Regex matching failure: ' + a + '~' + b;
            }
            return res;
        },
        'replace': function(s, p, c) {
            var ptn = new RegExp(p, 'g');
            return s.replace(ptn, c);
        },
        'set': function(o, field, value) {
            o[field] = value;
            return o;
        },
        'unset': function(o, field) {
            // o[field] = undefined;
            delete o[field];
            return o;
        },
        'assert': function(b) {
            if (!b) {
                throw 'CCL assert failure.';
            }
        },
        'null': function() {
            return null;
        },
        'isNull': function(a) {
            return a === null;
        },
        'isUndefined': function(a) {
            return a === undefined;
        },
        'unset': function(a, i) {
            a[i] = undefined;
        },
        'push': function(a, o) {
            a.push(o);
        },
        'urlEncode': function(str) {
            return encodeURIComponent(str);
        },
        'urlDecode': function(str) {
            return decodeURIComponent(str);
        },
        'list': function() {
            return $a.toArray(arguments);
        },
        'toList': function(o) {
            if (YAHOO.lang.isArray(o)) {
                return o;
            }
            return [o];
        },
        'unsplit': function(l, s) {
            return l.join(s);
        },
        'joinList': function(ll) {
            return $a.join(ll);
        },
        'throw': function(s) {
            throw s;
        },
        'serialize': function(o) {
            return jawa.json.encode(o);
        },
        'deserialize': function(s) {
            return jawa.json.decode(s);
        },
        'jsEval': function(s) {
            return eval('(' + s + ')');
        },
        'jsApply': function() {
            try {
                var args = $a.toArray(arguments);
                var me = args.shift();
                var fnName = args.shift();
                var fn;
                if (typeof fnName === 'string') {
                    fn = me[fnName];
                }
                return fn.apply(me, args);
            } catch(e) {
                cls.sync.log('error in applying function ' + fnName + '. ');
                throw e;
            }
        },
        'nat': function(n) {
            var res = [];
            for (var i = 0; i < n; i++) {
                res.push(i);
            }
            return res;
        },
        'zip': function() {
            var res = [];
            var i = 0;
            while(true) {
                var row = [];
                for(var j = 0; j < arguments.length; j++) {
                    var v = arguments[j][i];
                    if (v) {
                        row.push(v);
                    } else {
                        return res;
                    }
                };
                res.push(row);
                i++;
            }
        },
        'seqCode': function(c1, c2) {
            if (c1[0] != 'code' || c2[0] != 'code') {
                throw 'canot apply seqCode to none-code: '  + jawa.json.encode([c1, c2]);
            }
            return ['code', ['seq', [c1[1], c2[1]]]];
        },
        'escape': function(c) {
            if (c[0] != 'code') {
                throw 'canot apply escape to none-code: '  + jawa.json.encode(c);
            }
            return c[1];
        },
        'length': function(a) {
            return a.length;
        },
        'formUrl': function(action, args) {
            var argList = [];
            for (var k in args) {
                argList.push(k + '=' + encodeURIComponent(args[k]));
            }
            return action + '?' + argList.join('&');
        },
        'extend': function(o1, o2) {
            return $o.extend(o1, o2);
        },
        'not': function(b) {
            if (b) {
                return false;
            }
            return true;
        },
        'take': function(n, a) {
            var res = [];
            for (var i = 0; i < n && i < a.length; i++) {
                res.push(a[i]);
            }
            return res;
        },
        /*
         'apply': function(f, args) {
         return f.apply(this, args);
         },
         */
        'pp': function(e) {
            return jawa.ccl.PrettyPrint.pp(e);
        },
        'o2a': function(o) {
            var res = [];
            for (var k in o) {
                var v = o[k];
                if (v === undefined) {
                    delete o[k];
                    continue;
                }
                res.push({
                    name: k,
                    value: v
                });
            }
            return res;
        },
        'date': function() {
            return new Date();
        },
        'alert': function(a) {
            alert(a);
        }
    };

    cls.toFun = toFun;

    cls.async = {
        'cps': cps2fun,

        'timeout': toFun( function(time) {
            return bind(jawa.timer.sleep(time), function() {
                return unit();
            });
        }),
        /*
         'wait': function(a) {return function(cont, abort) {return function(e) {return function(k) {return function(s) {
         jawa.GlobalRegistry.set("continuation", function(a) {
         cont(['just', a])(e)(k)(s);
         return jawa.GlobalRegistry.get('finalResult');
         });
         a = a == null ? "please click continue" : a;
         jawa.GlobalRegistry.set('finalResult', a);
         };};};};}, */

        'wait': function(a) {
            return function(cont, abort) {
                return function(e) {
                    return function(k) {
                        return function(s) {
                            var onCCLWait = e['onCCLWait'];
                            onCCLWait(a, function(b) {
                                cont(['just', b])(e)(k)(s);
                            });
                        };
                    };
                };
            };
        },
        'break': function() {
            return function(cont, abort) {
                return function(e) {
                    return function(k) {
                        return function(s) {
                            alert('break point');
                            cont(['just', null])(e)(k)(s);
                        };
                    };
                };
            };
        },
        'apply': function(f, args) {
            return function(cont, abort) {
                try {
                    return f.apply(this, args)(cont, abort);
                } catch(e) {
                    return abort(e);
                }
            };
        },
        'setVar': function(name, value) {
            return function(cont, abort) {
                return function(e) {
                    return function(k) {
                        return function(s) {
                            s[name] = value;
                            cont(['just', null])(e)(k)(s);
                        };
                    };
                };
            };
        },
        'getVar': function(name) {
            return function(cont, abort) {
                return function(e) {
                    return function(k) {
                        return function(s) {
                            cont(['just', s[name]])(e)(k)(s);
                        };
                    };
                };
            };
        }
    };

    return cls;
}();
