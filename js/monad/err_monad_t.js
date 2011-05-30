var ErrT = function(base) {
    var cls = function() {
    }
    
    var sup = base.prototype;
    
    Util.subclass(cls, base, {
        // unit :: a -> M (Maybe a)
        unit: function(a) {
            return sup.unit.call(this, ['just', a]);
        },
        
        // bind :: M (Maybe a) -> (a -> M (Maybe b)) -> M (Maybe b)
        bind: function(m, k) {
            var me = this;
            
            return sup.bind.call(me, m, function(a) {
                switch(a[0]) {
                    case 'just': return k(a[1]);
                    case 'nothing': return sup.unit.call(me, ['nothing', a[1]]);
                    default: throw 'undefined tag in error monad:' + a[0];
                }
            });
        },
        
        // fail :: M (Maybe a)
        fail: function(e) {
            return sup.unit.call(this, ['nothing', e]);
        }
    });
    
    (function() {
        // lift :: M a -> M (Maybe a) 
        var lift = function(m) {
            var me = this;
            
            return sup.bind.call(me, m, function(a) {
                return sup.unit.call(me, ['just', a]);
            })
        };
        
        // lift the side effects
        base.liftSideEffects.call(cls, lift);
        
        // prepare for future side effects lifting 
        cls.liftSideEffects = function(lift) {
        	var me = this;
        	
            base.liftSideEffects.call(this, lift);
            
            (function() {
                var sup = me.prototype.fail;
                me.prototype.fail = function() { 
                    return lift.call(this, sup.apply(this, arguments));
                };
            })();
        };
    })();
    
    return cls;    
};


/*
jawa.monad.ErrT = function(base) {
    var monad = {};

    monad.unit = function(a) {
        return base.unit(["just", a]);
    };
    
    monad.bind = function(m, k) {
        return base.bind(m, function(a) {
            switch(a[0]) {
            case 'just': 
                return k(a[1]);
            case 'nothing':
                return base.unit(['nothing', a[1]]);
            default:
            }
        });
    };
    
    jawa.monad.common(monad);
    
    monad.fail = function(msg) {
        return base.unit(["nothing", msg]);
    };
    
    var lift = function(m) {
        return base.bind(m, function(a) {
            return base.unit(["just", a]);
        });
    };
    
    jawa.monad.liftSideEffects(monad, lift, base);
    var orig = jawa.monad.liftSideEffects;
    jawa.monad.liftSideEffects = function(tm, lift, m) {
        orig(tm, lift, m);
        tm.fail = function(msg) { 
            return lift(m.fail(msg));
        };
    };
    
    return monad;
};
*/

