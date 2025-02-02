'use strict';

const BoardModel = require("../models").Board;
const ThreadModel = require("../models").Thread;
const ReplyModel = require("../models").Reply;


module.exports = function (app) {
  
  app.route('/api/threads/:board').post((req, res) => {
    const{ text, delete_password } = req.body;
      let board =req.body.board;
      if (!board){
        board = req.params.board;
      }
    res.json({ test: "test"});
  });
    
  app.route('/api/replies/:board');

};
