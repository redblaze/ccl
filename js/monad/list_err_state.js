
jawa.monad.liftSideEffects = function(tm, lift, m) {};

jawa.monad.listErrState = function() {
	// s -> [Maybe(a, s)]
    // var monad = jawa.monad.StateT(jawa.monad.ErrT(jawa.monad.List()));
	var monad = jawa.monad.compose(
		jawa.monad.StateT,
		jawa.monad.ErrT,
		jawa.monad.List
	);
	
    monad.run = function(m) {
        try {
            var l = m({});
            var res = [];
            for (var i = 0; i < l.length; i++) {
                var o = l[i];
                switch(o[0]) {
                case 'just':
                    // res.push(o[1][0]);
                    res.push(o[1][1]);
                    break;
                case 'nothing':
                    throw(o[1]);
                default:
                }
            }
            return res;
        } catch(e) {
			throw(e);
        }
    };
    
    monad.mor = function(m1, m2) {
        return function(s) {
            var l = m1(s);
            var res = [];
            for (var i = 0; i < l.length; i++) {
                var o = l[i];
                switch(o[0]) {
                case 'just': 
                    res.push(o);
                    break;
                case 'nothing': 
                    return m2(s);
                default:
                }
            }
            return res;
        };
    };

    monad.morList = function(ms) {
        if (ms.length == 0) {
            return monad.fail('All cases failed.');
        }
        var m = ms.shift();
        return monad.mor(m, monad.morList(ms));
    };
    return monad;
}();
