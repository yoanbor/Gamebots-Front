class Conversation {
    constructor(idConversation, name, creationDate, modificationDate, user, game) {
        this.idConversation = idConversation;
        this.name = name;
        this.creationDate = creationDate;
        this.modificationDate = modificationDate;
        this.user = user;
        this.game = game;
    }
}

export default Conversation;