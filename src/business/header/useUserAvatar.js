import { useState, useCallback, useEffect } from 'react';
import getUserAccountByUserIdController from '../../presentation/controllers/user/GetUserAccountByUserIdController.jsx';

export const useUserAvatar = () => {
  const [userAvatar, setUserAvatar] = useState('');
  const [selectedAvatarId, setSelectedAvatarId] = useState(null);

  const fetchUserAvatar = useCallback(async () => {
    try {
      const userAccountId = localStorage.getItem('userAccountId');
      if (userAccountId) {
        const user = await getUserAccountByUserIdController(userAccountId);
        if (user && user.image && user.image.source) {
          setUserAvatar(user.image.source);
          setSelectedAvatarId(user.image.idImage);
        }
      }
    } catch (error) {
      console.error("Erreur lors de la récupération de l'avatar utilisateur", error);
    }
  }, []);

  useEffect(() => {
    fetchUserAvatar();

    const handleAvatarUpdate = () => {
      fetchUserAvatar();
    };

    window.addEventListener('avatarUpdated', handleAvatarUpdate);

    return () => {
      window.removeEventListener('avatarUpdated', handleAvatarUpdate);
    };
  }, [fetchUserAvatar]);

  return { userAvatar, selectedAvatarId };
};
