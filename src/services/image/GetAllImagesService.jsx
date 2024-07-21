import axios from "axios";

const getAllImages = async () => {
    const token = localStorage.getItem('token');

    try {
        const response = await axios.get('http://localhost:8080/images', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });

        return response.data;
    } catch (error) {
        console.log('Erreur lors de la récupération des images');
        throw error;
    }
};

export default getAllImages;