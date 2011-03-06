
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

