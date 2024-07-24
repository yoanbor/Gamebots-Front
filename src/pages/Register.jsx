import { NavLink, useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import RegisterAndLoginLeftPart from "../components/RegisterLoginLeftPart.jsx";
import User from "../models/User.jsx";
import createUserAccountController from "../controllers/user/CreateUserAccountController.jsx";
import loginUserController from "../controllers/config/AuthController.jsx";

function Register() {
    const [inputType, setInputType] = useState('password');
    const [inputType2, setInputType2] = useState('password');

    const passwordInput = useRef(null);
    const passwordInput2 = useRef(null);

    const togglePassword = () => {
        if (passwordInput.current) {
            setInputType((prevType) => (prevType === 'password' ? 'text' : 'password'));
        }
    };

    const togglePassword2 = () => {
        if (passwordInput2.current) {
            setInputType2((prevType) => (prevType === 'password' ? 'text' : 'password'));
        }
    };

    const [pseudo, setPseudo] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState(null);

    const navigate = useNavigate(); // Hook pour la navigation

    const handleSubmit = async (e) => {
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
                new Error('Utilisateur non valide');
            }
        } catch (err) {
            setError(err.message || 'Erreur lors de l\'inscription, veuillez réessayer.');
        }
    }

    return (
        <div className="register">
            <RegisterAndLoginLeftPart />

            <div className="register-right-part">
                <h1>Gamebots</h1>
                <div className="form-container">
                    <form className="form" onSubmit={handleSubmit}>
                        <label className="labels">
                            <p className='label' id="label-pseudo">Pseudo</p>
                            <input type="text" className="inputs" required placeholder="Herobrine" autoComplete="username" value={pseudo} onChange={(e) => setPseudo(e.target.value)} />
                        </label>

                        <label className="labels">
                            <p className='label' id="label-email">Email</p>
                            <input type="email" className="inputs" required placeholder="stevelapioche@mc.com" value={email} autoComplete="email" onChange={(e) => setEmail(e.target.value)} />
                        </label>

                        <div className="field field-password">
                            <label className="labels">
                                <p className='label' id="label-password">Mot de passe</p>
                                <input type={inputType} ref={passwordInput} required className="inputs" id="password1" autoComplete="new-password" placeholder="••••••••••••••••" value={password} onChange={(e) => setPassword(e.target.value)} />
                            </label>
                            <div className="password-toggle" onClick={togglePassword}>
                                {inputType === 'password' ? (
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.88013 9.88C9.58538 10.1547 9.34897 10.4859 9.185 10.8539C9.02103 11.2218 8.93287 11.6191 8.92576 12.0219C8.91865 12.4247 8.99275 12.8248 9.14364 13.1984C9.29452 13.5719 9.5191 13.9113 9.80397 14.1962C10.0888 14.481 10.4282 14.7056 10.8017 14.8565C11.1753 15.0074 11.5754 15.0815 11.9782 15.0744C12.381 15.0673 12.7783 14.9791 13.1463 14.8151C13.5143 14.6512 13.8455 14.4148 14.1201 14.12M10.73 5.08C11.1513 5.02751 11.5754 5.00079 12 5C19 5 22 12 22 12C21.5529 12.9571 20.9922 13.8569 20.33 14.68M6.61 6.60999C4.62125 7.96461 3.02987 9.82524 2 12C2 12 5 19 12 19C13.9159 19.0051 15.7908 18.4451 17.39 17.39M2 2L22 22" stroke="#09090B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                ) : (
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2 12C2 12 5 5 12 5C19 5 22 12 22 12C22 12 19 19 12 19C5 19 2 12 2 12Z" stroke="#0C0C0C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="#0C0C0C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                )}
                            </div>
                        </div>

                        <div className="field field-password">
                            <label className="labels">
                                <p className='label' id="label-confirmPassword">Confirmer votre mot de passe</p>
                                <input type={inputType2} ref={passwordInput2} required autoComplete="new-password" className="inputs" id="password2" placeholder="••••••••••••••••" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                            </label>
                            <div className="password-toggle" onClick={togglePassword2}>
                                {inputType2 === 'password' ? (
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.88013 9.88C9.58538 10.1547 9.34897 10.4859 9.185 10.8539C9.02103 11.2218 8.93287 11.6191 8.92576 12.0219C8.91865 12.4247 8.99275 12.8248 9.14364 13.1984C9.29452 13.5719 9.5191 13.9113 9.80397 14.1962C10.0888 14.481 10.4282 14.7056 10.8017 14.8565C11.1753 15.0074 11.5754 15.0815 11.9782 15.0744C12.381 15.0673 12.7783 14.9791 13.1463 14.8151C13.5143 14.6512 13.8455 14.4148 14.1201 14.12M10.73 5.08C11.1513 5.02751 11.5754 5.00079 12 5C19 5 22 12 22 12C21.5529 12.9571 20.9922 13.8569 20.33 14.68M6.61 6.60999C4.62125 7.96461 3.02987 9.82524 2 12C2 12 5 19 12 19C13.9159 19.0051 15.7908 18.4451 17.39 17.39M2 2L22 22" stroke="#09090B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                ) : (
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2 12C2 12 5 5 12 5C19 5 22 12 22 12C22 12 19 19 12 19C5 19 2 12 2 12Z" stroke="#0C0C0C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="#0C0C0C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                )}
                            </div>
                        </div>

                        {error && <p className="error">{error}</p>}

                        <label className="checkbox">
                            <input type="checkbox" required id="CGU" />
                            Veuillez accepter les
                            <NavLink to={"/CGU"} id="need-to-login"> Conditions Générales d’Utilisations</NavLink> et
                            les
                            <NavLink to={"/MentionsLegales"} id="need-to-login"> Mentions Légales</NavLink>
                        </label>

                        <input type="submit" id="register" value="S'inscrire" />
                    </form>
                </div>

                <p>
                    Vous avez déjà un compte ?
                    <NavLink to="/Login" id="need-to-login"> Connectez vous</NavLink>
                </p>
            </div>
        </div>
    );
}

export default Register;
