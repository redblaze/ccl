
var cps = function() {
    var onceOnly = function(fn) {
        var times = 0;
        
        return function() {
            if (times == 0) {
                times ++;
                return fn.apply(null, arguments);
            } else {
                throw 'Cannot call continuation more than once.';
            }
        };
    };

    var cls = function() {
    };
    
    Util.subclass(cls, Monad, {
        unit: function() {
            var args = Util.toArray(arguments);
            return function(cont, abort) {
                return cont.apply(null, args);
            };
        },

        bind: function(m, k) {
            return function(cont, abort) {
                return m(function() {
                    var args = Util.toArray(arguments);
                    return tail(function() {
                        k.apply(this, args)(cont, abort);
                    });
                }, abort);
            };
        },

        star: function(a, k) {
            var me = this;

            return this.bind(k(a), function(b) {
                return me.star(b, k);
            });
        },

        star_: function(m) {
            return this.star(function() {return m;});
        },

        fail: function(e) {
            return function(cont, abort) {
                return abort(e);
            };
        },

        tryCatch: function(m1, m2) {
            return function(cont, abort) {
                return m1(cont, function(e) {
                    m2(e)(cont, abort);
                });
            };
        }
    });

    return (new cls());
}();

