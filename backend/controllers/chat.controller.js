//const ChatMessage =require('../../lib/message.js');
const ChatModel=require('../model/chat.model.js') ;   

module.exports = class ChatController{    
   
    constructor() {
      
    }    

    getChat(req, res){
        console.log(req);
        ChatModel.getChat(req.body)
        .then((data) => {
            console.log(data)
          
            res.send(data);
        })
        .catch((err) => {
            console.error(err)
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving chat."
            });
        });
    }  
}
