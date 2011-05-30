
var IdStateContErrEnvMonad = function() {
    eval(Shortcut);

    var cls = function() {
    };

    var superclass = EnvT(ErrT(ContT(StateT(IdM))));
    // M a = e -> ((Maybe a) -> s -> (o, s)) -> (s -> (o, s))
    Util.subclass(cls, superclass, {
        bind: function(m, f) {
            return superclass.prototype.bind.call(this, m, function(a) {
			    return function(e) {return function(k) {return function(s) {
				    return tail(function() {
					    return f(a)(e)(k)(s);
				    });
			    };};};
            });
        },

        // run :: (M a, e, s) -> (a -> o) -> (() -> o) -> o
        run: function(m, e, s) {return function(cont, abort) {
            var k = function(a) {return function(s) {
                switch(a[0]) {
                case 'just': return cont(a[1]);
                case 'nothing': return abort(a[1]);
                default: throw('unrecoginized tag for maybe monad: ' + a[0]);
                }
            };};
            return m(e)(k)(s);
        };},
        
        // or :: M a -> M a -> M a
        or: function(m1, m2) {return function(e) {return function(k) {return function(s) {
            return m1(e)(function(a) {return function(s1) {
                switch(a[0]) {
                case 'just': return k(a)(s1);
                case 'nothing': 
					s1['__exception__'] = a[1];
                    return m2(e)(k)(s1); 
                default: throw('unrecoginized tag for maybe monad: ' + a[0]);
                }
            };})(s);
        };};};},

        // por :: M a -> M a -> M a
        por: function(m1, m2) {
            return function(e) {return function(k) { return function(s) {
                var status1 = 'start'; // start | success | failure
                var status2 = 'start';
                
                var _cont = function(otherStatus, a) {
                    switch(otherStatus) {
	                	case 'start':
	                		return k(a)(s);
	                		break;
	                	case 'success':
	                		break;
	                	case 'failure':
	                		return k(a)(s);
	                		break;
	                	default:
	                		throw 'unrecognized thread status in por of IdStateContErrEnvMonad: ' + otherStatus;
	                }
                };
                
                var _abort = function(otherStatus, a) {
                	switch(otherStatus) {
                    	case 'start':
                    		break;
                    	case 'success':
                    		break;
                    	case 'failure':
                    		return k(a)(s);
                    		break;
                    	default:
                    		throw 'unrecognized thread status in por of IdStateContErrEnvMonad: ' + otherStatus;	                    		
                	}
                };

                m1(e)(function(a) {return function(s1) {
                    switch(a[0]) {
	                    case 'just': 
	                        status1 = 'success';
	                        _cont(status2, a);
	                        break;
	                    case 'nothing':
	                    	status1 = 'failure';
	                    	_abort(status2, a);
	                    	break;
	                    default: 
	                    	throw('unrecoginized tag for maybe monad: ' + a[0]);
                    }
                };})(s);
                
                if (status1 != 'succcess') {
	                m2(e)(function(a) {return function(s1) {
	                    switch(a[0]) {
		                    case 'just': 
		                        status2 = 'success';
		                        _cont(status1, a);
		                        break;
		                    case 'nothing':
		                    	status2 = 'failure';
		                    	_abort(status1, a);
		                    	break;
		                    default: 
		                    	throw('unrecoginized tag for maybe monad: ' + a[0]);
	                    }
	                };})(s);                	
                }
            };};};
        },

        // pand :: M a -> M a -> M a
        pand: function(m1, m2) {
            return function(e) {return function(k) { return function(s) {
                var status1 = 'start'; // start | success | failure
                var status2 = 'start';
                var result1;
                var result2; 
                
                var _cont = function(otherStatus, a) {
                    switch(otherStatus) {
	                	case 'start':
	                		break;
	                	case 'success':
	                		return k(['just', [result1, result2]])(s);
	                		break;
	                	case 'failure':
	                		break;
	                	default:
	                		throw 'unrecognized thread status in pand of IdStateContErrEnvMonad: ' + otherStatus;
	                }
                };
                
                var _abort = function(otherStatus, a) {
                	switch(otherStatus) {
                		case 'start':
                			return k(a)(s);
                			break;
                		case 'success':
                			return k(a)(s);
                			break;
                		case 'failure': 
                			break;
                		default:
                			throw 'unrecognized thread status in pand of IdStateContErrEnvMonad: ' + otherStatus;
                	}
                };

                m1(e)(function(a) {return function(s1) {
                    switch(a[0]) {
	                    case 'just': 
	                        status1 = 'success';
	                        result1 = a[1];
	                        _cont(status2, a);
	                        break;
	                    case 'nothing':
	                    	status1 = 'failure';
	                    	_abort(status2, a);
	                    	break;
	                    default: 
	                    	throw('unrecoginized tag for maybe monad: ' + a[0]);
                    }
                };})(s);
                
                if (status1 != 'failure') {
	                m2(e)(function(a) {return function(s1) {
	                    switch(a[0]) {
		                    case 'just': 
		                        status2 = 'success';
		                        result2 = a[1];
		                        _cont(status1, a);
		                        break;
		                    case 'nothing':
		                    	status2 = 'failure';
		                    	_abort(status1, a);
		                    	break;
		                    default: 
		                    	throw('unrecoginized tag for maybe monad: ' + a[0]);
	                    }
	                };})(s);                	
                }
            };};};
        }
    });
    
    return cls;
}();
