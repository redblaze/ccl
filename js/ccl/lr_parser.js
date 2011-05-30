
ccl.Parser = function() {

var parse = function(input) {

var finalResult;
var returnFinalResult = function(res) {
	finalResult = res;
};
//begin body
// 1. change "str" to "input"
// 2. apply "returnFinalResult" to the output
// 3. change "alert( errstr )" to "throw(errstr)"


var flattern = function(ss, tag) {
if (ss[0] != tag) {
return [ss];
}
var res = [];
for (var i = 0; i < ss[1].length; i++) {
res = res.concat(flattern(ss[1][i], tag));
}
return res;
};

var toSeq = function(e) {
if (e[0] == 'seq') {
return e;
} else {
return ['seq', [e]];
}
};

var toStmts = function(es) {
if (es.length == 1) {
return es[0]; 
} else {
return ['seq', es];
}
};


/*
    Default template driver for JS/CC generated parsers running as
    browser-based JavaScript/ECMAScript applications.
    
    WARNING:     This parser template will not run as console and has lesser
                features for debugging than the console derivates for the
                various JavaScript platforms.
    
    Features:
    - Parser trace messages
    - Integrated panic-mode error recovery
    
    Written 2007, 2008 by Jan Max Meyer, J.M.K S.F. Software Technologies
    
    This is in the public domain.
*/

var _dbg_withtrace        = false;
var _dbg_string            = new String();

function __dbg_print( text )
{
    _dbg_string += text + "\n";
}

function __lex( info )
{
    var state        = 0;
    var match        = -1;
    var match_pos    = 0;
    var start        = 0;
    var pos            = info.offset + 1;

    do
    {
        pos--;
        state = 0;
        match = -2;
        start = pos;

        if( info.src.length <= start )
            return 66;

        do
        {

switch( state )
{
    case 0:
        if( ( info.src.charCodeAt( pos ) >= 9 && info.src.charCodeAt( pos ) <= 10 ) || info.src.charCodeAt( pos ) == 13 || info.src.charCodeAt( pos ) == 32 ) state = 1;
        else if( info.src.charCodeAt( pos ) == 33 ) state = 2;
        else if( info.src.charCodeAt( pos ) == 35 ) state = 3;
        else if( info.src.charCodeAt( pos ) == 36 ) state = 4;
        else if( info.src.charCodeAt( pos ) == 40 ) state = 5;
        else if( info.src.charCodeAt( pos ) == 41 ) state = 6;
        else if( info.src.charCodeAt( pos ) == 42 ) state = 7;
        else if( info.src.charCodeAt( pos ) == 43 ) state = 8;
        else if( info.src.charCodeAt( pos ) == 44 ) state = 9;
        else if( info.src.charCodeAt( pos ) == 45 ) state = 10;
        else if( info.src.charCodeAt( pos ) == 46 ) state = 11;
        else if( info.src.charCodeAt( pos ) == 47 ) state = 12;
        else if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) ) state = 13;
        else if( info.src.charCodeAt( pos ) == 58 ) state = 14;
        else if( info.src.charCodeAt( pos ) == 59 ) state = 15;
        else if( info.src.charCodeAt( pos ) == 60 ) state = 16;
        else if( info.src.charCodeAt( pos ) == 61 ) state = 17;
        else if( info.src.charCodeAt( pos ) == 62 ) state = 18;
        else if( info.src.charCodeAt( pos ) == 63 ) state = 19;
        else if( info.src.charCodeAt( pos ) == 64 ) state = 20;
        else if( ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || info.src.charCodeAt( pos ) == 98 || info.src.charCodeAt( pos ) == 100 || ( info.src.charCodeAt( pos ) >= 103 && info.src.charCodeAt( pos ) <= 104 ) || ( info.src.charCodeAt( pos ) >= 106 && info.src.charCodeAt( pos ) <= 107 ) || ( info.src.charCodeAt( pos ) >= 109 && info.src.charCodeAt( pos ) <= 114 ) || ( info.src.charCodeAt( pos ) >= 117 && info.src.charCodeAt( pos ) <= 118 ) || ( info.src.charCodeAt( pos ) >= 120 && info.src.charCodeAt( pos ) <= 122 ) ) state = 21;
        else if( info.src.charCodeAt( pos ) == 91 ) state = 22;
        else if( info.src.charCodeAt( pos ) == 92 ) state = 23;
        else if( info.src.charCodeAt( pos ) == 93 ) state = 24;
        else if( info.src.charCodeAt( pos ) == 94 ) state = 25;
        else if( info.src.charCodeAt( pos ) == 96 ) state = 26;
        else if( info.src.charCodeAt( pos ) == 123 ) state = 27;
        else if( info.src.charCodeAt( pos ) == 124 ) state = 28;
        else if( info.src.charCodeAt( pos ) == 125 ) state = 29;
        else if( info.src.charCodeAt( pos ) == 126 ) state = 30;
        else if( info.src.charCodeAt( pos ) == 34 ) state = 53;
        else if( info.src.charCodeAt( pos ) == 97 ) state = 55;
        else if( info.src.charCodeAt( pos ) == 38 ) state = 56;
        else if( info.src.charCodeAt( pos ) == 105 ) state = 57;
        else if( info.src.charCodeAt( pos ) == 102 ) state = 70;
        else if( info.src.charCodeAt( pos ) == 108 ) state = 71;
        else if( info.src.charCodeAt( pos ) == 116 ) state = 72;
        else if( info.src.charCodeAt( pos ) == 101 ) state = 79;
        else if( info.src.charCodeAt( pos ) == 99 ) state = 85;
        else if( info.src.charCodeAt( pos ) == 119 ) state = 86;
        else if( info.src.charCodeAt( pos ) == 115 ) state = 89;
        else state = -1;
        break;

    case 1:
        state = -1;
        match = 1;
        match_pos = pos;
        break;

    case 2:
        if( info.src.charCodeAt( pos ) == 61 ) state = 31;
        else state = -1;
        match = 23;
        match_pos = pos;
        break;

    case 3:
        state = -1;
        match = 50;
        match_pos = pos;
        break;

    case 4:
        state = -1;
        match = 6;
        match_pos = pos;
        break;

    case 5:
        state = -1;
        match = 51;
        match_pos = pos;
        break;

    case 6:
        state = -1;
        match = 52;
        match_pos = pos;
        break;

    case 7:
        state = -1;
        match = 42;
        match_pos = pos;
        break;

    case 8:
        state = -1;
        match = 40;
        match_pos = pos;
        break;

    case 9:
        state = -1;
        match = 5;
        match_pos = pos;
        break;

    case 10:
        state = -1;
        match = 41;
        match_pos = pos;
        break;

    case 11:
        state = -1;
        match = 44;
        match_pos = pos;
        break;

    case 12:
        if( info.src.charCodeAt( pos ) == 47 ) state = 60;
        else state = -1;
        match = 43;
        match_pos = pos;
        break;

    case 13:
        if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) ) state = 13;
        else if( info.src.charCodeAt( pos ) == 46 ) state = 62;
        else state = -1;
        match = 26;
        match_pos = pos;
        break;

    case 14:
        state = -1;
        match = 8;
        match_pos = pos;
        break;

    case 15:
        state = -1;
        match = 27;
        match_pos = pos;
        break;

    case 16:
        if( info.src.charCodeAt( pos ) == 61 ) state = 34;
        else state = -1;
        match = 35;
        match_pos = pos;
        break;

    case 17:
        if( info.src.charCodeAt( pos ) == 61 ) state = 35;
        else if( info.src.charCodeAt( pos ) == 62 ) state = 36;
        else state = -1;
        match = 28;
        match_pos = pos;
        break;

    case 18:
        if( info.src.charCodeAt( pos ) == 61 ) state = 37;
        else state = -1;
        match = 37;
        match_pos = pos;
        break;

    case 19:
        state = -1;
        match = 20;
        match_pos = pos;
        break;

    case 20:
        state = -1;
        match = 3;
        match_pos = pos;
        break;

    case 21:
        if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 122 ) ) state = 21;
        else state = -1;
        match = 24;
        match_pos = pos;
        break;

    case 22:
        state = -1;
        match = 45;
        match_pos = pos;
        break;

    case 23:
        state = -1;
        match = 47;
        match_pos = pos;
        break;

    case 24:
        state = -1;
        match = 46;
        match_pos = pos;
        break;

    case 25:
        state = -1;
        match = 49;
        match_pos = pos;
        break;

    case 26:
        state = -1;
        match = 48;
        match_pos = pos;
        break;

    case 27:
        state = -1;
        match = 21;
        match_pos = pos;
        break;

    case 28:
        if( info.src.charCodeAt( pos ) == 124 ) state = 41;
        else state = -1;
        match = 2;
        match_pos = pos;
        break;

    case 29:
        state = -1;
        match = 22;
        match_pos = pos;
        break;

    case 30:
        state = -1;
        match = 39;
        match_pos = pos;
        break;

    case 31:
        state = -1;
        match = 34;
        match_pos = pos;
        break;

    case 32:
        state = -1;
        match = 25;
        match_pos = pos;
        break;

    case 33:
        state = -1;
        match = 32;
        match_pos = pos;
        break;

    case 34:
        state = -1;
        match = 36;
        match_pos = pos;
        break;

    case 35:
        state = -1;
        match = 33;
        match_pos = pos;
        break;

    case 36:
        state = -1;
        match = 7;
        match_pos = pos;
        break;

    case 37:
        state = -1;
        match = 38;
        match_pos = pos;
        break;

    case 38:
        if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 122 ) ) state = 21;
        else state = -1;
        match = 17;
        match_pos = pos;
        break;

    case 39:
        if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 122 ) ) state = 21;
        else state = -1;
        match = 9;
        match_pos = pos;
        break;

    case 40:
        if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 122 ) ) state = 21;
        else state = -1;
        match = 19;
        match_pos = pos;
        break;

    case 41:
        if( info.src.charCodeAt( pos ) == 124 ) state = 45;
        else state = -1;
        match = 31;
        match_pos = pos;
        break;

    case 42:
        if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 100 ) || ( info.src.charCodeAt( pos ) >= 102 && info.src.charCodeAt( pos ) <= 122 ) ) state = 21;
        else if( info.src.charCodeAt( pos ) == 101 ) state = 83;
        else state = -1;
        match = 15;
        match_pos = pos;
        break;

    case 43:
        if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 122 ) ) state = 21;
        else state = -1;
        match = 18;
        match_pos = pos;
        break;

    case 44:
        if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 122 ) ) state = 21;
        else state = -1;
        match = 11;
        match_pos = pos;
        break;

    case 45:
        if( info.src.charCodeAt( pos ) == 124 ) state = 47;
        else state = -1;
        match = 29;
        match_pos = pos;
        break;

    case 46:
        if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 122 ) ) state = 21;
        else state = -1;
        match = 10;
        match_pos = pos;
        break;

    case 47:
        state = -1;
        match = 30;
        match_pos = pos;
        break;

    case 48:
        if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 122 ) ) state = 21;
        else state = -1;
        match = 12;
        match_pos = pos;
        break;

    case 49:
        if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 122 ) ) state = 21;
        else state = -1;
        match = 14;
        match_pos = pos;
        break;

    case 50:
        if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 122 ) ) state = 21;
        else state = -1;
        match = 13;
        match_pos = pos;
        break;

    case 51:
        if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 122 ) ) state = 21;
        else state = -1;
        match = 16;
        match_pos = pos;
        break;

    case 52:
        if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 122 ) ) state = 21;
        else state = -1;
        match = 4;
        match_pos = pos;
        break;

    case 53:
        if( info.src.charCodeAt( pos ) == 34 ) state = 32;
        else if( ( info.src.charCodeAt( pos ) >= 0 && info.src.charCodeAt( pos ) <= 33 ) || ( info.src.charCodeAt( pos ) >= 35 && info.src.charCodeAt( pos ) <= 91 ) || ( info.src.charCodeAt( pos ) >= 93 && info.src.charCodeAt( pos ) <= 254 ) ) state = 53;
        else if( info.src.charCodeAt( pos ) == 92 ) state = 58;
        else state = -1;
        break;

    case 54:
        if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) ) state = 54;
        else state = -1;
        match = 26;
        match_pos = pos;
        break;

    case 55:
        if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 114 ) || ( info.src.charCodeAt( pos ) >= 116 && info.src.charCodeAt( pos ) <= 122 ) ) state = 21;
        else if( info.src.charCodeAt( pos ) == 115 ) state = 38;
        else state = -1;
        match = 24;
        match_pos = pos;
        break;

    case 56:
        if( info.src.charCodeAt( pos ) == 38 ) state = 33;
        else state = -1;
        break;

    case 57:
        if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 101 ) || ( info.src.charCodeAt( pos ) >= 103 && info.src.charCodeAt( pos ) <= 109 ) || ( info.src.charCodeAt( pos ) >= 111 && info.src.charCodeAt( pos ) <= 122 ) ) state = 21;
        else if( info.src.charCodeAt( pos ) == 102 ) state = 39;
        else if( info.src.charCodeAt( pos ) == 110 ) state = 40;
        else state = -1;
        match = 24;
        match_pos = pos;
        break;

    case 58:
        if( info.src.charCodeAt( pos ) == 34 || info.src.charCodeAt( pos ) == 92 ) state = 53;
        else state = -1;
        break;

    case 59:
        if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 113 ) || ( info.src.charCodeAt( pos ) >= 115 && info.src.charCodeAt( pos ) <= 122 ) ) state = 21;
        else if( info.src.charCodeAt( pos ) == 114 ) state = 42;
        else state = -1;
        match = 24;
        match_pos = pos;
        break;

    case 60:
        if( info.src.charCodeAt( pos ) == 10 ) state = 1;
        else if( ( info.src.charCodeAt( pos ) >= 0 && info.src.charCodeAt( pos ) <= 9 ) || ( info.src.charCodeAt( pos ) >= 11 && info.src.charCodeAt( pos ) <= 254 ) ) state = 60;
        else state = -1;
        break;

    case 61:
        if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 115 ) || ( info.src.charCodeAt( pos ) >= 117 && info.src.charCodeAt( pos ) <= 122 ) ) state = 21;
        else if( info.src.charCodeAt( pos ) == 116 ) state = 43;
        else state = -1;
        match = 24;
        match_pos = pos;
        break;

    case 62:
        if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) ) state = 54;
        else state = -1;
        break;

    case 63:
        if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 120 ) || info.src.charCodeAt( pos ) == 122 ) state = 21;
        else if( info.src.charCodeAt( pos ) == 121 ) state = 44;
        else state = -1;
        match = 24;
        match_pos = pos;
        break;

    case 64:
        if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 100 ) || ( info.src.charCodeAt( pos ) >= 102 && info.src.charCodeAt( pos ) <= 122 ) ) state = 21;
        else if( info.src.charCodeAt( pos ) == 101 ) state = 46;
        else state = -1;
        match = 24;
        match_pos = pos;
        break;

    case 65:
        if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 103 ) || ( info.src.charCodeAt( pos ) >= 105 && info.src.charCodeAt( pos ) <= 122 ) ) state = 21;
        else if( info.src.charCodeAt( pos ) == 104 ) state = 48;
        else state = -1;
        match = 24;
        match_pos = pos;
        break;

    case 66:
        if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 100 ) || ( info.src.charCodeAt( pos ) >= 102 && info.src.charCodeAt( pos ) <= 122 ) ) state = 21;
        else if( info.src.charCodeAt( pos ) == 101 ) state = 49;
        else state = -1;
        match = 24;
        match_pos = pos;
        break;

    case 67:
        if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 103 ) || ( info.src.charCodeAt( pos ) >= 105 && info.src.charCodeAt( pos ) <= 122 ) ) state = 21;
        else if( info.src.charCodeAt( pos ) == 104 ) state = 50;
        else state = -1;
        match = 24;
        match_pos = pos;
        break;

    case 68:
        if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 103 ) || ( info.src.charCodeAt( pos ) >= 105 && info.src.charCodeAt( pos ) <= 122 ) ) state = 21;
        else if( info.src.charCodeAt( pos ) == 104 ) state = 51;
        else state = -1;
        match = 24;
        match_pos = pos;
        break;

    case 69:
        if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 109 ) || ( info.src.charCodeAt( pos ) >= 111 && info.src.charCodeAt( pos ) <= 122 ) ) state = 21;
        else if( info.src.charCodeAt( pos ) == 110 ) state = 52;
        else state = -1;
        match = 24;
        match_pos = pos;
        break;

    case 70:
        if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 110 ) || ( info.src.charCodeAt( pos ) >= 112 && info.src.charCodeAt( pos ) <= 116 ) || ( info.src.charCodeAt( pos ) >= 118 && info.src.charCodeAt( pos ) <= 122 ) ) state = 21;
        else if( info.src.charCodeAt( pos ) == 111 ) state = 59;
        else if( info.src.charCodeAt( pos ) == 117 ) state = 91;
        else state = -1;
        match = 24;
        match_pos = pos;
        break;

    case 71:
        if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 100 ) || ( info.src.charCodeAt( pos ) >= 102 && info.src.charCodeAt( pos ) <= 122 ) ) state = 21;
        else if( info.src.charCodeAt( pos ) == 101 ) state = 61;
        else state = -1;
        match = 24;
        match_pos = pos;
        break;

    case 72:
        if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 113 ) || ( info.src.charCodeAt( pos ) >= 115 && info.src.charCodeAt( pos ) <= 122 ) ) state = 21;
        else if( info.src.charCodeAt( pos ) == 114 ) state = 63;
        else state = -1;
        match = 24;
        match_pos = pos;
        break;

    case 73:
        if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 114 ) || ( info.src.charCodeAt( pos ) >= 116 && info.src.charCodeAt( pos ) <= 122 ) ) state = 21;
        else if( info.src.charCodeAt( pos ) == 115 ) state = 64;
        else state = -1;
        match = 24;
        match_pos = pos;
        break;

    case 74:
        if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 98 ) || ( info.src.charCodeAt( pos ) >= 100 && info.src.charCodeAt( pos ) <= 122 ) ) state = 21;
        else if( info.src.charCodeAt( pos ) == 99 ) state = 65;
        else state = -1;
        match = 24;
        match_pos = pos;
        break;

    case 75:
        if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 107 ) || ( info.src.charCodeAt( pos ) >= 109 && info.src.charCodeAt( pos ) <= 122 ) ) state = 21;
        else if( info.src.charCodeAt( pos ) == 108 ) state = 66;
        else state = -1;
        match = 24;
        match_pos = pos;
        break;

    case 76:
        if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 98 ) || ( info.src.charCodeAt( pos ) >= 100 && info.src.charCodeAt( pos ) <= 122 ) ) state = 21;
        else if( info.src.charCodeAt( pos ) == 99 ) state = 67;
        else state = -1;
        match = 24;
        match_pos = pos;
        break;

    case 77:
        if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 98 ) || ( info.src.charCodeAt( pos ) >= 100 && info.src.charCodeAt( pos ) <= 122 ) ) state = 21;
        else if( info.src.charCodeAt( pos ) == 99 ) state = 68;
        else state = -1;
        match = 24;
        match_pos = pos;
        break;

    case 78:
        if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 110 ) || ( info.src.charCodeAt( pos ) >= 112 && info.src.charCodeAt( pos ) <= 122 ) ) state = 21;
        else if( info.src.charCodeAt( pos ) == 111 ) state = 69;
        else state = -1;
        match = 24;
        match_pos = pos;
        break;

    case 79:
        if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 107 ) || ( info.src.charCodeAt( pos ) >= 109 && info.src.charCodeAt( pos ) <= 122 ) ) state = 21;
        else if( info.src.charCodeAt( pos ) == 108 ) state = 73;
        else state = -1;
        match = 24;
        match_pos = pos;
        break;

    case 80:
        if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 115 ) || ( info.src.charCodeAt( pos ) >= 117 && info.src.charCodeAt( pos ) <= 122 ) ) state = 21;
        else if( info.src.charCodeAt( pos ) == 116 ) state = 74;
        else state = -1;
        match = 24;
        match_pos = pos;
        break;

    case 81:
        if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 104 ) || ( info.src.charCodeAt( pos ) >= 106 && info.src.charCodeAt( pos ) <= 122 ) ) state = 21;
        else if( info.src.charCodeAt( pos ) == 105 ) state = 75;
        else state = -1;
        match = 24;
        match_pos = pos;
        break;

    case 82:
        if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 115 ) || ( info.src.charCodeAt( pos ) >= 117 && info.src.charCodeAt( pos ) <= 122 ) ) state = 21;
        else if( info.src.charCodeAt( pos ) == 116 ) state = 76;
        else state = -1;
        match = 24;
        match_pos = pos;
        break;

    case 83:
        if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 98 && info.src.charCodeAt( pos ) <= 122 ) ) state = 21;
        else if( info.src.charCodeAt( pos ) == 97 ) state = 77;
        else state = -1;
        match = 24;
        match_pos = pos;
        break;

    case 84:
        if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 104 ) || ( info.src.charCodeAt( pos ) >= 106 && info.src.charCodeAt( pos ) <= 122 ) ) state = 21;
        else if( info.src.charCodeAt( pos ) == 105 ) state = 78;
        else state = -1;
        match = 24;
        match_pos = pos;
        break;

    case 85:
        if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 98 && info.src.charCodeAt( pos ) <= 122 ) ) state = 21;
        else if( info.src.charCodeAt( pos ) == 97 ) state = 80;
        else state = -1;
        match = 24;
        match_pos = pos;
        break;

    case 86:
        if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 103 ) || ( info.src.charCodeAt( pos ) >= 105 && info.src.charCodeAt( pos ) <= 122 ) ) state = 21;
        else if( info.src.charCodeAt( pos ) == 104 ) state = 81;
        else state = -1;
        match = 24;
        match_pos = pos;
        break;

    case 87:
        if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 104 ) || ( info.src.charCodeAt( pos ) >= 106 && info.src.charCodeAt( pos ) <= 122 ) ) state = 21;
        else if( info.src.charCodeAt( pos ) == 105 ) state = 82;
        else state = -1;
        match = 24;
        match_pos = pos;
        break;

    case 88:
        if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 115 ) || ( info.src.charCodeAt( pos ) >= 117 && info.src.charCodeAt( pos ) <= 122 ) ) state = 21;
        else if( info.src.charCodeAt( pos ) == 116 ) state = 84;
        else state = -1;
        match = 24;
        match_pos = pos;
        break;

    case 89:
        if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 118 ) || ( info.src.charCodeAt( pos ) >= 120 && info.src.charCodeAt( pos ) <= 122 ) ) state = 21;
        else if( info.src.charCodeAt( pos ) == 119 ) state = 87;
        else state = -1;
        match = 24;
        match_pos = pos;
        break;

    case 90:
        if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 98 ) || ( info.src.charCodeAt( pos ) >= 100 && info.src.charCodeAt( pos ) <= 122 ) ) state = 21;
        else if( info.src.charCodeAt( pos ) == 99 ) state = 88;
        else state = -1;
        match = 24;
        match_pos = pos;
        break;

    case 91:
        if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 109 ) || ( info.src.charCodeAt( pos ) >= 111 && info.src.charCodeAt( pos ) <= 122 ) ) state = 21;
        else if( info.src.charCodeAt( pos ) == 110 ) state = 90;
        else state = -1;
        match = 24;
        match_pos = pos;
        break;

}


            pos++;

        }
        while( state > -1 );

    }
    while( 1 > -1 && match == 1 );

    if( match > -1 )
    {
        info.att = info.src.substr( start, match_pos - start );
        info.offset = match_pos;
        
switch( match )
{
    case 25:
        {
         
info.att = info.att.substr( 1, info.att.length - 2 );

        }
        break;

    case 26:
        {
         info.att = parseFloat( info.att ); 
        }
        break;

}


    }
    else
    {
        info.att = new String();
        match = -1;
    }

    return match;
}


