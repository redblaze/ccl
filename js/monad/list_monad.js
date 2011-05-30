var ListM = function() {
    var cls = function() {};
    
    Util.subclass(cls, Monad, {
    	// unit :: a -> [a]
        unit: function(a) {
            return [a];
        },
        
        // bind :: [a] -> (a -> [b]) -> [b]
        bind: function(m, k) {
        	var res = [];
            for (var i = 0; i < m.length; i++) {
            	res = res.concat(k(m[i]));
            }
            return res;
        },
        
        // fork :: [a] -> [a]
        fork: function(m) {
        	return m;
        }
    });
    
    cls.liftSideEffects = function(lift){
    	var me = this;
    	
    	(function() {
    		var sup = me.prototype.fork;
    		me.prototype.fork = function(l) {
    			return lift.call(this, sup.call(this, l));
    		}
    	})();
    };
    
    return cls;
}();

/*
jawa.monad.List = function() {
    var monad = {};
    
    monad.unit = function(v) {
        return [v];
    };
    
    monad.bind = function(m, k) {
        var res = [];
        for(var i = 0; i < m.length; i++) {
            res = res.concat(k(m[i]));
        }
        return res;
    };
    
    jawa.monad.common(monad);
    
    monad.fork = function(v) { return v; };
    
    var orig = jawa.monad.liftSideEffects;
    jawa.monad.liftSideEffects = function(tm, lift, m) {
        orig(tm, lift, m);
        tm.fork = function(v) { 
            return lift(m.fork(v)); 
        };
    };
    
    return monad;
};

*/