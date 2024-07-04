class Message {
    constructor(idMessage, content, creationDate, modificationDate, conversation) {
        this.idMessage = idMessage;
        this.content = content;
        this.creationDate = creationDate;
        this.modificationDate = modificationDate;
        this.conversation = conversation;
    }
}

export default Message;