function __parse( src, err_off, err_la )
{
    var        sstack            = new Array();
    var        vstack            = new Array();
    var     err_cnt            = 0;
    var        act;
    var        go;
    var        la;
    var        rval;
    var     parseinfo        = new Function( "", "var offset; var src; var att;" );
    var        info            = new parseinfo();
    
/* Pop-Table */
var pop_tab = new Array(
    new Array( 0/* p' */, 1 ),
    new Array( 54/* p */, 1 ),
    new Array( 53/* e */, 3 ),
    new Array( 53/* e */, 3 ),
    new Array( 53/* e */, 3 ),
    new Array( 53/* e */, 3 ),
    new Array( 53/* e */, 2 ),
    new Array( 53/* e */, 3 ),
    new Array( 53/* e */, 3 ),
    new Array( 53/* e */, 3 ),
    new Array( 53/* e */, 3 ),
    new Array( 53/* e */, 3 ),
    new Array( 53/* e */, 3 ),
    new Array( 53/* e */, 3 ),
    new Array( 53/* e */, 3 ),
    new Array( 53/* e */, 3 ),
    new Array( 53/* e */, 2 ),
    new Array( 53/* e */, 1 ),
    new Array( 53/* e */, 1 ),
    new Array( 53/* e */, 1 ),
    new Array( 53/* e */, 3 ),
    new Array( 53/* e */, 1 ),
    new Array( 53/* e */, 3 ),
    new Array( 53/* e */, 3 ),
    new Array( 53/* e */, 2 ),
    new Array( 53/* e */, 2 ),
    new Array( 53/* e */, 2 ),
    new Array( 53/* e */, 6 ),
    new Array( 53/* e */, 7 ),
    new Array( 53/* e */, 3 ),
    new Array( 53/* e */, 4 ),
    new Array( 53/* e */, 3 ),
    new Array( 53/* e */, 3 ),
    new Array( 53/* e */, 2 ),
    new Array( 53/* e */, 6 ),
    new Array( 53/* e */, 1 ),
    new Array( 56/* stmts */, 2 ),
    new Array( 56/* stmts */, 1 ),
    new Array( 61/* stmt */, 2 ),
    new Array( 61/* stmt */, 4 ),
    new Array( 61/* stmt */, 7 ),
    new Array( 61/* stmt */, 9 ),
    new Array( 61/* stmt */, 11 ),
    new Array( 61/* stmt */, 7 ),
    new Array( 61/* stmt */, 11 ),
    new Array( 61/* stmt */, 11 ),
    new Array( 62/* cases */, 3 ),
    new Array( 62/* cases */, 1 ),
    new Array( 63/* case */, 3 ),
    new Array( 59/* mappings */, 3 ),
    new Array( 59/* mappings */, 1 ),
    new Array( 64/* mapping */, 3 ),
    new Array( 65/* field */, 1 ),
    new Array( 65/* field */, 1 ),
    new Array( 65/* field */, 2 ),
    new Array( 65/* field */, 1 ),
    new Array( 58/* args */, 3 ),
    new Array( 58/* args */, 1 ),
    new Array( 57/* fargs */, 3 ),
    new Array( 57/* fargs */, 1 ),
    new Array( 55/* LExp */, 1 ),
    new Array( 55/* LExp */, 4 ),
    new Array( 55/* LExp */, 3 ),
    new Array( 60/* ImpVar */, 2 )
);

/* Action-Table */
var act_tab = new Array(
    /* State 0 */ new Array( 41/* "-" */,3 , 51/* "(" */,4 , 23/* "!" */,5 , 26/* "Number" */,6 , 25/* "String" */,7 , 48/* "`" */,10 , 49/* "Escape" */,11 , 50/* "Hash" */,12 , 4/* "Function" */,13 , 21/* "{" */,14 , 18/* "Let" */,15 , 24/* "Identifier" */,17 , 20/* "?" */,19 , 13/* "Switch" */,20 , 14/* "While" */,21 , 16/* "Foreach" */,22 , 9/* "If" */,23 , 11/* "Try" */,24 ),
    /* State 1 */ new Array( 66/* "$" */,0 ),
    /* State 2 */ new Array( 27/* ";" */,25 , 44/* "Dot" */,26 , 45/* "[" */,27 , 39/* "~" */,28 , 51/* "(" */,29 , 30/* "||||" */,30 , 29/* "|||" */,31 , 31/* "||" */,32 , 32/* "&&" */,33 , 36/* "<=" */,34 , 35/* "<" */,35 , 38/* ">=" */,36 , 37/* ">" */,37 , 34/* "!=" */,38 , 33/* "==" */,39 , 43/* "/" */,40 , 42/* "*" */,41 , 41/* "-" */,42 , 40/* "+" */,43 , 66/* "$" */,-1 ),
    /* State 3 */ new Array( 41/* "-" */,3 , 51/* "(" */,4 , 23/* "!" */,5 , 26/* "Number" */,6 , 25/* "String" */,7 , 48/* "`" */,10 , 49/* "Escape" */,11 , 50/* "Hash" */,12 , 4/* "Function" */,13 , 21/* "{" */,14 , 18/* "Let" */,15 , 24/* "Identifier" */,17 , 20/* "?" */,19 , 13/* "Switch" */,20 , 14/* "While" */,21 , 16/* "Foreach" */,22 , 9/* "If" */,23 , 11/* "Try" */,24 ),
    /* State 4 */ new Array( 41/* "-" */,3 , 51/* "(" */,4 , 23/* "!" */,5 , 26/* "Number" */,6 , 25/* "String" */,7 , 48/* "`" */,10 , 49/* "Escape" */,11 , 50/* "Hash" */,12 , 4/* "Function" */,13 , 21/* "{" */,14 , 18/* "Let" */,15 , 24/* "Identifier" */,17 , 20/* "?" */,19 , 13/* "Switch" */,20 , 14/* "While" */,21 , 16/* "Foreach" */,22 , 9/* "If" */,23 , 11/* "Try" */,24 ),
    /* State 5 */ new Array( 41/* "-" */,3 , 51/* "(" */,4 , 23/* "!" */,5 , 26/* "Number" */,6 , 25/* "String" */,7 , 48/* "`" */,10 , 49/* "Escape" */,11 , 50/* "Hash" */,12 , 4/* "Function" */,13 , 21/* "{" */,14 , 18/* "Let" */,15 , 24/* "Identifier" */,17 , 20/* "?" */,19 , 13/* "Switch" */,20 , 14/* "While" */,21 , 16/* "Foreach" */,22 , 9/* "If" */,23 , 11/* "Try" */,24 ),
    /* State 6 */ new Array( 66/* "$" */,-17 , 40/* "+" */,-17 , 41/* "-" */,-17 , 42/* "*" */,-17 , 43/* "/" */,-17 , 33/* "==" */,-17 , 34/* "!=" */,-17 , 37/* ">" */,-17 , 38/* ">=" */,-17 , 35/* "<" */,-17 , 36/* "<=" */,-17 , 32/* "&&" */,-17 , 31/* "||" */,-17 , 29/* "|||" */,-17 , 30/* "||||" */,-17 , 51/* "(" */,-17 , 39/* "~" */,-17 , 45/* "[" */,-17 , 44/* "Dot" */,-17 , 27/* ";" */,-17 , 52/* ")" */,-17 , 8/* ":" */,-17 , 46/* "]" */,-17 , 5/* "," */,-17 , 7/* "=>" */,-17 , 17/* "As" */,-17 , 22/* "}" */,-17 , 19/* "In" */,-17 , 2/* "|" */,-17 ),
    /* State 7 */ new Array( 66/* "$" */,-18 , 40/* "+" */,-18 , 41/* "-" */,-18 , 42/* "*" */,-18 , 43/* "/" */,-18 , 33/* "==" */,-18 , 34/* "!=" */,-18 , 37/* ">" */,-18 , 38/* ">=" */,-18 , 35/* "<" */,-18 , 36/* "<=" */,-18 , 32/* "&&" */,-18 , 31/* "||" */,-18 , 29/* "|||" */,-18 , 30/* "||||" */,-18 , 51/* "(" */,-18 , 39/* "~" */,-18 , 45/* "[" */,-18 , 44/* "Dot" */,-18 , 27/* ";" */,-18 , 52/* ")" */,-18 , 8/* ":" */,-18 , 46/* "]" */,-18 , 5/* "," */,-18 , 7/* "=>" */,-18 , 17/* "As" */,-18 , 22/* "}" */,-18 , 19/* "In" */,-18 , 2/* "|" */,-18 ),
    /* State 8 */ new Array( 28/* "=" */,47 , 66/* "$" */,-19 , 40/* "+" */,-19 , 41/* "-" */,-19 , 42/* "*" */,-19 , 43/* "/" */,-19 , 33/* "==" */,-19 , 34/* "!=" */,-19 , 37/* ">" */,-19 , 38/* ">=" */,-19 , 35/* "<" */,-19 , 36/* "<=" */,-19 , 32/* "&&" */,-19 , 31/* "||" */,-19 , 29/* "|||" */,-19 , 30/* "||||" */,-19 , 51/* "(" */,-19 , 39/* "~" */,-19 , 45/* "[" */,-19 , 44/* "Dot" */,-19 , 27/* ";" */,-19 , 52/* ")" */,-19 , 8/* ":" */,-19 , 46/* "]" */,-19 , 5/* "," */,-19 , 7/* "=>" */,-19 , 17/* "As" */,-19 , 22/* "}" */,-19 , 19/* "In" */,-19 , 2/* "|" */,-19 ),
    /* State 9 */ new Array( 13/* "Switch" */,20 , 14/* "While" */,21 , 16/* "Foreach" */,22 , 9/* "If" */,23 , 11/* "Try" */,24 , 41/* "-" */,3 , 51/* "(" */,4 , 23/* "!" */,5 , 26/* "Number" */,6 , 25/* "String" */,7 , 48/* "`" */,10 , 49/* "Escape" */,11 , 50/* "Hash" */,12 , 4/* "Function" */,13 , 21/* "{" */,14 , 18/* "Let" */,15 , 24/* "Identifier" */,17 , 20/* "?" */,19 , 66/* "$" */,-21 , 40/* "+" */,-21 , 42/* "*" */,-21 , 43/* "/" */,-21 , 33/* "==" */,-21 , 34/* "!=" */,-21 , 37/* ">" */,-21 , 38/* ">=" */,-21 , 35/* "<" */,-21 , 36/* "<=" */,-21 , 32/* "&&" */,-21 , 31/* "||" */,-21 , 29/* "|||" */,-21 , 30/* "||||" */,-21 , 39/* "~" */,-21 , 45/* "[" */,-21 , 44/* "Dot" */,-21 , 27/* ";" */,-21 , 52/* ")" */,-21 , 8/* ":" */,-21 , 46/* "]" */,-21 , 5/* "," */,-21 , 7/* "=>" */,-21 , 17/* "As" */,-21 , 22/* "}" */,-21 , 19/* "In" */,-21 , 2/* "|" */,-21 ),
    /* State 10 */ new Array( 41/* "-" */,3 , 51/* "(" */,4 , 23/* "!" */,5 , 26/* "Number" */,6 , 25/* "String" */,7 , 48/* "`" */,10 , 49/* "Escape" */,11 , 50/* "Hash" */,12 , 4/* "Function" */,13 , 21/* "{" */,14 , 18/* "Let" */,15 , 24/* "Identifier" */,17 , 20/* "?" */,19 , 13/* "Switch" */,20 , 14/* "While" */,21 , 16/* "Foreach" */,22 , 9/* "If" */,23 , 11/* "Try" */,24 ),
    /* State 11 */ new Array( 41/* "-" */,3 , 51/* "(" */,4 , 23/* "!" */,5 , 26/* "Number" */,6 , 25/* "String" */,7 , 48/* "`" */,10 , 49/* "Escape" */,11 , 50/* "Hash" */,12 , 4/* "Function" */,13 , 21/* "{" */,14 , 18/* "Let" */,15 , 24/* "Identifier" */,17 , 20/* "?" */,19 , 13/* "Switch" */,20 , 14/* "While" */,21 , 16/* "Foreach" */,22 , 9/* "If" */,23 , 11/* "Try" */,24 ),
    /* State 12 */ new Array( 41/* "-" */,3 , 51/* "(" */,4 , 23/* "!" */,5 , 26/* "Number" */,6 , 25/* "String" */,7 , 48/* "`" */,10 , 49/* "Escape" */,11 , 50/* "Hash" */,12 , 4/* "Function" */,13 , 21/* "{" */,14 , 18/* "Let" */,15 , 24/* "Identifier" */,17 , 20/* "?" */,19 , 13/* "Switch" */,20 , 14/* "While" */,21 , 16/* "Foreach" */,22 , 9/* "If" */,23 , 11/* "Try" */,24 ),
    /* State 13 */ new Array( 51/* "(" */,53 ),
    /* State 14 */ new Array( 22/* "}" */,54 , 41/* "-" */,3 , 51/* "(" */,4 , 23/* "!" */,5 , 26/* "Number" */,6 , 25/* "String" */,7 , 48/* "`" */,10 , 49/* "Escape" */,11 , 50/* "Hash" */,12 , 4/* "Function" */,13 , 21/* "{" */,14 , 18/* "Let" */,15 , 24/* "Identifier" */,17 , 20/* "?" */,19 , 13/* "Switch" */,20 , 14/* "While" */,21 , 16/* "Foreach" */,22 , 9/* "If" */,23 , 11/* "Try" */,24 ),
    /* State 15 */ new Array( 20/* "?" */,19 ),
    /* State 16 */ new Array( 66/* "$" */,-35 , 40/* "+" */,-35 , 41/* "-" */,-35 , 42/* "*" */,-35 , 43/* "/" */,-35 , 33/* "==" */,-35 , 34/* "!=" */,-35 , 37/* ">" */,-35 , 38/* ">=" */,-35 , 35/* "<" */,-35 , 36/* "<=" */,-35 , 32/* "&&" */,-35 , 31/* "||" */,-35 , 29/* "|||" */,-35 , 30/* "||||" */,-35 , 51/* "(" */,-35 , 39/* "~" */,-35 , 45/* "[" */,-35 , 44/* "Dot" */,-35 , 27/* ";" */,-35 , 52/* ")" */,-35 , 8/* ":" */,-35 , 46/* "]" */,-35 , 5/* "," */,-35 , 7/* "=>" */,-35 , 17/* "As" */,-35 , 22/* "}" */,-35 , 19/* "In" */,-35 , 2/* "|" */,-35 ),
    /* State 17 */ new Array( 66/* "$" */,-60 , 40/* "+" */,-60 , 41/* "-" */,-60 , 42/* "*" */,-60 , 43/* "/" */,-60 , 33/* "==" */,-60 , 34/* "!=" */,-60 , 37/* ">" */,-60 , 38/* ">=" */,-60 , 35/* "<" */,-60 , 36/* "<=" */,-60 , 32/* "&&" */,-60 , 31/* "||" */,-60 , 28/* "=" */,-60 , 29/* "|||" */,-60 , 30/* "||||" */,-60 , 51/* "(" */,-60 , 39/* "~" */,-60 , 45/* "[" */,-60 , 44/* "Dot" */,-60 , 27/* ";" */,-60 , 52/* ")" */,-60 , 8/* ":" */,-60 , 46/* "]" */,-60 , 5/* "," */,-60 , 7/* "=>" */,-60 , 17/* "As" */,-60 , 22/* "}" */,-60 , 19/* "In" */,-60 , 2/* "|" */,-60 ),
    /* State 18 */ new Array( 66/* "$" */,-37 , 40/* "+" */,-37 , 41/* "-" */,-37 , 42/* "*" */,-37 , 43/* "/" */,-37 , 33/* "==" */,-37 , 34/* "!=" */,-37 , 37/* ">" */,-37 , 38/* ">=" */,-37 , 35/* "<" */,-37 , 36/* "<=" */,-37 , 32/* "&&" */,-37 , 31/* "||" */,-37 , 51/* "(" */,-37 , 23/* "!" */,-37 , 26/* "Number" */,-37 , 25/* "String" */,-37 , 48/* "`" */,-37 , 49/* "Escape" */,-37 , 50/* "Hash" */,-37 , 4/* "Function" */,-37 , 21/* "{" */,-37 , 18/* "Let" */,-37 , 13/* "Switch" */,-37 , 14/* "While" */,-37 , 16/* "Foreach" */,-37 , 9/* "If" */,-37 , 11/* "Try" */,-37 , 24/* "Identifier" */,-37 , 20/* "?" */,-37 , 29/* "|||" */,-37 , 30/* "||||" */,-37 , 39/* "~" */,-37 , 45/* "[" */,-37 , 44/* "Dot" */,-37 , 27/* ";" */,-37 , 52/* ")" */,-37 , 8/* ":" */,-37 , 46/* "]" */,-37 , 5/* "," */,-37 , 7/* "=>" */,-37 , 17/* "As" */,-37 , 22/* "}" */,-37 , 19/* "In" */,-37 , 2/* "|" */,-37 ),
    /* State 19 */ new Array( 24/* "Identifier" */,59 ),
    /* State 20 */ new Array( 21/* "{" */,60 ),
    /* State 21 */ new Array( 51/* "(" */,61 ),
    /* State 22 */ new Array( 51/* "(" */,62 ),
    /* State 23 */ new Array( 51/* "(" */,63 ),
    /* State 24 */ new Array( 21/* "{" */,64 ),
    /* State 25 */ new Array( 66/* "$" */,-38 , 40/* "+" */,-38 , 41/* "-" */,-38 , 42/* "*" */,-38 , 43/* "/" */,-38 , 33/* "==" */,-38 , 34/* "!=" */,-38 , 37/* ">" */,-38 , 38/* ">=" */,-38 , 35/* "<" */,-38 , 36/* "<=" */,-38 , 32/* "&&" */,-38 , 31/* "||" */,-38 , 51/* "(" */,-38 , 23/* "!" */,-38 , 26/* "Number" */,-38 , 25/* "String" */,-38 , 48/* "`" */,-38 , 49/* "Escape" */,-38 , 50/* "Hash" */,-38 , 4/* "Function" */,-38 , 21/* "{" */,-38 , 18/* "Let" */,-38 , 13/* "Switch" */,-38 , 14/* "While" */,-38 , 16/* "Foreach" */,-38 , 9/* "If" */,-38 , 11/* "Try" */,-38 , 24/* "Identifier" */,-38 , 20/* "?" */,-38 , 29/* "|||" */,-38 , 30/* "||||" */,-38 , 39/* "~" */,-38 , 45/* "[" */,-38 , 44/* "Dot" */,-38 , 27/* ";" */,-38 , 52/* ")" */,-38 , 8/* ":" */,-38 , 46/* "]" */,-38 , 5/* "," */,-38 , 7/* "=>" */,-38 , 17/* "As" */,-38 , 22/* "}" */,-38 , 19/* "In" */,-38 , 2/* "|" */,-38 ),
    /* State 26 */ new Array( 24/* "Identifier" */,66 , 6/* "Dollar" */,67 , 3/* "@" */,68 , 26/* "Number" */,69 ),
    /* State 27 */ new Array( 41/* "-" */,3 , 51/* "(" */,4 , 23/* "!" */,5 , 26/* "Number" */,6 , 25/* "String" */,7 , 48/* "`" */,10 , 49/* "Escape" */,11 , 50/* "Hash" */,12 , 4/* "Function" */,13 , 21/* "{" */,14 , 18/* "Let" */,15 , 24/* "Identifier" */,17 , 20/* "?" */,19 , 13/* "Switch" */,20 , 14/* "While" */,21 , 16/* "Foreach" */,22 , 9/* "If" */,23 , 11/* "Try" */,24 ),
    /* State 28 */ new Array( 41/* "-" */,3 , 51/* "(" */,4 , 23/* "!" */,5 , 26/* "Number" */,6 , 25/* "String" */,7 , 48/* "`" */,10 , 49/* "Escape" */,11 , 50/* "Hash" */,12 , 4/* "Function" */,13 , 21/* "{" */,14 , 18/* "Let" */,15 , 24/* "Identifier" */,17 , 20/* "?" */,19 , 13/* "Switch" */,20 , 14/* "While" */,21 , 16/* "Foreach" */,22 , 9/* "If" */,23 , 11/* "Try" */,24 ),
    /* State 29 */ new Array( 52/* ")" */,72 , 41/* "-" */,3 , 51/* "(" */,4 , 23/* "!" */,5 , 26/* "Number" */,6 , 25/* "String" */,7 , 48/* "`" */,10 , 49/* "Escape" */,11 , 50/* "Hash" */,12 , 4/* "Function" */,13 , 21/* "{" */,14 , 18/* "Let" */,15 , 24/* "Identifier" */,17 , 20/* "?" */,19 , 13/* "Switch" */,20 , 14/* "While" */,21 , 16/* "Foreach" */,22 , 9/* "If" */,23 , 11/* "Try" */,24 ),
    /* State 30 */ new Array( 41/* "-" */,3 , 51/* "(" */,4 , 23/* "!" */,5 , 26/* "Number" */,6 , 25/* "String" */,7 , 48/* "`" */,10 , 49/* "Escape" */,11 , 50/* "Hash" */,12 , 4/* "Function" */,13 , 21/* "{" */,14 , 18/* "Let" */,15 , 24/* "Identifier" */,17 , 20/* "?" */,19 , 13/* "Switch" */,20 , 14/* "While" */,21 , 16/* "Foreach" */,22 , 9/* "If" */,23 , 11/* "Try" */,24 ),
    /* State 31 */ new Array( 41/* "-" */,3 , 51/* "(" */,4 , 23/* "!" */,5 , 26/* "Number" */,6 , 25/* "String" */,7 , 48/* "`" */,10 , 49/* "Escape" */,11 , 50/* "Hash" */,12 , 4/* "Function" */,13 , 21/* "{" */,14 , 18/* "Let" */,15 , 24/* "Identifier" */,17 , 20/* "?" */,19 , 13/* "Switch" */,20 , 14/* "While" */,21 , 16/* "Foreach" */,22 , 9/* "If" */,23 , 11/* "Try" */,24 ),
    /* State 32 */ new Array( 41/* "-" */,3 , 51/* "(" */,4 , 23/* "!" */,5 , 26/* "Number" */,6 , 25/* "String" */,7 , 48/* "`" */,10 , 49/* "Escape" */,11 , 50/* "Hash" */,12 , 4/* "Function" */,13 , 21/* "{" */,14 , 18/* "Let" */,15 , 24/* "Identifier" */,17 , 20/* "?" */,19 , 13/* "Switch" */,20 , 14/* "While" */,21 , 16/* "Foreach" */,22 , 9/* "If" */,23 , 11/* "Try" */,24 ),
    /* State 33 */ new Array( 41/* "-" */,3 , 51/* "(" */,4 , 23/* "!" */,5 , 26/* "Number" */,6 , 25/* "String" */,7 , 48/* "`" */,10 , 49/* "Escape" */,11 , 50/* "Hash" */,12 , 4/* "Function" */,13 , 21/* "{" */,14 , 18/* "Let" */,15 , 24/* "Identifier" */,17 , 20/* "?" */,19 , 13/* "Switch" */,20 , 14/* "While" */,21 , 16/* "Foreach" */,22 , 9/* "If" */,23 , 11/* "Try" */,24 ),
    /* State 34 */ new Array( 41/* "-" */,3 , 51/* "(" */,4 , 23/* "!" */,5 , 26/* "Number" */,6 , 25/* "String" */,7 , 48/* "`" */,10 , 49/* "Escape" */,11 , 50/* "Hash" */,12 , 4/* "Function" */,13 , 21/* "{" */,14 , 18/* "Let" */,15 , 24/* "Identifier" */,17 , 20/* "?" */,19 , 13/* "Switch" */,20 , 14/* "While" */,21 , 16/* "Foreach" */,22 , 9/* "If" */,23 , 11/* "Try" */,24 ),
    /* State 35 */ new Array( 41/* "-" */,3 , 51/* "(" */,4 , 23/* "!" */,5 , 26/* "Number" */,6 , 25/* "String" */,7 , 48/* "`" */,10 , 49/* "Escape" */,11 , 50/* "Hash" */,12 , 4/* "Function" */,13 , 21/* "{" */,14 , 18/* "Let" */,15 , 24/* "Identifier" */,17 , 20/* "?" */,19 , 13/* "Switch" */,20 , 14/* "While" */,21 , 16/* "Foreach" */,22 , 9/* "If" */,23 , 11/* "Try" */,24 ),
    /* State 36 */ new Array( 41/* "-" */,3 , 51/* "(" */,4 , 23/* "!" */,5 , 26/* "Number" */,6 , 25/* "String" */,7 , 48/* "`" */,10 , 49/* "Escape" */,11 , 50/* "Hash" */,12 , 4/* "Function" */,13 , 21/* "{" */,14 , 18/* "Let" */,15 , 24/* "Identifier" */,17 , 20/* "?" */,19 , 13/* "Switch" */,20 , 14/* "While" */,21 , 16/* "Foreach" */,22 , 9/* "If" */,23 , 11/* "Try" */,24 ),
    /* State 37 */ new Array( 41/* "-" */,3 , 51/* "(" */,4 , 23/* "!" */,5 , 26/* "Number" */,6 , 25/* "String" */,7 , 48/* "`" */,10 , 49/* "Escape" */,11 , 50/* "Hash" */,12 , 4/* "Function" */,13 , 21/* "{" */,14 , 18/* "Let" */,15 , 24/* "Identifier" */,17 , 20/* "?" */,19 , 13/* "Switch" */,20 , 14/* "While" */,21 , 16/* "Foreach" */,22 , 9/* "If" */,23 , 11/* "Try" */,24 ),
    /* State 38 */ new Array( 41/* "-" */,3 , 51/* "(" */,4 , 23/* "!" */,5 , 26/* "Number" */,6 , 25/* "String" */,7 , 48/* "`" */,10 , 49/* "Escape" */,11 , 50/* "Hash" */,12 , 4/* "Function" */,13 , 21/* "{" */,14 , 18/* "Let" */,15 , 24/* "Identifier" */,17 , 20/* "?" */,19 , 13/* "Switch" */,20 , 14/* "While" */,21 , 16/* "Foreach" */,22 , 9/* "If" */,23 , 11/* "Try" */,24 ),
    /* State 39 */ new Array( 41/* "-" */,3 , 51/* "(" */,4 , 23/* "!" */,5 , 26/* "Number" */,6 , 25/* "String" */,7 , 48/* "`" */,10 , 49/* "Escape" */,11 , 50/* "Hash" */,12 , 4/* "Function" */,13 , 21/* "{" */,14 , 18/* "Let" */,15 , 24/* "Identifier" */,17 , 20/* "?" */,19 , 13/* "Switch" */,20 , 14/* "While" */,21 , 16/* "Foreach" */,22 , 9/* "If" */,23 , 11/* "Try" */,24 ),
    /* State 40 */ new Array( 41/* "-" */,3 , 51/* "(" */,4 , 23/* "!" */,5 , 26/* "Number" */,6 , 25/* "String" */,7 , 48/* "`" */,10 , 49/* "Escape" */,11 , 50/* "Hash" */,12 , 4/* "Function" */,13 , 21/* "{" */,14 , 18/* "Let" */,15 , 24/* "Identifier" */,17 , 20/* "?" */,19 , 13/* "Switch" */,20 , 14/* "While" */,21 , 16/* "Foreach" */,22 , 9/* "If" */,23 , 11/* "Try" */,24 ),
    /* State 41 */ new Array( 41/* "-" */,3 , 51/* "(" */,4 , 23/* "!" */,5 , 26/* "Number" */,6 , 25/* "String" */,7 , 48/* "`" */,10 , 49/* "Escape" */,11 , 50/* "Hash" */,12 , 4/* "Function" */,13 , 21/* "{" */,14 , 18/* "Let" */,15 , 24/* "Identifier" */,17 , 20/* "?" */,19 , 13/* "Switch" */,20 , 14/* "While" */,21 , 16/* "Foreach" */,22 , 9/* "If" */,23 , 11/* "Try" */,24 ),
    /* State 42 */ new Array( 41/* "-" */,3 , 51/* "(" */,4 , 23/* "!" */,5 , 26/* "Number" */,6 , 25/* "String" */,7 , 48/* "`" */,10 , 49/* "Escape" */,11 , 50/* "Hash" */,12 , 4/* "Function" */,13 , 21/* "{" */,14 , 18/* "Let" */,15 , 24/* "Identifier" */,17 , 20/* "?" */,19 , 13/* "Switch" */,20 , 14/* "While" */,21 , 16/* "Foreach" */,22 , 9/* "If" */,23 , 11/* "Try" */,24 ),
    /* State 43 */ new Array( 41/* "-" */,3 , 51/* "(" */,4 , 23/* "!" */,5 , 26/* "Number" */,6 , 25/* "String" */,7 , 48/* "`" */,10 , 49/* "Escape" */,11 , 50/* "Hash" */,12 , 4/* "Function" */,13 , 21/* "{" */,14 , 18/* "Let" */,15 , 24/* "Identifier" */,17 , 20/* "?" */,19 , 13/* "Switch" */,20 , 14/* "While" */,21 , 16/* "Foreach" */,22 , 9/* "If" */,23 , 11/* "Try" */,24 ),
    /* State 44 */ new Array( 27/* ";" */,-6 , 44/* "Dot" */,26 , 45/* "[" */,27 , 39/* "~" */,-6 , 51/* "(" */,29 , 30/* "||||" */,-6 , 29/* "|||" */,-6 , 31/* "||" */,-6 , 32/* "&&" */,-6 , 36/* "<=" */,-6 , 35/* "<" */,-6 , 38/* ">=" */,-6 , 37/* ">" */,-6 , 34/* "!=" */,-6 , 33/* "==" */,-6 , 43/* "/" */,-6 , 42/* "*" */,-6 , 41/* "-" */,-6 , 40/* "+" */,-6 , 66/* "$" */,-6 , 52/* ")" */,-6 , 8/* ":" */,-6 , 46/* "]" */,-6 , 5/* "," */,-6 , 7/* "=>" */,-6 , 17/* "As" */,-6 , 22/* "}" */,-6 , 19/* "In" */,-6 , 2/* "|" */,-6 ),
    /* State 45 */ new Array( 27/* ";" */,25 , 44/* "Dot" */,26 , 45/* "[" */,27 , 39/* "~" */,28 , 51/* "(" */,29 , 30/* "||||" */,30 , 29/* "|||" */,31 , 31/* "||" */,32 , 32/* "&&" */,33 , 36/* "<=" */,34 , 35/* "<" */,35 , 38/* ">=" */,36 , 37/* ">" */,37 , 34/* "!=" */,38 , 33/* "==" */,39 , 43/* "/" */,40 , 42/* "*" */,41 , 41/* "-" */,42 , 40/* "+" */,43 , 52/* ")" */,89 ),
    /* State 46 */ new Array( 27/* ";" */,-16 , 44/* "Dot" */,26 , 45/* "[" */,27 , 39/* "~" */,28 , 51/* "(" */,29 , 30/* "||||" */,-16 , 29/* "|||" */,-16 , 31/* "||" */,-16 , 32/* "&&" */,-16 , 36/* "<=" */,34 , 35/* "<" */,35 , 38/* ">=" */,36 , 37/* ">" */,37 , 34/* "!=" */,38 , 33/* "==" */,39 , 43/* "/" */,40 , 42/* "*" */,41 , 41/* "-" */,42 , 40/* "+" */,43 , 66/* "$" */,-16 , 52/* ")" */,-16 , 8/* ":" */,-16 , 46/* "]" */,-16 , 5/* "," */,-16 , 7/* "=>" */,-16 , 17/* "As" */,-16 , 22/* "}" */,-16 , 19/* "In" */,-16 , 2/* "|" */,-16 ),
    /* State 47 */ new Array( 41/* "-" */,3 , 51/* "(" */,4 , 23/* "!" */,5 , 26/* "Number" */,6 , 25/* "String" */,7 , 48/* "`" */,10 , 49/* "Escape" */,11 , 50/* "Hash" */,12 , 4/* "Function" */,13 , 21/* "{" */,14 , 18/* "Let" */,15 , 24/* "Identifier" */,17 , 20/* "?" */,19 , 13/* "Switch" */,20 , 14/* "While" */,21 , 16/* "Foreach" */,22 , 9/* "If" */,23 , 11/* "Try" */,24 ),
    /* State 48 */ new Array( 66/* "$" */,-36 , 40/* "+" */,-36 , 41/* "-" */,-36 , 42/* "*" */,-36 , 43/* "/" */,-36 , 33/* "==" */,-36 , 34/* "!=" */,-36 , 37/* ">" */,-36 , 38/* ">=" */,-36 , 35/* "<" */,-36 , 36/* "<=" */,-36 , 32/* "&&" */,-36 , 31/* "||" */,-36 , 51/* "(" */,-36 , 23/* "!" */,-36 , 26/* "Number" */,-36 , 25/* "String" */,-36 , 48/* "`" */,-36 , 49/* "Escape" */,-36 , 50/* "Hash" */,-36 , 4/* "Function" */,-36 , 21/* "{" */,-36 , 18/* "Let" */,-36 , 13/* "Switch" */,-36 , 14/* "While" */,-36 , 16/* "Foreach" */,-36 , 9/* "If" */,-36 , 11/* "Try" */,-36 , 24/* "Identifier" */,-36 , 20/* "?" */,-36 , 29/* "|||" */,-36 , 30/* "||||" */,-36 , 39/* "~" */,-36 , 45/* "[" */,-36 , 44/* "Dot" */,-36 , 27/* ";" */,-36 , 52/* ")" */,-36 , 8/* ":" */,-36 , 46/* "]" */,-36 , 5/* "," */,-36 , 7/* "=>" */,-36 , 17/* "As" */,-36 , 22/* "}" */,-36 , 19/* "In" */,-36 , 2/* "|" */,-36 ),
    /* State 49 */ new Array( 44/* "Dot" */,26 , 45/* "[" */,27 , 39/* "~" */,28 , 51/* "(" */,29 , 30/* "||||" */,30 , 29/* "|||" */,31 , 31/* "||" */,32 , 32/* "&&" */,33 , 36/* "<=" */,34 , 35/* "<" */,35 , 38/* ">=" */,36 , 37/* ">" */,37 , 34/* "!=" */,38 , 33/* "==" */,39 , 43/* "/" */,40 , 42/* "*" */,41 , 41/* "-" */,42 , 40/* "+" */,43 , 27/* ";" */,25 ),
    /* State 50 */ new Array( 27/* ";" */,-24 , 44/* "Dot" */,-24 , 45/* "[" */,-24 , 39/* "~" */,-24 , 51/* "(" */,29 , 30/* "||||" */,-24 , 29/* "|||" */,-24 , 31/* "||" */,-24 , 32/* "&&" */,-24 , 36/* "<=" */,-24 , 35/* "<" */,-24 , 38/* ">=" */,-24 , 37/* ">" */,-24 , 34/* "!=" */,-24 , 33/* "==" */,-24 , 43/* "/" */,-24 , 42/* "*" */,-24 , 41/* "-" */,-24 , 40/* "+" */,-24 , 66/* "$" */,-24 , 52/* ")" */,-24 , 8/* ":" */,-24 , 46/* "]" */,-24 , 5/* "," */,-24 , 7/* "=>" */,-24 , 17/* "As" */,-24 , 22/* "}" */,-24 , 19/* "In" */,-24 , 2/* "|" */,-24 ),
    /* State 51 */ new Array( 27/* ";" */,-25 , 44/* "Dot" */,-25 , 45/* "[" */,-25 , 39/* "~" */,-25 , 51/* "(" */,29 , 30/* "||||" */,-25 , 29/* "|||" */,-25 , 31/* "||" */,-25 , 32/* "&&" */,-25 , 36/* "<=" */,-25 , 35/* "<" */,-25 , 38/* ">=" */,-25 , 37/* ">" */,-25 , 34/* "!=" */,-25 , 33/* "==" */,-25 , 43/* "/" */,-25 , 42/* "*" */,-25 , 41/* "-" */,-25 , 40/* "+" */,-25 , 66/* "$" */,-25 , 52/* ")" */,-25 , 8/* ":" */,-25 , 46/* "]" */,-25 , 5/* "," */,-25 , 7/* "=>" */,-25 , 17/* "As" */,-25 , 22/* "}" */,-25 , 19/* "In" */,-25 , 2/* "|" */,-25 ),
    /* State 52 */ new Array( 27/* ";" */,-26 , 44/* "Dot" */,-26 , 45/* "[" */,-26 , 39/* "~" */,-26 , 51/* "(" */,29 , 30/* "||||" */,-26 , 29/* "|||" */,-26 , 31/* "||" */,-26 , 32/* "&&" */,-26 , 36/* "<=" */,-26 , 35/* "<" */,-26 , 38/* ">=" */,-26 , 37/* ">" */,-26 , 34/* "!=" */,-26 , 33/* "==" */,-26 , 43/* "/" */,-26 , 42/* "*" */,-26 , 41/* "-" */,-26 , 40/* "+" */,-26 , 66/* "$" */,-26 , 52/* ")" */,-26 , 8/* ":" */,-26 , 46/* "]" */,-26 , 5/* "," */,-26 , 7/* "=>" */,-26 , 17/* "As" */,-26 , 22/* "}" */,-26 , 19/* "In" */,-26 , 2/* "|" */,-26 ),
    /* State 53 */ new Array( 52/* ")" */,91 , 24/* "Identifier" */,93 ),
    /* State 54 */ new Array( 66/* "$" */,-33 , 40/* "+" */,-33 , 41/* "-" */,-33 , 42/* "*" */,-33 , 43/* "/" */,-33 , 33/* "==" */,-33 , 34/* "!=" */,-33 , 37/* ">" */,-33 , 38/* ">=" */,-33 , 35/* "<" */,-33 , 36/* "<=" */,-33 , 32/* "&&" */,-33 , 31/* "||" */,-33 , 29/* "|||" */,-33 , 30/* "||||" */,-33 , 51/* "(" */,-33 , 39/* "~" */,-33 , 45/* "[" */,-33 , 44/* "Dot" */,-33 , 27/* ";" */,-33 , 52/* ")" */,-33 , 8/* ":" */,-33 , 46/* "]" */,-33 , 5/* "," */,-33 , 7/* "=>" */,-33 , 17/* "As" */,-33 , 22/* "}" */,-33 , 19/* "In" */,-33 , 2/* "|" */,-33 ),
    /* State 55 */ new Array( 5/* "," */,94 , 22/* "}" */,95 ),
    /* State 56 */ new Array( 22/* "}" */,-50 , 5/* "," */,-50 ),
    /* State 57 */ new Array( 27/* ";" */,25 , 44/* "Dot" */,26 , 45/* "[" */,27 , 39/* "~" */,28 , 51/* "(" */,29 , 30/* "||||" */,30 , 29/* "|||" */,31 , 31/* "||" */,32 , 32/* "&&" */,33 , 36/* "<=" */,34 , 35/* "<" */,35 , 38/* ">=" */,36 , 37/* ">" */,37 , 34/* "!=" */,38 , 33/* "==" */,39 , 43/* "/" */,40 , 42/* "*" */,41 , 41/* "-" */,42 , 40/* "+" */,43 , 8/* ":" */,96 ),
    /* State 58 */ new Array( 28/* "=" */,97 ),
    /* State 59 */ new Array( 66/* "$" */,-63 , 40/* "+" */,-63 , 41/* "-" */,-63 , 42/* "*" */,-63 , 43/* "/" */,-63 , 33/* "==" */,-63 , 34/* "!=" */,-63 , 37/* ">" */,-63 , 38/* ">=" */,-63 , 35/* "<" */,-63 , 36/* "<=" */,-63 , 32/* "&&" */,-63 , 31/* "||" */,-63 , 29/* "|||" */,-63 , 30/* "||||" */,-63 , 51/* "(" */,-63 , 39/* "~" */,-63 , 45/* "[" */,-63 , 44/* "Dot" */,-63 , 27/* ";" */,-63 , 52/* ")" */,-63 , 8/* ":" */,-63 , 28/* "=" */,-63 , 46/* "]" */,-63 , 5/* "," */,-63 , 7/* "=>" */,-63 , 17/* "As" */,-63 , 22/* "}" */,-63 , 19/* "In" */,-63 , 2/* "|" */,-63 ),
    /* State 60 */ new Array( 41/* "-" */,3 , 51/* "(" */,4 , 23/* "!" */,5 , 26/* "Number" */,6 , 25/* "String" */,7 , 48/* "`" */,10 , 49/* "Escape" */,11 , 50/* "Hash" */,12 , 4/* "Function" */,13 , 21/* "{" */,14 , 18/* "Let" */,15 , 24/* "Identifier" */,17 , 20/* "?" */,19 , 13/* "Switch" */,20 , 14/* "While" */,21 , 16/* "Foreach" */,22 , 9/* "If" */,23 , 11/* "Try" */,24 ),
    /* State 61 */ new Array( 41/* "-" */,3 , 51/* "(" */,4 , 23/* "!" */,5 , 26/* "Number" */,6 , 25/* "String" */,7 , 48/* "`" */,10 , 49/* "Escape" */,11 , 50/* "Hash" */,12 , 4/* "Function" */,13 , 21/* "{" */,14 , 18/* "Let" */,15 , 24/* "Identifier" */,17 , 20/* "?" */,19 , 13/* "Switch" */,20 , 14/* "While" */,21 , 16/* "Foreach" */,22 , 9/* "If" */,23 , 11/* "Try" */,24 ),
    /* State 62 */ new Array( 41/* "-" */,3 , 51/* "(" */,4 , 23/* "!" */,5 , 26/* "Number" */,6 , 25/* "String" */,7 , 48/* "`" */,10 , 49/* "Escape" */,11 , 50/* "Hash" */,12 , 4/* "Function" */,13 , 21/* "{" */,14 , 18/* "Let" */,15 , 24/* "Identifier" */,17 , 20/* "?" */,19 , 13/* "Switch" */,20 , 14/* "While" */,21 , 16/* "Foreach" */,22 , 9/* "If" */,23 , 11/* "Try" */,24 ),
    /* State 63 */ new Array( 41/* "-" */,3 , 51/* "(" */,4 , 23/* "!" */,5 , 26/* "Number" */,6 , 25/* "String" */,7 , 48/* "`" */,10 , 49/* "Escape" */,11 , 50/* "Hash" */,12 , 4/* "Function" */,13 , 21/* "{" */,14 , 18/* "Let" */,15 , 24/* "Identifier" */,17 , 20/* "?" */,19 , 13/* "Switch" */,20 , 14/* "While" */,21 , 16/* "Foreach" */,22 , 9/* "If" */,23 , 11/* "Try" */,24 ),
    /* State 64 */ new Array( 41/* "-" */,3 , 51/* "(" */,4 , 23/* "!" */,5 , 26/* "Number" */,6 , 25/* "String" */,7 , 48/* "`" */,10 , 49/* "Escape" */,11 , 50/* "Hash" */,12 , 4/* "Function" */,13 , 21/* "{" */,14 , 18/* "Let" */,15 , 24/* "Identifier" */,17 , 20/* "?" */,19 , 13/* "Switch" */,20 , 14/* "While" */,21 , 16/* "Foreach" */,22 , 9/* "If" */,23 , 11/* "Try" */,24 ),
    /* State 65 */ new Array( 66/* "$" */,-62 , 40/* "+" */,-62 , 41/* "-" */,-62 , 42/* "*" */,-62 , 43/* "/" */,-62 , 33/* "==" */,-62 , 34/* "!=" */,-62 , 37/* ">" */,-62 , 38/* ">=" */,-62 , 35/* "<" */,-62 , 36/* "<=" */,-62 , 32/* "&&" */,-62 , 31/* "||" */,-62 , 28/* "=" */,-62 , 29/* "|||" */,-62 , 30/* "||||" */,-62 , 51/* "(" */,-62 , 39/* "~" */,-62 , 45/* "[" */,-62 , 44/* "Dot" */,-62 , 27/* ";" */,-62 , 52/* ")" */,-62 , 8/* ":" */,-62 , 46/* "]" */,-62 , 5/* "," */,-62 , 7/* "=>" */,-62 , 17/* "As" */,-62 , 22/* "}" */,-62 , 19/* "In" */,-62 , 2/* "|" */,-62 ),
    /* State 66 */ new Array( 66/* "$" */,-52 , 40/* "+" */,-52 , 41/* "-" */,-52 , 42/* "*" */,-52 , 43/* "/" */,-52 , 33/* "==" */,-52 , 34/* "!=" */,-52 , 37/* ">" */,-52 , 38/* ">=" */,-52 , 35/* "<" */,-52 , 36/* "<=" */,-52 , 32/* "&&" */,-52 , 31/* "||" */,-52 , 28/* "=" */,-52 , 29/* "|||" */,-52 , 30/* "||||" */,-52 , 51/* "(" */,-52 , 39/* "~" */,-52 , 45/* "[" */,-52 , 44/* "Dot" */,-52 , 27/* ";" */,-52 , 52/* ")" */,-52 , 8/* ":" */,-52 , 46/* "]" */,-52 , 5/* "," */,-52 , 7/* "=>" */,-52 , 17/* "As" */,-52 , 22/* "}" */,-52 , 19/* "In" */,-52 , 2/* "|" */,-52 ),
    /* State 67 */ new Array( 66/* "$" */,-53 , 40/* "+" */,-53 , 41/* "-" */,-53 , 42/* "*" */,-53 , 43/* "/" */,-53 , 33/* "==" */,-53 , 34/* "!=" */,-53 , 37/* ">" */,-53 , 38/* ">=" */,-53 , 35/* "<" */,-53 , 36/* "<=" */,-53 , 32/* "&&" */,-53 , 31/* "||" */,-53 , 28/* "=" */,-53 , 29/* "|||" */,-53 , 30/* "||||" */,-53 , 51/* "(" */,-53 , 39/* "~" */,-53 , 45/* "[" */,-53 , 44/* "Dot" */,-53 , 27/* ";" */,-53 , 52/* ")" */,-53 , 8/* ":" */,-53 , 46/* "]" */,-53 , 5/* "," */,-53 , 7/* "=>" */,-53 , 17/* "As" */,-53 , 22/* "}" */,-53 , 19/* "In" */,-53 , 2/* "|" */,-53 ),
    /* State 68 */ new Array( 24/* "Identifier" */,105 ),
    /* State 69 */ new Array( 66/* "$" */,-55 , 40/* "+" */,-55 , 41/* "-" */,-55 , 42/* "*" */,-55 , 43/* "/" */,-55 , 33/* "==" */,-55 , 34/* "!=" */,-55 , 37/* ">" */,-55 , 38/* ">=" */,-55 , 35/* "<" */,-55 , 36/* "<=" */,-55 , 32/* "&&" */,-55 , 31/* "||" */,-55 , 28/* "=" */,-55 , 29/* "|||" */,-55 , 30/* "||||" */,-55 , 51/* "(" */,-55 , 39/* "~" */,-55 , 45/* "[" */,-55 , 44/* "Dot" */,-55 , 27/* ";" */,-55 , 52/* ")" */,-55 , 8/* ":" */,-55 , 46/* "]" */,-55 , 5/* "," */,-55 , 7/* "=>" */,-55 , 17/* "As" */,-55 , 22/* "}" */,-55 , 19/* "In" */,-55 , 2/* "|" */,-55 ),
    /* State 70 */ new Array( 27/* ";" */,25 , 44/* "Dot" */,26 , 45/* "[" */,27 , 39/* "~" */,28 , 51/* "(" */,29 , 30/* "||||" */,30 , 29/* "|||" */,31 , 31/* "||" */,32 , 32/* "&&" */,33 , 36/* "<=" */,34 , 35/* "<" */,35 , 38/* ">=" */,36 , 37/* ">" */,37 , 34/* "!=" */,38 , 33/* "==" */,39 , 43/* "/" */,40 , 42/* "*" */,41 , 41/* "-" */,42 , 40/* "+" */,43 , 46/* "]" */,106 ),
    /* State 71 */ new Array( 27/* ";" */,-31 , 44/* "Dot" */,26 , 45/* "[" */,27 , 39/* "~" */,-31 , 51/* "(" */,29 , 30/* "||||" */,-31 , 29/* "|||" */,-31 , 31/* "||" */,-31 , 32/* "&&" */,-31 , 36/* "<=" */,-31 , 35/* "<" */,-31 , 38/* ">=" */,-31 , 37/* ">" */,-31 , 34/* "!=" */,-31 , 33/* "==" */,-31 , 43/* "/" */,40 , 42/* "*" */,41 , 41/* "-" */,42 , 40/* "+" */,43 , 66/* "$" */,-31 , 52/* ")" */,-31 , 8/* ":" */,-31 , 46/* "]" */,-31 , 5/* "," */,-31 , 7/* "=>" */,-31 , 17/* "As" */,-31 , 22/* "}" */,-31 , 19/* "In" */,-31 , 2/* "|" */,-31 ),
    /* State 72 */ new Array( 66/* "$" */,-29 , 40/* "+" */,-29 , 41/* "-" */,-29 , 42/* "*" */,-29 , 43/* "/" */,-29 , 33/* "==" */,-29 , 34/* "!=" */,-29 , 37/* ">" */,-29 , 38/* ">=" */,-29 , 35/* "<" */,-29 , 36/* "<=" */,-29 , 32/* "&&" */,-29 , 31/* "||" */,-29 , 29/* "|||" */,-29 , 30/* "||||" */,-29 , 51/* "(" */,-29 , 39/* "~" */,-29 , 45/* "[" */,-29 , 44/* "Dot" */,-29 , 27/* ";" */,-29 , 52/* ")" */,-29 , 8/* ":" */,-29 , 46/* "]" */,-29 , 5/* "," */,-29 , 7/* "=>" */,-29 , 17/* "As" */,-29 , 22/* "}" */,-29 , 19/* "In" */,-29 , 2/* "|" */,-29 ),
    /* State 73 */ new Array( 5/* "," */,107 , 52/* ")" */,108 ),
    /* State 74 */ new Array( 27/* ";" */,25 , 44/* "Dot" */,26 , 45/* "[" */,27 , 39/* "~" */,28 , 51/* "(" */,29 , 30/* "||||" */,30 , 29/* "|||" */,31 , 31/* "||" */,32 , 32/* "&&" */,33 , 36/* "<=" */,34 , 35/* "<" */,35 , 38/* ">=" */,36 , 37/* ">" */,37 , 34/* "!=" */,38 , 33/* "==" */,39 , 43/* "/" */,40 , 42/* "*" */,41 , 41/* "-" */,42 , 40/* "+" */,43 , 52/* ")" */,-57 , 5/* "," */,-57 ),
    /* State 75 */ new Array( 27/* ";" */,-23 , 44/* "Dot" */,26 , 45/* "[" */,27 , 39/* "~" */,28 , 51/* "(" */,29 , 30/* "||||" */,-23 , 29/* "|||" */,-23 , 31/* "||" */,32 , 32/* "&&" */,33 , 36/* "<=" */,34 , 35/* "<" */,35 , 38/* ">=" */,36 , 37/* ">" */,37 , 34/* "!=" */,38 , 33/* "==" */,39 , 43/* "/" */,40 , 42/* "*" */,41 , 41/* "-" */,42 , 40/* "+" */,43 , 66/* "$" */,-23 , 52/* ")" */,-23 , 8/* ":" */,-23 , 46/* "]" */,-23 , 5/* "," */,-23 , 7/* "=>" */,-23 , 17/* "As" */,-23 , 22/* "}" */,-23 , 19/* "In" */,-23 , 2/* "|" */,-23 ),
    /* State 76 */ new Array( 27/* ";" */,-22 , 44/* "Dot" */,26 , 45/* "[" */,27 , 39/* "~" */,28 , 51/* "(" */,29 , 30/* "||||" */,-22 , 29/* "|||" */,-22 , 31/* "||" */,32 , 32/* "&&" */,33 , 36/* "<=" */,34 , 35/* "<" */,35 , 38/* ">=" */,36 , 37/* ">" */,37 , 34/* "!=" */,38 , 33/* "==" */,39 , 43/* "/" */,40 , 42/* "*" */,41 , 41/* "-" */,42 , 40/* "+" */,43 , 66/* "$" */,-22 , 52/* ")" */,-22 , 8/* ":" */,-22 , 46/* "]" */,-22 , 5/* "," */,-22 , 7/* "=>" */,-22 , 17/* "As" */,-22 , 22/* "}" */,-22 , 19/* "In" */,-22 , 2/* "|" */,-22 ),
    /* State 77 */ new Array( 27/* ";" */,-15 , 44/* "Dot" */,26 , 45/* "[" */,27 , 39/* "~" */,28 , 51/* "(" */,29 , 30/* "||||" */,-15 , 29/* "|||" */,-15 , 31/* "||" */,-15 , 32/* "&&" */,33 , 36/* "<=" */,34 , 35/* "<" */,35 , 38/* ">=" */,36 , 37/* ">" */,37 , 34/* "!=" */,38 , 33/* "==" */,39 , 43/* "/" */,40 , 42/* "*" */,41 , 41/* "-" */,42 , 40/* "+" */,43 , 66/* "$" */,-15 , 52/* ")" */,-15 , 8/* ":" */,-15 , 46/* "]" */,-15 , 5/* "," */,-15 , 7/* "=>" */,-15 , 17/* "As" */,-15 , 22/* "}" */,-15 , 19/* "In" */,-15 , 2/* "|" */,-15 ),
    /* State 78 */ new Array( 27/* ";" */,-14 , 44/* "Dot" */,26 , 45/* "[" */,27 , 39/* "~" */,28 , 51/* "(" */,29 , 30/* "||||" */,-14 , 29/* "|||" */,-14 , 31/* "||" */,-14 , 32/* "&&" */,-14 , 36/* "<=" */,34 , 35/* "<" */,35 , 38/* ">=" */,36 , 37/* ">" */,37 , 34/* "!=" */,38 , 33/* "==" */,39 , 43/* "/" */,40 , 42/* "*" */,41 , 41/* "-" */,42 , 40/* "+" */,43 , 66/* "$" */,-14 , 52/* ")" */,-14 , 8/* ":" */,-14 , 46/* "]" */,-14 , 5/* "," */,-14 , 7/* "=>" */,-14 , 17/* "As" */,-14 , 22/* "}" */,-14 , 19/* "In" */,-14 , 2/* "|" */,-14 ),
    /* State 79 */ new Array( 27/* ";" */,-13 , 44/* "Dot" */,26 , 45/* "[" */,27 , 39/* "~" */,28 , 51/* "(" */,29 , 30/* "||||" */,-13 , 29/* "|||" */,-13 , 31/* "||" */,-13 , 32/* "&&" */,-13 , 36/* "<=" */,-13 , 35/* "<" */,-13 , 38/* ">=" */,-13 , 37/* ">" */,-13 , 34/* "!=" */,-13 , 33/* "==" */,-13 , 43/* "/" */,40 , 42/* "*" */,41 , 41/* "-" */,42 , 40/* "+" */,43 , 66/* "$" */,-13 , 52/* ")" */,-13 , 8/* ":" */,-13 , 46/* "]" */,-13 , 5/* "," */,-13 , 7/* "=>" */,-13 , 17/* "As" */,-13 , 22/* "}" */,-13 , 19/* "In" */,-13 , 2/* "|" */,-13 ),
    /* State 80 */ new Array( 27/* ";" */,-12 , 44/* "Dot" */,26 , 45/* "[" */,27 , 39/* "~" */,28 , 51/* "(" */,29 , 30/* "||||" */,-12 , 29/* "|||" */,-12 , 31/* "||" */,-12 , 32/* "&&" */,-12 , 36/* "<=" */,-12 , 35/* "<" */,-12 , 38/* ">=" */,-12 , 37/* ">" */,-12 , 34/* "!=" */,-12 , 33/* "==" */,-12 , 43/* "/" */,40 , 42/* "*" */,41 , 41/* "-" */,42 , 40/* "+" */,43 , 66/* "$" */,-12 , 52/* ")" */,-12 , 8/* ":" */,-12 , 46/* "]" */,-12 , 5/* "," */,-12 , 7/* "=>" */,-12 , 17/* "As" */,-12 , 22/* "}" */,-12 , 19/* "In" */,-12 , 2/* "|" */,-12 ),
    /* State 81 */ new Array( 27/* ";" */,-11 , 44/* "Dot" */,26 , 45/* "[" */,27 , 39/* "~" */,28 , 51/* "(" */,29 , 30/* "||||" */,-11 , 29/* "|||" */,-11 , 31/* "||" */,-11 , 32/* "&&" */,-11 , 36/* "<=" */,-11 , 35/* "<" */,-11 , 38/* ">=" */,-11 , 37/* ">" */,-11 , 34/* "!=" */,-11 , 33/* "==" */,-11 , 43/* "/" */,40 , 42/* "*" */,41 , 41/* "-" */,42 , 40/* "+" */,43 , 66/* "$" */,-11 , 52/* ")" */,-11 , 8/* ":" */,-11 , 46/* "]" */,-11 , 5/* "," */,-11 , 7/* "=>" */,-11 , 17/* "As" */,-11 , 22/* "}" */,-11 , 19/* "In" */,-11 , 2/* "|" */,-11 ),
    /* State 82 */ new Array( 27/* ";" */,-10 , 44/* "Dot" */,26 , 45/* "[" */,27 , 39/* "~" */,28 , 51/* "(" */,29 , 30/* "||||" */,-10 , 29/* "|||" */,-10 , 31/* "||" */,-10 , 32/* "&&" */,-10 , 36/* "<=" */,-10 , 35/* "<" */,-10 , 38/* ">=" */,-10 , 37/* ">" */,-10 , 34/* "!=" */,-10 , 33/* "==" */,-10 , 43/* "/" */,40 , 42/* "*" */,41 , 41/* "-" */,42 , 40/* "+" */,43 , 66/* "$" */,-10 , 52/* ")" */,-10 , 8/* ":" */,-10 , 46/* "]" */,-10 , 5/* "," */,-10 , 7/* "=>" */,-10 , 17/* "As" */,-10 , 22/* "}" */,-10 , 19/* "In" */,-10 , 2/* "|" */,-10 ),
    /* State 83 */ new Array( 27/* ";" */,-9 , 44/* "Dot" */,26 , 45/* "[" */,27 , 39/* "~" */,28 , 51/* "(" */,29 , 30/* "||||" */,-9 , 29/* "|||" */,-9 , 31/* "||" */,-9 , 32/* "&&" */,-9 , 36/* "<=" */,-9 , 35/* "<" */,-9 , 38/* ">=" */,-9 , 37/* ">" */,-9 , 34/* "!=" */,-9 , 33/* "==" */,-9 , 43/* "/" */,40 , 42/* "*" */,41 , 41/* "-" */,42 , 40/* "+" */,43 , 66/* "$" */,-9 , 52/* ")" */,-9 , 8/* ":" */,-9 , 46/* "]" */,-9 , 5/* "," */,-9 , 7/* "=>" */,-9 , 17/* "As" */,-9 , 22/* "}" */,-9 , 19/* "In" */,-9 , 2/* "|" */,-9 ),
    /* State 84 */ new Array( 27/* ";" */,-8 , 44/* "Dot" */,26 , 45/* "[" */,27 , 39/* "~" */,28 , 51/* "(" */,29 , 30/* "||||" */,-8 , 29/* "|||" */,-8 , 31/* "||" */,-8 , 32/* "&&" */,-8 , 36/* "<=" */,-8 , 35/* "<" */,-8 , 38/* ">=" */,-8 , 37/* ">" */,-8 , 34/* "!=" */,-8 , 33/* "==" */,-8 , 43/* "/" */,40 , 42/* "*" */,41 , 41/* "-" */,42 , 40/* "+" */,43 , 66/* "$" */,-8 , 52/* ")" */,-8 , 8/* ":" */,-8 , 46/* "]" */,-8 , 5/* "," */,-8 , 7/* "=>" */,-8 , 17/* "As" */,-8 , 22/* "}" */,-8 , 19/* "In" */,-8 , 2/* "|" */,-8 ),
    /* State 85 */ new Array( 27/* ";" */,-5 , 44/* "Dot" */,26 , 45/* "[" */,27 , 39/* "~" */,-5 , 51/* "(" */,29 , 30/* "||||" */,-5 , 29/* "|||" */,-5 , 31/* "||" */,-5 , 32/* "&&" */,-5 , 36/* "<=" */,-5 , 35/* "<" */,-5 , 38/* ">=" */,-5 , 37/* ">" */,-5 , 34/* "!=" */,-5 , 33/* "==" */,-5 , 43/* "/" */,-5 , 42/* "*" */,-5 , 41/* "-" */,-5 , 40/* "+" */,-5 , 66/* "$" */,-5 , 52/* ")" */,-5 , 8/* ":" */,-5 , 46/* "]" */,-5 , 5/* "," */,-5 , 7/* "=>" */,-5 , 17/* "As" */,-5 , 22/* "}" */,-5 , 19/* "In" */,-5 , 2/* "|" */,-5 ),
    /* State 86 */ new Array( 27/* ";" */,-4 , 44/* "Dot" */,26 , 45/* "[" */,27 , 39/* "~" */,-4 , 51/* "(" */,29 , 30/* "||||" */,-4 , 29/* "|||" */,-4 , 31/* "||" */,-4 , 32/* "&&" */,-4 , 36/* "<=" */,-4 , 35/* "<" */,-4 , 38/* ">=" */,-4 , 37/* ">" */,-4 , 34/* "!=" */,-4 , 33/* "==" */,-4 , 43/* "/" */,-4 , 42/* "*" */,-4 , 41/* "-" */,-4 , 40/* "+" */,-4 , 66/* "$" */,-4 , 52/* ")" */,-4 , 8/* ":" */,-4 , 46/* "]" */,-4 , 5/* "," */,-4 , 7/* "=>" */,-4 , 17/* "As" */,-4 , 22/* "}" */,-4 , 19/* "In" */,-4 , 2/* "|" */,-4 ),
    /* State 87 */ new Array( 27/* ";" */,-3 , 44/* "Dot" */,26 , 45/* "[" */,27 , 39/* "~" */,-3 , 51/* "(" */,29 , 30/* "||||" */,-3 , 29/* "|||" */,-3 , 31/* "||" */,-3 , 32/* "&&" */,-3 , 36/* "<=" */,-3 , 35/* "<" */,-3 , 38/* ">=" */,-3 , 37/* ">" */,-3 , 34/* "!=" */,-3 , 33/* "==" */,-3 , 43/* "/" */,40 , 42/* "*" */,41 , 41/* "-" */,-3 , 40/* "+" */,-3 , 66/* "$" */,-3 , 52/* ")" */,-3 , 8/* ":" */,-3 , 46/* "]" */,-3 , 5/* "," */,-3 , 7/* "=>" */,-3 , 17/* "As" */,-3 , 22/* "}" */,-3 , 19/* "In" */,-3 , 2/* "|" */,-3 ),
    /* State 88 */ new Array( 27/* ";" */,-2 , 44/* "Dot" */,26 , 45/* "[" */,27 , 39/* "~" */,-2 , 51/* "(" */,29 , 30/* "||||" */,-2 , 29/* "|||" */,-2 , 31/* "||" */,-2 , 32/* "&&" */,-2 , 36/* "<=" */,-2 , 35/* "<" */,-2 , 38/* ">=" */,-2 , 37/* ">" */,-2 , 34/* "!=" */,-2 , 33/* "==" */,-2 , 43/* "/" */,40 , 42/* "*" */,41 , 41/* "-" */,-2 , 40/* "+" */,-2 , 66/* "$" */,-2 , 52/* ")" */,-2 , 8/* ":" */,-2 , 46/* "]" */,-2 , 5/* "," */,-2 , 7/* "=>" */,-2 , 17/* "As" */,-2 , 22/* "}" */,-2 , 19/* "In" */,-2 , 2/* "|" */,-2 ),
    /* State 89 */ new Array( 66/* "$" */,-7 , 40/* "+" */,-7 , 41/* "-" */,-7 , 42/* "*" */,-7 , 43/* "/" */,-7 , 33/* "==" */,-7 , 34/* "!=" */,-7 , 37/* ">" */,-7 , 38/* ">=" */,-7 , 35/* "<" */,-7 , 36/* "<=" */,-7 , 32/* "&&" */,-7 , 31/* "||" */,-7 , 29/* "|||" */,-7 , 30/* "||||" */,-7 , 51/* "(" */,-7 , 39/* "~" */,-7 , 45/* "[" */,-7 , 44/* "Dot" */,-7 , 27/* ";" */,-7 , 52/* ")" */,-7 , 8/* ":" */,-7 , 46/* "]" */,-7 , 5/* "," */,-7 , 7/* "=>" */,-7 , 17/* "As" */,-7 , 22/* "}" */,-7 , 19/* "In" */,-7 , 2/* "|" */,-7 ),
    /* State 90 */ new Array( 27/* ";" */,-20 , 44/* "Dot" */,26 , 45/* "[" */,27 , 39/* "~" */,28 , 51/* "(" */,29 , 30/* "||||" */,30 , 29/* "|||" */,31 , 31/* "||" */,32 , 32/* "&&" */,33 , 36/* "<=" */,34 , 35/* "<" */,35 , 38/* ">=" */,36 , 37/* ">" */,37 , 34/* "!=" */,38 , 33/* "==" */,39 , 43/* "/" */,40 , 42/* "*" */,41 , 41/* "-" */,42 , 40/* "+" */,43 , 66/* "$" */,-20 , 52/* ")" */,-20 , 8/* ":" */,-20 , 46/* "]" */,-20 , 5/* "," */,-20 , 7/* "=>" */,-20 , 17/* "As" */,-20 , 22/* "}" */,-20 , 19/* "In" */,-20 , 2/* "|" */,-20 ),
    /* State 91 */ new Array( 21/* "{" */,109 ),
    /* State 92 */ new Array( 5/* "," */,110 , 52/* ")" */,111 ),
    /* State 93 */ new Array( 52/* ")" */,-59 , 5/* "," */,-59 ),
    /* State 94 */ new Array( 41/* "-" */,3 , 51/* "(" */,4 , 23/* "!" */,5 , 26/* "Number" */,6 , 25/* "String" */,7 , 48/* "`" */,10 , 49/* "Escape" */,11 , 50/* "Hash" */,12 , 4/* "Function" */,13 , 21/* "{" */,14 , 18/* "Let" */,15 , 24/* "Identifier" */,17 , 20/* "?" */,19 , 13/* "Switch" */,20 , 14/* "While" */,21 , 16/* "Foreach" */,22 , 9/* "If" */,23 , 11/* "Try" */,24 ),
    /* State 95 */ new Array( 66/* "$" */,-32 , 40/* "+" */,-32 , 41/* "-" */,-32 , 42/* "*" */,-32 , 43/* "/" */,-32 , 33/* "==" */,-32 , 34/* "!=" */,-32 , 37/* ">" */,-32 , 38/* ">=" */,-32 , 35/* "<" */,-32 , 36/* "<=" */,-32 , 32/* "&&" */,-32 , 31/* "||" */,-32 , 29/* "|||" */,-32 , 30/* "||||" */,-32 , 51/* "(" */,-32 , 39/* "~" */,-32 , 45/* "[" */,-32 , 44/* "Dot" */,-32 , 27/* ";" */,-32 , 52/* ")" */,-32 , 8/* ":" */,-32 , 46/* "]" */,-32 , 5/* "," */,-32 , 7/* "=>" */,-32 , 17/* "As" */,-32 , 22/* "}" */,-32 , 19/* "In" */,-32 , 2/* "|" */,-32 ),
    /* State 96 */ new Array( 41/* "-" */,3 , 51/* "(" */,4 , 23/* "!" */,5 , 26/* "Number" */,6 , 25/* "String" */,7 , 48/* "`" */,10 , 49/* "Escape" */,11 , 50/* "Hash" */,12 , 4/* "Function" */,13 , 21/* "{" */,14 , 18/* "Let" */,15 , 24/* "Identifier" */,17 , 20/* "?" */,19 , 13/* "Switch" */,20 , 14/* "While" */,21 , 16/* "Foreach" */,22 , 9/* "If" */,23 , 11/* "Try" */,24 ),
    /* State 97 */ new Array( 41/* "-" */,3 , 51/* "(" */,4 , 23/* "!" */,5 , 26/* "Number" */,6 , 25/* "String" */,7 , 48/* "`" */,10 , 49/* "Escape" */,11 , 50/* "Hash" */,12 , 4/* "Function" */,13 , 21/* "{" */,14 , 18/* "Let" */,15 , 24/* "Identifier" */,17 , 20/* "?" */,19 , 13/* "Switch" */,20 , 14/* "While" */,21 , 16/* "Foreach" */,22 , 9/* "If" */,23 , 11/* "Try" */,24 ),
    /* State 98 */ new Array( 2/* "|" */,115 , 22/* "}" */,116 ),
    /* State 99 */ new Array( 22/* "}" */,-47 , 2/* "|" */,-47 ),
    /* State 100 */ new Array( 27/* ";" */,25 , 44/* "Dot" */,26 , 45/* "[" */,27 , 39/* "~" */,28 , 51/* "(" */,29 , 30/* "||||" */,30 , 29/* "|||" */,31 , 31/* "||" */,32 , 32/* "&&" */,33 , 36/* "<=" */,34 , 35/* "<" */,35 , 38/* ">=" */,36 , 37/* ">" */,37 , 34/* "!=" */,38 , 33/* "==" */,39 , 43/* "/" */,40 , 42/* "*" */,41 , 41/* "-" */,42 , 40/* "+" */,43 , 7/* "=>" */,117 ),
    /* State 101 */ new Array( 27/* ";" */,25 , 44/* "Dot" */,26 , 45/* "[" */,27 , 39/* "~" */,28 , 51/* "(" */,29 , 30/* "||||" */,30 , 29/* "|||" */,31 , 31/* "||" */,32 , 32/* "&&" */,33 , 36/* "<=" */,34 , 35/* "<" */,35 , 38/* ">=" */,36 , 37/* ">" */,37 , 34/* "!=" */,38 , 33/* "==" */,39 , 43/* "/" */,40 , 42/* "*" */,41 , 41/* "-" */,42 , 40/* "+" */,43 , 52/* ")" */,118 ),
    /* State 102 */ new Array( 27/* ";" */,25 , 44/* "Dot" */,26 , 45/* "[" */,27 , 39/* "~" */,28 , 51/* "(" */,29 , 30/* "||||" */,30 , 29/* "|||" */,31 , 31/* "||" */,32 , 32/* "&&" */,33 , 36/* "<=" */,34 , 35/* "<" */,35 , 38/* ">=" */,36 , 37/* ">" */,37 , 34/* "!=" */,38 , 33/* "==" */,39 , 43/* "/" */,40 , 42/* "*" */,41 , 41/* "-" */,42 , 40/* "+" */,43 , 17/* "As" */,119 ),
    /* State 103 */ new Array( 27/* ";" */,25 , 44/* "Dot" */,26 , 45/* "[" */,27 , 39/* "~" */,28 , 51/* "(" */,29 , 30/* "||||" */,30 , 29/* "|||" */,31 , 31/* "||" */,32 , 32/* "&&" */,33 , 36/* "<=" */,34 , 35/* "<" */,35 , 38/* ">=" */,36 , 37/* ">" */,37 , 34/* "!=" */,38 , 33/* "==" */,39 , 43/* "/" */,40 , 42/* "*" */,41 , 41/* "-" */,42 , 40/* "+" */,43 , 52/* ")" */,120 ),
    /* State 104 */ new Array( 27/* ";" */,25 , 44/* "Dot" */,26 , 45/* "[" */,27 , 39/* "~" */,28 , 51/* "(" */,29 , 30/* "||||" */,30 , 29/* "|||" */,31 , 31/* "||" */,32 , 32/* "&&" */,33 , 36/* "<=" */,34 , 35/* "<" */,35 , 38/* ">=" */,36 , 37/* ">" */,37 , 34/* "!=" */,38 , 33/* "==" */,39 , 43/* "/" */,40 , 42/* "*" */,41 , 41/* "-" */,42 , 40/* "+" */,43 , 22/* "}" */,121 ),
    /* State 105 */ new Array( 66/* "$" */,-54 , 40/* "+" */,-54 , 41/* "-" */,-54 , 42/* "*" */,-54 , 43/* "/" */,-54 , 33/* "==" */,-54 , 34/* "!=" */,-54 , 37/* ">" */,-54 , 38/* ">=" */,-54 , 35/* "<" */,-54 , 36/* "<=" */,-54 , 32/* "&&" */,-54 , 31/* "||" */,-54 , 28/* "=" */,-54 , 29/* "|||" */,-54 , 30/* "||||" */,-54 , 51/* "(" */,-54 , 39/* "~" */,-54 , 45/* "[" */,-54 , 44/* "Dot" */,-54 , 27/* ";" */,-54 , 52/* ")" */,-54 , 8/* ":" */,-54 , 46/* "]" */,-54 , 5/* "," */,-54 , 7/* "=>" */,-54 , 17/* "As" */,-54 , 22/* "}" */,-54 , 19/* "In" */,-54 , 2/* "|" */,-54 ),
    /* State 106 */ new Array( 66/* "$" */,-61 , 40/* "+" */,-61 , 41/* "-" */,-61 , 42/* "*" */,-61 , 43/* "/" */,-61 , 33/* "==" */,-61 , 34/* "!=" */,-61 , 37/* ">" */,-61 , 38/* ">=" */,-61 , 35/* "<" */,-61 , 36/* "<=" */,-61 , 32/* "&&" */,-61 , 31/* "||" */,-61 , 28/* "=" */,-61 , 29/* "|||" */,-61 , 30/* "||||" */,-61 , 51/* "(" */,-61 , 39/* "~" */,-61 , 45/* "[" */,-61 , 44/* "Dot" */,-61 , 27/* ";" */,-61 , 52/* ")" */,-61 , 8/* ":" */,-61 , 46/* "]" */,-61 , 5/* "," */,-61 , 7/* "=>" */,-61 , 17/* "As" */,-61 , 22/* "}" */,-61 , 19/* "In" */,-61 , 2/* "|" */,-61 ),
    /* State 107 */ new Array( 41/* "-" */,3 , 51/* "(" */,4 , 23/* "!" */,5 , 26/* "Number" */,6 , 25/* "String" */,7 , 48/* "`" */,10 , 49/* "Escape" */,11 , 50/* "Hash" */,12 , 4/* "Function" */,13 , 21/* "{" */,14 , 18/* "Let" */,15 , 24/* "Identifier" */,17 , 20/* "?" */,19 , 13/* "Switch" */,20 , 14/* "While" */,21 , 16/* "Foreach" */,22 , 9/* "If" */,23 , 11/* "Try" */,24 ),
    /* State 108 */ new Array( 66/* "$" */,-30 , 40/* "+" */,-30 , 41/* "-" */,-30 , 42/* "*" */,-30 , 43/* "/" */,-30 , 33/* "==" */,-30 , 34/* "!=" */,-30 , 37/* ">" */,-30 , 38/* ">=" */,-30 , 35/* "<" */,-30 , 36/* "<=" */,-30 , 32/* "&&" */,-30 , 31/* "||" */,-30 , 29/* "|||" */,-30 , 30/* "||||" */,-30 , 51/* "(" */,-30 , 39/* "~" */,-30 , 45/* "[" */,-30 , 44/* "Dot" */,-30 , 27/* ";" */,-30 , 52/* ")" */,-30 , 8/* ":" */,-30 , 46/* "]" */,-30 , 5/* "," */,-30 , 7/* "=>" */,-30 , 17/* "As" */,-30 , 22/* "}" */,-30 , 19/* "In" */,-30 , 2/* "|" */,-30 ),
    /* State 109 */ new Array( 41/* "-" */,3 , 51/* "(" */,4 , 23/* "!" */,5 , 26/* "Number" */,6 , 25/* "String" */,7 , 48/* "`" */,10 , 49/* "Escape" */,11 , 50/* "Hash" */,12 , 4/* "Function" */,13 , 21/* "{" */,14 , 18/* "Let" */,15 , 24/* "Identifier" */,17 , 20/* "?" */,19 , 13/* "Switch" */,20 , 14/* "While" */,21 , 16/* "Foreach" */,22 , 9/* "If" */,23 , 11/* "Try" */,24 ),
    /* State 110 */ new Array( 24/* "Identifier" */,124 ),
    /* State 111 */ new Array( 21/* "{" */,125 ),
    /* State 112 */ new Array( 22/* "}" */,-49 , 5/* "," */,-49 ),
    /* State 113 */ new Array( 27/* ";" */,25 , 44/* "Dot" */,26 , 45/* "[" */,27 , 39/* "~" */,28 , 51/* "(" */,29 , 30/* "||||" */,30 , 29/* "|||" */,31 , 31/* "||" */,32 , 32/* "&&" */,33 , 36/* "<=" */,34 , 35/* "<" */,35 , 38/* ">=" */,36 , 37/* ">" */,37 , 34/* "!=" */,38 , 33/* "==" */,39 , 43/* "/" */,40 , 42/* "*" */,41 , 41/* "-" */,42 , 40/* "+" */,43 , 22/* "}" */,-51 , 5/* "," */,-51 ),
    /* State 114 */ new Array( 27/* ";" */,25 , 44/* "Dot" */,26 , 45/* "[" */,27 , 39/* "~" */,28 , 51/* "(" */,29 , 30/* "||||" */,30 , 29/* "|||" */,31 , 31/* "||" */,32 , 32/* "&&" */,33 , 36/* "<=" */,34 , 35/* "<" */,35 , 38/* ">=" */,36 , 37/* ">" */,37 , 34/* "!=" */,38 , 33/* "==" */,39 , 43/* "/" */,40 , 42/* "*" */,41 , 41/* "-" */,42 , 40/* "+" */,43 , 19/* "In" */,126 ),
    /* State 115 */ new Array( 41/* "-" */,3 , 51/* "(" */,4 , 23/* "!" */,5 , 26/* "Number" */,6 , 25/* "String" */,7 , 48/* "`" */,10 , 49/* "Escape" */,11 , 50/* "Hash" */,12 , 4/* "Function" */,13 , 21/* "{" */,14 , 18/* "Let" */,15 , 24/* "Identifier" */,17 , 20/* "?" */,19 , 13/* "Switch" */,20 , 14/* "While" */,21 , 16/* "Foreach" */,22 , 9/* "If" */,23 , 11/* "Try" */,24 ),
    /* State 116 */ new Array( 66/* "$" */,-39 , 40/* "+" */,-39 , 41/* "-" */,-39 , 42/* "*" */,-39 , 43/* "/" */,-39 , 33/* "==" */,-39 , 34/* "!=" */,-39 , 37/* ">" */,-39 , 38/* ">=" */,-39 , 35/* "<" */,-39 , 36/* "<=" */,-39 , 32/* "&&" */,-39 , 31/* "||" */,-39 , 51/* "(" */,-39 , 23/* "!" */,-39 , 26/* "Number" */,-39 , 25/* "String" */,-39 , 48/* "`" */,-39 , 49/* "Escape" */,-39 , 50/* "Hash" */,-39 , 4/* "Function" */,-39 , 21/* "{" */,-39 , 18/* "Let" */,-39 , 13/* "Switch" */,-39 , 14/* "While" */,-39 , 16/* "Foreach" */,-39 , 9/* "If" */,-39 , 11/* "Try" */,-39 , 24/* "Identifier" */,-39 , 20/* "?" */,-39 , 29/* "|||" */,-39 , 30/* "||||" */,-39 , 39/* "~" */,-39 , 45/* "[" */,-39 , 44/* "Dot" */,-39 , 27/* ";" */,-39 , 52/* ")" */,-39 , 8/* ":" */,-39 , 46/* "]" */,-39 , 5/* "," */,-39 , 7/* "=>" */,-39 , 17/* "As" */,-39 , 22/* "}" */,-39 , 19/* "In" */,-39 , 2/* "|" */,-39 ),
    /* State 117 */ new Array( 41/* "-" */,3 , 51/* "(" */,4 , 23/* "!" */,5 , 26/* "Number" */,6 , 25/* "String" */,7 , 48/* "`" */,10 , 49/* "Escape" */,11 , 50/* "Hash" */,12 , 4/* "Function" */,13 , 21/* "{" */,14 , 18/* "Let" */,15 , 24/* "Identifier" */,17 , 20/* "?" */,19 , 13/* "Switch" */,20 , 14/* "While" */,21 , 16/* "Foreach" */,22 , 9/* "If" */,23 , 11/* "Try" */,24 ),
    /* State 118 */ new Array( 21/* "{" */,129 ),
    /* State 119 */ new Array( 24/* "Identifier" */,130 ),
    /* State 120 */ new Array( 21/* "{" */,131 ),
    /* State 121 */ new Array( 12/* "Catch" */,132 ),
    /* State 122 */ new Array( 27/* ";" */,25 , 44/* "Dot" */,26 , 45/* "[" */,27 , 39/* "~" */,28 , 51/* "(" */,29 , 30/* "||||" */,30 , 29/* "|||" */,31 , 31/* "||" */,32 , 32/* "&&" */,33 , 36/* "<=" */,34 , 35/* "<" */,35 , 38/* ">=" */,36 , 37/* ">" */,37 , 34/* "!=" */,38 , 33/* "==" */,39 , 43/* "/" */,40 , 42/* "*" */,41 , 41/* "-" */,42 , 40/* "+" */,43 , 52/* ")" */,-56 , 5/* "," */,-56 ),
    /* State 123 */ new Array( 27/* ";" */,25 , 44/* "Dot" */,26 , 45/* "[" */,27 , 39/* "~" */,28 , 51/* "(" */,29 , 30/* "||||" */,30 , 29/* "|||" */,31 , 31/* "||" */,32 , 32/* "&&" */,33 , 36/* "<=" */,34 , 35/* "<" */,35 , 38/* ">=" */,36 , 37/* ">" */,37 , 34/* "!=" */,38 , 33/* "==" */,39 , 43/* "/" */,40 , 42/* "*" */,41 , 41/* "-" */,42 , 40/* "+" */,43 , 22/* "}" */,133 ),
    /* State 124 */ new Array( 52/* ")" */,-58 , 5/* "," */,-58 ),
    /* State 125 */ new Array( 41/* "-" */,3 , 51/* "(" */,4 , 23/* "!" */,5 , 26/* "Number" */,6 , 25/* "String" */,7 , 48/* "`" */,10 , 49/* "Escape" */,11 , 50/* "Hash" */,12 , 4/* "Function" */,13 , 21/* "{" */,14 , 18/* "Let" */,15 , 24/* "Identifier" */,17 , 20/* "?" */,19 , 13/* "Switch" */,20 , 14/* "While" */,21 , 16/* "Foreach" */,22 , 9/* "If" */,23 , 11/* "Try" */,24 ),
    /* State 126 */ new Array( 41/* "-" */,3 , 51/* "(" */,4 , 23/* "!" */,5 , 26/* "Number" */,6 , 25/* "String" */,7 , 48/* "`" */,10 , 49/* "Escape" */,11 , 50/* "Hash" */,12 , 4/* "Function" */,13 , 21/* "{" */,14 , 18/* "Let" */,15 , 24/* "Identifier" */,17 , 20/* "?" */,19 , 13/* "Switch" */,20 , 14/* "While" */,21 , 16/* "Foreach" */,22 , 9/* "If" */,23 , 11/* "Try" */,24 ),
    /* State 127 */ new Array( 22/* "}" */,-46 , 2/* "|" */,-46 ),
    /* State 128 */ new Array( 27/* ";" */,25 , 44/* "Dot" */,26 , 45/* "[" */,27 , 39/* "~" */,28 , 51/* "(" */,29 , 30/* "||||" */,30 , 29/* "|||" */,31 , 31/* "||" */,32 , 32/* "&&" */,33 , 36/* "<=" */,34 , 35/* "<" */,35 , 38/* ">=" */,36 , 37/* ">" */,37 , 34/* "!=" */,38 , 33/* "==" */,39 , 43/* "/" */,40 , 42/* "*" */,41 , 41/* "-" */,42 , 40/* "+" */,43 , 22/* "}" */,-48 , 2/* "|" */,-48 ),
    /* State 129 */ new Array( 41/* "-" */,3 , 51/* "(" */,4 , 23/* "!" */,5 , 26/* "Number" */,6 , 25/* "String" */,7 , 48/* "`" */,10 , 49/* "Escape" */,11 , 50/* "Hash" */,12 , 4/* "Function" */,13 , 21/* "{" */,14 , 18/* "Let" */,15 , 24/* "Identifier" */,17 , 20/* "?" */,19 , 13/* "Switch" */,20 , 14/* "While" */,21 , 16/* "Foreach" */,22 , 9/* "If" */,23 , 11/* "Try" */,24 ),
    /* State 130 */ new Array( 8/* ":" */,137 , 52/* ")" */,138 ),
    /* State 131 */ new Array( 41/* "-" */,3 , 51/* "(" */,4 , 23/* "!" */,5 , 26/* "Number" */,6 , 25/* "String" */,7 , 48/* "`" */,10 , 49/* "Escape" */,11 , 50/* "Hash" */,12 , 4/* "Function" */,13 , 21/* "{" */,14 , 18/* "Let" */,15 , 24/* "Identifier" */,17 , 20/* "?" */,19 , 13/* "Switch" */,20 , 14/* "While" */,21 , 16/* "Foreach" */,22 , 9/* "If" */,23 , 11/* "Try" */,24 ),
    /* State 132 */ new Array( 51/* "(" */,140 ),
    /* State 133 */ new Array( 66/* "$" */,-27 , 40/* "+" */,-27 , 41/* "-" */,-27 , 42/* "*" */,-27 , 43/* "/" */,-27 , 33/* "==" */,-27 , 34/* "!=" */,-27 , 37/* ">" */,-27 , 38/* ">=" */,-27 , 35/* "<" */,-27 , 36/* "<=" */,-27 , 32/* "&&" */,-27 , 31/* "||" */,-27 , 29/* "|||" */,-27 , 30/* "||||" */,-27 , 51/* "(" */,-27 , 39/* "~" */,-27 , 45/* "[" */,-27 , 44/* "Dot" */,-27 , 27/* ";" */,-27 , 52/* ")" */,-27 , 8/* ":" */,-27 , 46/* "]" */,-27 , 5/* "," */,-27 , 7/* "=>" */,-27 , 17/* "As" */,-27 , 22/* "}" */,-27 , 19/* "In" */,-27 , 2/* "|" */,-27 ),
    /* State 134 */ new Array( 27/* ";" */,25 , 44/* "Dot" */,26 , 45/* "[" */,27 , 39/* "~" */,28 , 51/* "(" */,29 , 30/* "||||" */,30 , 29/* "|||" */,31 , 31/* "||" */,32 , 32/* "&&" */,33 , 36/* "<=" */,34 , 35/* "<" */,35 , 38/* ">=" */,36 , 37/* ">" */,37 , 34/* "!=" */,38 , 33/* "==" */,39 , 43/* "/" */,40 , 42/* "*" */,41 , 41/* "-" */,42 , 40/* "+" */,43 , 22/* "}" */,141 ),
    /* State 135 */ new Array( 27/* ";" */,25 , 44/* "Dot" */,26 , 45/* "[" */,27 , 39/* "~" */,28 , 51/* "(" */,29 , 30/* "||||" */,30 , 29/* "|||" */,31 , 31/* "||" */,32 , 32/* "&&" */,33 , 36/* "<=" */,34 , 35/* "<" */,35 , 38/* ">=" */,36 , 37/* ">" */,37 , 34/* "!=" */,38 , 33/* "==" */,39 , 43/* "/" */,40 , 42/* "*" */,41 , 41/* "-" */,42 , 40/* "+" */,43 , 66/* "$" */,-34 , 52/* ")" */,-34 , 8/* ":" */,-34 , 46/* "]" */,-34 , 5/* "," */,-34 , 7/* "=>" */,-34 , 17/* "As" */,-34 , 22/* "}" */,-34 , 19/* "In" */,-34 , 2/* "|" */,-34 ),
    /* State 136 */ new Array( 27/* ";" */,25 , 44/* "Dot" */,26 , 45/* "[" */,27 , 39/* "~" */,28 , 51/* "(" */,29 , 30/* "||||" */,30 , 29/* "|||" */,31 , 31/* "||" */,32 , 32/* "&&" */,33 , 36/* "<=" */,34 , 35/* "<" */,35 , 38/* ">=" */,36 , 37/* ">" */,37 , 34/* "!=" */,38 , 33/* "==" */,39 , 43/* "/" */,40 , 42/* "*" */,41 , 41/* "-" */,42 , 40/* "+" */,43 , 22/* "}" */,142 ),
    /* State 137 */ new Array( 24/* "Identifier" */,143 ),
    /* State 138 */ new Array( 21/* "{" */,144 ),
    /* State 139 */ new Array( 27/* ";" */,25 , 44/* "Dot" */,26 , 45/* "[" */,27 , 39/* "~" */,28 , 51/* "(" */,29 , 30/* "||||" */,30 , 29/* "|||" */,31 , 31/* "||" */,32 , 32/* "&&" */,33 , 36/* "<=" */,34 , 35/* "<" */,35 , 38/* ">=" */,36 , 37/* ">" */,37 , 34/* "!=" */,38 , 33/* "==" */,39 , 43/* "/" */,40 , 42/* "*" */,41 , 41/* "-" */,42 , 40/* "+" */,43 , 22/* "}" */,145 ),
    /* State 140 */ new Array( 24/* "Identifier" */,146 ),
    /* State 141 */ new Array( 66/* "$" */,-28 , 40/* "+" */,-28 , 41/* "-" */,-28 , 42/* "*" */,-28 , 43/* "/" */,-28 , 33/* "==" */,-28 , 34/* "!=" */,-28 , 37/* ">" */,-28 , 38/* ">=" */,-28 , 35/* "<" */,-28 , 36/* "<=" */,-28 , 32/* "&&" */,-28 , 31/* "||" */,-28 , 29/* "|||" */,-28 , 30/* "||||" */,-28 , 51/* "(" */,-28 , 39/* "~" */,-28 , 45/* "[" */,-28 , 44/* "Dot" */,-28 , 27/* ";" */,-28 , 52/* ")" */,-28 , 8/* ":" */,-28 , 46/* "]" */,-28 , 5/* "," */,-28 , 7/* "=>" */,-28 , 17/* "As" */,-28 , 22/* "}" */,-28 , 19/* "In" */,-28 , 2/* "|" */,-28 ),
    /* State 142 */ new Array( 66/* "$" */,-40 , 40/* "+" */,-40 , 41/* "-" */,-40 , 42/* "*" */,-40 , 43/* "/" */,-40 , 33/* "==" */,-40 , 34/* "!=" */,-40 , 37/* ">" */,-40 , 38/* ">=" */,-40 , 35/* "<" */,-40 , 36/* "<=" */,-40 , 32/* "&&" */,-40 , 31/* "||" */,-40 , 51/* "(" */,-40 , 23/* "!" */,-40 , 26/* "Number" */,-40 , 25/* "String" */,-40 , 48/* "`" */,-40 , 49/* "Escape" */,-40 , 50/* "Hash" */,-40 , 4/* "Function" */,-40 , 21/* "{" */,-40 , 18/* "Let" */,-40 , 13/* "Switch" */,-40 , 14/* "While" */,-40 , 16/* "Foreach" */,-40 , 9/* "If" */,-40 , 11/* "Try" */,-40 , 24/* "Identifier" */,-40 , 20/* "?" */,-40 , 29/* "|||" */,-40 , 30/* "||||" */,-40 , 39/* "~" */,-40 , 45/* "[" */,-40 , 44/* "Dot" */,-40 , 27/* ";" */,-40 , 52/* ")" */,-40 , 8/* ":" */,-40 , 46/* "]" */,-40 , 5/* "," */,-40 , 7/* "=>" */,-40 , 17/* "As" */,-40 , 22/* "}" */,-40 , 19/* "In" */,-40 , 2/* "|" */,-40 ),
    /* State 143 */ new Array( 52/* ")" */,147 ),
    /* State 144 */ new Array( 41/* "-" */,3 , 51/* "(" */,4 , 23/* "!" */,5 , 26/* "Number" */,6 , 25/* "String" */,7 , 48/* "`" */,10 , 49/* "Escape" */,11 , 50/* "Hash" */,12 , 4/* "Function" */,13 , 21/* "{" */,14 , 18/* "Let" */,15 , 24/* "Identifier" */,17 , 20/* "?" */,19 , 13/* "Switch" */,20 , 14/* "While" */,21 , 16/* "Foreach" */,22 , 9/* "If" */,23 , 11/* "Try" */,24 ),
    /* State 145 */ new Array( 10/* "Else" */,149 , 66/* "$" */,-43 , 40/* "+" */,-43 , 41/* "-" */,-43 , 42/* "*" */,-43 , 43/* "/" */,-43 , 33/* "==" */,-43 , 34/* "!=" */,-43 , 37/* ">" */,-43 , 38/* ">=" */,-43 , 35/* "<" */,-43 , 36/* "<=" */,-43 , 32/* "&&" */,-43 , 31/* "||" */,-43 , 51/* "(" */,-43 , 23/* "!" */,-43 , 26/* "Number" */,-43 , 25/* "String" */,-43 , 48/* "`" */,-43 , 49/* "Escape" */,-43 , 50/* "Hash" */,-43 , 4/* "Function" */,-43 , 21/* "{" */,-43 , 18/* "Let" */,-43 , 13/* "Switch" */,-43 , 14/* "While" */,-43 , 16/* "Foreach" */,-43 , 9/* "If" */,-43 , 11/* "Try" */,-43 , 24/* "Identifier" */,-43 , 20/* "?" */,-43 , 29/* "|||" */,-43 , 30/* "||||" */,-43 , 39/* "~" */,-43 , 45/* "[" */,-43 , 44/* "Dot" */,-43 , 27/* ";" */,-43 , 52/* ")" */,-43 , 8/* ":" */,-43 , 46/* "]" */,-43 , 5/* "," */,-43 , 7/* "=>" */,-43 , 17/* "As" */,-43 , 22/* "}" */,-43 , 19/* "In" */,-43 , 2/* "|" */,-43 ),
    /* State 146 */ new Array( 52/* ")" */,150 ),
    /* State 147 */ new Array( 21/* "{" */,151 ),
    /* State 148 */ new Array( 27/* ";" */,25 , 44/* "Dot" */,26 , 45/* "[" */,27 , 39/* "~" */,28 , 51/* "(" */,29 , 30/* "||||" */,30 , 29/* "|||" */,31 , 31/* "||" */,32 , 32/* "&&" */,33 , 36/* "<=" */,34 , 35/* "<" */,35 , 38/* ">=" */,36 , 37/* ">" */,37 , 34/* "!=" */,38 , 33/* "==" */,39 , 43/* "/" */,40 , 42/* "*" */,41 , 41/* "-" */,42 , 40/* "+" */,43 , 22/* "}" */,152 ),
    /* State 149 */ new Array( 21/* "{" */,153 ),
    /* State 150 */ new Array( 21/* "{" */,154 ),
    /* State 151 */ new Array( 41/* "-" */,3 , 51/* "(" */,4 , 23/* "!" */,5 , 26/* "Number" */,6 , 25/* "String" */,7 , 48/* "`" */,10 , 49/* "Escape" */,11 , 50/* "Hash" */,12 , 4/* "Function" */,13 , 21/* "{" */,14 , 18/* "Let" */,15 , 24/* "Identifier" */,17 , 20/* "?" */,19 , 13/* "Switch" */,20 , 14/* "While" */,21 , 16/* "Foreach" */,22 , 9/* "If" */,23 , 11/* "Try" */,24 ),
    /* State 152 */ new Array( 66/* "$" */,-41 , 40/* "+" */,-41 , 41/* "-" */,-41 , 42/* "*" */,-41 , 43/* "/" */,-41 , 33/* "==" */,-41 , 34/* "!=" */,-41 , 37/* ">" */,-41 , 38/* ">=" */,-41 , 35/* "<" */,-41 , 36/* "<=" */,-41 , 32/* "&&" */,-41 , 31/* "||" */,-41 , 51/* "(" */,-41 , 23/* "!" */,-41 , 26/* "Number" */,-41 , 25/* "String" */,-41 , 48/* "`" */,-41 , 49/* "Escape" */,-41 , 50/* "Hash" */,-41 , 4/* "Function" */,-41 , 21/* "{" */,-41 , 18/* "Let" */,-41 , 13/* "Switch" */,-41 , 14/* "While" */,-41 , 16/* "Foreach" */,-41 , 9/* "If" */,-41 , 11/* "Try" */,-41 , 24/* "Identifier" */,-41 , 20/* "?" */,-41 , 29/* "|||" */,-41 , 30/* "||||" */,-41 , 39/* "~" */,-41 , 45/* "[" */,-41 , 44/* "Dot" */,-41 , 27/* ";" */,-41 , 52/* ")" */,-41 , 8/* ":" */,-41 , 46/* "]" */,-41 , 5/* "," */,-41 , 7/* "=>" */,-41 , 17/* "As" */,-41 , 22/* "}" */,-41 , 19/* "In" */,-41 , 2/* "|" */,-41 ),
    /* State 153 */ new Array( 41/* "-" */,3 , 51/* "(" */,4 , 23/* "!" */,5 , 26/* "Number" */,6 , 25/* "String" */,7 , 48/* "`" */,10 , 49/* "Escape" */,11 , 50/* "Hash" */,12 , 4/* "Function" */,13 , 21/* "{" */,14 , 18/* "Let" */,15 , 24/* "Identifier" */,17 , 20/* "?" */,19 , 13/* "Switch" */,20 , 14/* "While" */,21 , 16/* "Foreach" */,22 , 9/* "If" */,23 , 11/* "Try" */,24 ),
    /* State 154 */ new Array( 41/* "-" */,3 , 51/* "(" */,4 , 23/* "!" */,5 , 26/* "Number" */,6 , 25/* "String" */,7 , 48/* "`" */,10 , 49/* "Escape" */,11 , 50/* "Hash" */,12 , 4/* "Function" */,13 , 21/* "{" */,14 , 18/* "Let" */,15 , 24/* "Identifier" */,17 , 20/* "?" */,19 , 13/* "Switch" */,20 , 14/* "While" */,21 , 16/* "Foreach" */,22 , 9/* "If" */,23 , 11/* "Try" */,24 ),
    /* State 155 */ new Array( 27/* ";" */,25 , 44/* "Dot" */,26 , 45/* "[" */,27 , 39/* "~" */,28 , 51/* "(" */,29 , 30/* "||||" */,30 , 29/* "|||" */,31 , 31/* "||" */,32 , 32/* "&&" */,33 , 36/* "<=" */,34 , 35/* "<" */,35 , 38/* ">=" */,36 , 37/* ">" */,37 , 34/* "!=" */,38 , 33/* "==" */,39 , 43/* "/" */,40 , 42/* "*" */,41 , 41/* "-" */,42 , 40/* "+" */,43 , 22/* "}" */,158 ),
    /* State 156 */ new Array( 27/* ";" */,25 , 44/* "Dot" */,26 , 45/* "[" */,27 , 39/* "~" */,28 , 51/* "(" */,29 , 30/* "||||" */,30 , 29/* "|||" */,31 , 31/* "||" */,32 , 32/* "&&" */,33 , 36/* "<=" */,34 , 35/* "<" */,35 , 38/* ">=" */,36 , 37/* ">" */,37 , 34/* "!=" */,38 , 33/* "==" */,39 , 43/* "/" */,40 , 42/* "*" */,41 , 41/* "-" */,42 , 40/* "+" */,43 , 22/* "}" */,159 ),
    /* State 157 */ new Array( 27/* ";" */,25 , 44/* "Dot" */,26 , 45/* "[" */,27 , 39/* "~" */,28 , 51/* "(" */,29 , 30/* "||||" */,30 , 29/* "|||" */,31 , 31/* "||" */,32 , 32/* "&&" */,33 , 36/* "<=" */,34 , 35/* "<" */,35 , 38/* ">=" */,36 , 37/* ">" */,37 , 34/* "!=" */,38 , 33/* "==" */,39 , 43/* "/" */,40 , 42/* "*" */,41 , 41/* "-" */,42 , 40/* "+" */,43 , 22/* "}" */,160 ),
    /* State 158 */ new Array( 66/* "$" */,-42 , 40/* "+" */,-42 , 41/* "-" */,-42 , 42/* "*" */,-42 , 43/* "/" */,-42 , 33/* "==" */,-42 , 34/* "!=" */,-42 , 37/* ">" */,-42 , 38/* ">=" */,-42 , 35/* "<" */,-42 , 36/* "<=" */,-42 , 32/* "&&" */,-42 , 31/* "||" */,-42 , 51/* "(" */,-42 , 23/* "!" */,-42 , 26/* "Number" */,-42 , 25/* "String" */,-42 , 48/* "`" */,-42 , 49/* "Escape" */,-42 , 50/* "Hash" */,-42 , 4/* "Function" */,-42 , 21/* "{" */,-42 , 18/* "Let" */,-42 , 13/* "Switch" */,-42 , 14/* "While" */,-42 , 16/* "Foreach" */,-42 , 9/* "If" */,-42 , 11/* "Try" */,-42 , 24/* "Identifier" */,-42 , 20/* "?" */,-42 , 29/* "|||" */,-42 , 30/* "||||" */,-42 , 39/* "~" */,-42 , 45/* "[" */,-42 , 44/* "Dot" */,-42 , 27/* ";" */,-42 , 52/* ")" */,-42 , 8/* ":" */,-42 , 46/* "]" */,-42 , 5/* "," */,-42 , 7/* "=>" */,-42 , 17/* "As" */,-42 , 22/* "}" */,-42 , 19/* "In" */,-42 , 2/* "|" */,-42 ),
    /* State 159 */ new Array( 66/* "$" */,-44 , 40/* "+" */,-44 , 41/* "-" */,-44 , 42/* "*" */,-44 , 43/* "/" */,-44 , 33/* "==" */,-44 , 34/* "!=" */,-44 , 37/* ">" */,-44 , 38/* ">=" */,-44 , 35/* "<" */,-44 , 36/* "<=" */,-44 , 32/* "&&" */,-44 , 31/* "||" */,-44 , 51/* "(" */,-44 , 23/* "!" */,-44 , 26/* "Number" */,-44 , 25/* "String" */,-44 , 48/* "`" */,-44 , 49/* "Escape" */,-44 , 50/* "Hash" */,-44 , 4/* "Function" */,-44 , 21/* "{" */,-44 , 18/* "Let" */,-44 , 13/* "Switch" */,-44 , 14/* "While" */,-44 , 16/* "Foreach" */,-44 , 9/* "If" */,-44 , 11/* "Try" */,-44 , 24/* "Identifier" */,-44 , 20/* "?" */,-44 , 29/* "|||" */,-44 , 30/* "||||" */,-44 , 39/* "~" */,-44 , 45/* "[" */,-44 , 44/* "Dot" */,-44 , 27/* ";" */,-44 , 52/* ")" */,-44 , 8/* ":" */,-44 , 46/* "]" */,-44 , 5/* "," */,-44 , 7/* "=>" */,-44 , 17/* "As" */,-44 , 22/* "}" */,-44 , 19/* "In" */,-44 , 2/* "|" */,-44 ),
    /* State 160 */ new Array( 66/* "$" */,-45 , 40/* "+" */,-45 , 41/* "-" */,-45 , 42/* "*" */,-45 , 43/* "/" */,-45 , 33/* "==" */,-45 , 34/* "!=" */,-45 , 37/* ">" */,-45 , 38/* ">=" */,-45 , 35/* "<" */,-45 , 36/* "<=" */,-45 , 32/* "&&" */,-45 , 31/* "||" */,-45 , 51/* "(" */,-45 , 23/* "!" */,-45 , 26/* "Number" */,-45 , 25/* "String" */,-45 , 48/* "`" */,-45 , 49/* "Escape" */,-45 , 50/* "Hash" */,-45 , 4/* "Function" */,-45 , 21/* "{" */,-45 , 18/* "Let" */,-45 , 13/* "Switch" */,-45 , 14/* "While" */,-45 , 16/* "Foreach" */,-45 , 9/* "If" */,-45 , 11/* "Try" */,-45 , 24/* "Identifier" */,-45 , 20/* "?" */,-45 , 29/* "|||" */,-45 , 30/* "||||" */,-45 , 39/* "~" */,-45 , 45/* "[" */,-45 , 44/* "Dot" */,-45 , 27/* ";" */,-45 , 52/* ")" */,-45 , 8/* ":" */,-45 , 46/* "]" */,-45 , 5/* "," */,-45 , 7/* "=>" */,-45 , 17/* "As" */,-45 , 22/* "}" */,-45 , 19/* "In" */,-45 , 2/* "|" */,-45 )
);

/* Goto-Table */
var goto_tab = new Array(
    /* State 0 */ new Array( 54/* p */,1 , 53/* e */,2 , 55/* LExp */,8 , 56/* stmts */,9 , 60/* ImpVar */,16 , 61/* stmt */,18 ),
    /* State 1 */ new Array( ),
    /* State 2 */ new Array( ),
    /* State 3 */ new Array( 53/* e */,44 , 55/* LExp */,8 , 56/* stmts */,9 , 60/* ImpVar */,16 , 61/* stmt */,18 ),
    /* State 4 */ new Array( 53/* e */,45 , 55/* LExp */,8 , 56/* stmts */,9 , 60/* ImpVar */,16 , 61/* stmt */,18 ),
    /* State 5 */ new Array( 53/* e */,46 , 55/* LExp */,8 , 56/* stmts */,9 , 60/* ImpVar */,16 , 61/* stmt */,18 ),
    /* State 6 */ new Array( ),
    /* State 7 */ new Array( ),
    /* State 8 */ new Array( ),
    /* State 9 */ new Array( 61/* stmt */,48 , 53/* e */,49 , 55/* LExp */,8 , 56/* stmts */,9 , 60/* ImpVar */,16 ),
    /* State 10 */ new Array( 53/* e */,50 , 55/* LExp */,8 , 56/* stmts */,9 , 60/* ImpVar */,16 , 61/* stmt */,18 ),
    /* State 11 */ new Array( 53/* e */,51 , 55/* LExp */,8 , 56/* stmts */,9 , 60/* ImpVar */,16 , 61/* stmt */,18 ),
    /* State 12 */ new Array( 53/* e */,52 , 55/* LExp */,8 , 56/* stmts */,9 , 60/* ImpVar */,16 , 61/* stmt */,18 ),
    /* State 13 */ new Array( ),
    /* State 14 */ new Array( 59/* mappings */,55 , 64/* mapping */,56 , 53/* e */,57 , 55/* LExp */,8 , 56/* stmts */,9 , 60/* ImpVar */,16 , 61/* stmt */,18 ),
    /* State 15 */ new Array( 60/* ImpVar */,58 ),
    /* State 16 */ new Array( ),
    /* State 17 */ new Array( ),
    /* State 18 */ new Array( ),
    /* State 19 */ new Array( ),
    /* State 20 */ new Array( ),
    /* State 21 */ new Array( ),
    /* State 22 */ new Array( ),
    /* State 23 */ new Array( ),
    /* State 24 */ new Array( ),
    /* State 25 */ new Array( ),
    /* State 26 */ new Array( 65/* field */,65 ),
    /* State 27 */ new Array( 53/* e */,70 , 55/* LExp */,8 , 56/* stmts */,9 , 60/* ImpVar */,16 , 61/* stmt */,18 ),
    /* State 28 */ new Array( 53/* e */,71 , 55/* LExp */,8 , 56/* stmts */,9 , 60/* ImpVar */,16 , 61/* stmt */,18 ),
    /* State 29 */ new Array( 58/* args */,73 , 53/* e */,74 , 55/* LExp */,8 , 56/* stmts */,9 , 60/* ImpVar */,16 , 61/* stmt */,18 ),
    /* State 30 */ new Array( 53/* e */,75 , 55/* LExp */,8 , 56/* stmts */,9 , 60/* ImpVar */,16 , 61/* stmt */,18 ),
    /* State 31 */ new Array( 53/* e */,76 , 55/* LExp */,8 , 56/* stmts */,9 , 60/* ImpVar */,16 , 61/* stmt */,18 ),
    /* State 32 */ new Array( 53/* e */,77 , 55/* LExp */,8 , 56/* stmts */,9 , 60/* ImpVar */,16 , 61/* stmt */,18 ),
    /* State 33 */ new Array( 53/* e */,78 , 55/* LExp */,8 , 56/* stmts */,9 , 60/* ImpVar */,16 , 61/* stmt */,18 ),
    /* State 34 */ new Array( 53/* e */,79 , 55/* LExp */,8 , 56/* stmts */,9 , 60/* ImpVar */,16 , 61/* stmt */,18 ),
    /* State 35 */ new Array( 53/* e */,80 , 55/* LExp */,8 , 56/* stmts */,9 , 60/* ImpVar */,16 , 61/* stmt */,18 ),
    /* State 36 */ new Array( 53/* e */,81 , 55/* LExp */,8 , 56/* stmts */,9 , 60/* ImpVar */,16 , 61/* stmt */,18 ),
    /* State 37 */ new Array( 53/* e */,82 , 55/* LExp */,8 , 56/* stmts */,9 , 60/* ImpVar */,16 , 61/* stmt */,18 ),
    /* State 38 */ new Array( 53/* e */,83 , 55/* LExp */,8 , 56/* stmts */,9 , 60/* ImpVar */,16 , 61/* stmt */,18 ),
    /* State 39 */ new Array( 53/* e */,84 , 55/* LExp */,8 , 56/* stmts */,9 , 60/* ImpVar */,16 , 61/* stmt */,18 ),
    /* State 40 */ new Array( 53/* e */,85 , 55/* LExp */,8 , 56/* stmts */,9 , 60/* ImpVar */,16 , 61/* stmt */,18 ),
    /* State 41 */ new Array( 53/* e */,86 , 55/* LExp */,8 , 56/* stmts */,9 , 60/* ImpVar */,16 , 61/* stmt */,18 ),
    /* State 42 */ new Array( 53/* e */,87 , 55/* LExp */,8 , 56/* stmts */,9 , 60/* ImpVar */,16 , 61/* stmt */,18 ),
    /* State 43 */ new Array( 53/* e */,88 , 55/* LExp */,8 , 56/* stmts */,9 , 60/* ImpVar */,16 , 61/* stmt */,18 ),
    /* State 44 */ new Array( ),
    /* State 45 */ new Array( ),
    /* State 46 */ new Array( ),
    /* State 47 */ new Array( 53/* e */,90 , 55/* LExp */,8 , 56/* stmts */,9 , 60/* ImpVar */,16 , 61/* stmt */,18 ),
    /* State 48 */ new Array( ),
    /* State 49 */ new Array( ),
    /* State 50 */ new Array( ),
    /* State 51 */ new Array( ),
    /* State 52 */ new Array( ),
    /* State 53 */ new Array( 57/* fargs */,92 ),
    /* State 54 */ new Array( ),
    /* State 55 */ new Array( ),
    /* State 56 */ new Array( ),
    /* State 57 */ new Array( ),
    /* State 58 */ new Array( ),
    /* State 59 */ new Array( ),
    /* State 60 */ new Array( 62/* cases */,98 , 63/* case */,99 , 53/* e */,100 , 55/* LExp */,8 , 56/* stmts */,9 , 60/* ImpVar */,16 , 61/* stmt */,18 ),
    /* State 61 */ new Array( 53/* e */,101 , 55/* LExp */,8 , 56/* stmts */,9 , 60/* ImpVar */,16 , 61/* stmt */,18 ),
    /* State 62 */ new Array( 53/* e */,102 , 55/* LExp */,8 , 56/* stmts */,9 , 60/* ImpVar */,16 , 61/* stmt */,18 ),
    /* State 63 */ new Array( 53/* e */,103 , 55/* LExp */,8 , 56/* stmts */,9 , 60/* ImpVar */,16 , 61/* stmt */,18 ),
    /* State 64 */ new Array( 53/* e */,104 , 55/* LExp */,8 , 56/* stmts */,9 , 60/* ImpVar */,16 , 61/* stmt */,18 ),
    /* State 65 */ new Array( ),
    /* State 66 */ new Array( ),
    /* State 67 */ new Array( ),
    /* State 68 */ new Array( ),
    /* State 69 */ new Array( ),
    /* State 70 */ new Array( ),
    /* State 71 */ new Array( ),
    /* State 72 */ new Array( ),
    /* State 73 */ new Array( ),
    /* State 74 */ new Array( ),
    /* State 75 */ new Array( ),
    /* State 76 */ new Array( ),
    /* State 77 */ new Array( ),
    /* State 78 */ new Array( ),
    /* State 79 */ new Array( ),
    /* State 80 */ new Array( ),
    /* State 81 */ new Array( ),
    /* State 82 */ new Array( ),
    /* State 83 */ new Array( ),
    /* State 84 */ new Array( ),
    /* State 85 */ new Array( ),
    /* State 86 */ new Array( ),
    /* State 87 */ new Array( ),
    /* State 88 */ new Array( ),
    /* State 89 */ new Array( ),
    /* State 90 */ new Array( ),
    /* State 91 */ new Array( ),
    /* State 92 */ new Array( ),
    /* State 93 */ new Array( ),
    /* State 94 */ new Array( 64/* mapping */,112 , 53/* e */,57 , 55/* LExp */,8 , 56/* stmts */,9 , 60/* ImpVar */,16 , 61/* stmt */,18 ),
    /* State 95 */ new Array( ),
    /* State 96 */ new Array( 53/* e */,113 , 55/* LExp */,8 , 56/* stmts */,9 , 60/* ImpVar */,16 , 61/* stmt */,18 ),
    /* State 97 */ new Array( 53/* e */,114 , 55/* LExp */,8 , 56/* stmts */,9 , 60/* ImpVar */,16 , 61/* stmt */,18 ),
    /* State 98 */ new Array( ),
    /* State 99 */ new Array( ),
    /* State 100 */ new Array( ),
    /* State 101 */ new Array( ),
    /* State 102 */ new Array( ),
    /* State 103 */ new Array( ),
    /* State 104 */ new Array( ),
    /* State 105 */ new Array( ),
    /* State 106 */ new Array( ),
    /* State 107 */ new Array( 53/* e */,122 , 55/* LExp */,8 , 56/* stmts */,9 , 60/* ImpVar */,16 , 61/* stmt */,18 ),
    /* State 108 */ new Array( ),
    /* State 109 */ new Array( 53/* e */,123 , 55/* LExp */,8 , 56/* stmts */,9 , 60/* ImpVar */,16 , 61/* stmt */,18 ),
    /* State 110 */ new Array( ),
    /* State 111 */ new Array( ),
    /* State 112 */ new Array( ),
    /* State 113 */ new Array( ),
    /* State 114 */ new Array( ),
    /* State 115 */ new Array( 63/* case */,127 , 53/* e */,100 , 55/* LExp */,8 , 56/* stmts */,9 , 60/* ImpVar */,16 , 61/* stmt */,18 ),
    /* State 116 */ new Array( ),
    /* State 117 */ new Array( 53/* e */,128 , 55/* LExp */,8 , 56/* stmts */,9 , 60/* ImpVar */,16 , 61/* stmt */,18 ),
    /* State 118 */ new Array( ),
    /* State 119 */ new Array( ),
    /* State 120 */ new Array( ),
    /* State 121 */ new Array( ),
    /* State 122 */ new Array( ),
    /* State 123 */ new Array( ),
    /* State 124 */ new Array( ),
    /* State 125 */ new Array( 53/* e */,134 , 55/* LExp */,8 , 56/* stmts */,9 , 60/* ImpVar */,16 , 61/* stmt */,18 ),
    /* State 126 */ new Array( 53/* e */,135 , 55/* LExp */,8 , 56/* stmts */,9 , 60/* ImpVar */,16 , 61/* stmt */,18 ),
    /* State 127 */ new Array( ),
    /* State 128 */ new Array( ),
    /* State 129 */ new Array( 53/* e */,136 , 55/* LExp */,8 , 56/* stmts */,9 , 60/* ImpVar */,16 , 61/* stmt */,18 ),
    /* State 130 */ new Array( ),
    /* State 131 */ new Array( 53/* e */,139 , 55/* LExp */,8 , 56/* stmts */,9 , 60/* ImpVar */,16 , 61/* stmt */,18 ),
    /* State 132 */ new Array( ),
    /* State 133 */ new Array( ),
    /* State 134 */ new Array( ),
    /* State 135 */ new Array( ),
    /* State 136 */ new Array( ),
    /* State 137 */ new Array( ),
    /* State 138 */ new Array( ),
    /* State 139 */ new Array( ),
    /* State 140 */ new Array( ),
    /* State 141 */ new Array( ),
    /* State 142 */ new Array( ),
    /* State 143 */ new Array( ),
    /* State 144 */ new Array( 53/* e */,148 , 55/* LExp */,8 , 56/* stmts */,9 , 60/* ImpVar */,16 , 61/* stmt */,18 ),
    /* State 145 */ new Array( ),
    /* State 146 */ new Array( ),
    /* State 147 */ new Array( ),
    /* State 148 */ new Array( ),
    /* State 149 */ new Array( ),
    /* State 150 */ new Array( ),
    /* State 151 */ new Array( 53/* e */,155 , 55/* LExp */,8 , 56/* stmts */,9 , 60/* ImpVar */,16 , 61/* stmt */,18 ),
    /* State 152 */ new Array( ),
    /* State 153 */ new Array( 53/* e */,156 , 55/* LExp */,8 , 56/* stmts */,9 , 60/* ImpVar */,16 , 61/* stmt */,18 ),
    /* State 154 */ new Array( 53/* e */,157 , 55/* LExp */,8 , 56/* stmts */,9 , 60/* ImpVar */,16 , 61/* stmt */,18 ),
    /* State 155 */ new Array( ),
    /* State 156 */ new Array( ),
    /* State 157 */ new Array( ),
    /* State 158 */ new Array( ),
    /* State 159 */ new Array( ),
    /* State 160 */ new Array( )
);



/* Symbol labels */
var labels = new Array(
    "p'" /* Non-terminal symbol */,
    "WHITESPACE" /* Terminal symbol */,
    "|" /* Terminal symbol */,
    "@" /* Terminal symbol */,
    "Function" /* Terminal symbol */,
    "," /* Terminal symbol */,
    "Dollar" /* Terminal symbol */,
    "=>" /* Terminal symbol */,
    ":" /* Terminal symbol */,
    "If" /* Terminal symbol */,
    "Else" /* Terminal symbol */,
    "Try" /* Terminal symbol */,
    "Catch" /* Terminal symbol */,
    "Switch" /* Terminal symbol */,
    "While" /* Terminal symbol */,
    "For" /* Terminal symbol */,
    "Foreach" /* Terminal symbol */,
    "As" /* Terminal symbol */,
    "Let" /* Terminal symbol */,
    "In" /* Terminal symbol */,
    "?" /* Terminal symbol */,
    "{" /* Terminal symbol */,
    "}" /* Terminal symbol */,
    "!" /* Terminal symbol */,
    "Identifier" /* Terminal symbol */,
    "String" /* Terminal symbol */,
    "Number" /* Terminal symbol */,
    ";" /* Terminal symbol */,
    "=" /* Terminal symbol */,
    "|||" /* Terminal symbol */,
    "||||" /* Terminal symbol */,
    "||" /* Terminal symbol */,
    "&&" /* Terminal symbol */,
    "==" /* Terminal symbol */,
    "!=" /* Terminal symbol */,
    "<" /* Terminal symbol */,
    "<=" /* Terminal symbol */,
    ">" /* Terminal symbol */,
    ">=" /* Terminal symbol */,
    "~" /* Terminal symbol */,
    "+" /* Terminal symbol */,
    "-" /* Terminal symbol */,
    "*" /* Terminal symbol */,
    "/" /* Terminal symbol */,
    "Dot" /* Terminal symbol */,
    "[" /* Terminal symbol */,
    "]" /* Terminal symbol */,
    "BackSlash" /* Terminal symbol */,
    "`" /* Terminal symbol */,
    "Escape" /* Terminal symbol */,
    "Hash" /* Terminal symbol */,
    "(" /* Terminal symbol */,
    ")" /* Terminal symbol */,
    "e" /* Non-terminal symbol */,
    "p" /* Non-terminal symbol */,
    "LExp" /* Non-terminal symbol */,
    "stmts" /* Non-terminal symbol */,
    "fargs" /* Non-terminal symbol */,
    "args" /* Non-terminal symbol */,
    "mappings" /* Non-terminal symbol */,
    "ImpVar" /* Non-terminal symbol */,
    "stmt" /* Non-terminal symbol */,
    "cases" /* Non-terminal symbol */,
    "case" /* Non-terminal symbol */,
    "mapping" /* Non-terminal symbol */,
    "field" /* Non-terminal symbol */,
    "$" /* Terminal symbol */
);


    
    info.offset = 0;
    info.src = src;
    info.att = new String();
    
    if( !err_off )
        err_off    = new Array();
    if( !err_la )
    err_la = new Array();
    
    sstack.push( 0 );
    vstack.push( 0 );
    
    la = __lex( info );

    while( true )
    {
        act = 162;
        for( var i = 0; i < act_tab[sstack[sstack.length-1]].length; i+=2 )
        {
            if( act_tab[sstack[sstack.length-1]][i] == la )
            {
                act = act_tab[sstack[sstack.length-1]][i+1];
                break;
            }
        }

        if( _dbg_withtrace && sstack.length > 0 )
        {
            __dbg_print( "\nState " + sstack[sstack.length-1] + "\n" +
                            "\tLookahead: " + labels[la] + " (\"" + info.att + "\")\n" +
                            "\tAction: " + act + "\n" + 
                            "\tSource: \"" + info.src.substr( info.offset, 30 ) + ( ( info.offset + 30 < info.src.length ) ?
                                    "..." : "" ) + "\"\n" +
                            "\tStack: " + sstack.join() + "\n" +
                            "\tValue stack: " + vstack.join() + "\n" );
        }
        
            
        //Panic-mode: Try recovery when parse-error occurs!
        if( act == 162 )
        {
            if( _dbg_withtrace )
                __dbg_print( "Error detected: There is no reduce or shift on the symbol " + labels[la] );
            
            err_cnt++;
            err_off.push( info.offset - info.att.length );            
            err_la.push( new Array() );
            for( var i = 0; i < act_tab[sstack[sstack.length-1]].length; i+=2 )
                err_la[err_la.length-1].push( labels[act_tab[sstack[sstack.length-1]][i]] );
            
            //Remember the original stack!
            var rsstack = new Array();
            var rvstack = new Array();
            for( var i = 0; i < sstack.length; i++ )
            {
                rsstack[i] = sstack[i];
                rvstack[i] = vstack[i];
            }
            
            while( act == 162 && la != 66 )
            {
                if( _dbg_withtrace )
                    __dbg_print( "\tError recovery\n" +
                                    "Current lookahead: " + labels[la] + " (" + info.att + ")\n" +
                                    "Action: " + act + "\n\n" );
                if( la == -1 )
                    info.offset++;
                    
                while( act == 162 && sstack.length > 0 )
                {
                    sstack.pop();
                    vstack.pop();
                    
                    if( sstack.length == 0 )
                        break;
                        
                    act = 162;
                    for( var i = 0; i < act_tab[sstack[sstack.length-1]].length; i+=2 )
                    {
                        if( act_tab[sstack[sstack.length-1]][i] == la )
                        {
                            act = act_tab[sstack[sstack.length-1]][i+1];
                            break;
                        }
                    }
                }
                
                if( act != 162 )
                    break;
                
                for( var i = 0; i < rsstack.length; i++ )
                {
                    sstack.push( rsstack[i] );
                    vstack.push( rvstack[i] );
                }
                
                la = __lex( info );
            }
            
            if( act == 162 )
            {
                if( _dbg_withtrace )
                    __dbg_print( "\tError recovery failed, terminating parse process..." );
                break;
            }


            if( _dbg_withtrace )
                __dbg_print( "\tError recovery succeeded, continuing" );
        }
        
        /*
        if( act == 162 )
            break;
        */
        
        
        //Shift
        if( act > 0 )
        {            
            if( _dbg_withtrace )
                __dbg_print( "Shifting symbol: " + labels[la] + " (" + info.att + ")" );
        
            sstack.push( act );
            vstack.push( info.att );
            
            la = __lex( info );
            
            if( _dbg_withtrace )
                __dbg_print( "\tNew lookahead symbol: " + labels[la] + " (" + info.att + ")" );
        }
        //Reduce
        else
        {        
            act *= -1;
            
            if( _dbg_withtrace )
                __dbg_print( "Reducing by producution: " + act );
            
            rval = void(0);
            
            if( _dbg_withtrace )
                __dbg_print( "\tPerforming semantic action..." );
            
switch( act )
{
    case 0:
    {
        rval = vstack[ vstack.length - 1 ];
    }
    break;
    case 1:
    {
         // console.log(vstack[ vstack.length - 1 ]); alert( vstack[ vstack.length - 1 ] ); 
         returnFinalResult(vstack[ vstack.length - 1 ]);
    }
    break;
    case 2:
    {
         rval = ['fun_app', ['lvar', '+'], [vstack[ vstack.length - 3 ], vstack[ vstack.length - 1 ]]]; 
    }
    break;
    case 3:
    {
         rval = ['fun_app', ['lvar', '-'], [vstack[ vstack.length - 3 ], vstack[ vstack.length - 1 ]]]; 
    }
    break;
    case 4:
    {
         rval = ['fun_app', ['lvar', vstack[ vstack.length - 2 ]], [vstack[ vstack.length - 3 ], vstack[ vstack.length - 1 ]]]; 
    }
    break;
    case 5:
    {
         rval = ['fun_app', ['lvar', '/'], [vstack[ vstack.length - 3 ], vstack[ vstack.length - 1 ]]]; 
    }
    break;
    case 6:
    {
         rval = ['fun_app', ['lvar', '-'], [['const', 0], vstack[ vstack.length - 1 ]]]; 
    }
    break;
    case 7:
    {
         rval = ['paren', vstack[ vstack.length - 2 ]]; 
    }
    break;
    case 8:
    {
         rval = ['fun_app', ['lvar', '=='], [vstack[ vstack.length - 3 ], vstack[ vstack.length - 1 ]]]; 
    }
    break;
    case 9:
    {
         rval = ['fun_app', ['lvar', '!='], [vstack[ vstack.length - 3 ], vstack[ vstack.length - 1 ]]]; 
    }
    break;
    case 10:
    {
         rval = ['fun_app', ['lvar', '>'], [vstack[ vstack.length - 3 ], vstack[ vstack.length - 1 ]]]; 
    }
    break;
    case 11:
    {
         rval = ['fun_app', ['lvar', '>='], [vstack[ vstack.length - 3 ], vstack[ vstack.length - 1 ]]]; 
    }
    break;
    case 12:
    {
         rval = ['fun_app', ['lvar', '<'], [vstack[ vstack.length - 3 ], vstack[ vstack.length - 1 ]]]; 
    }
    break;
    case 13:
    {
         rval = ['fun_app', ['lvar', '<='], [vstack[ vstack.length - 3 ], vstack[ vstack.length - 1 ]]]; 
    }
    break;
    case 14:
    {
         rval = ['land', vstack[ vstack.length - 3 ], vstack[ vstack.length - 1 ]]; 
    }
    break;
    case 15:
    {
         rval = ['lor', vstack[ vstack.length - 3 ], vstack[ vstack.length - 1 ]]; 
    }
    break;
    case 16:
    {
         rval = ['fun_app', ['lvar', 'not'], [vstack[ vstack.length - 1 ]]]; 
    }
    break;
    case 17:
    {
         rval = ['const', vstack[ vstack.length - 1 ]]; 
    }
    break;
    case 18:
    {
         rval = ['const', vstack[ vstack.length - 1 ]]; 
    }
    break;
    case 19:
    {
         rval = vstack[ vstack.length - 1 ]; 
    }
    break;
    case 20:
    {
         rval = ['assign', vstack[ vstack.length - 3 ], vstack[ vstack.length - 1 ]]; 
    }
    break;
    case 21:
    {
         rval = toStmts(vstack[ vstack.length - 1 ]); 
    }
    break;
    case 22:
    {
         rval = ['or', flattern(['or', [vstack[ vstack.length - 3 ], vstack[ vstack.length - 1 ]]], 'or')]; 
    }
    break;
    case 23:
    {
         rval = ['por', flattern(['por', [vstack[ vstack.length - 3 ], vstack[ vstack.length - 1 ]]], 'por')]; 
    }
    break;
    case 24:
    {
         rval = ['code', vstack[ vstack.length - 1 ]]; 
    }
    break;
    case 25:
    {
         rval = ['escape', vstack[ vstack.length - 1 ]]; 
    }
    break;
    case 26:
    {
         rval = ['decode', vstack[ vstack.length - 1 ]]; 
    }
    break;
    case 27:
    {
         rval = ['lambda', [], vstack[ vstack.length - 2 ]] 
    }
    break;
    case 28:
    {
         rval = ['lambda', vstack[ vstack.length - 5 ], vstack[ vstack.length - 2 ]] 
    }
    break;
    case 29:
    {
         rval = ['fun_app', vstack[ vstack.length - 3 ], []]; 
    }
    break;
    case 30:
    {
         rval = ['fun_app', vstack[ vstack.length - 4 ], vstack[ vstack.length - 2 ]]; 
    }
    break;
    case 31:
    {
         rval = ['fun_app', ['lvar', '~'], [vstack[ vstack.length - 3 ], vstack[ vstack.length - 1 ]]]; 
    }
    break;
    case 32:
    {
         rval = ['obj', vstack[ vstack.length - 2 ]]; 
    }
    break;
    case 33:
    {
         rval = ['obj', []]; 
    }
    break;
    case 34:
    {
         rval = ['let', vstack[ vstack.length - 5 ], vstack[ vstack.length - 3 ], vstack[ vstack.length - 1 ]]; 
    }
    break;
    case 35:
    {
         rval = ['imp_var', vstack[ vstack.length - 1 ]]; 
    }
    break;
    case 36:
    {
         rval = vstack[ vstack.length - 2 ].concat([vstack[ vstack.length - 1 ]]); 
    }
    break;
    case 37:
    {
         rval = [vstack[ vstack.length - 1 ]]; 
    }
    break;
    case 38:
    {
         rval = vstack[ vstack.length - 2 ]; 
    }
    break;
    case 39:
    {
         rval = ['switch', vstack[ vstack.length - 2 ]]; 
    }
    break;
    case 40:
    {
         rval = ['while', vstack[ vstack.length - 5 ], vstack[ vstack.length - 2 ]]; 
    }
    break;
    case 41:
    {
         rval = ['foreach', vstack[ vstack.length - 7 ], vstack[ vstack.length - 5 ], vstack[ vstack.length - 2 ]]; 
    }
    break;
    case 42:
    {
         rval = ['obj_foreach', vstack[ vstack.length - 9 ], vstack[ vstack.length - 7 ], vstack[ vstack.length - 5 ], vstack[ vstack.length - 2 ]]; 
    }
    break;
    case 43:
    {
         rval = ['if', vstack[ vstack.length - 5 ], vstack[ vstack.length - 2 ]] 
    }
    break;
    case 44:
    {
         rval = ['if', vstack[ vstack.length - 9 ], vstack[ vstack.length - 6 ], vstack[ vstack.length - 2 ]] 
    }
    break;
    case 45:
    {
         rval = ['try', vstack[ vstack.length - 9 ], vstack[ vstack.length - 5 ], vstack[ vstack.length - 2 ]] 
    }
    break;
    case 46:
    {
         rval = vstack[ vstack.length - 3 ].concat([vstack[ vstack.length - 1 ]]); 
    }
    break;
    case 47:
    {
         rval = [vstack[ vstack.length - 1 ]]; 
    }
    break;
    case 48:
    {
         rval = [vstack[ vstack.length - 3 ], vstack[ vstack.length - 1 ]]; 
    }
    break;
    case 49:
    {
         rval = vstack[ vstack.length - 3 ].concat([vstack[ vstack.length - 1 ]]); 
    }
    break;
    case 50:
    {
         rval = [vstack[ vstack.length - 1 ]]; 
    }
    break;
    case 51:
    {
         rval = [vstack[ vstack.length - 3 ], vstack[ vstack.length - 1 ]]; 
    }
    break;
    case 52:
    {
         rval = vstack[ vstack.length - 1 ]; 
    }
    break;
    case 53:
    {
         rval = "$"; 
    }
    break;
    case 54:
    {
         rval = "@" + vstack[ vstack.length - 1 ]; 
    }
    break;
    case 55:
    {
         rval = vstack[ vstack.length - 1 ]; 
    }
    break;
    case 56:
    {
         rval = vstack[ vstack.length - 3 ].concat([vstack[ vstack.length - 1 ]]); 
    }
    break;
    case 57:
    {
         rval = [vstack[ vstack.length - 1 ]]; 
    }
    break;
    case 58:
    {
         rval = vstack[ vstack.length - 3 ].concat([vstack[ vstack.length - 1 ]]); 
    }
    break;
    case 59:
    {
         rval = [vstack[ vstack.length - 1 ]]; 
    }
    break;
    case 60:
    {
         rval = ['lvar', vstack[ vstack.length - 1 ]]; 
    }
    break;
    case 61:
    {
         rval = ['sub', vstack[ vstack.length - 4 ], vstack[ vstack.length - 2 ]]; 
    }
    break;
    case 62:
    {
         rval = ['dot', vstack[ vstack.length - 3 ], vstack[ vstack.length - 1 ]]; 
    }
    break;
    case 63:
    {
         rval = vstack[ vstack.length - 1 ]; 
    }
    break;
}



            if( _dbg_withtrace )
                __dbg_print( "\tPopping " + pop_tab[act][1] + " off the stack..." );
                
            for( var i = 0; i < pop_tab[act][1]; i++ )
            {
                sstack.pop();
                vstack.pop();
            }
                                    
            go = -1;
            for( var i = 0; i < goto_tab[sstack[sstack.length-1]].length; i+=2 )
            {
                if( goto_tab[sstack[sstack.length-1]][i] == pop_tab[act][0] )
                {
                    go = goto_tab[sstack[sstack.length-1]][i+1];
                    break;
                }
            }
            
            if( act == 0 )
                break;
                
            if( _dbg_withtrace )
                __dbg_print( "\tPushing non-terminal " + labels[ pop_tab[act][0] ] );
                
            sstack.push( go );
            vstack.push( rval );            
        }
        
        if( _dbg_withtrace )
        {        
            alert( _dbg_string );
            _dbg_string = new String();
        }
    }

    if( _dbg_withtrace )
    {
        __dbg_print( "\nParse complete." );
        alert( _dbg_string );
    }
    
    return err_cnt;
}


var error_offsets = new Array(); var error_lookaheads = new Array(); var error_count = 0; 
    var str = input;
if( ( error_count = __parse( str, error_offsets, error_lookaheads ) ) > 0 ) { var errstr = new String(); for( var i = 0; i < error_count; i++ ) errstr += "Parse error in line " + ( str.substr( 0, error_offsets[i] ).match( /\n/g ) ? str.substr( 0, error_offsets[i] ).match( /\n/g ).length : 1 ) + " near \"" + str.substr( error_offsets[i] ) + "\", expecting \"" + error_lookaheads[i].join() + "\"\n" ; throw( errstr );}


//end body
else {
	return finalResult;
}

};

    return {
        parse: parse
    };
}();
