const Board = require('board.model');

exports.addBoard = function (id, title) {
    const board = new Board({id:id, title: title});
    return board;
};
