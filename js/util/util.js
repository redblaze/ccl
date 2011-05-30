
var Util = (function(){
    var extend = function(o1, o2) {
        for (var k in o2) {
            o1[k] = o2[k];
        }
        return o1;
    };
    
    var subclass = function(sub, sup, overridings) {
        var _sup = function() {};
        _sup.prototype = sup.prototype;
        sub.prototype = new _sup();
        extend(sub.prototype, overridings);
    };
    
    var fold = function(l, cons) {
    	if (l.length == 0) {
    		throw 'cannot apply fold on empty list';
    	}
    	
    	var res = l[0];

    	for (var i = 1; i < l.length; i++) {
    		res = cons(res, l[i]);
    	}
    	
    	return res;
    };

    var tail = function() {
        var state = 'off'; // on | off
        var q = [];

        return function(fn) {
            switch(state) {
            case 'on':
                q.push(fn);
                break;
            case 'off':
                state = 'on';
                q.push(fn);
                while(q.length > 0) {
                    var task = q.shift();
                    task();
                }
                state = 'off';
                break;
            default:
                throw 'unrecognized state in tail: ' + status;
            }
        };
    }();

    var toArray = function(a) {
        var res = [];
        for (var i = 0; i < a.length; i++) {
            res.push(a[i]);
        }
        return res;
    };

    var shallowCopy = function(o) {
        var res = {};
        for (var k in o) {
            res[k] = o[k];
        }
        return res;
    };
    
    var printStack = function() {
        try {
            var foo = null;
            var bar = foo.bar;
        } catch(e) {
            console.log(e);
        }
    };

    return {
        extend: extend,
        subclass: subclass,
        fold: fold,
        tail: tail,
        toArray: toArray,
        shallowCopy: shallowCopy
    };
})();
