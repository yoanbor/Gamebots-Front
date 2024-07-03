import axios from "axios";

function getGameByGameId(gameId) {
    return axios.get('http://localhost:8080/games/' + gameId)
}

export default getGameByGameId;