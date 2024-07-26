import getUserAccountByUsernameController from "../../controllers/user/GetUserAccountByUsernameController.jsx";

export const getAndRegisterUserAccountIdToLocalStorage = async (setUserAccountId, setError) => {
    try {
        const accountId = await getUserAccountByUsernameController(localStorage.username);
        localStorage.setItem('userAccountId', accountId);
        setUserAccountId(accountId);
    } catch (error) {
        setError("Erreur lors de la récupération de l'ID du compte utilisateur");
    }
};
