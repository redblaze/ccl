var ContT = function(base) {
    var cls = function() {
    }
    
    var sup = base.prototype;
    
    Util.subclass(cls, base, {
        // unit :: a -> (a -> M o) -> M o
        unit: function(a) {return function(k) {
    		return k(a);
    	};},
        
        // bind :: ((a -> M o) -> M o) -> (a -> (b -> M o) -> M o) -> (b -> M o) -> M o 
        bind: function(m, k) {return function(cont) {
        	return m(function(a){
        		return k(a)(cont);
        	});
        };},
        
        // callcc :: ((a -> (b -> M o) -> M o) -> (a -> M o) -> M o) -> (a -> M o) -> M o 
        callcc: function(f) {return function(k) {
            var g = function(a) {return function(k0) {
                return k(a);
            };};
            return f(g)(k);
        };}
	});

    (function() {
        // lift :: M a -> (a -> M o) -> M o
        var lift = function(m) {var me = this; return function(k) {
            return sup.bind.call(me, m, k);
        };};
        
        base.liftSideEffects.call(cls, lift);

        cls.liftSideEffects = base.liftSideEffects;
    })();
	
	return cls;
};

/*
jawa.monad.ContT = function(base) {
    var monad = {};
 	
    monad.unit = function(a) {
        return function(k) {
            return k(a);
        };
    };

    monad.bind = function(m, f) {
        return function(k) {
			return m(function(a) {
				return f(a)(k);
			});
        };
    };
	
    jawa.monad.common(monad);
	
	monad.callcc = function(f) {
		return function(k) {
			return f(function(a) {
				return function(foo) {
					return k(a);
				};
			})(k);
		};
	};
	
	var lift = function(m) {return function(k) {
		return base.bind(m, k);
	};};

    jawa.monad.liftSideEffects(monad, lift, base);
    var orig = jawa.monad.liftSideEffects;
    jawa.monad.liftSideEffects = function(tm, lift, m) {
        orig(tm, lift, m);
		tm.callcc = m.callcc;
    };
	
	return monad;
};
*/
