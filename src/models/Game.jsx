class Game {
    constructor(idGame, title, studio, releaseDate, platform, story, isOnline, numberPlayers, creationDate, modificationDate) {
        this.idGame = idGame;
        this.title = title;
        this.studio = studio;
        this.releaseDate = releaseDate;
        this.isOnline = isOnline;
        this.numberPlayers = numberPlayers;
        this.creationDate = creationDate;
        this.modificationDate = modificationDate;
    }
}

export default Game;