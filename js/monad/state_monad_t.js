
var StateT = function(base) {
    var cls = function() {
    }
    
    var sup = base.prototype;
    
    Util.subclass(cls, base, {
        // unit :: a -> (s -> M (a, s))
        unit: function(a) {var me = this; return function(s) {
            return sup.unit.call(me, [a, s]);
        };},
        
        // bind :: (s -> M (a, s)) -> (a -> s -> M (b, s)) -> (s -> M (b, s))
        bind: function(m, k) {var me = this; return function(s) {
            return sup.bind.call(me, m(s), function(v) {
                return k(v[0])(v[1]);
            });
        };},
        
        // readVar :: string -> (s -> M (a, s))
        readVar: function(name) {var me = this; return function(s) {
            return sup.unit.call(me, [s[name], s]);
        };},
        
        // writeVar :: (string , a) -> (s -> M (a, s))
        writeVar: function(name, a) {var me = this; return function(s) {
            var _s = {};
            for (var k in s) {
                _s[k] = s[k];
            };
            _s[name] = a;
            return sup.unit.call(me, [a, _s]);
        };},
        
        // dumpState :: () -> (s -> M (s, s))
        dumpState: function() {var me = this; return function(s) {
            return sup.unit.call(me, [s, s]);
        };}
    });
    
    (function() {
        // lift :: M a -> (s -> M (a, s))
        var lift = function(m) {var me = this; return function(s) {
            return sup.bind.call(me, m, function(a) {
                return sup.unit.call(me, [a, s]);
            });
        };};
        
        base.liftSideEffects.call(cls, lift);
        
        cls.liftSideEffects = function(lift) {
            var me = this;
            
            base.liftSideEffects.call(this, lift);
            
            (function() {
                var sup = me.prototype.readVar;
                me.prototype.readVar = function(name) {
                    return lift.call(this, sup.call(this, name));
                };
            })();
            
            (function() {
                var sup = me.prototype.writeVar;
                me.prototype.writeVar = function(name, a) {
                    return lift.call(this, sup.call(this, name, a));
                };
            })();

            (function() {
                var sup = me.prototype.dumpState;
                me.prototype.dumpState = function() {
                    return lift.call(this, sup.call(this));
                };
            })();
        };
    })(); 
    
    return cls;
}; 

/*
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

*/
