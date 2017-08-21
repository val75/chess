/**
 * chess.js
 */

var
    cfg, onDragStart, init;

onDragStart = function (source, piece, position, orientation) {
    console.log("Drag started:");
    console.log("Source: " + source);
    console.log("Piece: " + piece);
    console.log("Orientation: " + orientation);
    console.log("--------------------");
};

cfg = {
    draggable: true,
    position: 'start',
    dropOffBoard: 'snapback', // this is the default
    onDragStart: onDragStart
};

init = function () {
    var game = new Chess();
    var board = ChessBoard('board1', cfg);
    };

$(document).ready(init);
