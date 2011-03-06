
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

