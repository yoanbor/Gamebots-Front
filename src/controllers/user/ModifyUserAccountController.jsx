import modifyUserAccount from "../../services/user/ModifyUserAccountService.jsx";

const modifyUserAccountController = async (user) => {
    try {
        return await modifyUserAccount(user);
    } catch (error) {
        console.error("Erreur lors de la modification de l'utilisateur", error.response ? error.response.data : error.message);
        throw error;
    }
}

export default modifyUserAccountController;
