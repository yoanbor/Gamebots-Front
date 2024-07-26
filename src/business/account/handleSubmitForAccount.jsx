import getUserAccountByUserIdController from "../../controllers/user/GetUserAccountByUserIdController.jsx";
import User from "../../models/User.jsx";
import modifyUserAccountController from "../../controllers/user/ModifyUserAccountController.jsx";

export const handleSubmitForAccount = async (e, userAccountId, password, userId, pseudo, phoneNumber, email, setError) => {
    e.preventDefault();

    try {
        const currentUser = await getUserAccountByUserIdController(userAccountId);
        const updatedPassword = password ? password : currentUser.password;

        const updatedUser = new User(
            userId,
            pseudo,
            phoneNumber,
            email,
            updatedPassword,
            currentUser.creationDate,
            new Date(),
            currentUser.image
        );

        await modifyUserAccountController(updatedUser);
        setError('Modification réussie');
    } catch (error) {
        setError("Erreur lors de la modification de l'utilisateur");
    }
};