import { useEffect, useState } from "react";
import getAvatarImagesController from "../../controllers/image/GetAvatarImagesController.jsx";

const AvatarImages = () => {
    const [avatars, setAvatars] = useState([]);

    useEffect(() => {
        const fetchAvatars = async () => {
            try {
                const images = await getAvatarImagesController();
                setAvatars(images);
            } catch (error) {
                console.error("Erreur lors de la récupération des avatars", error);
            }
        };

        fetchAvatars();
    }, []);

    return (
        <div className="avatar-images">
            {avatars.map(avatar => (
                <img key={avatar.idImage} src={avatar.source} alt={avatar.name} />
            ))}
        </div>
    );
};

export default AvatarImages;
