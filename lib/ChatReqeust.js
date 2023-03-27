export default class ChatReqeust {
     
    constructor(role,  content, name =null) {
        this.role = role;
        this.content = content;
        this.name = name;
    }

    get role() {
        return this._role;
    }

    get content() {
        return this._content;
    }

    get name() {
        return this._name;
    }

    set role(role) {
        this._role = role;
    }

    set content(content) {
        this._content = content;
    }

    set name(name) {
        this._name = name;
    }
    
}