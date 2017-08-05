/**
 * chess.js
 */

var
    cfg = {
        draggable: true,
        dropOffBoard: 'snapback', // this is the default
        position: 'start'
    },
    init = function () {
        var board = ChessBoard('board1', cfg);
    };

$(document).ready(init);
