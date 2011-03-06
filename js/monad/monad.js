
jawa.namespace(jawa, 'monad');

jawa.monad.common = function(monad) {
  monad.map = function(f, m) {
    monad.bind(m, function(a) {
      return monad.unit(f(a));
    });
  };
   
  monad.join = function(mm) {
    monad.bind(mm, function(a) {
      return a;
    });
  };

  monad.sequence = function(ms) {
    var _sequence = function(i, ms) {
      if (ms.length <= i) {
        return monad.unit([]);
      }
      var m0 = ms[i];
      return monad.bind(m0, function(v) {
      return monad.bind(_sequence(i + 1, ms), function(vs) {
        vs.unshift(v);
        return monad.unit(vs);
      })
      });
    };
    return _sequence(0, ms);
  };

  monad.sequence_ = function(ms) {
    var _sequence = function(i, ms) {
      if (ms.length <= i) {
        return monad.unit();
      }
      var m0 = ms[i];
      return monad.bind(m0, function() {
        return _sequence(i + 1, ms);
      });
    };
    return _sequence(0, ms);
  };
};

jawa.monad.liftSideEffects = function(tm, lift, m) {};

jawa.monad.compose = function() {
	jawa.monad.liftSideEffects = function(tm, lift, m) {};
	var ts = $a.toArray(arguments);
	var m = ts.pop();
	var _compose = function(ts, m) {
		if (ts.length == 0) {
			return m();
		}
		var t = ts.shift();
		return t(_compose(ts, m));
	};
	var monad = _compose(ts, m);
	return monad;
};
