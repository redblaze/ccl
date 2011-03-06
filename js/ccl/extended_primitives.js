
jawa.namespace(Soruka, 'DSL');

// jawa.util.extendObj(Soruka.DSL.primitives, function() {
Soruka.DSL.primitives.extendClass(function(me) {
	var monad = Soruka.DSL.monad;
	
	// var me = {};
	
	var unCode = function(e) {
		if (e[0] != 'code') {
			throw 'Cannot unCode a non-code: ' + jawa.json.encode(e);
		}
		return e[1];
	};
	
	me.log = function(a, cont, abort) {
		// console.log(a);
		alert(a);
		return cont(['just', null]);
	};
	
	me['~'] = function(a, b, cont, abort) {
    if (!YAHOO.lang.isString(a)) {
      return abort('The first argument for ~ must be a string.');
    }
    if (!YAHOO.lang.isString(b)) {
      return abort('The second argument for ~ must be a string.');
    }
    var ptn = new RegExp(b);
    var res = jawa.regex.matchAll(a, ptn);
		if (res.length > 0) {
			return cont(['just', res]);
		} else {
			return abort('Regex matching failure: ' + a + '~' + b);
		}
	};
	
	me.curl = function() { // url, [toJson], cont, abort
		var args = jawa.util.toArray(arguments);
		var abort = args.pop();
		var cont = args.pop();
		var url = args.shift();
		var toJson = args.length > 0? args[0] : '';
		
		var action = '/subscription/curl?format=json';
		var data = jawa.util.toUrlParams({url: url, toJson: toJson});
		return function(k) {return function(s) {
			$.ajax({
				type: "post",
				dataType: "json",
				url: action,
				data: data,
				success: function(o) {
					var res = o.data;
					if (toJson) {
						try {
							res = YAHOO.lang.JSON.parse(res);
						}  catch (e) {
							return abort(e)(k)(s);
						}
					}
					console.log('curl res begin');
					console.log(res);
					console.log('curl res end');
					return cont(['just', res])(k)(s);
				},
				error: function(e) {
					return abort(e)(k)(s);
				}
			});
		};};
	};
	
	me.cb = function(actionName, args, cont, abort) {
		var argsStr = jawa.util.toUrlParams(args);
		var action = '/subscription/' + actionName + '?format=json&' + argsStr;
		return function(k) {return function(s) {
			$.ajax({
				type: "get",
				datatype: "json",
				url: action,
				success: function(o) {
					console.log('result of ' + actionName + ': ');
					console.log(o);
					// var data = eval('(' + o+ ')');
					var data = YAHOO.lang.JSON.parse(o);
					console.log(data);
					data = data.res;
					switch (data.code) {
						case 'ok': 
							var res = data.value;
							return cont(['just', res])(k)(s);
						case 'error':
							var e =  'no results for action: ' + actionName + ' with args: ' + argsStr; 
							return abort(e)(k)(s);
						default: 
							var e =  'unrecogonized return code for action ' + actionName;
							return abort(e)(k)(s);
					}
				},
				error: function(e) {
					return abort(e)(k)(s);
				}
			});
		};};
	};
	
	me.zipToCityState = function(zipCode, cont, abort) {
		return me.cb('zip-to-city-state', {zipcode: zipCode}, cont, abort);
	};
	
	me.zipToCounty = function(zipCode, cont, abort) {
		return me.cb('zip-to-county', {zipcode: zipCode}, cont, abort);
	};
	
	me.zipToNoaa = function(zipCode, cont, abort) {
		return me.cb('zip-to-noaa', {zipcode: zipCode}, cont, abort);
	};
	
	me.cityStateToZip = function(city, state, cont, abort) {
		return me.cb('city-state-to-zip', {city: city, state: state}, cont, abort);
	};
	
	me.cityStateToCounty = function(city, state, cont, abort) {
		return me.cb('city-state-to-county', {city: city, state: state}, cont, abort);
	};
	
	me.cityStateToNoaa = function(city, state, cont, abort) {
		return me.cb('city-state-to-noaa', {city: city, state: state}, cont, abort);
	};

	me.isValidAirportCode = function(s, cont, abort) {
		return me.cb('is-valid-airport-code', {s: s}, cont, abort);
	}; 
	
	me.getSubscriptions = function() {
		var args = jawa.util.toArray(arguments);
		var abort = args.pop();
		var cont = args.pop();
		var n = jawa.util.dig(args, 'n', 20);
		var aqId = SubscriptionDialog.getAbstractQueryId();
		return me.cb('get-subscriptions', {id: aqId, n: n}, cont, abort);
	};

	me.dialog = function() {
		var args = jawa.util.toArray(arguments);
		var abort = args.pop();
		var cont = args.pop();
		var data = args.shift();
		var fcs = args.shift();
		var force = false;
		if (args.length > 0) {
			force = args[0] != 0;
		} 
		var parseDialogData = function(data, fcs) {
			var mapping = {};
			jawa.util.arrayEach(fcs.split(','), function(s) {
				var l = s.split(':');
				mapping[l[0]] = l[1];
			});
			return jawa.util.arrayMap(data, function(d) {
				var res = {};
				for (var k in mapping) {
					res[k] = d[mapping[k]];
				}
				return res;
			});
		};
		data = parseDialogData(data, fcs);
		if (data.length == 1 && !force) {
			return cont(['just', data[0].value]);
		}
		console.log(data);
		return function(k) {return function(s) {
			var uiParams = {
				type: {
					name: "chooser",
					display: "table",
					values: data
				},
				name: 'foo',
				label: 'bar',
				selection: 'single'
			};
			SubscriptionDialog.showDialog({}, [uiParams], function(a) {
				cont(['just', a.value])(k)(s);
			});
		};};
	};

	me.dialogX = function(uiPresentation, uiParams, cont, abort) {
		console.log(uiPresentation);
		console.log(uiParams);
		var list2obj = function(l) {
			var o = {'__label__': {}};
			jawa.util.arrayEach(l, function(e) {
				o[e.name] = e.value;
				o['__label__'][e.name] = e.label;
			});
			return o;
		};
		return function(k) {return function(s) {
			var okClick = function(a) {
				console.log('return of dialogX: ');
				console.log(a);
				cont(['just', list2obj(a)])(k)(s);
			};
			var okButton = {click: okClick};
			if (!jawa.util.empty(uiPresentation.okButtonName)) {
				okButton.label = uiPresentation.okButtonName;
			}
			uiPresentation.buttons = {btnOK: okButton};
			SubscriptionDialog.showDialog(uiPresentation, uiParams);
		};};
	};

	me.dialogPreview = function(uiPresentation, uiParams, cont, abort) {
		console.log('show preview dialog from dsl');
		console.log(uiPresentation);
		console.log(uiParams);
		return function(k) {return function(s) {
			SubscriptionDialog.showPreview(uiPresentation, uiParams);
		};};
	};
	
	me['apply'] = function(a, code, cont, abort) {
		return function(k) {return function(s) {
			return jawa.util.async(function() {
				return Soruka.DSL.monad.runVal(
					Soruka.DSL.interpreter(a, {}, {}, Soruka.DSL.primitives).interpExpr(unCode(code)),
					function(a) {
						return cont(['just', a])(k)(s);
					},
					function(e) {
						return abort(e)(k)(s);
					},
					jawa.util.clone(s)
				); 
			});
		};};
	};

	me.map = function(a, code, cont, abort) {
		return function(k) {return function(s) {
			var ms = jawa.util.arrayMap(a, function(e) {
				return function(_cont, _abort) {
					return Soruka.DSL.monad.runVal(
						Soruka.DSL.interpreter(e, {}, {}, Soruka.DSL.primitives).interpExpr(unCode(code)), 
						_cont, 
						_abort,
						jawa.util.clone(s)
					); 
				};
			});
			jawa.util.async(function() {
				return jawa.cps.sequence(ms)(
					function(a) {
						cont(['just', a])(k)(s);
					},
					function(e) {
						abort(e)(k)(s);
					}
				);
			});
		};};
	};

	me.filter = function(l, code, cont, abort) {
		var _filter = function(l, code, cont, abort) {
			var cps = jawa.cps;
			
			if (l.length == 0) {
				return cont(['just', []]);
			}
			
			var e = l.shift();
			return _filter(
				l, 
				code, 
				function(rest) {
					return function(k) {return function(s) {
						jawa.util.async(function() {
							if (rest[0] == 'nothing') {
								return abort(rest[1])(k)(s);
							}
							return Soruka.DSL.monad.runVal(
								Soruka.DSL.interpreter(e, {}, {}, Soruka.DSL.primitives).interpExpr(unCode(code)), 
								function(a) {
									if (a) {
										rest[1].unshift(e);
									}
									return cont(['just', rest[1]])(k)(s);
								}, 
								function(e) {
									return abort(e)(k)(s);
								},
								jawa.util.clone(s)
							);
						});
					};};
				},
				abort
			);
		};
		return _filter(jawa.util.clone(l), code, cont, abort);
	};

	me.foldr = function(l, n, code, cont, abort) {
		var _foldr = function(l, code, cont, abort) {
			var cps = jawa.cps;
			
			if (l.length == 0) {
				return cont(['just', n]);
			}
			
			var e = l.shift();
			return _foldr(
				l, 
				code, 
				function(rest) {
					return function(k) {return function(s) {
						jawa.util.async(function() {
							if (rest[0] == 'nothing') {
								return abort(rest[1])(k)(s);
							}
							return Soruka.DSL.monad.runVal(
								Soruka.DSL.interpreter([e, rest[1]], {}, {}, Soruka.DSL.primitives).interpExpr(unCode(code)), 
								function(a) {
									return cont(['just', a])(k)(s);
								}, 
								function(e) {
									return abort(e)(k)(s);
								},
								jawa.util.clone(s)
							);
						});
					};};
				},
				abort
			);
		};
		return _foldr(jawa.util.clone(l), code, cont, abort);
	};
	
	me.createConcreteQuery = function(params, cont, abort) {
		return function(k) {return function(s) {
			var _cont = function(a) {
				cont(['just', a.id])(k)(s);
			}
			var _abort = function(e) {
				abort(e)(k)(s);
			}
			// SubscriptionDialog.createSubscription(params, null, _cont, _abort);
			var aqId = SubscriptionDialog.getAbstractQueryId();
			var kind = SubscriptionDialog.getAbstractQueryKind();
			Soruka.Subscription.createConcreteQuery(aqId, kind, params)(_cont, _abort);
		};};
	};
	
	me.getConcreteQueryHistory = function(cqId, numberOfEntries, dateBack, cont, abort) {
		return me.cb('get-concrete-query-history', {
			cqId: cqId, 
			numberOfEntries: numberOfEntries,
			dateBack: dateBack
		}, cont, abort);
	};
	
	me.getLuceneHistory = function(cqId, terms, nterms, numberOfEntries, cont, abort) {
		var _abort = function(e) {
			return cont('just', []);
		};
		
		return me.cb('get-lucene-history', {
			cqId: cqId, 
			numberOfEntries: numberOfEntries,
			terms: jawa.json.encode(terms),
			nterms: jawa.json.encode(nterms)
		}, cont, _abort);
	};

	var user = null;	
	me.user = function(cont, abort) {
		if (jawa.util.empty(user)) {
			var _cont = function(res) {
				user = res[1];
				return cont(res);
			};
			return me.cb('get-user-info', {}, _cont, abort);
		} else {
			return cont(['just', user]);
		}
	};
	
	me.timeOut = function(cont, abort) {
		return function(k) {return function(s) {
			setTimeout(function() {
				cont(['just', 1])(k)(s);
			}, 0);
		};};
	};
	
	// return me;
});