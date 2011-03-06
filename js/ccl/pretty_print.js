
jawa.namespace(jawa, 'ccl');

jawa.ccl.PrettyPrint = function() {
	var depth = 0;
	var res = [];
	var ctxt = [];
	
	var indent = function() {
		for (var i = 0; i < depth; i++) {
			res.push(' ');
		}
	};
	
	var inCtxt = function(tag, fn) {
		ctxt.push(tag);
		fn();
		ctxt.pop();
	};
	
	var pushIn = function() {
		depth += 2;
	};
	
	var popOut = function() {
		depth -= 2;
		if (depth < 0) {
			throw 'negative indent in pp';
		}
	};
	
	var outln = function(s) {
		res.push('\n');
		indent();
		res.push(s);
	};
	
	var out = function(s) {
		res.push(s);
	};
	
	var ppLVar = function(name) {
		out(name);
	};
	
	var ppJPath = function(root, path) {
		ppExpr(root);
		for (var i = 0; i < path.length; i++) {
			out('\\');
			out(path[i]);
		}
	};
	
	var ppOr = function(es) {
		out('(');
		pushIn();
		for (var i = 0; i < es.length; i++) {
			outln('(');
			ppExpr(es[i]);
			out(')');
			if (i < es.length - 1) {
				out(' ||| ');
			}
		};
		popOut();
		outln(')');
	};
	
    var ppPor = function(es) {
		out('(');
		pushIn();
		for (var i = 0; i < es.length; i++) {
			outln('(');
			ppExpr(es[i]);
			out(')');
			if (i < es.length - 1) {
				out(' |||| ');
			}
		};
		popOut();
		outln(')');
	};
	
	var ppSeq = function(es) {
		var useParen = ctxt.length > 1 && ctxt[ctxt.length - 2] == 'fun_app';
		if (useParen) {
			out('(');
			pushIn();
			outln('');
		}
		for (var i = 0; i < es.length; i++) {
			if (i > 0) {
				outln('');
			}
			ppExpr(es[i]);
			// if (i < es.length - 1) {
				out(';');
			// }
		}
		if (useParen) {
			popOut();
			outln(')');
		}
	};
	
	var binOperators = ['==', '!=', '>=', '<=', '+', '-', '*', '/', '~', '#', '=', '<', '>'];
	
	var ppFunApp = function(fun, params) {
		var funName = null;
		if (fun[0] == 'lvar') {
			funName = fun[1];
		} 
		if (funName != null && $a.contains(binOperators, funName)) {
			// out('(');
			ppExpr(params[0]);
			out(' ');
			ppExpr(fun);
			out(' ');
			out(ppExpr(params[1]));
			// out(')');
		} else {
			ppExpr(fun);
			out('(');
			for (var i = 0; i < params.length; i++) {
				ppExpr(params[i]);
				if (i < params.length - 1) {
					out(', ');
				}
			};
			out(')');
		}
	};
	
	var ppConst = function(value) {
		if (YAHOO.lang.isNumber(value)) {
			out(value);
		} else if (YAHOO.lang.isString(value)) {
			out('"');
			out(value);
			out('"');
		} else {
			// throw 'bad const in pretty print';
            out('csp(')
            try {
                out(jawa.json.encode(value));
            } catch(e) {
                out("unserialzable value");
            }
            out(')')
		}
	};
	
	var ppAsgn = function(lexp, e, op) {
		op = op || '=';
		ppExpr(lexp);
		out(' ' + op + ' ');
		ppExpr(e);
  	};
	
	var ppCode = function(e) {
		out('`(');
		pushIn();
		outln('');
		ppExpr(e);
		popOut();
		outln(')');
	};

	var ppEscape = function(e) {
		out('^(');
		pushIn();
		outln('');
		ppExpr(e);
		popOut();
		outln(')');
	};

	var ppDecode = function(e) {
		out('#(');
		pushIn();
		outln('');
		ppExpr(e);
		popOut();
		outln(')');
	};

	var ppSwitch = function(cases) {
	    var ppCase = function(c) {
			ppExpr(c[0]); 
			out('=>');
			pushIn();
			outln(''); 
			ppExpr(c[1]);
			popOut();
		};
	    var ppCases = function(cases) {
			for (var i = 0; i < cases.length; i++) {
				outln('');
				ppCase(cases[i]);
				if (i < cases.length - 1) {
					out(' | ');
				}
			}
	    };
		out('switch {');
		pushIn();
		ppCases(cases);
		popOut();
		outln('}');
	};
	
	var ppWhile = function(e1, e2) {
		out('while (');
		ppExpr(e1);
		out(') {');
		pushIn();
		outln('');
		ppExpr(e2);
		popOut();
		outln('}');
	};
	
	var ppForeach = function(e1, bv, e2) {
		out('foreach (');
		ppExpr(e1);
		out(' as ' + bv + ') {');
		pushIn();
		outln('');
		ppExpr(e2);
		popOut();
		outln('}');
	};
	
	var ppObjForeach = function(e, k, v, body) {
		out('foreach (');
        ppExpr(e);
        out(' as ' + k + ':' + v + ') {');
        pushIn();
        outln('');
        ppExpr(body);
        popOut();
        outln('}');
	};

	var ppObj = function(mappings) {
    	var ppMapping = function(m) {
			ppExpr(m[0]); 
			out(': ');
			// pushIn();
			// outln(''); 
			ppExpr(m[1]);
			// popOut();
		};
		
	    var ppMappings = function(mappings) {
			for (var i = 0; i < mappings.length; i++) {
				outln('');
				ppMapping(mappings[i]);
				if (i < mappings.length - 1) {
					out(',');
				}
			}
	    };
		
		out('{');
		pushIn();
		ppMappings(mappings);
		popOut();
		outln('}');
	};
	
	var ppLift = function(e) {
		out('lift (');
		ppExpr(e);
		out(')');
	};
	
	var ppLambda = function(fargs, e) {
		out('function (');
		out(fargs.join(', '));
		out('){');
		pushIn();
		outln();
		ppExpr(e);
		popOut();
		outln();
		out('}');
	};
	
	var ppSub = function(e1, e2) {
		ppExpr(e1);
		out('[');
		ppExpr(e2);
		out(']');
	};
	
	var ppDot = function(e, i) {
		ppExpr(e);
		out('.');
		out(i);
	};
	
	var ppLand = function(e1, e2) {
		ppExpr(e1);
		out(' && ');
		ppExpr(e2);
	};
	
	var ppLor = function(e1, e2) {
		ppExpr(e1);
		out(' || ');
		ppExpr(e2);
	};
	
	var ppParen = function(e) {
		out('(');
		ppExpr(e);
		out(')');
	};

    var ppImpVar = function(s) {
        out('?' + s);
    };

    var ppLet = function(s, e1, e2) {
        out('let ?' + s + ' = ');
        ppExpr(e1);
        out(' in ');
        ppExpr(e2);
    };
	
	var _ppExpr = function(expr) {
	    switch(expr[0]) {
		case 'lvar':  return ppLVar(expr[1]);
		case 'jpath': return ppJPath(expr[1], expr[2]);
		case 'or':  return ppOr(expr[1]);
		case 'por':  return ppPor(expr[1]);
		case 'seq':  return ppSeq(expr[1]);
		case 'regex':  return ppRegex(expr[1], expr[2]);
		case 'fun_app': return ppFunApp(expr[1], expr[2]);
		case 'const':  return ppConst(expr[1]);
		case 'assign':  return ppAsgn(expr[1], expr[2]);
		case 'assign_fork':  return ppAsgn(expr[1], expr[2], '<-');
		case 'code': return ppCode(expr[1]);
		case 'escape': return ppEscape(expr[1]);
		case 'decode': return ppDecode(expr[1]);
		case 'switch': return ppSwitch(expr[1]);
		case 'while': return ppWhile(expr[1], expr[2]);
		case 'foreach': return ppForeach(expr[1], expr[2], expr[3]);
		case 'obj_foreach': return ppObjForeach(expr[1], expr[2], expr[3], expr[4]);
		case 'obj': return ppObj(expr[1]);
		case 'lift': return ppLift(expr[1]);
		case 'lambda':  return ppLambda(expr[1], expr[2]);
		case 'sub': return ppSub(expr[1], expr[2]);
		case 'dot': return ppDot(expr[1], expr[2]);
		case 'land': return ppLand(expr[1], expr[2]);
		case 'lor': return ppLor(expr[1], expr[2]);
		case 'paren': return ppParen(expr[1]);
		case 'let': return ppLet(expr[1], expr[2], expr[3]);
		case 'imp_var': return ppImpVar(expr[1]);
      	default: throw 'unrecognized statement in pp: ' + expr[0];
		}
	};
	
	var ppExpr = function(expr) {
		inCtxt(expr[0], function() {
			_ppExpr(expr);
		});
	};

	var pp = function(e) {
		res = [];
		ppExpr(e);
		return res.join('');
	};

    return {
        pp: pp
    };
}();
