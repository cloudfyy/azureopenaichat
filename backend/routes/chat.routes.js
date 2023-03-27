
module.exports = app => {  
    const ChatController = require( "../controllers/chat.controller.js");
    const TokenController = require( "../controllers/token.controller.js");
    var router = require("express").Router();
  
    let chatController = new ChatController();
    router.post("/chat",  chatController.getChat); 
    let tokenController = new TokenController();
    router.post("/token/len",  tokenController.getLen);      
  
    app.use('/api', router);
  };