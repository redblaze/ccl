
var EnvT = function(base) {
    var cls = function() {
    };

    var sup = base.prototype;

    Util.subclass(cls, base, {
        // unit :: a -> (e -> M a)
        unit: function(a) {var me = this; return function(e) {
            return sup.unit.call(me, a);
        };},
        
        // bind :: (e -> M a) -> (a -> (e -> M b)) -> (e -> M b)
        bind: function(m, k) {var me = this; return function(e) {
            return sup.bind.call(me, m(e), function(a) {
                return k(a)(e);
            });
        };},

        // readEnv :: e -> M e
        readEnv: function(e) {
            return sup.unit.call(this, e);
        },

        // inEnv :: e -> (e -> M a) -> (e -> M a)
        inEnv: function(e, m) {var me = this; return function(e0) {
            return m(e);
        };}
    });

    (function(){
        // lift :: M a -> (e -> M a)
        var lift = function(m) {return function(e) {
            return m;
        };};

        base.liftSideEffects.call(cls, lift);

        (function() {
            var sup = cls.prototype.callcc;
            if (sup) {
                // callcc :: ((a -> (e -> M b)) -> (e -> M a)) -> (e -> M a)
                cls.prototype.callcc = function(f) {var me = this; return function(r) {
				    return sup.call(me, function(k) {
					    return f(function(a) {return function(r0) {
						    return k(a);
					    };})(r);
				    })
			    };};
            }
        })();

        cls.liftSideEffects = function(lift) {
            var me = this;
            
            base.liftSideEffects.call(me, lift);

            (function() {
                var sup = me.prototype.readEnv;
                me.prototype.readEnv = function(e) {
                    return lift(sup.call(this, e));
                };
            })();
        };
    })();

    return cls;
};


/*
jawa.monad.EnvT = function(base) {
	var monad = {};

	monad.unit = function(v) {
		return function(e) {
			return base.unit(v);
		};
	};

	monad.bind = function(m, k) {
		return function(e) {
			return base.bind(m(e), function(a) {
				return k(a)(e);
			});
		};
	};

	jawa.monad.common(monad);

	monad.readEnv = function(e) {
		return base.unit(e);
	};

	monad.inEnv = function(e, m) {
		return function(e0) {
			return m(e);
		};
	};

	var lift = function(m) {
		return function(e) {
			return m;
		};
	};
	
	jawa.monad.liftSideEffects(monad, lift, base);
	if (base.callcc) {
		monad.callcc = function(f) {
			return function(r) {
				return base.callcc(function(k) {
					return f(function(a) {return function(r0) {
						return k(a);
					};})(r);
				})
			};
		};
	}
	
	var orig = jawa.monad.liftSideEffects;
	jawa.monad.liftSideEffects = function(tm, lift, m) {
		orig(tm, lift, m);
	};

	return monad;
};
*/
