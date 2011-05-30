
var IdM = function() {
    var cls = function() {};
    
    Util.subclass(cls, Monad, {
        unit: function(a) {
            return a;
        },
        
        bind: function(m, k) {
            return k(m);
        }
    });
    
    cls.liftSideEffects = function(lift){};
    
    return cls;
}();

/*
jawa.monad.Id = function() {
    var unit = function(a) {
        return a;
    };
    
    var bind = function(m, k) {
        return k(m);
    };
    
    var monad = {
        unit: unit,
        bind: bind
    };
    
    jawa.monad.common(monad);
    
    return monad;
};
*/


