import axios from "axios";

function getAllGames() {
    return axios.get('http://localhost:8080/games')
}

export default getAllGames;