
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


var _dbg_withtrace = false; var _dbg_string = new String(); function __dbg_print( text )
{ _dbg_string += text + "\n";}
function __lex( info )
{ var state = 0; var match = -1; var match_pos = 0; var start = 0; var pos = info.offset + 1; do
{ pos--; state = 0; match = -2; start = pos; if( info.src.length <= start )
return 63; do
{ switch( state )
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
        else if( ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 98 && info.src.charCodeAt( pos ) <= 101 ) || ( info.src.charCodeAt( pos ) >= 103 && info.src.charCodeAt( pos ) <= 104 ) || ( info.src.charCodeAt( pos ) >= 106 && info.src.charCodeAt( pos ) <= 107 ) || ( info.src.charCodeAt( pos ) >= 109 && info.src.charCodeAt( pos ) <= 114 ) || ( info.src.charCodeAt( pos ) >= 116 && info.src.charCodeAt( pos ) <= 118 ) || ( info.src.charCodeAt( pos ) >= 120 && info.src.charCodeAt( pos ) <= 122 ) ) state = 21;
        else if( info.src.charCodeAt( pos ) == 91 ) state = 22;
        else if( info.src.charCodeAt( pos ) == 92 ) state = 23;
        else if( info.src.charCodeAt( pos ) == 93 ) state = 24;
        else if( info.src.charCodeAt( pos ) == 94 ) state = 25;
        else if( info.src.charCodeAt( pos ) == 96 ) state = 26;
        else if( info.src.charCodeAt( pos ) == 123 ) state = 27;
        else if( info.src.charCodeAt( pos ) == 124 ) state = 28;
        else if( info.src.charCodeAt( pos ) == 125 ) state = 29;
        else if( info.src.charCodeAt( pos ) == 126 ) state = 30;
        else if( info.src.charCodeAt( pos ) == 34 ) state = 50;
        else if( info.src.charCodeAt( pos ) == 97 ) state = 52;
        else if( info.src.charCodeAt( pos ) == 38 ) state = 53;
        else if( info.src.charCodeAt( pos ) == 105 ) state = 54;
        else if( info.src.charCodeAt( pos ) == 102 ) state = 64;
        else if( info.src.charCodeAt( pos ) == 108 ) state = 65;
        else if( info.src.charCodeAt( pos ) == 119 ) state = 74;
        else if( info.src.charCodeAt( pos ) == 115 ) state = 77;
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
        match = 19;
        match_pos = pos;
        break;

    case 3:
        state = -1;
        match = 47;
        match_pos = pos;
        break;

    case 4:
        state = -1;
        match = 6;
        match_pos = pos;
        break;

    case 5:
        state = -1;
        match = 48;
        match_pos = pos;
        break;

    case 6:
        state = -1;
        match = 49;
        match_pos = pos;
        break;

    case 7:
        state = -1;
        match = 39;
        match_pos = pos;
        break;

    case 8:
        state = -1;
        match = 37;
        match_pos = pos;
        break;

    case 9:
        state = -1;
        match = 5;
        match_pos = pos;
        break;

    case 10:
        state = -1;
        match = 38;
        match_pos = pos;
        break;

    case 11:
        state = -1;
        match = 41;
        match_pos = pos;
        break;

    case 12:
        if( info.src.charCodeAt( pos ) == 47 ) state = 57;
        else state = -1;
        match = 40;
        match_pos = pos;
        break;

    case 13:
        if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) ) state = 13;
        else if( info.src.charCodeAt( pos ) == 46 ) state = 59;
        else state = -1;
        match = 22;
        match_pos = pos;
        break;

    case 14:
        state = -1;
        match = 8;
        match_pos = pos;
        break;

    case 15:
        state = -1;
        match = 23;
        match_pos = pos;
        break;

    case 16:
        if( info.src.charCodeAt( pos ) == 45 ) state = 34;
        else if( info.src.charCodeAt( pos ) == 61 ) state = 35;
        else state = -1;
        match = 32;
        match_pos = pos;
        break;

    case 17:
        if( info.src.charCodeAt( pos ) == 61 ) state = 36;
        else if( info.src.charCodeAt( pos ) == 62 ) state = 37;
        else state = -1;
        match = 24;
        match_pos = pos;
        break;

    case 18:
        if( info.src.charCodeAt( pos ) == 61 ) state = 38;
        else state = -1;
        match = 34;
        match_pos = pos;
        break;

    case 19:
        state = -1;
        match = 16;
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
        match = 20;
        match_pos = pos;
        break;

    case 22:
        state = -1;
        match = 42;
        match_pos = pos;
        break;

    case 23:
        state = -1;
        match = 44;
        match_pos = pos;
        break;

    case 24:
        state = -1;
        match = 43;
        match_pos = pos;
        break;

    case 25:
        state = -1;
        match = 46;
        match_pos = pos;
        break;

    case 26:
        state = -1;
        match = 45;
        match_pos = pos;
        break;

    case 27:
        state = -1;
        match = 17;
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
        match = 18;
        match_pos = pos;
        break;

    case 30:
        state = -1;
        match = 36;
        match_pos = pos;
        break;

    case 31:
        state = -1;
        match = 31;
        match_pos = pos;
        break;

    case 32:
        state = -1;
        match = 21;
        match_pos = pos;
        break;

    case 33:
        state = -1;
        match = 29;
        match_pos = pos;
        break;

    case 34:
        state = -1;
        match = 25;
        match_pos = pos;
        break;

    case 35:
        state = -1;
        match = 33;
        match_pos = pos;
        break;

    case 36:
        state = -1;
        match = 30;
        match_pos = pos;
        break;

    case 37:
        state = -1;
        match = 7;
        match_pos = pos;
        break;

    case 38:
        state = -1;
        match = 35;
        match_pos = pos;
        break;

    case 39:
        if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 122 ) ) state = 21;
        else state = -1;
        match = 13;
        match_pos = pos;
        break;

    case 40:
        if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 122 ) ) state = 21;
        else state = -1;
        match = 15;
        match_pos = pos;
        break;

    case 41:
        if( info.src.charCodeAt( pos ) == 124 ) state = 44;
        else state = -1;
        match = 28;
        match_pos = pos;
        break;

    case 42:
        if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 100 ) || ( info.src.charCodeAt( pos ) >= 102 && info.src.charCodeAt( pos ) <= 122 ) ) state = 21;
        else if( info.src.charCodeAt( pos ) == 101 ) state = 72;
        else state = -1;
        match = 11;
        match_pos = pos;
        break;

    case 43:
        if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 122 ) ) state = 21;
        else state = -1;
        match = 14;
        match_pos = pos;
        break;

    case 44:
        if( info.src.charCodeAt( pos ) == 124 ) state = 45;
        else state = -1;
        match = 26;
        match_pos = pos;
        break;

    case 45:
        state = -1;
        match = 27;
        match_pos = pos;
        break;

    case 46:
        if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 122 ) ) state = 21;
        else state = -1;
        match = 10;
        match_pos = pos;
        break;

    case 47:
        if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 122 ) ) state = 21;
        else state = -1;
        match = 9;
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
        match = 4;
        match_pos = pos;
        break;

    case 50:
        if( info.src.charCodeAt( pos ) == 34 ) state = 32;
        else if( ( info.src.charCodeAt( pos ) >= 0 && info.src.charCodeAt( pos ) <= 33 ) || ( info.src.charCodeAt( pos ) >= 35 && info.src.charCodeAt( pos ) <= 91 ) || ( info.src.charCodeAt( pos ) >= 93 && info.src.charCodeAt( pos ) <= 254 ) ) state = 50;
        else if( info.src.charCodeAt( pos ) == 92 ) state = 55;
        else state = -1;
        break;

    case 51:
        if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) ) state = 51;
        else state = -1;
        match = 22;
        match_pos = pos;
        break;

    case 52:
        if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 114 ) || ( info.src.charCodeAt( pos ) >= 116 && info.src.charCodeAt( pos ) <= 122 ) ) state = 21;
        else if( info.src.charCodeAt( pos ) == 115 ) state = 39;
        else state = -1;
        match = 20;
        match_pos = pos;
        break;

    case 53:
        if( info.src.charCodeAt( pos ) == 38 ) state = 33;
        else state = -1;
        break;

    case 54:
        if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 109 ) || ( info.src.charCodeAt( pos ) >= 111 && info.src.charCodeAt( pos ) <= 122 ) ) state = 21;
        else if( info.src.charCodeAt( pos ) == 110 ) state = 40;
        else state = -1;
        match = 20;
        match_pos = pos;
        break;

    case 55:
        if( info.src.charCodeAt( pos ) == 34 || info.src.charCodeAt( pos ) == 92 ) state = 50;
        else state = -1;
        break;

    case 56:
        if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 113 ) || ( info.src.charCodeAt( pos ) >= 115 && info.src.charCodeAt( pos ) <= 122 ) ) state = 21;
        else if( info.src.charCodeAt( pos ) == 114 ) state = 42;
        else state = -1;
        match = 20;
        match_pos = pos;
        break;

    case 57:
        if( info.src.charCodeAt( pos ) == 10 ) state = 1;
        else if( ( info.src.charCodeAt( pos ) >= 0 && info.src.charCodeAt( pos ) <= 9 ) || ( info.src.charCodeAt( pos ) >= 11 && info.src.charCodeAt( pos ) <= 254 ) ) state = 57;
        else state = -1;
        break;

    case 58:
        if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 115 ) || ( info.src.charCodeAt( pos ) >= 117 && info.src.charCodeAt( pos ) <= 122 ) ) state = 21;
        else if( info.src.charCodeAt( pos ) == 116 ) state = 43;
        else state = -1;
        match = 20;
        match_pos = pos;
        break;

    case 59:
        if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) ) state = 51;
        else state = -1;
        break;

    case 60:
        if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 100 ) || ( info.src.charCodeAt( pos ) >= 102 && info.src.charCodeAt( pos ) <= 122 ) ) state = 21;
        else if( info.src.charCodeAt( pos ) == 101 ) state = 46;
        else state = -1;
        match = 20;
        match_pos = pos;
        break;

    case 61:
        if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 103 ) || ( info.src.charCodeAt( pos ) >= 105 && info.src.charCodeAt( pos ) <= 122 ) ) state = 21;
        else if( info.src.charCodeAt( pos ) == 104 ) state = 47;
        else state = -1;
        match = 20;
        match_pos = pos;
        break;

    case 62:
        if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 103 ) || ( info.src.charCodeAt( pos ) >= 105 && info.src.charCodeAt( pos ) <= 122 ) ) state = 21;
        else if( info.src.charCodeAt( pos ) == 104 ) state = 48;
        else state = -1;
        match = 20;
        match_pos = pos;
        break;

    case 63:
        if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 109 ) || ( info.src.charCodeAt( pos ) >= 111 && info.src.charCodeAt( pos ) <= 122 ) ) state = 21;
        else if( info.src.charCodeAt( pos ) == 110 ) state = 49;
        else state = -1;
        match = 20;
        match_pos = pos;
        break;

    case 64:
        if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 110 ) || ( info.src.charCodeAt( pos ) >= 112 && info.src.charCodeAt( pos ) <= 116 ) || ( info.src.charCodeAt( pos ) >= 118 && info.src.charCodeAt( pos ) <= 122 ) ) state = 21;
        else if( info.src.charCodeAt( pos ) == 111 ) state = 56;
        else if( info.src.charCodeAt( pos ) == 117 ) state = 79;
        else state = -1;
        match = 20;
        match_pos = pos;
        break;

    case 65:
        if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 100 ) || ( info.src.charCodeAt( pos ) >= 102 && info.src.charCodeAt( pos ) <= 122 ) ) state = 21;
        else if( info.src.charCodeAt( pos ) == 101 ) state = 58;
        else state = -1;
        match = 20;
        match_pos = pos;
        break;

    case 66:
        if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 107 ) || ( info.src.charCodeAt( pos ) >= 109 && info.src.charCodeAt( pos ) <= 122 ) ) state = 21;
        else if( info.src.charCodeAt( pos ) == 108 ) state = 60;
        else state = -1;
        match = 20;
        match_pos = pos;
        break;

    case 67:
        if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 98 ) || ( info.src.charCodeAt( pos ) >= 100 && info.src.charCodeAt( pos ) <= 122 ) ) state = 21;
        else if( info.src.charCodeAt( pos ) == 99 ) state = 61;
        else state = -1;
        match = 20;
        match_pos = pos;
        break;

    case 68:
        if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 98 ) || ( info.src.charCodeAt( pos ) >= 100 && info.src.charCodeAt( pos ) <= 122 ) ) state = 21;
        else if( info.src.charCodeAt( pos ) == 99 ) state = 62;
        else state = -1;
        match = 20;
        match_pos = pos;
        break;

    case 69:
        if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 110 ) || ( info.src.charCodeAt( pos ) >= 112 && info.src.charCodeAt( pos ) <= 122 ) ) state = 21;
        else if( info.src.charCodeAt( pos ) == 111 ) state = 63;
        else state = -1;
        match = 20;
        match_pos = pos;
        break;

    case 70:
        if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 104 ) || ( info.src.charCodeAt( pos ) >= 106 && info.src.charCodeAt( pos ) <= 122 ) ) state = 21;
        else if( info.src.charCodeAt( pos ) == 105 ) state = 66;
        else state = -1;
        match = 20;
        match_pos = pos;
        break;

    case 71:
        if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 115 ) || ( info.src.charCodeAt( pos ) >= 117 && info.src.charCodeAt( pos ) <= 122 ) ) state = 21;
        else if( info.src.charCodeAt( pos ) == 116 ) state = 67;
        else state = -1;
        match = 20;
        match_pos = pos;
        break;

    case 72:
        if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 98 && info.src.charCodeAt( pos ) <= 122 ) ) state = 21;
        else if( info.src.charCodeAt( pos ) == 97 ) state = 68;
        else state = -1;
        match = 20;
        match_pos = pos;
        break;

    case 73:
        if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 104 ) || ( info.src.charCodeAt( pos ) >= 106 && info.src.charCodeAt( pos ) <= 122 ) ) state = 21;
        else if( info.src.charCodeAt( pos ) == 105 ) state = 69;
        else state = -1;
        match = 20;
        match_pos = pos;
        break;

    case 74:
        if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 103 ) || ( info.src.charCodeAt( pos ) >= 105 && info.src.charCodeAt( pos ) <= 122 ) ) state = 21;
        else if( info.src.charCodeAt( pos ) == 104 ) state = 70;
        else state = -1;
        match = 20;
        match_pos = pos;
        break;

    case 75:
        if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 104 ) || ( info.src.charCodeAt( pos ) >= 106 && info.src.charCodeAt( pos ) <= 122 ) ) state = 21;
        else if( info.src.charCodeAt( pos ) == 105 ) state = 71;
        else state = -1;
        match = 20;
        match_pos = pos;
        break;

    case 76:
        if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 115 ) || ( info.src.charCodeAt( pos ) >= 117 && info.src.charCodeAt( pos ) <= 122 ) ) state = 21;
        else if( info.src.charCodeAt( pos ) == 116 ) state = 73;
        else state = -1;
        match = 20;
        match_pos = pos;
        break;

    case 77:
        if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 118 ) || ( info.src.charCodeAt( pos ) >= 120 && info.src.charCodeAt( pos ) <= 122 ) ) state = 21;
        else if( info.src.charCodeAt( pos ) == 119 ) state = 75;
        else state = -1;
        match = 20;
        match_pos = pos;
        break;

    case 78:
        if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 98 ) || ( info.src.charCodeAt( pos ) >= 100 && info.src.charCodeAt( pos ) <= 122 ) ) state = 21;
        else if( info.src.charCodeAt( pos ) == 99 ) state = 76;
        else state = -1;
        match = 20;
        match_pos = pos;
        break;

    case 79:
        if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 109 ) || ( info.src.charCodeAt( pos ) >= 111 && info.src.charCodeAt( pos ) <= 122 ) ) state = 21;
        else if( info.src.charCodeAt( pos ) == 110 ) state = 78;
        else state = -1;
        match = 20;
        match_pos = pos;
        break;

}


