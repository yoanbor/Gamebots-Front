import createUserAccount from "../../services/user/CreateUserAccountService.jsx";

const createUserAccountController = async (userAccount) => {
    try {
        return createUserAccount(userAccount);
    } catch (error) {
        console.error("Erreur lors de la création du nouvel utilisateur.");
        throw error;
    }

}

export default createUserAccountController;