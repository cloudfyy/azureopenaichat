
const axios=require('axios');
const { azureOpenAIBaseUrl, azureOpenAIDeploymet, azureOpenAIAPIVersion,
    azureOpenAIKey, max_tokens} = require('../config/config.js');
// constructor
const azureOpenaiChat = function(azureOpenaiChat) {    
  };

azureOpenaiChat.getChat = (chatRequest) => {
        console.log(chatRequest);
        const completionUrl = azureOpenAIBaseUrl +        
            "/openai/deployments/" + azureOpenAIDeploymet + 
            "/chat/completions?api-version=" + azureOpenAIAPIVersion;
       
        const headers = {
            'Content-Type': 'application/json',
            'api-key': `${azureOpenAIKey}`
        }

        const promise = axios.post(
            completionUrl, 
            {
                messages: chatRequest,
                max_tokens: max_tokens,
                temperature: 0.7,
                stop: null,
                frequency_penalty: 0,
                presence_penalty: 0,
                top_p: 0.95
            }, 
            {headers: headers}
        )
        // using .then, create a new promise which extracts the data
        const dataPromise = promise.then((response) => response.data)
        return dataPromise
    }

module.exports = azureOpenaiChat;

