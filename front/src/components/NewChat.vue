<template>
    <div class="chat-window">
        
      <div class="message-list" :style="{ maxHeight: messageListMaxHeight }">
        <div v-for="message in messages" :key="message.id" class="message-item">
         
            <div v-if="message.isAI" class="chat-content">
              <div class="avatar">
                <img src="@/assets/bot-avatar.png" alt="Bot Avatar" />
              </div>
              <div class="message-content" v-html="message.html"></div>
            </div>
            <div v-else class="chat-content"> 
              <div class="avatar" >
                <img src="@/assets/avatar.png" alt="Avatar" />
              </div>             
              <div class="message-content" v-html="message.html" />              
              
            </div>        
                  
          <div class="message-time">{{ message.time }}</div>
        </div>
      </div>
      <div >
        <div class="message-item">
          <div class="input-container">
            <div class="avatar">
              <img src="@/assets/avatar.png" alt="Avatar" />
            </div>
              <input class="input-field" 
                
               type="text" v-model="newMessage" placeholder="请输入消息..." 
               @input ="this.inputChange" />
              <button class="send-button" @click="sendMessage">Send</button>
              
          </div>
          <div class="message-time">{{ num_tokens}}/{{ max_tokens  }}</div>
        </div>
        
    </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import ChatMessage from '../../../lib/message.js';  

  export default {
    data() {
      return {
        messages: [
          new ChatMessage(0, "Hello, How are you?", this.getCurrentTime(),false)       
        ],
        newMessage: 'c++快速排序示例，使用模板',
        max_tokens: process.env.VUE_APP_MAX_TOKENS,
       
        num_tokens: -1
        
      }
    },
    created(){
      this.getNumTokens()
    },
    computed: {       
      messageListMaxHeight() {
        if (!this.$el) return '' // return empty string if $el is not available yet
        return this.$el.clientHeight - 80 + 'px'
      },
      areaHeight() {
        return this.newMessage.split('\n').length * 20 + 20 
      }  
     
    },
    methods: {
      inputChange(e) {
        console.log(e.target.value)
        this.getNumTokens()
      },
       async sendMessage() {
          let payloads= this.getMessagesToSend();
         // add questions to chat windows
          if (this.newMessage.trim() !== '') {
            const message = new ChatMessage(this.messages.length + 1, 
              this.newMessage, this.getCurrentTime(),false)
         
          this.messages.push(message)          
          }
          try{ 
            const chatUrl= process.env.VUE_APP_BASE_API_URL+'/api/chat'
          
            let response = await axios.post(
              chatUrl, 
              payloads, 
              {
                  headers: {
                  'Content-Type': 'application/json'                
                  }
              }
          );      
       
          console.log(response)
          for(let choice of response.data.choices) {
            const message = new ChatMessage(this.messages.length + 1, 
              choice.message.content.trim(), this.getCurrentTime(), true)           
            console.log(message)
            this.messages.push(message)
          }
        } catch (error) {
          console.error(error);
        }
     
      },
      getCurrentTime() {
        const now = new Date()
        const hour = now.getHours().toString().padStart(2, '0')
        const minute = now.getMinutes().toString().padStart(2, '0')
        return `${hour}:${minute}`
      },
      
      getMessagesToSend() {
        let messagesToSend = []
        for(let message of this.messages) {

          if(message.isAI)
            messagesToSend.push({
              content: message.content,
              role: 'assistant'
            })
        }
        // add the new message
        messagesToSend.push({
          content: this.newMessage,
          role: 'user'
        })
        return messagesToSend
      },
      async getNumTokens(){    
          if(this.newMessage.trim().length ==0) 
            this.num_tokens =0
          console.log(this.newMessage)
          let payloads = this.getMessagesToSend();
          console.log(payloads)
          let num = await axios.post(
            process.env.VUE_APP_BASE_API_URL+'/api/token/len', 
            payloads, 
            {
                headers: {
                'Content-Type': 'application/json'                
                }
            }
          );
          console.log(num)
          this.num_tokens = num.data.token_len  
      }    
      
      
    }
    
  }
  </script>
 