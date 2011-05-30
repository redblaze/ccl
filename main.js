
(function() {
    var Main = function() {
        this._ndSource = document.getElementById('source');
        this._ndResult = document.getElementById('result');
        
        this._ndParse = document.getElementById('parse');
        this._ndPrettyPrint = document.getElementById('pretty_print');
        this._ndRun = document.getElementById('run');
    };
    
    Main.prototype = {
        render: function() {
            this.behavior();
        },
        
        behavior: function() {
            var me = this;
            
            this._ndRun.addEventListener('click', function() {
                var source = me._getSource();
                var abst = ccl.Interpreter.parseAndRun(
                    source, 
                    {}, 
                    {}
                )(
                    function(o) {
                        console.log(o);
                        me._setResult(JSON.stringify(o));
                    }, 
                    function(e) {
                        console.log(e);
                    }
                );
            }, false);
            
            this._ndParse.addEventListener('click', function() {
                var source = me._getSource();
                var abst = ccl.Parser.parse(source);
                me._setResult(JSON.stringify(abst));
            }, false);

            this._ndPrettyPrint.addEventListener('click', function() {
                var res = me._getResult();
                var source = ccl.PrettyPrint.pp(JSON.parse(res));
                me._setSource(source);
            }, false);
        },
        
        _test: function() {
        	var me = this;
        	
        	return me.monad.bind(this.monad.fork([1,2]), function(a) {
        		if (a == 1) {
        			return me.monad.unit(a + 2);
    			} else {
    				return me.monad.fail('error');
    			} 
        	})
        },
        
        _getSource: function() {
            return this._ndSource.value;
        },

        _setSource: function(v) {
            this._ndSource.value = v;
        },

        _getResult: function() {
            return this._ndResult.value;
        },
        
        _setResult: function(v) {
            this._ndResult.value = v;
        },
        
        _clearResult: function() {
            this._ndResult.value = '';
        }
    };
    
    var main = new Main();
    main.render();
})();
