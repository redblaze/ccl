
var Shortcut = function() {
    var s = '';

    for (var k in Util) {
        s += 'var ' + k + ' = ' + 'Util["' + k + '"]; ';
    }

    s += ' var unit = cps.unit; ';
    s += ' var bind = cps.bind; ';

    return s;
}();
