jawa.namespace(jawa, 'ccl');

jawa.ccl.customizePrimitives = function(sub) {return newClass({template: function(p) {
	Soruka.DSL.primitives.Template(p);
	
	p.curl = function() { // url, [toJson], cont, abort
		var args = jawa.util.toArray(arguments);
		var abort = args.pop();
		var cont = args.pop();
		var url = args.shift();
		var toJson = args.length > 0? args[0] : '';
		
		var action = '/subscription/curl?format=json';
		// var data = jawa.util.toUrlParams({url: url, toJson: toJson});
		return function(k) {return function(s) {
			var a = new jawa.ajax({
				action: '/subscription/curl?',
				args: {url: url, toJson: toJson, format: 'json'},
				method: 'post',
				onSuccess: function(o) {
					var data = jawa.json.decode(o.responseText);
					console.log(data);
					var res = data.data;
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
				onFailure: function(e) {
					return abort(e)(k)(s);
				}
			});
			a.exe();
		};};
	};
	
	p.cb = function(actionName, args, cont, abort) {
		return function(k) {return function(s) {
			var a = new jawa.ajax({
				action: '/subscription/' + actionName,
				args: jawa.util.extendObj(args, {format: 'json'}),
				onSuccess: function(o) {
					var data = jawa.json.decode(o.responseText);
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
				onFailure: function(e) {
					return abort(e)(k)(s);
				}
			});
			a.exe();
		};};
	};
	
	p.getSubscriptions = function() {
		var args = jawa.util.toArray(arguments);
		var abort = args.pop();
		var cont = args.pop();
		var n = jawa.util.dig(args, 'n', 20);
		
		var aqId = sub.aqId;
		return cb('get-subscriptions', {id: aqId, n: n}, cont, abort);
	};

	p.dialogX = function(uiPresentation, uiParams, cont, abort) {
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
			var okClick = function(code, params, subParams) {
				if (code != 'ok') {
					return abort('Only ok button can be clicked on non-zero dialogs.')(k)(s);
				}
				console.log('return of dialogX: ');
				console.log(params);
				return cont(['just', list2obj(params)])(k)(s);
			};
			sub.dialog.showLeft({uiPresentation: uiPresentation, uiParams: uiParams})(
				okClick, 
				function(e) { return abort(e)(k)(s) }
			);
		};};
	};
	
	p.dialogPreview = function(uiPresentation, uiParams, cont, abort) {
		console.log('show preview dialog from dsl');
		console.log(uiPresentation);
		console.log(uiParams);
		return function(k) {return function(s) {
			sub.dialog.showPreview({uiPresentation: uiPresentation, uiParams: uiParams});
		};};
	};
	
	p.createConcreteQuery = function(params, cont, abort) {
		return function(k) {return function(s) {
			var _cont = function(a) {
				cont(['just', a.id])(k)(s);
			}
			var _abort = function(e) {
				abort(e)(k)(s);
			}
			var aqId = sub.aqId; 
			var kind = sub.aqData.kind;
			sub.createConcreteQuery(params)(_cont, _abort);
		};};
	};

	p.user = function(cont, abort) {
		var user = jawa.GlobalRegistry.get('user');
		return cont(['just', user]);
	};
}});};
