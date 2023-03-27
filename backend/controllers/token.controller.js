const { azureOpenAIModelVersion} = require('../config/config.js');
const { encoding_for_model } = require('@dqbd/tiktoken');

module.exports = class TokenController{   
   
    constructor() {
      
    }    
    static getNumTokenFromMessages(messagesToSend, model='gpt-3.5-turbo') {
        const encoding = encoding_for_model(model);
        let tokens_per_message = -1  // every message follows <im_start>{role/name}\n{content}<im_end>\n
        let tokens_per_name = -1  // if there's a name, the role is omitted
        if(model == 'gpt-3.5-turbo')
        {
          tokens_per_message = 4  // every message follows <im_start>{role/name}\n{content}<im_end>\n
          tokens_per_name = -1  // if there's a name, the role is omitted
        }

        if(model == 'gpt-4-0314')
        {
          tokens_per_message = 3  
          tokens_per_name = 1  
        }

        let num_tokens = 0
        for(let message of messagesToSend) {
          num_tokens += tokens_per_message
          if(message.name) {
            num_tokens += tokens_per_name
          }
          num_tokens += encoding.encode(message.role).length
          num_tokens += encoding.encode(message.content).length
          num_tokens += 2  // every reply is primed with <im_start>assistant
        }
        
        encoding.free()

        return num_tokens;
      }
    getLen(req, res){
        console.log(req);
        
        let len= TokenController.getNumTokenFromMessages(req.body, azureOpenAIModelVersion);
        
        res.send({token_len: len});
     
    }  
}
