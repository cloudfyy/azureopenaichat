import {marked} from 'marked';
export default class ChatMessage {
   
    constructor(id, message, timestamp, isAI) {
        this.id = id;
        this.message = message;
        this.timestamp = timestamp;
        this.isAI = isAI;
    }

    get id() {
        return this._id;
    }

    get message() {
        return this._message;
    }

    get timestamp() {
        return this._timestamp;
    }

    
    get html() {
        return marked(this.message);
    }

    get isAI() {
        return this._isAI;
    }
 
    set id(id) {
        this._id = id;
    }

    set message(message) {
        this._message = message;
    }

    set timestamp(timestamp) {
        this._timestamp = timestamp;
    }

    set isAI(isAI) {
        this._isAI = isAI;
    }

    get isInChatSession() {
        return this._isInChatSession;
    }

    set isInChatSession(isInChatSession) {
        this._isInChatSession = isInChatSession;
    }
}