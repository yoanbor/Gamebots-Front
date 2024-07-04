class User {
    constructor(idUser, username, phone, email, password, creationDate, modificationDate, image) {
        this.idUser = idUser;
        this.username = username;
        this.phone = phone;
        this.email = email;
        this.password = password;
        this.creationDate = creationDate;
        this.modificationDate = modificationDate;
        this.image = image;
    }
}

export default User;