import modifyUserAccountController from '../../presentation/controllers/user/ModifyUserAccountController.jsx';
import getUserAccountByUserIdController from '../../presentation/controllers/user/GetUserAccountByUserIdController.jsx';

export const handleSubmitForAccount = async (
  e,
  userAccountId,
  password,
  userId,
  pseudo,
  phoneNumber,
  email,
  setError,
  imageId
) => {
  e.preventDefault();

  console.log(
    e,
    userAccountId,
    password,
    userId,
    pseudo,
    phoneNumber,
    email,
    setError,
    imageId
  );

  try {
    const currentUser = await getUserAccountByUserIdController(userAccountId);

    const finalPassword = password && password.trim() !== '' ? password : null;

    const updatedUser = {
      idUser: userId,
      username: pseudo,
      phone: phoneNumber,
      email: email,
      password: finalPassword,
      creationDate: currentUser.creationDate,
      modificationDate: new Date(),
      imageId: imageId,
    };

    console.log(updatedUser);

    await modifyUserAccountController(updatedUser);
    setError('Modification réussie');

    window.dispatchEvent(new Event('avatarUpdated'));
  } catch (error) {
    console.error("Erreur lors de la modification de l'utilisateur", error);
    setError("Erreur lors de la modification de l'utilisateur");
  }
};
