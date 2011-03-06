
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
