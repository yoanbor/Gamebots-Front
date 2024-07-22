import axios from "axios";

const getImageByImageId = async (imageId) => {
    const token = localStorage.getItem("token");

    try {
        const response = await axios.get(
            'http://localhost:8080/images/' + imageId, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            });
        return response.data;
    } catch (error) {
        console.log("Erreur lors de la récupération de l'image par son id");
        throw error;
    }
};

export default getImageByImageId;