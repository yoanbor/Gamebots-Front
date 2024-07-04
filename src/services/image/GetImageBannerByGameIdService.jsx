import axios from "axios";

function getImageBannerByGameId(gameId) {
    return axios.get('http://localhost:8080/games/'+ gameId +'/banner');
}

export default getImageBannerByGameId;