import User from "../../models/User.jsx";
import loginUserController from "../../controllers/config/AuthController.jsx";

export const handleSubmitForLogin = async (e, pseudo, password, setPseudo, setPassword, navigate, setError) => {
    e.preventDefault();
    setError('');
    const user = new User(null, pseudo, null, null, password, null, null, null);

    try {
        const response = await loginUserController(user);
        if (response && response.data) {
            localStorage.setItem('token', response.data);
            localStorage.setItem('username', pseudo);
            setPseudo("");
            setPassword("");
            navigate('/home');
        } else {
            new Error('Utilisateur non valide');
        }
    } catch (err) {
        setError(err.message || 'Erreur de connexion, veuillez réessayer.');
    }
};