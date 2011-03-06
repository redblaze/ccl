
jawa.monad.StateT = function(base) {
    var monad = {};
    
    monad.unit = function(v) {
        return function(s) {
            return base.unit([v, s]);
        };
    };

    monad.bind = function(m, k) {
        return function(s) {
            return base.bind(m(s), function(t) {
                return k(t[0])(t[1]);
            });
        };
    };

    jawa.monad.common(monad);

    monad.readVar = function(name) {
        return function(s) {
            return base.unit([s[name], s]);
        };
    };
	
	monad.dumpState = function() {
		return function(s) {
			return base.unit([s, s]);
		};
	};

    monad.writeVar = function(name, value) {
        return function(s) {
            var _s = {};
            for (var k in s) {
                _s[k] = s[k];
            };
            _s[name] = value;
            return base.unit([null, _s]);
        };
    };
    
    var lift = function(m) {
        return function(s) {
            return base.bind(m, function(a) {
                return base.unit([a, s]);
            });
        };
    };

    jawa.monad.liftSideEffects(monad, lift, base);
    var orig = jawa.monad.liftSideEffects;
    jawa.monad.liftSideEffects = function(tm, lift, m) {
        orig(tm, lift, m);
        tm.readVar = function(name) { 
            return lift(m.readVar(name));
        };
	    tm.dumpState = function() {
		    return lift(m.dumpState());
	    };
        tm.writeVar = function(name, value) { 
            return lift(m.writeVar(name, value)); 
        };
    };
    
    return monad;
};

