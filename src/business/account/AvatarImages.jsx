import { useEffect, useState } from 'react';
import getAvatarImagesController from '../../presentation/controllers/image/GetAvatarImagesController.jsx';
import PropTypes from 'prop-types';

const AvatarImages = ({ setSelectedImageId, selectedImageId, setError }) => {
  const [avatars, setAvatars] = useState([]);
  const [positions, setPositions] = useState({});

  useEffect(() => {
    const fetchAvatars = async () => {
      try {
        const images = await getAvatarImagesController();
        setAvatars(images);
        if (!selectedImageId && images.length > 0) {
          setSelectedImageId(images[0].idImage);
        }
        setPositions(calculatePositions(images.length));
      } catch (error) {
        console.error('Erreur lors de la récupération des avatars', error);
        setError('Erreur lors de la récupération des avatars');
      }
    };

    fetchAvatars();
  }, [setError, setSelectedImageId, selectedImageId]);

  const handleAvatarClick = (clickedAvatar) => {
    if (clickedAvatar.idImage !== selectedImageId) {
      setSelectedImageId(clickedAvatar.idImage);
    }
  };

  return (
    <div className="avatar-images">
      {avatars.map((avatar, index) => (
        <img
          key={avatar.idImage}
          id={avatar.idImage}
          src={avatar.source}
          alt={avatar.name}
          onClick={() => handleAvatarClick(avatar)}
          className={`avatar-image ${selectedImageId === avatar.idImage ? 'selected' : ''}`}
          style={
            selectedImageId === avatar.idImage
              ? positions.center
              : positions[index]
          }
        />
      ))}
    </div>
  );
};

const calculatePositions = (numAvatars) => {
  const positions = {
    center: {
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '20vw',
      height: '20vw',
    },
  };

  const angleStep = (2 * Math.PI) / numAvatars;
  const radius = 40;

  for (let i = 0; i < numAvatars; i++) {
    const angle = i * angleStep;
    const x = 50 + radius * Math.cos(angle);
    const y = 50 + radius * Math.sin(angle);

    positions[i] = {
      top: `${y}%`,
      left: `${x}%`,
      transform: 'translate(-50%, -50%)',
      width: '10vw',
      height: '10vw',
    };
  }

  return positions;
};

AvatarImages.propTypes = {
  setSelectedImageId: PropTypes.func.isRequired,
  selectedImageId: PropTypes.number,
  setError: PropTypes.func.isRequired,
};

export default AvatarImages;
