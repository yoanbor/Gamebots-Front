import getUserAccountByUserIdController from "../../controllers/user/GetUserAccountByUserIdController.jsx";

export const fetchUserData = async (userAccountId, setUserId, setPseudo, setEmail, setPassword, setPhoneNumber, setDefaultPseudo, setDefaultEmail, setDefaultPhoneNumber, setError) => {
    try {
        const user = await getUserAccountByUserIdController(userAccountId);
        setUserId(user.idUser);
        setPseudo(user.username || '');
        setEmail(user.email || '');
        setPassword('');
        setPhoneNumber(user.phone || '');

        setDefaultPseudo(user.username || '');
        setDefaultEmail(user.email || '');
        setDefaultPhoneNumber(user.phone || '');
    } catch (error) {
        setError("Erreur lors de la récupération des informations de l'utilisateur");
    }
};