pos++;}
while( state > -1 );}
while( 1 > -1 && match == 1 ); if( match > -1 )
{ info.att = info.src.substr( start, match_pos - start ); info.offset = match_pos; switch( match )
{
    case 21:
        {
        
info.att = info.att.substr( 1, info.att.length - 2 );

        }
        break;

    case 22:
        {
         info.att = parseFloat( info.att );
        }
        break;

}


}
else
{ info.att = new String(); match = -1;}
return match;}
function __parse( src, err_off, err_la )
{ var sstack = new Array(); var vstack = new Array(); var err_cnt = 0; var act; var go; var la; var rval; var parseinfo = new Function( "", "var offset; var src; var att;" ); var info = new parseinfo(); /* Pop-Table */
var pop_tab = new Array(
    new Array( 0/* p' */, 1 ),
    new Array( 51/* p */, 1 ),
    new Array( 50/* e */, 3 ),
    new Array( 50/* e */, 3 ),
    new Array( 50/* e */, 3 ),
    new Array( 50/* e */, 3 ),
    new Array( 50/* e */, 2 ),
    new Array( 50/* e */, 3 ),
    new Array( 50/* e */, 3 ),
    new Array( 50/* e */, 3 ),
    new Array( 50/* e */, 3 ),
    new Array( 50/* e */, 3 ),
    new Array( 50/* e */, 3 ),
    new Array( 50/* e */, 3 ),
    new Array( 50/* e */, 3 ),
    new Array( 50/* e */, 3 ),
    new Array( 50/* e */, 2 ),
    new Array( 50/* e */, 1 ),
    new Array( 50/* e */, 1 ),
    new Array( 50/* e */, 1 ),
    new Array( 50/* e */, 3 ),
    new Array( 50/* e */, 3 ),
    new Array( 50/* e */, 2 ),
    new Array( 50/* e */, 1 ),
    new Array( 50/* e */, 3 ),
    new Array( 50/* e */, 3 ),
    new Array( 50/* e */, 2 ),
    new Array( 50/* e */, 2 ),
    new Array( 50/* e */, 2 ),
    new Array( 50/* e */, 6 ),
    new Array( 50/* e */, 7 ),
    new Array( 50/* e */, 3 ),
    new Array( 50/* e */, 4 ),
    new Array( 50/* e */, 3 ),
    new Array( 50/* e */, 3 ),
    new Array( 50/* e */, 2 ),
    new Array( 50/* e */, 6 ),
    new Array( 50/* e */, 1 ),
    new Array( 53/* stmts */, 2 ),
    new Array( 53/* stmts */, 1 ),
    new Array( 58/* stmt */, 2 ),
    new Array( 58/* stmt */, 4 ),
    new Array( 58/* stmt */, 7 ),
    new Array( 58/* stmt */, 9 ),
    new Array( 58/* stmt */, 11 ),
    new Array( 59/* cases */, 3 ),
    new Array( 59/* cases */, 1 ),
    new Array( 60/* case */, 3 ),
    new Array( 56/* mappings */, 3 ),
    new Array( 56/* mappings */, 1 ),
    new Array( 61/* mapping */, 3 ),
    new Array( 62/* field */, 1 ),
    new Array( 62/* field */, 1 ),
    new Array( 62/* field */, 2 ),
    new Array( 62/* field */, 1 ),
    new Array( 55/* args */, 3 ),
    new Array( 55/* args */, 1 ),
    new Array( 54/* fargs */, 3 ),
    new Array( 54/* fargs */, 1 ),
    new Array( 52/* LExp */, 1 ),
    new Array( 52/* LExp */, 4 ),
    new Array( 52/* LExp */, 3 ),
    new Array( 57/* ImpVar */, 2 )
);

/* Action-Table */
var act_tab = new Array(
    /* State 0 */ new Array( 38/* "-" */,3 , 48/* "(" */,4 , 19/* "!" */,5 , 22/* "Number" */,6 , 21/* "String" */,7 , 25/* "<-" */,9 , 45/* "`" */,11 , 46/* "Escape" */,12 , 47/* "Hash" */,13 , 4/* "Function" */,14 , 17/* "{" */,15 , 14/* "Let" */,16 , 20/* "Identifier" */,18 , 16/* "?" */,20 , 9/* "Switch" */,21 , 10/* "While" */,22 , 12/* "Foreach" */,23 ),
    /* State 1 */ new Array( 63/* "$" */,0 ),
    /* State 2 */ new Array( 23/* ";" */,24 , 41/* "Dot" */,25 , 42/* "[" */,26 , 36/* "~" */,27 , 48/* "(" */,28 , 27/* "||||" */,29 , 26/* "|||" */,30 , 28/* "||" */,31 , 29/* "&&" */,32 , 33/* "<=" */,33 , 32/* "<" */,34 , 35/* ">=" */,35 , 34/* ">" */,36 , 31/* "!=" */,37 , 30/* "==" */,38 , 40/* "/" */,39 , 39/* "*" */,40 , 38/* "-" */,41 , 37/* "+" */,42 , 63/* "$" */,-1 ),
    /* State 3 */ new Array( 38/* "-" */,3 , 48/* "(" */,4 , 19/* "!" */,5 , 22/* "Number" */,6 , 21/* "String" */,7 , 25/* "<-" */,9 , 45/* "`" */,11 , 46/* "Escape" */,12 , 47/* "Hash" */,13 , 4/* "Function" */,14 , 17/* "{" */,15 , 14/* "Let" */,16 , 20/* "Identifier" */,18 , 16/* "?" */,20 , 9/* "Switch" */,21 , 10/* "While" */,22 , 12/* "Foreach" */,23 ),
    /* State 4 */ new Array( 38/* "-" */,3 , 48/* "(" */,4 , 19/* "!" */,5 , 22/* "Number" */,6 , 21/* "String" */,7 , 25/* "<-" */,9 , 45/* "`" */,11 , 46/* "Escape" */,12 , 47/* "Hash" */,13 , 4/* "Function" */,14 , 17/* "{" */,15 , 14/* "Let" */,16 , 20/* "Identifier" */,18 , 16/* "?" */,20 , 9/* "Switch" */,21 , 10/* "While" */,22 , 12/* "Foreach" */,23 ),
    /* State 5 */ new Array( 38/* "-" */,3 , 48/* "(" */,4 , 19/* "!" */,5 , 22/* "Number" */,6 , 21/* "String" */,7 , 25/* "<-" */,9 , 45/* "`" */,11 , 46/* "Escape" */,12 , 47/* "Hash" */,13 , 4/* "Function" */,14 , 17/* "{" */,15 , 14/* "Let" */,16 , 20/* "Identifier" */,18 , 16/* "?" */,20 , 9/* "Switch" */,21 , 10/* "While" */,22 , 12/* "Foreach" */,23 ),
    /* State 6 */ new Array( 63/* "$" */,-17 , 37/* "+" */,-17 , 38/* "-" */,-17 , 39/* "*" */,-17 , 40/* "/" */,-17 , 30/* "==" */,-17 , 31/* "!=" */,-17 , 34/* ">" */,-17 , 35/* ">=" */,-17 , 32/* "<" */,-17 , 33/* "<=" */,-17 , 29/* "&&" */,-17 , 28/* "||" */,-17 , 26/* "|||" */,-17 , 27/* "||||" */,-17 , 48/* "(" */,-17 , 36/* "~" */,-17 , 42/* "[" */,-17 , 41/* "Dot" */,-17 , 23/* ";" */,-17 , 49/* ")" */,-17 , 8/* ":" */,-17 , 43/* "]" */,-17 , 5/* "," */,-17 , 7/* "=>" */,-17 , 13/* "As" */,-17 , 18/* "}" */,-17 , 15/* "In" */,-17 , 2/* "|" */,-17 ),
    /* State 7 */ new Array( 63/* "$" */,-18 , 37/* "+" */,-18 , 38/* "-" */,-18 , 39/* "*" */,-18 , 40/* "/" */,-18 , 30/* "==" */,-18 , 31/* "!=" */,-18 , 34/* ">" */,-18 , 35/* ">=" */,-18 , 32/* "<" */,-18 , 33/* "<=" */,-18 , 29/* "&&" */,-18 , 28/* "||" */,-18 , 26/* "|||" */,-18 , 27/* "||||" */,-18 , 48/* "(" */,-18 , 36/* "~" */,-18 , 42/* "[" */,-18 , 41/* "Dot" */,-18 , 23/* ";" */,-18 , 49/* ")" */,-18 , 8/* ":" */,-18 , 43/* "]" */,-18 , 5/* "," */,-18 , 7/* "=>" */,-18 , 13/* "As" */,-18 , 18/* "}" */,-18 , 15/* "In" */,-18 , 2/* "|" */,-18 ),
    /* State 8 */ new Array( 25/* "<-" */,46 , 24/* "=" */,47 , 63/* "$" */,-19 , 37/* "+" */,-19 , 38/* "-" */,-19 , 39/* "*" */,-19 , 40/* "/" */,-19 , 30/* "==" */,-19 , 31/* "!=" */,-19 , 34/* ">" */,-19 , 35/* ">=" */,-19 , 32/* "<" */,-19 , 33/* "<=" */,-19 , 29/* "&&" */,-19 , 28/* "||" */,-19 , 26/* "|||" */,-19 , 27/* "||||" */,-19 , 48/* "(" */,-19 , 36/* "~" */,-19 , 42/* "[" */,-19 , 41/* "Dot" */,-19 , 23/* ";" */,-19 , 49/* ")" */,-19 , 8/* ":" */,-19 , 43/* "]" */,-19 , 5/* "," */,-19 , 7/* "=>" */,-19 , 13/* "As" */,-19 , 18/* "}" */,-19 , 15/* "In" */,-19 , 2/* "|" */,-19 ),
    /* State 9 */ new Array( 38/* "-" */,3 , 48/* "(" */,4 , 19/* "!" */,5 , 22/* "Number" */,6 , 21/* "String" */,7 , 25/* "<-" */,9 , 45/* "`" */,11 , 46/* "Escape" */,12 , 47/* "Hash" */,13 , 4/* "Function" */,14 , 17/* "{" */,15 , 14/* "Let" */,16 , 20/* "Identifier" */,18 , 16/* "?" */,20 , 9/* "Switch" */,21 , 10/* "While" */,22 , 12/* "Foreach" */,23 ),
    /* State 10 */ new Array( 9/* "Switch" */,21 , 10/* "While" */,22 , 12/* "Foreach" */,23 , 38/* "-" */,3 , 48/* "(" */,4 , 19/* "!" */,5 , 22/* "Number" */,6 , 21/* "String" */,7 , 25/* "<-" */,9 , 45/* "`" */,11 , 46/* "Escape" */,12 , 47/* "Hash" */,13 , 4/* "Function" */,14 , 17/* "{" */,15 , 14/* "Let" */,16 , 20/* "Identifier" */,18 , 16/* "?" */,20 , 63/* "$" */,-23 , 37/* "+" */,-23 , 39/* "*" */,-23 , 40/* "/" */,-23 , 30/* "==" */,-23 , 31/* "!=" */,-23 , 34/* ">" */,-23 , 35/* ">=" */,-23 , 32/* "<" */,-23 , 33/* "<=" */,-23 , 29/* "&&" */,-23 , 28/* "||" */,-23 , 26/* "|||" */,-23 , 27/* "||||" */,-23 , 36/* "~" */,-23 , 42/* "[" */,-23 , 41/* "Dot" */,-23 , 23/* ";" */,-23 , 49/* ")" */,-23 , 8/* ":" */,-23 , 43/* "]" */,-23 , 5/* "," */,-23 , 7/* "=>" */,-23 , 13/* "As" */,-23 , 18/* "}" */,-23 , 15/* "In" */,-23 , 2/* "|" */,-23 ),
    /* State 11 */ new Array( 38/* "-" */,3 , 48/* "(" */,4 , 19/* "!" */,5 , 22/* "Number" */,6 , 21/* "String" */,7 , 25/* "<-" */,9 , 45/* "`" */,11 , 46/* "Escape" */,12 , 47/* "Hash" */,13 , 4/* "Function" */,14 , 17/* "{" */,15 , 14/* "Let" */,16 , 20/* "Identifier" */,18 , 16/* "?" */,20 , 9/* "Switch" */,21 , 10/* "While" */,22 , 12/* "Foreach" */,23 ),
    /* State 12 */ new Array( 38/* "-" */,3 , 48/* "(" */,4 , 19/* "!" */,5 , 22/* "Number" */,6 , 21/* "String" */,7 , 25/* "<-" */,9 , 45/* "`" */,11 , 46/* "Escape" */,12 , 47/* "Hash" */,13 , 4/* "Function" */,14 , 17/* "{" */,15 , 14/* "Let" */,16 , 20/* "Identifier" */,18 , 16/* "?" */,20 , 9/* "Switch" */,21 , 10/* "While" */,22 , 12/* "Foreach" */,23 ),
    /* State 13 */ new Array( 38/* "-" */,3 , 48/* "(" */,4 , 19/* "!" */,5 , 22/* "Number" */,6 , 21/* "String" */,7 , 25/* "<-" */,9 , 45/* "`" */,11 , 46/* "Escape" */,12 , 47/* "Hash" */,13 , 4/* "Function" */,14 , 17/* "{" */,15 , 14/* "Let" */,16 , 20/* "Identifier" */,18 , 16/* "?" */,20 , 9/* "Switch" */,21 , 10/* "While" */,22 , 12/* "Foreach" */,23 ),
    /* State 14 */ new Array( 48/* "(" */,54 ),
    /* State 15 */ new Array( 18/* "}" */,55 , 38/* "-" */,3 , 48/* "(" */,4 , 19/* "!" */,5 , 22/* "Number" */,6 , 21/* "String" */,7 , 25/* "<-" */,9 , 45/* "`" */,11 , 46/* "Escape" */,12 , 47/* "Hash" */,13 , 4/* "Function" */,14 , 17/* "{" */,15 , 14/* "Let" */,16 , 20/* "Identifier" */,18 , 16/* "?" */,20 , 9/* "Switch" */,21 , 10/* "While" */,22 , 12/* "Foreach" */,23 ),
    /* State 16 */ new Array( 16/* "?" */,20 ),
    /* State 17 */ new Array( 63/* "$" */,-37 , 37/* "+" */,-37 , 38/* "-" */,-37 , 39/* "*" */,-37 , 40/* "/" */,-37 , 30/* "==" */,-37 , 31/* "!=" */,-37 , 34/* ">" */,-37 , 35/* ">=" */,-37 , 32/* "<" */,-37 , 33/* "<=" */,-37 , 29/* "&&" */,-37 , 28/* "||" */,-37 , 26/* "|||" */,-37 , 27/* "||||" */,-37 , 48/* "(" */,-37 , 36/* "~" */,-37 , 42/* "[" */,-37 , 41/* "Dot" */,-37 , 23/* ";" */,-37 , 49/* ")" */,-37 , 8/* ":" */,-37 , 43/* "]" */,-37 , 5/* "," */,-37 , 7/* "=>" */,-37 , 13/* "As" */,-37 , 18/* "}" */,-37 , 15/* "In" */,-37 , 2/* "|" */,-37 ),
    /* State 18 */ new Array( 63/* "$" */,-59 , 37/* "+" */,-59 , 38/* "-" */,-59 , 39/* "*" */,-59 , 40/* "/" */,-59 , 30/* "==" */,-59 , 31/* "!=" */,-59 , 34/* ">" */,-59 , 35/* ">=" */,-59 , 32/* "<" */,-59 , 33/* "<=" */,-59 , 29/* "&&" */,-59 , 28/* "||" */,-59 , 24/* "=" */,-59 , 25/* "<-" */,-59 , 26/* "|||" */,-59 , 27/* "||||" */,-59 , 48/* "(" */,-59 , 36/* "~" */,-59 , 42/* "[" */,-59 , 41/* "Dot" */,-59 , 23/* ";" */,-59 , 49/* ")" */,-59 , 8/* ":" */,-59 , 43/* "]" */,-59 , 5/* "," */,-59 , 7/* "=>" */,-59 , 13/* "As" */,-59 , 18/* "}" */,-59 , 15/* "In" */,-59 , 2/* "|" */,-59 ),
    /* State 19 */ new Array( 63/* "$" */,-39 , 37/* "+" */,-39 , 38/* "-" */,-39 , 39/* "*" */,-39 , 40/* "/" */,-39 , 30/* "==" */,-39 , 31/* "!=" */,-39 , 34/* ">" */,-39 , 35/* ">=" */,-39 , 32/* "<" */,-39 , 33/* "<=" */,-39 , 29/* "&&" */,-39 , 28/* "||" */,-39 , 48/* "(" */,-39 , 19/* "!" */,-39 , 22/* "Number" */,-39 , 21/* "String" */,-39 , 25/* "<-" */,-39 , 45/* "`" */,-39 , 46/* "Escape" */,-39 , 47/* "Hash" */,-39 , 4/* "Function" */,-39 , 17/* "{" */,-39 , 14/* "Let" */,-39 , 9/* "Switch" */,-39 , 10/* "While" */,-39 , 12/* "Foreach" */,-39 , 20/* "Identifier" */,-39 , 16/* "?" */,-39 , 26/* "|||" */,-39 , 27/* "||||" */,-39 , 36/* "~" */,-39 , 42/* "[" */,-39 , 41/* "Dot" */,-39 , 23/* ";" */,-39 , 49/* ")" */,-39 , 8/* ":" */,-39 , 43/* "]" */,-39 , 5/* "," */,-39 , 7/* "=>" */,-39 , 13/* "As" */,-39 , 18/* "}" */,-39 , 15/* "In" */,-39 , 2/* "|" */,-39 ),
    /* State 20 */ new Array( 20/* "Identifier" */,60 ),
    /* State 21 */ new Array( 17/* "{" */,61 ),
    /* State 22 */ new Array( 48/* "(" */,62 ),
    /* State 23 */ new Array( 48/* "(" */,63 ),
    /* State 24 */ new Array( 63/* "$" */,-40 , 37/* "+" */,-40 , 38/* "-" */,-40 , 39/* "*" */,-40 , 40/* "/" */,-40 , 30/* "==" */,-40 , 31/* "!=" */,-40 , 34/* ">" */,-40 , 35/* ">=" */,-40 , 32/* "<" */,-40 , 33/* "<=" */,-40 , 29/* "&&" */,-40 , 28/* "||" */,-40 , 48/* "(" */,-40 , 19/* "!" */,-40 , 22/* "Number" */,-40 , 21/* "String" */,-40 , 25/* "<-" */,-40 , 45/* "`" */,-40 , 46/* "Escape" */,-40 , 47/* "Hash" */,-40 , 4/* "Function" */,-40 , 17/* "{" */,-40 , 14/* "Let" */,-40 , 9/* "Switch" */,-40 , 10/* "While" */,-40 , 12/* "Foreach" */,-40 , 20/* "Identifier" */,-40 , 16/* "?" */,-40 , 26/* "|||" */,-40 , 27/* "||||" */,-40 , 36/* "~" */,-40 , 42/* "[" */,-40 , 41/* "Dot" */,-40 , 23/* ";" */,-40 , 49/* ")" */,-40 , 8/* ":" */,-40 , 43/* "]" */,-40 , 5/* "," */,-40 , 7/* "=>" */,-40 , 13/* "As" */,-40 , 18/* "}" */,-40 , 15/* "In" */,-40 , 2/* "|" */,-40 ),
    /* State 25 */ new Array( 20/* "Identifier" */,65 , 6/* "Dollar" */,66 , 3/* "@" */,67 , 22/* "Number" */,68 ),
    /* State 26 */ new Array( 38/* "-" */,3 , 48/* "(" */,4 , 19/* "!" */,5 , 22/* "Number" */,6 , 21/* "String" */,7 , 25/* "<-" */,9 , 45/* "`" */,11 , 46/* "Escape" */,12 , 47/* "Hash" */,13 , 4/* "Function" */,14 , 17/* "{" */,15 , 14/* "Let" */,16 , 20/* "Identifier" */,18 , 16/* "?" */,20 , 9/* "Switch" */,21 , 10/* "While" */,22 , 12/* "Foreach" */,23 ),
    /* State 27 */ new Array( 38/* "-" */,3 , 48/* "(" */,4 , 19/* "!" */,5 , 22/* "Number" */,6 , 21/* "String" */,7 , 25/* "<-" */,9 , 45/* "`" */,11 , 46/* "Escape" */,12 , 47/* "Hash" */,13 , 4/* "Function" */,14 , 17/* "{" */,15 , 14/* "Let" */,16 , 20/* "Identifier" */,18 , 16/* "?" */,20 , 9/* "Switch" */,21 , 10/* "While" */,22 , 12/* "Foreach" */,23 ),
    /* State 28 */ new Array( 49/* ")" */,71 , 38/* "-" */,3 , 48/* "(" */,4 , 19/* "!" */,5 , 22/* "Number" */,6 , 21/* "String" */,7 , 25/* "<-" */,9 , 45/* "`" */,11 , 46/* "Escape" */,12 , 47/* "Hash" */,13 , 4/* "Function" */,14 , 17/* "{" */,15 , 14/* "Let" */,16 , 20/* "Identifier" */,18 , 16/* "?" */,20 , 9/* "Switch" */,21 , 10/* "While" */,22 , 12/* "Foreach" */,23 ),
    /* State 29 */ new Array( 38/* "-" */,3 , 48/* "(" */,4 , 19/* "!" */,5 , 22/* "Number" */,6 , 21/* "String" */,7 , 25/* "<-" */,9 , 45/* "`" */,11 , 46/* "Escape" */,12 , 47/* "Hash" */,13 , 4/* "Function" */,14 , 17/* "{" */,15 , 14/* "Let" */,16 , 20/* "Identifier" */,18 , 16/* "?" */,20 , 9/* "Switch" */,21 , 10/* "While" */,22 , 12/* "Foreach" */,23 ),
    /* State 30 */ new Array( 38/* "-" */,3 , 48/* "(" */,4 , 19/* "!" */,5 , 22/* "Number" */,6 , 21/* "String" */,7 , 25/* "<-" */,9 , 45/* "`" */,11 , 46/* "Escape" */,12 , 47/* "Hash" */,13 , 4/* "Function" */,14 , 17/* "{" */,15 , 14/* "Let" */,16 , 20/* "Identifier" */,18 , 16/* "?" */,20 , 9/* "Switch" */,21 , 10/* "While" */,22 , 12/* "Foreach" */,23 ),
    /* State 31 */ new Array( 38/* "-" */,3 , 48/* "(" */,4 , 19/* "!" */,5 , 22/* "Number" */,6 , 21/* "String" */,7 , 25/* "<-" */,9 , 45/* "`" */,11 , 46/* "Escape" */,12 , 47/* "Hash" */,13 , 4/* "Function" */,14 , 17/* "{" */,15 , 14/* "Let" */,16 , 20/* "Identifier" */,18 , 16/* "?" */,20 , 9/* "Switch" */,21 , 10/* "While" */,22 , 12/* "Foreach" */,23 ),
    /* State 32 */ new Array( 38/* "-" */,3 , 48/* "(" */,4 , 19/* "!" */,5 , 22/* "Number" */,6 , 21/* "String" */,7 , 25/* "<-" */,9 , 45/* "`" */,11 , 46/* "Escape" */,12 , 47/* "Hash" */,13 , 4/* "Function" */,14 , 17/* "{" */,15 , 14/* "Let" */,16 , 20/* "Identifier" */,18 , 16/* "?" */,20 , 9/* "Switch" */,21 , 10/* "While" */,22 , 12/* "Foreach" */,23 ),
    /* State 33 */ new Array( 38/* "-" */,3 , 48/* "(" */,4 , 19/* "!" */,5 , 22/* "Number" */,6 , 21/* "String" */,7 , 25/* "<-" */,9 , 45/* "`" */,11 , 46/* "Escape" */,12 , 47/* "Hash" */,13 , 4/* "Function" */,14 , 17/* "{" */,15 , 14/* "Let" */,16 , 20/* "Identifier" */,18 , 16/* "?" */,20 , 9/* "Switch" */,21 , 10/* "While" */,22 , 12/* "Foreach" */,23 ),
    /* State 34 */ new Array( 38/* "-" */,3 , 48/* "(" */,4 , 19/* "!" */,5 , 22/* "Number" */,6 , 21/* "String" */,7 , 25/* "<-" */,9 , 45/* "`" */,11 , 46/* "Escape" */,12 , 47/* "Hash" */,13 , 4/* "Function" */,14 , 17/* "{" */,15 , 14/* "Let" */,16 , 20/* "Identifier" */,18 , 16/* "?" */,20 , 9/* "Switch" */,21 , 10/* "While" */,22 , 12/* "Foreach" */,23 ),
    /* State 35 */ new Array( 38/* "-" */,3 , 48/* "(" */,4 , 19/* "!" */,5 , 22/* "Number" */,6 , 21/* "String" */,7 , 25/* "<-" */,9 , 45/* "`" */,11 , 46/* "Escape" */,12 , 47/* "Hash" */,13 , 4/* "Function" */,14 , 17/* "{" */,15 , 14/* "Let" */,16 , 20/* "Identifier" */,18 , 16/* "?" */,20 , 9/* "Switch" */,21 , 10/* "While" */,22 , 12/* "Foreach" */,23 ),
    /* State 36 */ new Array( 38/* "-" */,3 , 48/* "(" */,4 , 19/* "!" */,5 , 22/* "Number" */,6 , 21/* "String" */,7 , 25/* "<-" */,9 , 45/* "`" */,11 , 46/* "Escape" */,12 , 47/* "Hash" */,13 , 4/* "Function" */,14 , 17/* "{" */,15 , 14/* "Let" */,16 , 20/* "Identifier" */,18 , 16/* "?" */,20 , 9/* "Switch" */,21 , 10/* "While" */,22 , 12/* "Foreach" */,23 ),
    /* State 37 */ new Array( 38/* "-" */,3 , 48/* "(" */,4 , 19/* "!" */,5 , 22/* "Number" */,6 , 21/* "String" */,7 , 25/* "<-" */,9 , 45/* "`" */,11 , 46/* "Escape" */,12 , 47/* "Hash" */,13 , 4/* "Function" */,14 , 17/* "{" */,15 , 14/* "Let" */,16 , 20/* "Identifier" */,18 , 16/* "?" */,20 , 9/* "Switch" */,21 , 10/* "While" */,22 , 12/* "Foreach" */,23 ),
    /* State 38 */ new Array( 38/* "-" */,3 , 48/* "(" */,4 , 19/* "!" */,5 , 22/* "Number" */,6 , 21/* "String" */,7 , 25/* "<-" */,9 , 45/* "`" */,11 , 46/* "Escape" */,12 , 47/* "Hash" */,13 , 4/* "Function" */,14 , 17/* "{" */,15 , 14/* "Let" */,16 , 20/* "Identifier" */,18 , 16/* "?" */,20 , 9/* "Switch" */,21 , 10/* "While" */,22 , 12/* "Foreach" */,23 ),
    /* State 39 */ new Array( 38/* "-" */,3 , 48/* "(" */,4 , 19/* "!" */,5 , 22/* "Number" */,6 , 21/* "String" */,7 , 25/* "<-" */,9 , 45/* "`" */,11 , 46/* "Escape" */,12 , 47/* "Hash" */,13 , 4/* "Function" */,14 , 17/* "{" */,15 , 14/* "Let" */,16 , 20/* "Identifier" */,18 , 16/* "?" */,20 , 9/* "Switch" */,21 , 10/* "While" */,22 , 12/* "Foreach" */,23 ),
    /* State 40 */ new Array( 38/* "-" */,3 , 48/* "(" */,4 , 19/* "!" */,5 , 22/* "Number" */,6 , 21/* "String" */,7 , 25/* "<-" */,9 , 45/* "`" */,11 , 46/* "Escape" */,12 , 47/* "Hash" */,13 , 4/* "Function" */,14 , 17/* "{" */,15 , 14/* "Let" */,16 , 20/* "Identifier" */,18 , 16/* "?" */,20 , 9/* "Switch" */,21 , 10/* "While" */,22 , 12/* "Foreach" */,23 ),
    /* State 41 */ new Array( 38/* "-" */,3 , 48/* "(" */,4 , 19/* "!" */,5 , 22/* "Number" */,6 , 21/* "String" */,7 , 25/* "<-" */,9 , 45/* "`" */,11 , 46/* "Escape" */,12 , 47/* "Hash" */,13 , 4/* "Function" */,14 , 17/* "{" */,15 , 14/* "Let" */,16 , 20/* "Identifier" */,18 , 16/* "?" */,20 , 9/* "Switch" */,21 , 10/* "While" */,22 , 12/* "Foreach" */,23 ),
    /* State 42 */ new Array( 38/* "-" */,3 , 48/* "(" */,4 , 19/* "!" */,5 , 22/* "Number" */,6 , 21/* "String" */,7 , 25/* "<-" */,9 , 45/* "`" */,11 , 46/* "Escape" */,12 , 47/* "Hash" */,13 , 4/* "Function" */,14 , 17/* "{" */,15 , 14/* "Let" */,16 , 20/* "Identifier" */,18 , 16/* "?" */,20 , 9/* "Switch" */,21 , 10/* "While" */,22 , 12/* "Foreach" */,23 ),
    /* State 43 */ new Array( 23/* ";" */,-6 , 41/* "Dot" */,25 , 42/* "[" */,26 , 36/* "~" */,-6 , 48/* "(" */,28 , 27/* "||||" */,-6 , 26/* "|||" */,-6 , 28/* "||" */,-6 , 29/* "&&" */,-6 , 33/* "<=" */,-6 , 32/* "<" */,-6 , 35/* ">=" */,-6 , 34/* ">" */,-6 , 31/* "!=" */,-6 , 30/* "==" */,-6 , 40/* "/" */,-6 , 39/* "*" */,-6 , 38/* "-" */,-6 , 37/* "+" */,-6 , 63/* "$" */,-6 , 49/* ")" */,-6 , 8/* ":" */,-6 , 43/* "]" */,-6 , 5/* "," */,-6 , 7/* "=>" */,-6 , 13/* "As" */,-6 , 18/* "}" */,-6 , 15/* "In" */,-6 , 2/* "|" */,-6 ),
    /* State 44 */ new Array( 23/* ";" */,24 , 41/* "Dot" */,25 , 42/* "[" */,26 , 36/* "~" */,27 , 48/* "(" */,28 , 27/* "||||" */,29 , 26/* "|||" */,30 , 28/* "||" */,31 , 29/* "&&" */,32 , 33/* "<=" */,33 , 32/* "<" */,34 , 35/* ">=" */,35 , 34/* ">" */,36 , 31/* "!=" */,37 , 30/* "==" */,38 , 40/* "/" */,39 , 39/* "*" */,40 , 38/* "-" */,41 , 37/* "+" */,42 , 49/* ")" */,88 ),
    /* State 45 */ new Array( 23/* ";" */,-16 , 41/* "Dot" */,25 , 42/* "[" */,26 , 36/* "~" */,27 , 48/* "(" */,28 , 27/* "||||" */,-16 , 26/* "|||" */,-16 , 28/* "||" */,-16 , 29/* "&&" */,-16 , 33/* "<=" */,33 , 32/* "<" */,34 , 35/* ">=" */,35 , 34/* ">" */,36 , 31/* "!=" */,37 , 30/* "==" */,38 , 40/* "/" */,39 , 39/* "*" */,40 , 38/* "-" */,41 , 37/* "+" */,42 , 63/* "$" */,-16 , 49/* ")" */,-16 , 8/* ":" */,-16 , 43/* "]" */,-16 , 5/* "," */,-16 , 7/* "=>" */,-16 , 13/* "As" */,-16 , 18/* "}" */,-16 , 15/* "In" */,-16 , 2/* "|" */,-16 ),
    /* State 46 */ new Array( 38/* "-" */,3 , 48/* "(" */,4 , 19/* "!" */,5 , 22/* "Number" */,6 , 21/* "String" */,7 , 25/* "<-" */,9 , 45/* "`" */,11 , 46/* "Escape" */,12 , 47/* "Hash" */,13 , 4/* "Function" */,14 , 17/* "{" */,15 , 14/* "Let" */,16 , 20/* "Identifier" */,18 , 16/* "?" */,20 , 9/* "Switch" */,21 , 10/* "While" */,22 , 12/* "Foreach" */,23 ),
    /* State 47 */ new Array( 38/* "-" */,3 , 48/* "(" */,4 , 19/* "!" */,5 , 22/* "Number" */,6 , 21/* "String" */,7 , 25/* "<-" */,9 , 45/* "`" */,11 , 46/* "Escape" */,12 , 47/* "Hash" */,13 , 4/* "Function" */,14 , 17/* "{" */,15 , 14/* "Let" */,16 , 20/* "Identifier" */,18 , 16/* "?" */,20 , 9/* "Switch" */,21 , 10/* "While" */,22 , 12/* "Foreach" */,23 ),
    /* State 48 */ new Array( 23/* ";" */,-22 , 41/* "Dot" */,25 , 42/* "[" */,26 , 36/* "~" */,27 , 48/* "(" */,28 , 27/* "||||" */,29 , 26/* "|||" */,30 , 28/* "||" */,31 , 29/* "&&" */,32 , 33/* "<=" */,33 , 32/* "<" */,34 , 35/* ">=" */,35 , 34/* ">" */,36 , 31/* "!=" */,37 , 30/* "==" */,38 , 40/* "/" */,39 , 39/* "*" */,40 , 38/* "-" */,41 , 37/* "+" */,42 , 63/* "$" */,-22 , 49/* ")" */,-22 , 8/* ":" */,-22 , 43/* "]" */,-22 , 5/* "," */,-22 , 7/* "=>" */,-22 , 13/* "As" */,-22 , 18/* "}" */,-22 , 15/* "In" */,-22 , 2/* "|" */,-22 ),
    /* State 49 */ new Array( 63/* "$" */,-38 , 37/* "+" */,-38 , 38/* "-" */,-38 , 39/* "*" */,-38 , 40/* "/" */,-38 , 30/* "==" */,-38 , 31/* "!=" */,-38 , 34/* ">" */,-38 , 35/* ">=" */,-38 , 32/* "<" */,-38 , 33/* "<=" */,-38 , 29/* "&&" */,-38 , 28/* "||" */,-38 , 48/* "(" */,-38 , 19/* "!" */,-38 , 22/* "Number" */,-38 , 21/* "String" */,-38 , 25/* "<-" */,-38 , 45/* "`" */,-38 , 46/* "Escape" */,-38 , 47/* "Hash" */,-38 , 4/* "Function" */,-38 , 17/* "{" */,-38 , 14/* "Let" */,-38 , 9/* "Switch" */,-38 , 10/* "While" */,-38 , 12/* "Foreach" */,-38 , 20/* "Identifier" */,-38 , 16/* "?" */,-38 , 26/* "|||" */,-38 , 27/* "||||" */,-38 , 36/* "~" */,-38 , 42/* "[" */,-38 , 41/* "Dot" */,-38 , 23/* ";" */,-38 , 49/* ")" */,-38 , 8/* ":" */,-38 , 43/* "]" */,-38 , 5/* "," */,-38 , 7/* "=>" */,-38 , 13/* "As" */,-38 , 18/* "}" */,-38 , 15/* "In" */,-38 , 2/* "|" */,-38 ),
    /* State 50 */ new Array( 41/* "Dot" */,25 , 42/* "[" */,26 , 36/* "~" */,27 , 48/* "(" */,28 , 27/* "||||" */,29 , 26/* "|||" */,30 , 28/* "||" */,31 , 29/* "&&" */,32 , 33/* "<=" */,33 , 32/* "<" */,34 , 35/* ">=" */,35 , 34/* ">" */,36 , 31/* "!=" */,37 , 30/* "==" */,38 , 40/* "/" */,39 , 39/* "*" */,40 , 38/* "-" */,41 , 37/* "+" */,42 , 23/* ";" */,24 ),
    /* State 51 */ new Array( 23/* ";" */,-26 , 41/* "Dot" */,-26 , 42/* "[" */,-26 , 36/* "~" */,-26 , 48/* "(" */,28 , 27/* "||||" */,-26 , 26/* "|||" */,-26 , 28/* "||" */,-26 , 29/* "&&" */,-26 , 33/* "<=" */,-26 , 32/* "<" */,-26 , 35/* ">=" */,-26 , 34/* ">" */,-26 , 31/* "!=" */,-26 , 30/* "==" */,-26 , 40/* "/" */,-26 , 39/* "*" */,-26 , 38/* "-" */,-26 , 37/* "+" */,-26 , 63/* "$" */,-26 , 49/* ")" */,-26 , 8/* ":" */,-26 , 43/* "]" */,-26 , 5/* "," */,-26 , 7/* "=>" */,-26 , 13/* "As" */,-26 , 18/* "}" */,-26 , 15/* "In" */,-26 , 2/* "|" */,-26 ),
    /* State 52 */ new Array( 23/* ";" */,-27 , 41/* "Dot" */,-27 , 42/* "[" */,-27 , 36/* "~" */,-27 , 48/* "(" */,28 , 27/* "||||" */,-27 , 26/* "|||" */,-27 , 28/* "||" */,-27 , 29/* "&&" */,-27 , 33/* "<=" */,-27 , 32/* "<" */,-27 , 35/* ">=" */,-27 , 34/* ">" */,-27 , 31/* "!=" */,-27 , 30/* "==" */,-27 , 40/* "/" */,-27 , 39/* "*" */,-27 , 38/* "-" */,-27 , 37/* "+" */,-27 , 63/* "$" */,-27 , 49/* ")" */,-27 , 8/* ":" */,-27 , 43/* "]" */,-27 , 5/* "," */,-27 , 7/* "=>" */,-27 , 13/* "As" */,-27 , 18/* "}" */,-27 , 15/* "In" */,-27 , 2/* "|" */,-27 ),
    /* State 53 */ new Array( 23/* ";" */,-28 , 41/* "Dot" */,-28 , 42/* "[" */,-28 , 36/* "~" */,-28 , 48/* "(" */,28 , 27/* "||||" */,-28 , 26/* "|||" */,-28 , 28/* "||" */,-28 , 29/* "&&" */,-28 , 33/* "<=" */,-28 , 32/* "<" */,-28 , 35/* ">=" */,-28 , 34/* ">" */,-28 , 31/* "!=" */,-28 , 30/* "==" */,-28 , 40/* "/" */,-28 , 39/* "*" */,-28 , 38/* "-" */,-28 , 37/* "+" */,-28 , 63/* "$" */,-28 , 49/* ")" */,-28 , 8/* ":" */,-28 , 43/* "]" */,-28 , 5/* "," */,-28 , 7/* "=>" */,-28 , 13/* "As" */,-28 , 18/* "}" */,-28 , 15/* "In" */,-28 , 2/* "|" */,-28 ),
    /* State 54 */ new Array( 49/* ")" */,91 , 20/* "Identifier" */,93 ),
    /* State 55 */ new Array( 63/* "$" */,-35 , 37/* "+" */,-35 , 38/* "-" */,-35 , 39/* "*" */,-35 , 40/* "/" */,-35 , 30/* "==" */,-35 , 31/* "!=" */,-35 , 34/* ">" */,-35 , 35/* ">=" */,-35 , 32/* "<" */,-35 , 33/* "<=" */,-35 , 29/* "&&" */,-35 , 28/* "||" */,-35 , 26/* "|||" */,-35 , 27/* "||||" */,-35 , 48/* "(" */,-35 , 36/* "~" */,-35 , 42/* "[" */,-35 , 41/* "Dot" */,-35 , 23/* ";" */,-35 , 49/* ")" */,-35 , 8/* ":" */,-35 , 43/* "]" */,-35 , 5/* "," */,-35 , 7/* "=>" */,-35 , 13/* "As" */,-35 , 18/* "}" */,-35 , 15/* "In" */,-35 , 2/* "|" */,-35 ),
    /* State 56 */ new Array( 5/* "," */,94 , 18/* "}" */,95 ),
    /* State 57 */ new Array( 18/* "}" */,-49 , 5/* "," */,-49 ),
    /* State 58 */ new Array( 23/* ";" */,24 , 41/* "Dot" */,25 , 42/* "[" */,26 , 36/* "~" */,27 , 48/* "(" */,28 , 27/* "||||" */,29 , 26/* "|||" */,30 , 28/* "||" */,31 , 29/* "&&" */,32 , 33/* "<=" */,33 , 32/* "<" */,34 , 35/* ">=" */,35 , 34/* ">" */,36 , 31/* "!=" */,37 , 30/* "==" */,38 , 40/* "/" */,39 , 39/* "*" */,40 , 38/* "-" */,41 , 37/* "+" */,42 , 8/* ":" */,96 ),
    /* State 59 */ new Array( 24/* "=" */,97 ),
    /* State 60 */ new Array( 63/* "$" */,-62 , 37/* "+" */,-62 , 38/* "-" */,-62 , 39/* "*" */,-62 , 40/* "/" */,-62 , 30/* "==" */,-62 , 31/* "!=" */,-62 , 34/* ">" */,-62 , 35/* ">=" */,-62 , 32/* "<" */,-62 , 33/* "<=" */,-62 , 29/* "&&" */,-62 , 28/* "||" */,-62 , 26/* "|||" */,-62 , 27/* "||||" */,-62 , 48/* "(" */,-62 , 36/* "~" */,-62 , 42/* "[" */,-62 , 41/* "Dot" */,-62 , 23/* ";" */,-62 , 49/* ")" */,-62 , 8/* ":" */,-62 , 24/* "=" */,-62 , 43/* "]" */,-62 , 5/* "," */,-62 , 7/* "=>" */,-62 , 13/* "As" */,-62 , 18/* "}" */,-62 , 15/* "In" */,-62 , 2/* "|" */,-62 ),
    /* State 61 */ new Array( 38/* "-" */,3 , 48/* "(" */,4 , 19/* "!" */,5 , 22/* "Number" */,6 , 21/* "String" */,7 , 25/* "<-" */,9 , 45/* "`" */,11 , 46/* "Escape" */,12 , 47/* "Hash" */,13 , 4/* "Function" */,14 , 17/* "{" */,15 , 14/* "Let" */,16 , 20/* "Identifier" */,18 , 16/* "?" */,20 , 9/* "Switch" */,21 , 10/* "While" */,22 , 12/* "Foreach" */,23 ),
    /* State 62 */ new Array( 38/* "-" */,3 , 48/* "(" */,4 , 19/* "!" */,5 , 22/* "Number" */,6 , 21/* "String" */,7 , 25/* "<-" */,9 , 45/* "`" */,11 , 46/* "Escape" */,12 , 47/* "Hash" */,13 , 4/* "Function" */,14 , 17/* "{" */,15 , 14/* "Let" */,16 , 20/* "Identifier" */,18 , 16/* "?" */,20 , 9/* "Switch" */,21 , 10/* "While" */,22 , 12/* "Foreach" */,23 ),
    /* State 63 */ new Array( 38/* "-" */,3 , 48/* "(" */,4 , 19/* "!" */,5 , 22/* "Number" */,6 , 21/* "String" */,7 , 25/* "<-" */,9 , 45/* "`" */,11 , 46/* "Escape" */,12 , 47/* "Hash" */,13 , 4/* "Function" */,14 , 17/* "{" */,15 , 14/* "Let" */,16 , 20/* "Identifier" */,18 , 16/* "?" */,20 , 9/* "Switch" */,21 , 10/* "While" */,22 , 12/* "Foreach" */,23 ),
    /* State 64 */ new Array( 63/* "$" */,-61 , 37/* "+" */,-61 , 38/* "-" */,-61 , 39/* "*" */,-61 , 40/* "/" */,-61 , 30/* "==" */,-61 , 31/* "!=" */,-61 , 34/* ">" */,-61 , 35/* ">=" */,-61 , 32/* "<" */,-61 , 33/* "<=" */,-61 , 29/* "&&" */,-61 , 28/* "||" */,-61 , 24/* "=" */,-61 , 25/* "<-" */,-61 , 26/* "|||" */,-61 , 27/* "||||" */,-61 , 48/* "(" */,-61 , 36/* "~" */,-61 , 42/* "[" */,-61 , 41/* "Dot" */,-61 , 23/* ";" */,-61 , 49/* ")" */,-61 , 8/* ":" */,-61 , 43/* "]" */,-61 , 5/* "," */,-61 , 7/* "=>" */,-61 , 13/* "As" */,-61 , 18/* "}" */,-61 , 15/* "In" */,-61 , 2/* "|" */,-61 ),
    /* State 65 */ new Array( 63/* "$" */,-51 , 37/* "+" */,-51 , 38/* "-" */,-51 , 39/* "*" */,-51 , 40/* "/" */,-51 , 30/* "==" */,-51 , 31/* "!=" */,-51 , 34/* ">" */,-51 , 35/* ">=" */,-51 , 32/* "<" */,-51 , 33/* "<=" */,-51 , 29/* "&&" */,-51 , 28/* "||" */,-51 , 24/* "=" */,-51 , 25/* "<-" */,-51 , 26/* "|||" */,-51 , 27/* "||||" */,-51 , 48/* "(" */,-51 , 36/* "~" */,-51 , 42/* "[" */,-51 , 41/* "Dot" */,-51 , 23/* ";" */,-51 , 49/* ")" */,-51 , 8/* ":" */,-51 , 43/* "]" */,-51 , 5/* "," */,-51 , 7/* "=>" */,-51 , 13/* "As" */,-51 , 18/* "}" */,-51 , 15/* "In" */,-51 , 2/* "|" */,-51 ),
    /* State 66 */ new Array( 63/* "$" */,-52 , 37/* "+" */,-52 , 38/* "-" */,-52 , 39/* "*" */,-52 , 40/* "/" */,-52 , 30/* "==" */,-52 , 31/* "!=" */,-52 , 34/* ">" */,-52 , 35/* ">=" */,-52 , 32/* "<" */,-52 , 33/* "<=" */,-52 , 29/* "&&" */,-52 , 28/* "||" */,-52 , 24/* "=" */,-52 , 25/* "<-" */,-52 , 26/* "|||" */,-52 , 27/* "||||" */,-52 , 48/* "(" */,-52 , 36/* "~" */,-52 , 42/* "[" */,-52 , 41/* "Dot" */,-52 , 23/* ";" */,-52 , 49/* ")" */,-52 , 8/* ":" */,-52 , 43/* "]" */,-52 , 5/* "," */,-52 , 7/* "=>" */,-52 , 13/* "As" */,-52 , 18/* "}" */,-52 , 15/* "In" */,-52 , 2/* "|" */,-52 ),
    /* State 67 */ new Array( 20/* "Identifier" */,103 ),
    /* State 68 */ new Array( 63/* "$" */,-54 , 37/* "+" */,-54 , 38/* "-" */,-54 , 39/* "*" */,-54 , 40/* "/" */,-54 , 30/* "==" */,-54 , 31/* "!=" */,-54 , 34/* ">" */,-54 , 35/* ">=" */,-54 , 32/* "<" */,-54 , 33/* "<=" */,-54 , 29/* "&&" */,-54 , 28/* "||" */,-54 , 24/* "=" */,-54 , 25/* "<-" */,-54 , 26/* "|||" */,-54 , 27/* "||||" */,-54 , 48/* "(" */,-54 , 36/* "~" */,-54 , 42/* "[" */,-54 , 41/* "Dot" */,-54 , 23/* ";" */,-54 , 49/* ")" */,-54 , 8/* ":" */,-54 , 43/* "]" */,-54 , 5/* "," */,-54 , 7/* "=>" */,-54 , 13/* "As" */,-54 , 18/* "}" */,-54 , 15/* "In" */,-54 , 2/* "|" */,-54 ),
    /* State 69 */ new Array( 23/* ";" */,24 , 41/* "Dot" */,25 , 42/* "[" */,26 , 36/* "~" */,27 , 48/* "(" */,28 , 27/* "||||" */,29 , 26/* "|||" */,30 , 28/* "||" */,31 , 29/* "&&" */,32 , 33/* "<=" */,33 , 32/* "<" */,34 , 35/* ">=" */,35 , 34/* ">" */,36 , 31/* "!=" */,37 , 30/* "==" */,38 , 40/* "/" */,39 , 39/* "*" */,40 , 38/* "-" */,41 , 37/* "+" */,42 , 43/* "]" */,104 ),
    /* State 70 */ new Array( 23/* ";" */,-33 , 41/* "Dot" */,25 , 42/* "[" */,26 , 36/* "~" */,-33 , 48/* "(" */,28 , 27/* "||||" */,-33 , 26/* "|||" */,-33 , 28/* "||" */,-33 , 29/* "&&" */,-33 , 33/* "<=" */,-33 , 32/* "<" */,-33 , 35/* ">=" */,-33 , 34/* ">" */,-33 , 31/* "!=" */,-33 , 30/* "==" */,-33 , 40/* "/" */,39 , 39/* "*" */,40 , 38/* "-" */,41 , 37/* "+" */,42 , 63/* "$" */,-33 , 49/* ")" */,-33 , 8/* ":" */,-33 , 43/* "]" */,-33 , 5/* "," */,-33 , 7/* "=>" */,-33 , 13/* "As" */,-33 , 18/* "}" */,-33 , 15/* "In" */,-33 , 2/* "|" */,-33 ),
    /* State 71 */ new Array( 63/* "$" */,-31 , 37/* "+" */,-31 , 38/* "-" */,-31 , 39/* "*" */,-31 , 40/* "/" */,-31 , 30/* "==" */,-31 , 31/* "!=" */,-31 , 34/* ">" */,-31 , 35/* ">=" */,-31 , 32/* "<" */,-31 , 33/* "<=" */,-31 , 29/* "&&" */,-31 , 28/* "||" */,-31 , 26/* "|||" */,-31 , 27/* "||||" */,-31 , 48/* "(" */,-31 , 36/* "~" */,-31 , 42/* "[" */,-31 , 41/* "Dot" */,-31 , 23/* ";" */,-31 , 49/* ")" */,-31 , 8/* ":" */,-31 , 43/* "]" */,-31 , 5/* "," */,-31 , 7/* "=>" */,-31 , 13/* "As" */,-31 , 18/* "}" */,-31 , 15/* "In" */,-31 , 2/* "|" */,-31 ),
    /* State 72 */ new Array( 5/* "," */,105 , 49/* ")" */,106 ),
    /* State 73 */ new Array( 23/* ";" */,24 , 41/* "Dot" */,25 , 42/* "[" */,26 , 36/* "~" */,27 , 48/* "(" */,28 , 27/* "||||" */,29 , 26/* "|||" */,30 , 28/* "||" */,31 , 29/* "&&" */,32 , 33/* "<=" */,33 , 32/* "<" */,34 , 35/* ">=" */,35 , 34/* ">" */,36 , 31/* "!=" */,37 , 30/* "==" */,38 , 40/* "/" */,39 , 39/* "*" */,40 , 38/* "-" */,41 , 37/* "+" */,42 , 49/* ")" */,-56 , 5/* "," */,-56 ),
    /* State 74 */ new Array( 23/* ";" */,-25 , 41/* "Dot" */,25 , 42/* "[" */,26 , 36/* "~" */,27 , 48/* "(" */,28 , 27/* "||||" */,-25 , 26/* "|||" */,-25 , 28/* "||" */,31 , 29/* "&&" */,32 , 33/* "<=" */,33 , 32/* "<" */,34 , 35/* ">=" */,35 , 34/* ">" */,36 , 31/* "!=" */,37 , 30/* "==" */,38 , 40/* "/" */,39 , 39/* "*" */,40 , 38/* "-" */,41 , 37/* "+" */,42 , 63/* "$" */,-25 , 49/* ")" */,-25 , 8/* ":" */,-25 , 43/* "]" */,-25 , 5/* "," */,-25 , 7/* "=>" */,-25 , 13/* "As" */,-25 , 18/* "}" */,-25 , 15/* "In" */,-25 , 2/* "|" */,-25 ),
    /* State 75 */ new Array( 23/* ";" */,-24 , 41/* "Dot" */,25 , 42/* "[" */,26 , 36/* "~" */,27 , 48/* "(" */,28 , 27/* "||||" */,-24 , 26/* "|||" */,-24 , 28/* "||" */,31 , 29/* "&&" */,32 , 33/* "<=" */,33 , 32/* "<" */,34 , 35/* ">=" */,35 , 34/* ">" */,36 , 31/* "!=" */,37 , 30/* "==" */,38 , 40/* "/" */,39 , 39/* "*" */,40 , 38/* "-" */,41 , 37/* "+" */,42 , 63/* "$" */,-24 , 49/* ")" */,-24 , 8/* ":" */,-24 , 43/* "]" */,-24 , 5/* "," */,-24 , 7/* "=>" */,-24 , 13/* "As" */,-24 , 18/* "}" */,-24 , 15/* "In" */,-24 , 2/* "|" */,-24 ),
    /* State 76 */ new Array( 23/* ";" */,-15 , 41/* "Dot" */,25 , 42/* "[" */,26 , 36/* "~" */,27 , 48/* "(" */,28 , 27/* "||||" */,-15 , 26/* "|||" */,-15 , 28/* "||" */,-15 , 29/* "&&" */,32 , 33/* "<=" */,33 , 32/* "<" */,34 , 35/* ">=" */,35 , 34/* ">" */,36 , 31/* "!=" */,37 , 30/* "==" */,38 , 40/* "/" */,39 , 39/* "*" */,40 , 38/* "-" */,41 , 37/* "+" */,42 , 63/* "$" */,-15 , 49/* ")" */,-15 , 8/* ":" */,-15 , 43/* "]" */,-15 , 5/* "," */,-15 , 7/* "=>" */,-15 , 13/* "As" */,-15 , 18/* "}" */,-15 , 15/* "In" */,-15 , 2/* "|" */,-15 ),
    /* State 77 */ new Array( 23/* ";" */,-14 , 41/* "Dot" */,25 , 42/* "[" */,26 , 36/* "~" */,27 , 48/* "(" */,28 , 27/* "||||" */,-14 , 26/* "|||" */,-14 , 28/* "||" */,-14 , 29/* "&&" */,-14 , 33/* "<=" */,33 , 32/* "<" */,34 , 35/* ">=" */,35 , 34/* ">" */,36 , 31/* "!=" */,37 , 30/* "==" */,38 , 40/* "/" */,39 , 39/* "*" */,40 , 38/* "-" */,41 , 37/* "+" */,42 , 63/* "$" */,-14 , 49/* ")" */,-14 , 8/* ":" */,-14 , 43/* "]" */,-14 , 5/* "," */,-14 , 7/* "=>" */,-14 , 13/* "As" */,-14 , 18/* "}" */,-14 , 15/* "In" */,-14 , 2/* "|" */,-14 ),
    /* State 78 */ new Array( 23/* ";" */,-13 , 41/* "Dot" */,25 , 42/* "[" */,26 , 36/* "~" */,27 , 48/* "(" */,28 , 27/* "||||" */,-13 , 26/* "|||" */,-13 , 28/* "||" */,-13 , 29/* "&&" */,-13 , 33/* "<=" */,-13 , 32/* "<" */,-13 , 35/* ">=" */,-13 , 34/* ">" */,-13 , 31/* "!=" */,-13 , 30/* "==" */,-13 , 40/* "/" */,39 , 39/* "*" */,40 , 38/* "-" */,41 , 37/* "+" */,42 , 63/* "$" */,-13 , 49/* ")" */,-13 , 8/* ":" */,-13 , 43/* "]" */,-13 , 5/* "," */,-13 , 7/* "=>" */,-13 , 13/* "As" */,-13 , 18/* "}" */,-13 , 15/* "In" */,-13 , 2/* "|" */,-13 ),
    /* State 79 */ new Array( 23/* ";" */,-12 , 41/* "Dot" */,25 , 42/* "[" */,26 , 36/* "~" */,27 , 48/* "(" */,28 , 27/* "||||" */,-12 , 26/* "|||" */,-12 , 28/* "||" */,-12 , 29/* "&&" */,-12 , 33/* "<=" */,-12 , 32/* "<" */,-12 , 35/* ">=" */,-12 , 34/* ">" */,-12 , 31/* "!=" */,-12 , 30/* "==" */,-12 , 40/* "/" */,39 , 39/* "*" */,40 , 38/* "-" */,41 , 37/* "+" */,42 , 63/* "$" */,-12 , 49/* ")" */,-12 , 8/* ":" */,-12 , 43/* "]" */,-12 , 5/* "," */,-12 , 7/* "=>" */,-12 , 13/* "As" */,-12 , 18/* "}" */,-12 , 15/* "In" */,-12 , 2/* "|" */,-12 ),
    /* State 80 */ new Array( 23/* ";" */,-11 , 41/* "Dot" */,25 , 42/* "[" */,26 , 36/* "~" */,27 , 48/* "(" */,28 , 27/* "||||" */,-11 , 26/* "|||" */,-11 , 28/* "||" */,-11 , 29/* "&&" */,-11 , 33/* "<=" */,-11 , 32/* "<" */,-11 , 35/* ">=" */,-11 , 34/* ">" */,-11 , 31/* "!=" */,-11 , 30/* "==" */,-11 , 40/* "/" */,39 , 39/* "*" */,40 , 38/* "-" */,41 , 37/* "+" */,42 , 63/* "$" */,-11 , 49/* ")" */,-11 , 8/* ":" */,-11 , 43/* "]" */,-11 , 5/* "," */,-11 , 7/* "=>" */,-11 , 13/* "As" */,-11 , 18/* "}" */,-11 , 15/* "In" */,-11 , 2/* "|" */,-11 ),
    /* State 81 */ new Array( 23/* ";" */,-10 , 41/* "Dot" */,25 , 42/* "[" */,26 , 36/* "~" */,27 , 48/* "(" */,28 , 27/* "||||" */,-10 , 26/* "|||" */,-10 , 28/* "||" */,-10 , 29/* "&&" */,-10 , 33/* "<=" */,-10 , 32/* "<" */,-10 , 35/* ">=" */,-10 , 34/* ">" */,-10 , 31/* "!=" */,-10 , 30/* "==" */,-10 , 40/* "/" */,39 , 39/* "*" */,40 , 38/* "-" */,41 , 37/* "+" */,42 , 63/* "$" */,-10 , 49/* ")" */,-10 , 8/* ":" */,-10 , 43/* "]" */,-10 , 5/* "," */,-10 , 7/* "=>" */,-10 , 13/* "As" */,-10 , 18/* "}" */,-10 , 15/* "In" */,-10 , 2/* "|" */,-10 ),
    /* State 82 */ new Array( 23/* ";" */,-9 , 41/* "Dot" */,25 , 42/* "[" */,26 , 36/* "~" */,27 , 48/* "(" */,28 , 27/* "||||" */,-9 , 26/* "|||" */,-9 , 28/* "||" */,-9 , 29/* "&&" */,-9 , 33/* "<=" */,-9 , 32/* "<" */,-9 , 35/* ">=" */,-9 , 34/* ">" */,-9 , 31/* "!=" */,-9 , 30/* "==" */,-9 , 40/* "/" */,39 , 39/* "*" */,40 , 38/* "-" */,41 , 37/* "+" */,42 , 63/* "$" */,-9 , 49/* ")" */,-9 , 8/* ":" */,-9 , 43/* "]" */,-9 , 5/* "," */,-9 , 7/* "=>" */,-9 , 13/* "As" */,-9 , 18/* "}" */,-9 , 15/* "In" */,-9 , 2/* "|" */,-9 ),
    /* State 83 */ new Array( 23/* ";" */,-8 , 41/* "Dot" */,25 , 42/* "[" */,26 , 36/* "~" */,27 , 48/* "(" */,28 , 27/* "||||" */,-8 , 26/* "|||" */,-8 , 28/* "||" */,-8 , 29/* "&&" */,-8 , 33/* "<=" */,-8 , 32/* "<" */,-8 , 35/* ">=" */,-8 , 34/* ">" */,-8 , 31/* "!=" */,-8 , 30/* "==" */,-8 , 40/* "/" */,39 , 39/* "*" */,40 , 38/* "-" */,41 , 37/* "+" */,42 , 63/* "$" */,-8 , 49/* ")" */,-8 , 8/* ":" */,-8 , 43/* "]" */,-8 , 5/* "," */,-8 , 7/* "=>" */,-8 , 13/* "As" */,-8 , 18/* "}" */,-8 , 15/* "In" */,-8 , 2/* "|" */,-8 ),
    /* State 84 */ new Array( 23/* ";" */,-5 , 41/* "Dot" */,25 , 42/* "[" */,26 , 36/* "~" */,-5 , 48/* "(" */,28 , 27/* "||||" */,-5 , 26/* "|||" */,-5 , 28/* "||" */,-5 , 29/* "&&" */,-5 , 33/* "<=" */,-5 , 32/* "<" */,-5 , 35/* ">=" */,-5 , 34/* ">" */,-5 , 31/* "!=" */,-5 , 30/* "==" */,-5 , 40/* "/" */,-5 , 39/* "*" */,-5 , 38/* "-" */,-5 , 37/* "+" */,-5 , 63/* "$" */,-5 , 49/* ")" */,-5 , 8/* ":" */,-5 , 43/* "]" */,-5 , 5/* "," */,-5 , 7/* "=>" */,-5 , 13/* "As" */,-5 , 18/* "}" */,-5 , 15/* "In" */,-5 , 2/* "|" */,-5 ),
    /* State 85 */ new Array( 23/* ";" */,-4 , 41/* "Dot" */,25 , 42/* "[" */,26 , 36/* "~" */,-4 , 48/* "(" */,28 , 27/* "||||" */,-4 , 26/* "|||" */,-4 , 28/* "||" */,-4 , 29/* "&&" */,-4 , 33/* "<=" */,-4 , 32/* "<" */,-4 , 35/* ">=" */,-4 , 34/* ">" */,-4 , 31/* "!=" */,-4 , 30/* "==" */,-4 , 40/* "/" */,-4 , 39/* "*" */,-4 , 38/* "-" */,-4 , 37/* "+" */,-4 , 63/* "$" */,-4 , 49/* ")" */,-4 , 8/* ":" */,-4 , 43/* "]" */,-4 , 5/* "," */,-4 , 7/* "=>" */,-4 , 13/* "As" */,-4 , 18/* "}" */,-4 , 15/* "In" */,-4 , 2/* "|" */,-4 ),
    /* State 86 */ new Array( 23/* ";" */,-3 , 41/* "Dot" */,25 , 42/* "[" */,26 , 36/* "~" */,-3 , 48/* "(" */,28 , 27/* "||||" */,-3 , 26/* "|||" */,-3 , 28/* "||" */,-3 , 29/* "&&" */,-3 , 33/* "<=" */,-3 , 32/* "<" */,-3 , 35/* ">=" */,-3 , 34/* ">" */,-3 , 31/* "!=" */,-3 , 30/* "==" */,-3 , 40/* "/" */,39 , 39/* "*" */,40 , 38/* "-" */,-3 , 37/* "+" */,-3 , 63/* "$" */,-3 , 49/* ")" */,-3 , 8/* ":" */,-3 , 43/* "]" */,-3 , 5/* "," */,-3 , 7/* "=>" */,-3 , 13/* "As" */,-3 , 18/* "}" */,-3 , 15/* "In" */,-3 , 2/* "|" */,-3 ),
    /* State 87 */ new Array( 23/* ";" */,-2 , 41/* "Dot" */,25 , 42/* "[" */,26 , 36/* "~" */,-2 , 48/* "(" */,28 , 27/* "||||" */,-2 , 26/* "|||" */,-2 , 28/* "||" */,-2 , 29/* "&&" */,-2 , 33/* "<=" */,-2 , 32/* "<" */,-2 , 35/* ">=" */,-2 , 34/* ">" */,-2 , 31/* "!=" */,-2 , 30/* "==" */,-2 , 40/* "/" */,39 , 39/* "*" */,40 , 38/* "-" */,-2 , 37/* "+" */,-2 , 63/* "$" */,-2 , 49/* ")" */,-2 , 8/* ":" */,-2 , 43/* "]" */,-2 , 5/* "," */,-2 , 7/* "=>" */,-2 , 13/* "As" */,-2 , 18/* "}" */,-2 , 15/* "In" */,-2 , 2/* "|" */,-2 ),
    /* State 88 */ new Array( 63/* "$" */,-7 , 37/* "+" */,-7 , 38/* "-" */,-7 , 39/* "*" */,-7 , 40/* "/" */,-7 , 30/* "==" */,-7 , 31/* "!=" */,-7 , 34/* ">" */,-7 , 35/* ">=" */,-7 , 32/* "<" */,-7 , 33/* "<=" */,-7 , 29/* "&&" */,-7 , 28/* "||" */,-7 , 26/* "|||" */,-7 , 27/* "||||" */,-7 , 48/* "(" */,-7 , 36/* "~" */,-7 , 42/* "[" */,-7 , 41/* "Dot" */,-7 , 23/* ";" */,-7 , 49/* ")" */,-7 , 8/* ":" */,-7 , 43/* "]" */,-7 , 5/* "," */,-7 , 7/* "=>" */,-7 , 13/* "As" */,-7 , 18/* "}" */,-7 , 15/* "In" */,-7 , 2/* "|" */,-7 ),
    /* State 89 */ new Array( 23/* ";" */,-21 , 41/* "Dot" */,25 , 42/* "[" */,26 , 36/* "~" */,27 , 48/* "(" */,28 , 27/* "||||" */,29 , 26/* "|||" */,30 , 28/* "||" */,31 , 29/* "&&" */,32 , 33/* "<=" */,33 , 32/* "<" */,34 , 35/* ">=" */,35 , 34/* ">" */,36 , 31/* "!=" */,37 , 30/* "==" */,38 , 40/* "/" */,39 , 39/* "*" */,40 , 38/* "-" */,41 , 37/* "+" */,42 , 63/* "$" */,-21 , 49/* ")" */,-21 , 8/* ":" */,-21 , 43/* "]" */,-21 , 5/* "," */,-21 , 7/* "=>" */,-21 , 13/* "As" */,-21 , 18/* "}" */,-21 , 15/* "In" */,-21 , 2/* "|" */,-21 ),
    /* State 90 */ new Array( 23/* ";" */,-20 , 41/* "Dot" */,25 , 42/* "[" */,26 , 36/* "~" */,27 , 48/* "(" */,28 , 27/* "||||" */,29 , 26/* "|||" */,30 , 28/* "||" */,31 , 29/* "&&" */,32 , 33/* "<=" */,33 , 32/* "<" */,34 , 35/* ">=" */,35 , 34/* ">" */,36 , 31/* "!=" */,37 , 30/* "==" */,38 , 40/* "/" */,39 , 39/* "*" */,40 , 38/* "-" */,41 , 37/* "+" */,42 , 63/* "$" */,-20 , 49/* ")" */,-20 , 8/* ":" */,-20 , 43/* "]" */,-20 , 5/* "," */,-20 , 7/* "=>" */,-20 , 13/* "As" */,-20 , 18/* "}" */,-20 , 15/* "In" */,-20 , 2/* "|" */,-20 ),
    /* State 91 */ new Array( 17/* "{" */,107 ),
    /* State 92 */ new Array( 5/* "," */,108 , 49/* ")" */,109 ),
    /* State 93 */ new Array( 49/* ")" */,-58 , 5/* "," */,-58 ),
    /* State 94 */ new Array( 38/* "-" */,3 , 48/* "(" */,4 , 19/* "!" */,5 , 22/* "Number" */,6 , 21/* "String" */,7 , 25/* "<-" */,9 , 45/* "`" */,11 , 46/* "Escape" */,12 , 47/* "Hash" */,13 , 4/* "Function" */,14 , 17/* "{" */,15 , 14/* "Let" */,16 , 20/* "Identifier" */,18 , 16/* "?" */,20 , 9/* "Switch" */,21 , 10/* "While" */,22 , 12/* "Foreach" */,23 ),
    /* State 95 */ new Array( 63/* "$" */,-34 , 37/* "+" */,-34 , 38/* "-" */,-34 , 39/* "*" */,-34 , 40/* "/" */,-34 , 30/* "==" */,-34 , 31/* "!=" */,-34 , 34/* ">" */,-34 , 35/* ">=" */,-34 , 32/* "<" */,-34 , 33/* "<=" */,-34 , 29/* "&&" */,-34 , 28/* "||" */,-34 , 26/* "|||" */,-34 , 27/* "||||" */,-34 , 48/* "(" */,-34 , 36/* "~" */,-34 , 42/* "[" */,-34 , 41/* "Dot" */,-34 , 23/* ";" */,-34 , 49/* ")" */,-34 , 8/* ":" */,-34 , 43/* "]" */,-34 , 5/* "," */,-34 , 7/* "=>" */,-34 , 13/* "As" */,-34 , 18/* "}" */,-34 , 15/* "In" */,-34 , 2/* "|" */,-34 ),
    /* State 96 */ new Array( 38/* "-" */,3 , 48/* "(" */,4 , 19/* "!" */,5 , 22/* "Number" */,6 , 21/* "String" */,7 , 25/* "<-" */,9 , 45/* "`" */,11 , 46/* "Escape" */,12 , 47/* "Hash" */,13 , 4/* "Function" */,14 , 17/* "{" */,15 , 14/* "Let" */,16 , 20/* "Identifier" */,18 , 16/* "?" */,20 , 9/* "Switch" */,21 , 10/* "While" */,22 , 12/* "Foreach" */,23 ),
    /* State 97 */ new Array( 38/* "-" */,3 , 48/* "(" */,4 , 19/* "!" */,5 , 22/* "Number" */,6 , 21/* "String" */,7 , 25/* "<-" */,9 , 45/* "`" */,11 , 46/* "Escape" */,12 , 47/* "Hash" */,13 , 4/* "Function" */,14 , 17/* "{" */,15 , 14/* "Let" */,16 , 20/* "Identifier" */,18 , 16/* "?" */,20 , 9/* "Switch" */,21 , 10/* "While" */,22 , 12/* "Foreach" */,23 ),
    /* State 98 */ new Array( 2/* "|" */,113 , 18/* "}" */,114 ),
    /* State 99 */ new Array( 18/* "}" */,-46 , 2/* "|" */,-46 ),
    /* State 100 */ new Array( 23/* ";" */,24 , 41/* "Dot" */,25 , 42/* "[" */,26 , 36/* "~" */,27 , 48/* "(" */,28 , 27/* "||||" */,29 , 26/* "|||" */,30 , 28/* "||" */,31 , 29/* "&&" */,32 , 33/* "<=" */,33 , 32/* "<" */,34 , 35/* ">=" */,35 , 34/* ">" */,36 , 31/* "!=" */,37 , 30/* "==" */,38 , 40/* "/" */,39 , 39/* "*" */,40 , 38/* "-" */,41 , 37/* "+" */,42 , 7/* "=>" */,115 ),
    /* State 101 */ new Array( 23/* ";" */,24 , 41/* "Dot" */,25 , 42/* "[" */,26 , 36/* "~" */,27 , 48/* "(" */,28 , 27/* "||||" */,29 , 26/* "|||" */,30 , 28/* "||" */,31 , 29/* "&&" */,32 , 33/* "<=" */,33 , 32/* "<" */,34 , 35/* ">=" */,35 , 34/* ">" */,36 , 31/* "!=" */,37 , 30/* "==" */,38 , 40/* "/" */,39 , 39/* "*" */,40 , 38/* "-" */,41 , 37/* "+" */,42 , 49/* ")" */,116 ),
    /* State 102 */ new Array( 23/* ";" */,24 , 41/* "Dot" */,25 , 42/* "[" */,26 , 36/* "~" */,27 , 48/* "(" */,28 , 27/* "||||" */,29 , 26/* "|||" */,30 , 28/* "||" */,31 , 29/* "&&" */,32 , 33/* "<=" */,33 , 32/* "<" */,34 , 35/* ">=" */,35 , 34/* ">" */,36 , 31/* "!=" */,37 , 30/* "==" */,38 , 40/* "/" */,39 , 39/* "*" */,40 , 38/* "-" */,41 , 37/* "+" */,42 , 13/* "As" */,117 ),
    /* State 103 */ new Array( 63/* "$" */,-53 , 37/* "+" */,-53 , 38/* "-" */,-53 , 39/* "*" */,-53 , 40/* "/" */,-53 , 30/* "==" */,-53 , 31/* "!=" */,-53 , 34/* ">" */,-53 , 35/* ">=" */,-53 , 32/* "<" */,-53 , 33/* "<=" */,-53 , 29/* "&&" */,-53 , 28/* "||" */,-53 , 24/* "=" */,-53 , 25/* "<-" */,-53 , 26/* "|||" */,-53 , 27/* "||||" */,-53 , 48/* "(" */,-53 , 36/* "~" */,-53 , 42/* "[" */,-53 , 41/* "Dot" */,-53 , 23/* ";" */,-53 , 49/* ")" */,-53 , 8/* ":" */,-53 , 43/* "]" */,-53 , 5/* "," */,-53 , 7/* "=>" */,-53 , 13/* "As" */,-53 , 18/* "}" */,-53 , 15/* "In" */,-53 , 2/* "|" */,-53 ),
    /* State 104 */ new Array( 63/* "$" */,-60 , 37/* "+" */,-60 , 38/* "-" */,-60 , 39/* "*" */,-60 , 40/* "/" */,-60 , 30/* "==" */,-60 , 31/* "!=" */,-60 , 34/* ">" */,-60 , 35/* ">=" */,-60 , 32/* "<" */,-60 , 33/* "<=" */,-60 , 29/* "&&" */,-60 , 28/* "||" */,-60 , 24/* "=" */,-60 , 25/* "<-" */,-60 , 26/* "|||" */,-60 , 27/* "||||" */,-60 , 48/* "(" */,-60 , 36/* "~" */,-60 , 42/* "[" */,-60 , 41/* "Dot" */,-60 , 23/* ";" */,-60 , 49/* ")" */,-60 , 8/* ":" */,-60 , 43/* "]" */,-60 , 5/* "," */,-60 , 7/* "=>" */,-60 , 13/* "As" */,-60 , 18/* "}" */,-60 , 15/* "In" */,-60 , 2/* "|" */,-60 ),
    /* State 105 */ new Array( 38/* "-" */,3 , 48/* "(" */,4 , 19/* "!" */,5 , 22/* "Number" */,6 , 21/* "String" */,7 , 25/* "<-" */,9 , 45/* "`" */,11 , 46/* "Escape" */,12 , 47/* "Hash" */,13 , 4/* "Function" */,14 , 17/* "{" */,15 , 14/* "Let" */,16 , 20/* "Identifier" */,18 , 16/* "?" */,20 , 9/* "Switch" */,21 , 10/* "While" */,22 , 12/* "Foreach" */,23 ),
    /* State 106 */ new Array( 63/* "$" */,-32 , 37/* "+" */,-32 , 38/* "-" */,-32 , 39/* "*" */,-32 , 40/* "/" */,-32 , 30/* "==" */,-32 , 31/* "!=" */,-32 , 34/* ">" */,-32 , 35/* ">=" */,-32 , 32/* "<" */,-32 , 33/* "<=" */,-32 , 29/* "&&" */,-32 , 28/* "||" */,-32 , 26/* "|||" */,-32 , 27/* "||||" */,-32 , 48/* "(" */,-32 , 36/* "~" */,-32 , 42/* "[" */,-32 , 41/* "Dot" */,-32 , 23/* ";" */,-32 , 49/* ")" */,-32 , 8/* ":" */,-32 , 43/* "]" */,-32 , 5/* "," */,-32 , 7/* "=>" */,-32 , 13/* "As" */,-32 , 18/* "}" */,-32 , 15/* "In" */,-32 , 2/* "|" */,-32 ),
    /* State 107 */ new Array( 38/* "-" */,3 , 48/* "(" */,4 , 19/* "!" */,5 , 22/* "Number" */,6 , 21/* "String" */,7 , 25/* "<-" */,9 , 45/* "`" */,11 , 46/* "Escape" */,12 , 47/* "Hash" */,13 , 4/* "Function" */,14 , 17/* "{" */,15 , 14/* "Let" */,16 , 20/* "Identifier" */,18 , 16/* "?" */,20 , 9/* "Switch" */,21 , 10/* "While" */,22 , 12/* "Foreach" */,23 ),
    /* State 108 */ new Array( 20/* "Identifier" */,120 ),
    /* State 109 */ new Array( 17/* "{" */,121 ),
    /* State 110 */ new Array( 18/* "}" */,-48 , 5/* "," */,-48 ),
    /* State 111 */ new Array( 23/* ";" */,24 , 41/* "Dot" */,25 , 42/* "[" */,26 , 36/* "~" */,27 , 48/* "(" */,28 , 27/* "||||" */,29 , 26/* "|||" */,30 , 28/* "||" */,31 , 29/* "&&" */,32 , 33/* "<=" */,33 , 32/* "<" */,34 , 35/* ">=" */,35 , 34/* ">" */,36 , 31/* "!=" */,37 , 30/* "==" */,38 , 40/* "/" */,39 , 39/* "*" */,40 , 38/* "-" */,41 , 37/* "+" */,42 , 18/* "}" */,-50 , 5/* "," */,-50 ),
    /* State 112 */ new Array( 23/* ";" */,24 , 41/* "Dot" */,25 , 42/* "[" */,26 , 36/* "~" */,27 , 48/* "(" */,28 , 27/* "||||" */,29 , 26/* "|||" */,30 , 28/* "||" */,31 , 29/* "&&" */,32 , 33/* "<=" */,33 , 32/* "<" */,34 , 35/* ">=" */,35 , 34/* ">" */,36 , 31/* "!=" */,37 , 30/* "==" */,38 , 40/* "/" */,39 , 39/* "*" */,40 , 38/* "-" */,41 , 37/* "+" */,42 , 15/* "In" */,122 ),
    /* State 113 */ new Array( 38/* "-" */,3 , 48/* "(" */,4 , 19/* "!" */,5 , 22/* "Number" */,6 , 21/* "String" */,7 , 25/* "<-" */,9 , 45/* "`" */,11 , 46/* "Escape" */,12 , 47/* "Hash" */,13 , 4/* "Function" */,14 , 17/* "{" */,15 , 14/* "Let" */,16 , 20/* "Identifier" */,18 , 16/* "?" */,20 , 9/* "Switch" */,21 , 10/* "While" */,22 , 12/* "Foreach" */,23 ),
    /* State 114 */ new Array( 63/* "$" */,-41 , 37/* "+" */,-41 , 38/* "-" */,-41 , 39/* "*" */,-41 , 40/* "/" */,-41 , 30/* "==" */,-41 , 31/* "!=" */,-41 , 34/* ">" */,-41 , 35/* ">=" */,-41 , 32/* "<" */,-41 , 33/* "<=" */,-41 , 29/* "&&" */,-41 , 28/* "||" */,-41 , 48/* "(" */,-41 , 19/* "!" */,-41 , 22/* "Number" */,-41 , 21/* "String" */,-41 , 25/* "<-" */,-41 , 45/* "`" */,-41 , 46/* "Escape" */,-41 , 47/* "Hash" */,-41 , 4/* "Function" */,-41 , 17/* "{" */,-41 , 14/* "Let" */,-41 , 9/* "Switch" */,-41 , 10/* "While" */,-41 , 12/* "Foreach" */,-41 , 20/* "Identifier" */,-41 , 16/* "?" */,-41 , 26/* "|||" */,-41 , 27/* "||||" */,-41 , 36/* "~" */,-41 , 42/* "[" */,-41 , 41/* "Dot" */,-41 , 23/* ";" */,-41 , 49/* ")" */,-41 , 8/* ":" */,-41 , 43/* "]" */,-41 , 5/* "," */,-41 , 7/* "=>" */,-41 , 13/* "As" */,-41 , 18/* "}" */,-41 , 15/* "In" */,-41 , 2/* "|" */,-41 ),
    /* State 115 */ new Array( 38/* "-" */,3 , 48/* "(" */,4 , 19/* "!" */,5 , 22/* "Number" */,6 , 21/* "String" */,7 , 25/* "<-" */,9 , 45/* "`" */,11 , 46/* "Escape" */,12 , 47/* "Hash" */,13 , 4/* "Function" */,14 , 17/* "{" */,15 , 14/* "Let" */,16 , 20/* "Identifier" */,18 , 16/* "?" */,20 , 9/* "Switch" */,21 , 10/* "While" */,22 , 12/* "Foreach" */,23 ),
    /* State 116 */ new Array( 17/* "{" */,125 ),
    /* State 117 */ new Array( 20/* "Identifier" */,126 ),
    /* State 118 */ new Array( 23/* ";" */,24 , 41/* "Dot" */,25 , 42/* "[" */,26 , 36/* "~" */,27 , 48/* "(" */,28 , 27/* "||||" */,29 , 26/* "|||" */,30 , 28/* "||" */,31 , 29/* "&&" */,32 , 33/* "<=" */,33 , 32/* "<" */,34 , 35/* ">=" */,35 , 34/* ">" */,36 , 31/* "!=" */,37 , 30/* "==" */,38 , 40/* "/" */,39 , 39/* "*" */,40 , 38/* "-" */,41 , 37/* "+" */,42 , 49/* ")" */,-55 , 5/* "," */,-55 ),
    /* State 119 */ new Array( 23/* ";" */,24 , 41/* "Dot" */,25 , 42/* "[" */,26 , 36/* "~" */,27 , 48/* "(" */,28 , 27/* "||||" */,29 , 26/* "|||" */,30 , 28/* "||" */,31 , 29/* "&&" */,32 , 33/* "<=" */,33 , 32/* "<" */,34 , 35/* ">=" */,35 , 34/* ">" */,36 , 31/* "!=" */,37 , 30/* "==" */,38 , 40/* "/" */,39 , 39/* "*" */,40 , 38/* "-" */,41 , 37/* "+" */,42 , 18/* "}" */,127 ),
    /* State 120 */ new Array( 49/* ")" */,-57 , 5/* "," */,-57 ),
    /* State 121 */ new Array( 38/* "-" */,3 , 48/* "(" */,4 , 19/* "!" */,5 , 22/* "Number" */,6 , 21/* "String" */,7 , 25/* "<-" */,9 , 45/* "`" */,11 , 46/* "Escape" */,12 , 47/* "Hash" */,13 , 4/* "Function" */,14 , 17/* "{" */,15 , 14/* "Let" */,16 , 20/* "Identifier" */,18 , 16/* "?" */,20 , 9/* "Switch" */,21 , 10/* "While" */,22 , 12/* "Foreach" */,23 ),
    /* State 122 */ new Array( 38/* "-" */,3 , 48/* "(" */,4 , 19/* "!" */,5 , 22/* "Number" */,6 , 21/* "String" */,7 , 25/* "<-" */,9 , 45/* "`" */,11 , 46/* "Escape" */,12 , 47/* "Hash" */,13 , 4/* "Function" */,14 , 17/* "{" */,15 , 14/* "Let" */,16 , 20/* "Identifier" */,18 , 16/* "?" */,20 , 9/* "Switch" */,21 , 10/* "While" */,22 , 12/* "Foreach" */,23 ),
    /* State 123 */ new Array( 18/* "}" */,-45 , 2/* "|" */,-45 ),
    /* State 124 */ new Array( 23/* ";" */,24 , 41/* "Dot" */,25 , 42/* "[" */,26 , 36/* "~" */,27 , 48/* "(" */,28 , 27/* "||||" */,29 , 26/* "|||" */,30 , 28/* "||" */,31 , 29/* "&&" */,32 , 33/* "<=" */,33 , 32/* "<" */,34 , 35/* ">=" */,35 , 34/* ">" */,36 , 31/* "!=" */,37 , 30/* "==" */,38 , 40/* "/" */,39 , 39/* "*" */,40 , 38/* "-" */,41 , 37/* "+" */,42 , 18/* "}" */,-47 , 2/* "|" */,-47 ),
    /* State 125 */ new Array( 38/* "-" */,3 , 48/* "(" */,4 , 19/* "!" */,5 , 22/* "Number" */,6 , 21/* "String" */,7 , 25/* "<-" */,9 , 45/* "`" */,11 , 46/* "Escape" */,12 , 47/* "Hash" */,13 , 4/* "Function" */,14 , 17/* "{" */,15 , 14/* "Let" */,16 , 20/* "Identifier" */,18 , 16/* "?" */,20 , 9/* "Switch" */,21 , 10/* "While" */,22 , 12/* "Foreach" */,23 ),
    /* State 126 */ new Array( 8/* ":" */,131 , 49/* ")" */,132 ),
    /* State 127 */ new Array( 63/* "$" */,-29 , 37/* "+" */,-29 , 38/* "-" */,-29 , 39/* "*" */,-29 , 40/* "/" */,-29 , 30/* "==" */,-29 , 31/* "!=" */,-29 , 34/* ">" */,-29 , 35/* ">=" */,-29 , 32/* "<" */,-29 , 33/* "<=" */,-29 , 29/* "&&" */,-29 , 28/* "||" */,-29 , 26/* "|||" */,-29 , 27/* "||||" */,-29 , 48/* "(" */,-29 , 36/* "~" */,-29 , 42/* "[" */,-29 , 41/* "Dot" */,-29 , 23/* ";" */,-29 , 49/* ")" */,-29 , 8/* ":" */,-29 , 43/* "]" */,-29 , 5/* "," */,-29 , 7/* "=>" */,-29 , 13/* "As" */,-29 , 18/* "}" */,-29 , 15/* "In" */,-29 , 2/* "|" */,-29 ),
    /* State 128 */ new Array( 23/* ";" */,24 , 41/* "Dot" */,25 , 42/* "[" */,26 , 36/* "~" */,27 , 48/* "(" */,28 , 27/* "||||" */,29 , 26/* "|||" */,30 , 28/* "||" */,31 , 29/* "&&" */,32 , 33/* "<=" */,33 , 32/* "<" */,34 , 35/* ">=" */,35 , 34/* ">" */,36 , 31/* "!=" */,37 , 30/* "==" */,38 , 40/* "/" */,39 , 39/* "*" */,40 , 38/* "-" */,41 , 37/* "+" */,42 , 18/* "}" */,133 ),
    /* State 129 */ new Array( 23/* ";" */,24 , 41/* "Dot" */,25 , 42/* "[" */,26 , 36/* "~" */,27 , 48/* "(" */,28 , 27/* "||||" */,29 , 26/* "|||" */,30 , 28/* "||" */,31 , 29/* "&&" */,32 , 33/* "<=" */,33 , 32/* "<" */,34 , 35/* ">=" */,35 , 34/* ">" */,36 , 31/* "!=" */,37 , 30/* "==" */,38 , 40/* "/" */,39 , 39/* "*" */,40 , 38/* "-" */,41 , 37/* "+" */,42 , 63/* "$" */,-36 , 49/* ")" */,-36 , 8/* ":" */,-36 , 43/* "]" */,-36 , 5/* "," */,-36 , 7/* "=>" */,-36 , 13/* "As" */,-36 , 18/* "}" */,-36 , 15/* "In" */,-36 , 2/* "|" */,-36 ),
    /* State 130 */ new Array( 23/* ";" */,24 , 41/* "Dot" */,25 , 42/* "[" */,26 , 36/* "~" */,27 , 48/* "(" */,28 , 27/* "||||" */,29 , 26/* "|||" */,30 , 28/* "||" */,31 , 29/* "&&" */,32 , 33/* "<=" */,33 , 32/* "<" */,34 , 35/* ">=" */,35 , 34/* ">" */,36 , 31/* "!=" */,37 , 30/* "==" */,38 , 40/* "/" */,39 , 39/* "*" */,40 , 38/* "-" */,41 , 37/* "+" */,42 , 18/* "}" */,134 ),
    /* State 131 */ new Array( 20/* "Identifier" */,135 ),
    /* State 132 */ new Array( 17/* "{" */,136 ),
    /* State 133 */ new Array( 63/* "$" */,-30 , 37/* "+" */,-30 , 38/* "-" */,-30 , 39/* "*" */,-30 , 40/* "/" */,-30 , 30/* "==" */,-30 , 31/* "!=" */,-30 , 34/* ">" */,-30 , 35/* ">=" */,-30 , 32/* "<" */,-30 , 33/* "<=" */,-30 , 29/* "&&" */,-30 , 28/* "||" */,-30 , 26/* "|||" */,-30 , 27/* "||||" */,-30 , 48/* "(" */,-30 , 36/* "~" */,-30 , 42/* "[" */,-30 , 41/* "Dot" */,-30 , 23/* ";" */,-30 , 49/* ")" */,-30 , 8/* ":" */,-30 , 43/* "]" */,-30 , 5/* "," */,-30 , 7/* "=>" */,-30 , 13/* "As" */,-30 , 18/* "}" */,-30 , 15/* "In" */,-30 , 2/* "|" */,-30 ),
    /* State 134 */ new Array( 63/* "$" */,-42 , 37/* "+" */,-42 , 38/* "-" */,-42 , 39/* "*" */,-42 , 40/* "/" */,-42 , 30/* "==" */,-42 , 31/* "!=" */,-42 , 34/* ">" */,-42 , 35/* ">=" */,-42 , 32/* "<" */,-42 , 33/* "<=" */,-42 , 29/* "&&" */,-42 , 28/* "||" */,-42 , 48/* "(" */,-42 , 19/* "!" */,-42 , 22/* "Number" */,-42 , 21/* "String" */,-42 , 25/* "<-" */,-42 , 45/* "`" */,-42 , 46/* "Escape" */,-42 , 47/* "Hash" */,-42 , 4/* "Function" */,-42 , 17/* "{" */,-42 , 14/* "Let" */,-42 , 9/* "Switch" */,-42 , 10/* "While" */,-42 , 12/* "Foreach" */,-42 , 20/* "Identifier" */,-42 , 16/* "?" */,-42 , 26/* "|||" */,-42 , 27/* "||||" */,-42 , 36/* "~" */,-42 , 42/* "[" */,-42 , 41/* "Dot" */,-42 , 23/* ";" */,-42 , 49/* ")" */,-42 , 8/* ":" */,-42 , 43/* "]" */,-42 , 5/* "," */,-42 , 7/* "=>" */,-42 , 13/* "As" */,-42 , 18/* "}" */,-42 , 15/* "In" */,-42 , 2/* "|" */,-42 ),
    /* State 135 */ new Array( 49/* ")" */,137 ),
    /* State 136 */ new Array( 38/* "-" */,3 , 48/* "(" */,4 , 19/* "!" */,5 , 22/* "Number" */,6 , 21/* "String" */,7 , 25/* "<-" */,9 , 45/* "`" */,11 , 46/* "Escape" */,12 , 47/* "Hash" */,13 , 4/* "Function" */,14 , 17/* "{" */,15 , 14/* "Let" */,16 , 20/* "Identifier" */,18 , 16/* "?" */,20 , 9/* "Switch" */,21 , 10/* "While" */,22 , 12/* "Foreach" */,23 ),
    /* State 137 */ new Array( 17/* "{" */,139 ),
    /* State 138 */ new Array( 23/* ";" */,24 , 41/* "Dot" */,25 , 42/* "[" */,26 , 36/* "~" */,27 , 48/* "(" */,28 , 27/* "||||" */,29 , 26/* "|||" */,30 , 28/* "||" */,31 , 29/* "&&" */,32 , 33/* "<=" */,33 , 32/* "<" */,34 , 35/* ">=" */,35 , 34/* ">" */,36 , 31/* "!=" */,37 , 30/* "==" */,38 , 40/* "/" */,39 , 39/* "*" */,40 , 38/* "-" */,41 , 37/* "+" */,42 , 18/* "}" */,140 ),
    /* State 139 */ new Array( 38/* "-" */,3 , 48/* "(" */,4 , 19/* "!" */,5 , 22/* "Number" */,6 , 21/* "String" */,7 , 25/* "<-" */,9 , 45/* "`" */,11 , 46/* "Escape" */,12 , 47/* "Hash" */,13 , 4/* "Function" */,14 , 17/* "{" */,15 , 14/* "Let" */,16 , 20/* "Identifier" */,18 , 16/* "?" */,20 , 9/* "Switch" */,21 , 10/* "While" */,22 , 12/* "Foreach" */,23 ),
    /* State 140 */ new Array( 63/* "$" */,-43 , 37/* "+" */,-43 , 38/* "-" */,-43 , 39/* "*" */,-43 , 40/* "/" */,-43 , 30/* "==" */,-43 , 31/* "!=" */,-43 , 34/* ">" */,-43 , 35/* ">=" */,-43 , 32/* "<" */,-43 , 33/* "<=" */,-43 , 29/* "&&" */,-43 , 28/* "||" */,-43 , 48/* "(" */,-43 , 19/* "!" */,-43 , 22/* "Number" */,-43 , 21/* "String" */,-43 , 25/* "<-" */,-43 , 45/* "`" */,-43 , 46/* "Escape" */,-43 , 47/* "Hash" */,-43 , 4/* "Function" */,-43 , 17/* "{" */,-43 , 14/* "Let" */,-43 , 9/* "Switch" */,-43 , 10/* "While" */,-43 , 12/* "Foreach" */,-43 , 20/* "Identifier" */,-43 , 16/* "?" */,-43 , 26/* "|||" */,-43 , 27/* "||||" */,-43 , 36/* "~" */,-43 , 42/* "[" */,-43 , 41/* "Dot" */,-43 , 23/* ";" */,-43 , 49/* ")" */,-43 , 8/* ":" */,-43 , 43/* "]" */,-43 , 5/* "," */,-43 , 7/* "=>" */,-43 , 13/* "As" */,-43 , 18/* "}" */,-43 , 15/* "In" */,-43 , 2/* "|" */,-43 ),
    /* State 141 */ new Array( 23/* ";" */,24 , 41/* "Dot" */,25 , 42/* "[" */,26 , 36/* "~" */,27 , 48/* "(" */,28 , 27/* "||||" */,29 , 26/* "|||" */,30 , 28/* "||" */,31 , 29/* "&&" */,32 , 33/* "<=" */,33 , 32/* "<" */,34 , 35/* ">=" */,35 , 34/* ">" */,36 , 31/* "!=" */,37 , 30/* "==" */,38 , 40/* "/" */,39 , 39/* "*" */,40 , 38/* "-" */,41 , 37/* "+" */,42 , 18/* "}" */,142 ),
    /* State 142 */ new Array( 63/* "$" */,-44 , 37/* "+" */,-44 , 38/* "-" */,-44 , 39/* "*" */,-44 , 40/* "/" */,-44 , 30/* "==" */,-44 , 31/* "!=" */,-44 , 34/* ">" */,-44 , 35/* ">=" */,-44 , 32/* "<" */,-44 , 33/* "<=" */,-44 , 29/* "&&" */,-44 , 28/* "||" */,-44 , 48/* "(" */,-44 , 19/* "!" */,-44 , 22/* "Number" */,-44 , 21/* "String" */,-44 , 25/* "<-" */,-44 , 45/* "`" */,-44 , 46/* "Escape" */,-44 , 47/* "Hash" */,-44 , 4/* "Function" */,-44 , 17/* "{" */,-44 , 14/* "Let" */,-44 , 9/* "Switch" */,-44 , 10/* "While" */,-44 , 12/* "Foreach" */,-44 , 20/* "Identifier" */,-44 , 16/* "?" */,-44 , 26/* "|||" */,-44 , 27/* "||||" */,-44 , 36/* "~" */,-44 , 42/* "[" */,-44 , 41/* "Dot" */,-44 , 23/* ";" */,-44 , 49/* ")" */,-44 , 8/* ":" */,-44 , 43/* "]" */,-44 , 5/* "," */,-44 , 7/* "=>" */,-44 , 13/* "As" */,-44 , 18/* "}" */,-44 , 15/* "In" */,-44 , 2/* "|" */,-44 )
);

/* Goto-Table */
var goto_tab = new Array(
    /* State 0 */ new Array( 51/* p */,1 , 50/* e */,2 , 52/* LExp */,8 , 53/* stmts */,10 , 57/* ImpVar */,17 , 58/* stmt */,19 ),
    /* State 1 */ new Array( ),
    /* State 2 */ new Array( ),
    /* State 3 */ new Array( 50/* e */,43 , 52/* LExp */,8 , 53/* stmts */,10 , 57/* ImpVar */,17 , 58/* stmt */,19 ),
    /* State 4 */ new Array( 50/* e */,44 , 52/* LExp */,8 , 53/* stmts */,10 , 57/* ImpVar */,17 , 58/* stmt */,19 ),
    /* State 5 */ new Array( 50/* e */,45 , 52/* LExp */,8 , 53/* stmts */,10 , 57/* ImpVar */,17 , 58/* stmt */,19 ),
    /* State 6 */ new Array( ),
    /* State 7 */ new Array( ),
    /* State 8 */ new Array( ),
    /* State 9 */ new Array( 50/* e */,48 , 52/* LExp */,8 , 53/* stmts */,10 , 57/* ImpVar */,17 , 58/* stmt */,19 ),
    /* State 10 */ new Array( 58/* stmt */,49 , 50/* e */,50 , 52/* LExp */,8 , 53/* stmts */,10 , 57/* ImpVar */,17 ),
    /* State 11 */ new Array( 50/* e */,51 , 52/* LExp */,8 , 53/* stmts */,10 , 57/* ImpVar */,17 , 58/* stmt */,19 ),
    /* State 12 */ new Array( 50/* e */,52 , 52/* LExp */,8 , 53/* stmts */,10 , 57/* ImpVar */,17 , 58/* stmt */,19 ),
    /* State 13 */ new Array( 50/* e */,53 , 52/* LExp */,8 , 53/* stmts */,10 , 57/* ImpVar */,17 , 58/* stmt */,19 ),
    /* State 14 */ new Array( ),
    /* State 15 */ new Array( 56/* mappings */,56 , 61/* mapping */,57 , 50/* e */,58 , 52/* LExp */,8 , 53/* stmts */,10 , 57/* ImpVar */,17 , 58/* stmt */,19 ),
    /* State 16 */ new Array( 57/* ImpVar */,59 ),
    /* State 17 */ new Array( ),
    /* State 18 */ new Array( ),
    /* State 19 */ new Array( ),
    /* State 20 */ new Array( ),
    /* State 21 */ new Array( ),
    /* State 22 */ new Array( ),
    /* State 23 */ new Array( ),
    /* State 24 */ new Array( ),
    /* State 25 */ new Array( 62/* field */,64 ),
    /* State 26 */ new Array( 50/* e */,69 , 52/* LExp */,8 , 53/* stmts */,10 , 57/* ImpVar */,17 , 58/* stmt */,19 ),
    /* State 27 */ new Array( 50/* e */,70 , 52/* LExp */,8 , 53/* stmts */,10 , 57/* ImpVar */,17 , 58/* stmt */,19 ),
    /* State 28 */ new Array( 55/* args */,72 , 50/* e */,73 , 52/* LExp */,8 , 53/* stmts */,10 , 57/* ImpVar */,17 , 58/* stmt */,19 ),
    /* State 29 */ new Array( 50/* e */,74 , 52/* LExp */,8 , 53/* stmts */,10 , 57/* ImpVar */,17 , 58/* stmt */,19 ),
    /* State 30 */ new Array( 50/* e */,75 , 52/* LExp */,8 , 53/* stmts */,10 , 57/* ImpVar */,17 , 58/* stmt */,19 ),
    /* State 31 */ new Array( 50/* e */,76 , 52/* LExp */,8 , 53/* stmts */,10 , 57/* ImpVar */,17 , 58/* stmt */,19 ),
    /* State 32 */ new Array( 50/* e */,77 , 52/* LExp */,8 , 53/* stmts */,10 , 57/* ImpVar */,17 , 58/* stmt */,19 ),
    /* State 33 */ new Array( 50/* e */,78 , 52/* LExp */,8 , 53/* stmts */,10 , 57/* ImpVar */,17 , 58/* stmt */,19 ),
    /* State 34 */ new Array( 50/* e */,79 , 52/* LExp */,8 , 53/* stmts */,10 , 57/* ImpVar */,17 , 58/* stmt */,19 ),
    /* State 35 */ new Array( 50/* e */,80 , 52/* LExp */,8 , 53/* stmts */,10 , 57/* ImpVar */,17 , 58/* stmt */,19 ),
    /* State 36 */ new Array( 50/* e */,81 , 52/* LExp */,8 , 53/* stmts */,10 , 57/* ImpVar */,17 , 58/* stmt */,19 ),
    /* State 37 */ new Array( 50/* e */,82 , 52/* LExp */,8 , 53/* stmts */,10 , 57/* ImpVar */,17 , 58/* stmt */,19 ),
    /* State 38 */ new Array( 50/* e */,83 , 52/* LExp */,8 , 53/* stmts */,10 , 57/* ImpVar */,17 , 58/* stmt */,19 ),
    /* State 39 */ new Array( 50/* e */,84 , 52/* LExp */,8 , 53/* stmts */,10 , 57/* ImpVar */,17 , 58/* stmt */,19 ),
    /* State 40 */ new Array( 50/* e */,85 , 52/* LExp */,8 , 53/* stmts */,10 , 57/* ImpVar */,17 , 58/* stmt */,19 ),
    /* State 41 */ new Array( 50/* e */,86 , 52/* LExp */,8 , 53/* stmts */,10 , 57/* ImpVar */,17 , 58/* stmt */,19 ),
    /* State 42 */ new Array( 50/* e */,87 , 52/* LExp */,8 , 53/* stmts */,10 , 57/* ImpVar */,17 , 58/* stmt */,19 ),
    /* State 43 */ new Array( ),
    /* State 44 */ new Array( ),
    /* State 45 */ new Array( ),
    /* State 46 */ new Array( 50/* e */,89 , 52/* LExp */,8 , 53/* stmts */,10 , 57/* ImpVar */,17 , 58/* stmt */,19 ),
    /* State 47 */ new Array( 50/* e */,90 , 52/* LExp */,8 , 53/* stmts */,10 , 57/* ImpVar */,17 , 58/* stmt */,19 ),
    /* State 48 */ new Array( ),
    /* State 49 */ new Array( ),
    /* State 50 */ new Array( ),
    /* State 51 */ new Array( ),
    /* State 52 */ new Array( ),
    /* State 53 */ new Array( ),
    /* State 54 */ new Array( 54/* fargs */,92 ),
    /* State 55 */ new Array( ),
    /* State 56 */ new Array( ),
    /* State 57 */ new Array( ),
    /* State 58 */ new Array( ),
    /* State 59 */ new Array( ),
    /* State 60 */ new Array( ),
    /* State 61 */ new Array( 59/* cases */,98 , 60/* case */,99 , 50/* e */,100 , 52/* LExp */,8 , 53/* stmts */,10 , 57/* ImpVar */,17 , 58/* stmt */,19 ),
    /* State 62 */ new Array( 50/* e */,101 , 52/* LExp */,8 , 53/* stmts */,10 , 57/* ImpVar */,17 , 58/* stmt */,19 ),
    /* State 63 */ new Array( 50/* e */,102 , 52/* LExp */,8 , 53/* stmts */,10 , 57/* ImpVar */,17 , 58/* stmt */,19 ),
    /* State 64 */ new Array( ),
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
    /* State 94 */ new Array( 61/* mapping */,110 , 50/* e */,58 , 52/* LExp */,8 , 53/* stmts */,10 , 57/* ImpVar */,17 , 58/* stmt */,19 ),
    /* State 95 */ new Array( ),
    /* State 96 */ new Array( 50/* e */,111 , 52/* LExp */,8 , 53/* stmts */,10 , 57/* ImpVar */,17 , 58/* stmt */,19 ),
    /* State 97 */ new Array( 50/* e */,112 , 52/* LExp */,8 , 53/* stmts */,10 , 57/* ImpVar */,17 , 58/* stmt */,19 ),
    /* State 98 */ new Array( ),
    /* State 99 */ new Array( ),
    /* State 100 */ new Array( ),
    /* State 101 */ new Array( ),
    /* State 102 */ new Array( ),
    /* State 103 */ new Array( ),
    /* State 104 */ new Array( ),
    /* State 105 */ new Array( 50/* e */,118 , 52/* LExp */,8 , 53/* stmts */,10 , 57/* ImpVar */,17 , 58/* stmt */,19 ),
    /* State 106 */ new Array( ),
    /* State 107 */ new Array( 50/* e */,119 , 52/* LExp */,8 , 53/* stmts */,10 , 57/* ImpVar */,17 , 58/* stmt */,19 ),
    /* State 108 */ new Array( ),
    /* State 109 */ new Array( ),
    /* State 110 */ new Array( ),
    /* State 111 */ new Array( ),
    /* State 112 */ new Array( ),
    /* State 113 */ new Array( 60/* case */,123 , 50/* e */,100 , 52/* LExp */,8 , 53/* stmts */,10 , 57/* ImpVar */,17 , 58/* stmt */,19 ),
    /* State 114 */ new Array( ),
    /* State 115 */ new Array( 50/* e */,124 , 52/* LExp */,8 , 53/* stmts */,10 , 57/* ImpVar */,17 , 58/* stmt */,19 ),
    /* State 116 */ new Array( ),
    /* State 117 */ new Array( ),
    /* State 118 */ new Array( ),
    /* State 119 */ new Array( ),
    /* State 120 */ new Array( ),
    /* State 121 */ new Array( 50/* e */,128 , 52/* LExp */,8 , 53/* stmts */,10 , 57/* ImpVar */,17 , 58/* stmt */,19 ),
    /* State 122 */ new Array( 50/* e */,129 , 52/* LExp */,8 , 53/* stmts */,10 , 57/* ImpVar */,17 , 58/* stmt */,19 ),
    /* State 123 */ new Array( ),
    /* State 124 */ new Array( ),
    /* State 125 */ new Array( 50/* e */,130 , 52/* LExp */,8 , 53/* stmts */,10 , 57/* ImpVar */,17 , 58/* stmt */,19 ),
    /* State 126 */ new Array( ),
    /* State 127 */ new Array( ),
    /* State 128 */ new Array( ),
    /* State 129 */ new Array( ),
    /* State 130 */ new Array( ),
    /* State 131 */ new Array( ),
    /* State 132 */ new Array( ),
    /* State 133 */ new Array( ),
    /* State 134 */ new Array( ),
    /* State 135 */ new Array( ),
    /* State 136 */ new Array( 50/* e */,138 , 52/* LExp */,8 , 53/* stmts */,10 , 57/* ImpVar */,17 , 58/* stmt */,19 ),
    /* State 137 */ new Array( ),
    /* State 138 */ new Array( ),
    /* State 139 */ new Array( 50/* e */,141 , 52/* LExp */,8 , 53/* stmts */,10 , 57/* ImpVar */,17 , 58/* stmt */,19 ),
    /* State 140 */ new Array( ),
    /* State 141 */ new Array( ),
    /* State 142 */ new Array( )
);


/* Symbol labels */
var labels = new Array(
    "p'" /* Non-terminal symbol */,
    "^" /* Terminal symbol */,
    "|" /* Terminal symbol */,
    "@" /* Terminal symbol */,
    "Function" /* Terminal symbol */,
    "," /* Terminal symbol */,
    "Dollar" /* Terminal symbol */,
    "=>" /* Terminal symbol */,
    ":" /* Terminal symbol */,
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
    "<-" /* Terminal symbol */,
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


info.offset = 0; info.src = src; info.att = new String(); if( !err_off )
err_off = new Array(); if( !err_la )
err_la = new Array(); sstack.push( 0 ); vstack.push( 0 ); la = __lex( info ); while( true )
{ act = 144; for( var i = 0; i < act_tab[sstack[sstack.length-1]].length; i+=2 )
{ if( act_tab[sstack[sstack.length-1]][i] == la )
{ act = act_tab[sstack[sstack.length-1]][i+1]; break;}
}
if( _dbg_withtrace && sstack.length > 0 )
{ __dbg_print( "\nState " + sstack[sstack.length-1] + "\n" + "\tLookahead: " + labels[la] + " (\"" + info.att + "\")\n" + "\tAction: " + act + "\n" + "\tSource: \"" + info.src.substr( info.offset, 30 ) + ( ( info.offset + 30 < info.src.length ) ?
"..." : "" ) + "\"\n" + "\tStack: " + sstack.join() + "\n" + "\tValue stack: " + vstack.join() + "\n" );}
if( act == 144 )
{ if( _dbg_withtrace )
__dbg_print( "Error detected: There is no reduce or shift on the symbol " + labels[la] ); err_cnt++; err_off.push( info.offset - info.att.length ); err_la.push( new Array() ); for( var i = 0; i < act_tab[sstack[sstack.length-1]].length; i+=2 )
err_la[err_la.length-1].push( labels[act_tab[sstack[sstack.length-1]][i]] ); var rsstack = new Array(); var rvstack = new Array(); for( var i = 0; i < sstack.length; i++ )
{ rsstack[i] = sstack[i]; rvstack[i] = vstack[i];}
while( act == 144 && la != 63 )
{ if( _dbg_withtrace )
__dbg_print( "\tError recovery\n" + "Current lookahead: " + labels[la] + " (" + info.att + ")\n" + "Action: " + act + "\n\n" ); if( la == -1 )
info.offset++; while( act == 144 && sstack.length > 0 )
{ sstack.pop(); vstack.pop(); if( sstack.length == 0 )
break; act = 144; for( var i = 0; i < act_tab[sstack[sstack.length-1]].length; i+=2 )
{ if( act_tab[sstack[sstack.length-1]][i] == la )
{ act = act_tab[sstack[sstack.length-1]][i+1]; break;}
}
}
if( act != 144 )
break; for( var i = 0; i < rsstack.length; i++ )
{ sstack.push( rsstack[i] ); vstack.push( rvstack[i] );}
la = __lex( info );}
if( act == 144 )
{ if( _dbg_withtrace )
__dbg_print( "\tError recovery failed, terminating parse process..." ); break;}
if( _dbg_withtrace )
__dbg_print( "\tError recovery succeeded, continuing" );}
if( act > 0 )
{ if( _dbg_withtrace )
__dbg_print( "Shifting symbol: " + labels[la] + " (" + info.att + ")" ); sstack.push( act ); vstack.push( info.att ); la = __lex( info ); if( _dbg_withtrace )
__dbg_print( "\tNew lookahead symbol: " + labels[la] + " (" + info.att + ")" );}
else
{ act *= -1; if( _dbg_withtrace )
__dbg_print( "Reducing by producution: " + act ); rval = void(0); if( _dbg_withtrace )
__dbg_print( "\tPerforming semantic action..." ); switch( act )
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
         rval = ['assign_fork', vstack[ vstack.length - 3 ], vstack[ vstack.length - 1 ]];
    }
    break;
    case 22:
    {
         rval = ['fork', vstack[ vstack.length - 1 ]];
    }
    break;
    case 23:
    {
         rval = toStmts(vstack[ vstack.length - 1 ]);
    }
    break;
    case 24:
    {
         rval = ['or', flattern(['or', [vstack[ vstack.length - 3 ], vstack[ vstack.length - 1 ]]], 'or')];
    }
    break;
    case 25:
    {
         rval = ['por', flattern(['por', [vstack[ vstack.length - 3 ], vstack[ vstack.length - 1 ]]], 'por')];
    }
    break;
    case 26:
    {
         rval = ['code', vstack[ vstack.length - 1 ]];
    }
    break;
    case 27:
    {
         rval = ['escape', vstack[ vstack.length - 1 ]];
    }
    break;
    case 28:
    {
         rval = ['decode', vstack[ vstack.length - 1 ]];
    }
    break;
    case 29:
    {
         rval = ['lambda', [], vstack[ vstack.length - 2 ]]
    }
    break;
    case 30:
    {
         rval = ['lambda', vstack[ vstack.length - 5 ], vstack[ vstack.length - 2 ]]
    }
    break;
    case 31:
    {
         rval = ['fun_app', vstack[ vstack.length - 3 ], []];
    }
    break;
    case 32:
    {
         rval = ['fun_app', vstack[ vstack.length - 4 ], vstack[ vstack.length - 2 ]];
    }
    break;
    case 33:
    {
         rval = ['fun_app', ['lvar', '~'], [vstack[ vstack.length - 3 ], vstack[ vstack.length - 1 ]]];
    }
    break;
    case 34:
    {
         rval = ['obj', vstack[ vstack.length - 2 ]];
    }
    break;
    case 35:
    {
         rval = ['obj', []];
    }
    break;
    case 36:
    {
         rval = ['let', vstack[ vstack.length - 5 ], vstack[ vstack.length - 3 ], vstack[ vstack.length - 1 ]];
    }
    break;
    case 37:
    {
         rval = ['imp_var', vstack[ vstack.length - 1 ]];
    }
    break;
    case 38:
    {
         rval = vstack[ vstack.length - 2 ].concat([vstack[ vstack.length - 1 ]]);
    }
    break;
    case 39:
    {
         rval = [vstack[ vstack.length - 1 ]];
    }
    break;
    case 40:
    {
         rval = vstack[ vstack.length - 2 ];
    }
    break;
    case 41:
    {
         rval = ['switch', vstack[ vstack.length - 2 ]];
    }
    break;
    case 42:
    {
         rval = ['while', vstack[ vstack.length - 5 ], vstack[ vstack.length - 2 ]];
    }
    break;
    case 43:
    {
         rval = ['foreach', vstack[ vstack.length - 7 ], vstack[ vstack.length - 5 ], vstack[ vstack.length - 2 ]];
    }
    break;
    case 44:
    {
         rval = ['obj_foreach', vstack[ vstack.length - 9 ], vstack[ vstack.length - 7 ], vstack[ vstack.length - 5 ], vstack[ vstack.length - 2 ]];
    }
    break;
    case 45:
    {
         rval = vstack[ vstack.length - 3 ].concat([vstack[ vstack.length - 1 ]]);
    }
    break;
    case 46:
    {
         rval = [vstack[ vstack.length - 1 ]];
    }
    break;
    case 47:
    {
         rval = [vstack[ vstack.length - 3 ], vstack[ vstack.length - 1 ]];
    }
    break;
    case 48:
    {
         rval = vstack[ vstack.length - 3 ].concat([vstack[ vstack.length - 1 ]]);
    }
    break;
    case 49:
    {
         rval = [vstack[ vstack.length - 1 ]];
    }
    break;
    case 50:
    {
         rval = [vstack[ vstack.length - 3 ], vstack[ vstack.length - 1 ]];
    }
    break;
    case 51:
    {
         rval = vstack[ vstack.length - 1 ];
    }
    break;
    case 52:
    {
         rval = "$";
    }
    break;
    case 53:
    {
         rval = "@" + vstack[ vstack.length - 1 ];
    }
    break;
    case 54:
    {
         rval = vstack[ vstack.length - 1 ];
    }
    break;
    case 55:
    {
         rval = vstack[ vstack.length - 3 ].concat([vstack[ vstack.length - 1 ]]);
    }
    break;
    case 56:
    {
         rval = [vstack[ vstack.length - 1 ]];
    }
    break;
    case 57:
    {
         rval = vstack[ vstack.length - 3 ].concat([vstack[ vstack.length - 1 ]]);
    }
    break;
    case 58:
    {
         rval = [vstack[ vstack.length - 1 ]];
    }
    break;
    case 59:
    {
         rval = ['lvar', vstack[ vstack.length - 1 ]];
    }
    break;
    case 60:
    {
         rval = ['sub', vstack[ vstack.length - 4 ], vstack[ vstack.length - 2 ]];
    }
    break;
    case 61:
    {
         rval = ['dot', vstack[ vstack.length - 3 ], vstack[ vstack.length - 1 ]];
    }
    break;
    case 62:
    {
         rval = vstack[ vstack.length - 1 ];
    }
    break;
}


if( _dbg_withtrace )
__dbg_print( "\tPopping " + pop_tab[act][1] + " off the stack..." ); for( var i = 0; i < pop_tab[act][1]; i++ )
{ sstack.pop(); vstack.pop();}
go = -1; for( var i = 0; i < goto_tab[sstack[sstack.length-1]].length; i+=2 )
{ if( goto_tab[sstack[sstack.length-1]][i] == pop_tab[act][0] )
{ go = goto_tab[sstack[sstack.length-1]][i+1]; break;}
}
if( act == 0 )
break; if( _dbg_withtrace )
__dbg_print( "\tPushing non-terminal " + labels[ pop_tab[act][0] ] ); sstack.push( go ); vstack.push( rval );}
if( _dbg_withtrace )
{ alert( _dbg_string ); _dbg_string = new String();}
}
if( _dbg_withtrace )
{ __dbg_print( "\nParse complete." ); alert( _dbg_string );}
return err_cnt;}
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
