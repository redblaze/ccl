
(function() {
    var Main = function() {
        this._ndRun = document.getElementById('run');
        this._ndCompile = document.getElementById('compile');
        this._ndSource = document.getElementById('source');
        this._ndResult = document.getElementById('result');        
    };
    
    Main.prototype = {
        render: function() {
            this.behavior();
        },
        
        behavior: function() {
            var me = this;
            
            this._ndRun.addEventListener('click', function() {
                me._setResult(me._getSource());
                
            }, false);
            
            this._ndCompile.addEventListener('click', function() {
                
            }, false);            
        },
        
        _getSource: function() {
            return this._ndSource.value;
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
