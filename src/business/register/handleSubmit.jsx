import User from "../../models/User.jsx";
import createUserAccountController from "../../controllers/user/CreateUserAccountController.jsx";
import loginUserController from "../../controllers/config/AuthController.jsx";

export const handleSubmit = async (e, pseudo, email, password, confirmPassword, setError, navigate, setPseudo, setEmail, setPassword, setConfirmPassword) => {
    e.preventDefault();

    if (password !== confirmPassword) {
        setError("Les mots de passe ne correspondent pas.");
        return;
    }

    const newUser = new User(null, pseudo, null, email, password, new Date(), null, null);

    try {
        await createUserAccountController(newUser);

        const user = new User(null, pseudo, null, email, password, null, null, null);
        const response = await loginUserController(user);

        if (response && response.data) {
            localStorage.setItem('token', response.data);
            localStorage.setItem('username', pseudo);
            setPseudo("");
            setEmail("");
            setPassword("");
            setConfirmPassword("");
            setError(null);

            navigate('/home');
        } else {
            setError('Utilisateur non valide');
        }
    } catch (err) {
        setError(err.message || 'Erreur lors de l\'inscription, veuillez réessayer.');
    }
};
