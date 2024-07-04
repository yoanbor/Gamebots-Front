import axios from "axios";

function getAllImagesByGameId(gameId) {
    return axios.get('http://localhost:8080/games/' + gameId + '/images');
}

export default getAllImagesByGameId;