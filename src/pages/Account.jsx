import { useRef, useState, useEffect } from "react";
import Header from "../components/Header.jsx";
import User from "../models/User.jsx";
import modifyUserAccountController from "../controllers/user/ModifyUserAccountController.jsx";
import deleteUserAccountController from "../controllers/user/DeleteUserAccountController.jsx";
import getUserAccountByUserIdController from "../controllers/user/GetUserAccountByUserIdController.jsx";
import getUserAccountByUsernameController from "../controllers/user/GetUserAccountByUsernameController.jsx";

const Account = () => {
    const [inputType, setInputType] = useState('password');
    const passwordInput = useRef(null);

    const [pseudo, setPseudo] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [error, setError] = useState(null);

    const [defaultPseudo, setDefaultPseudo] = useState('');
    const [defaultEmail, setDefaultEmail] = useState('');
    const [defaultPhoneNumber, setDefaultPhoneNumber] = useState('');
    const [userId, setUserId] = useState(null);
    const [userAccountId, setUserAccountId] = useState(localStorage.getItem('userAccountId'));

    useEffect(() => {
        const fetchUserAccountId = async () => {
            try {
                const accountId = await getUserAccountByUsernameController(localStorage.username);
                localStorage.setItem('userAccountId', accountId);
                setUserAccountId(accountId);
            } catch (error) {
                setError("Erreur lors de la récupération de l'ID du compte utilisateur");
            }
        };

        if (!userAccountId) {
            fetchUserAccountId();
        }
    }, [userAccountId]);

    useEffect(() => {
        const fetchUserData = async () => {
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

        if (userAccountId) {
            fetchUserData();
        }
    }, [userAccountId]);

    const togglePassword = () => {
        if (passwordInput.current) {
            setInputType((prevType) => (prevType === 'password' ? 'text' : 'password'));
        }
    };

    const resetInputs = () => {
        setPseudo(defaultPseudo);
        setEmail(defaultEmail);
        setPassword('');
        setPhoneNumber(defaultPhoneNumber);
    };

    const deleteAccount = async () => {
        try {
            await deleteUserAccountController(localStorage.userAccountId);
            localStorage.removeItem('userAccountId');
            localStorage.removeItem('token');
            setError('Compte supprimé avec succès');
        } catch (error) {
            setError("Erreur lors de la suppression du compte utilisateur");
        }
    };

    const handleSubmit = async (e) => {
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

    return (
        <div className={"account-page"}>
            <Header />
            <div className={"account-page-container"}>
                <div className={"left-part"}>
                    <h1>Hey</h1>
                </div>
                <div className={"account-right-part"}>
                    <div className={"informations-part"}>
                        <h1>Modifier mes informations</h1>
                        <div className="form-container">
                            <form className="form" onSubmit={handleSubmit}>
                                <label className="labels">
                                    <p className='label' id="label-pseudo">Pseudo</p>
                                    <input type="text" className="inputs" required placeholder="Herobrine"
                                           autoComplete="username" value={pseudo}
                                           onChange={(e) => setPseudo(e.target.value)}/>
                                </label>
                                <label className="labels">
                                    <p className='label' id="label-email">Email</p>
                                    <input type="email" className="inputs" required placeholder="stevelapioche@mc.com"
                                           value={email} autoComplete="email"
                                           onChange={(e) => setEmail(e.target.value)}/>
                                </label>
                                <div className="field field-password">
                                    <label className="labels">
                                        <p className='label' id="label-password">Mot de passe</p>
                                        <input type={inputType} ref={passwordInput} className="inputs"
                                               id="password1" autoComplete="new-password" placeholder="••••••••••••••••"
                                               value={password} onChange={(e) => setPassword(e.target.value)}/>
                                    </label>
                                    <div className="password-toggle" onClick={togglePassword}>
                                        {inputType === 'password' ? (
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M9.88013 9.88C9.58538 10.1547 9.34897 10.4859 9.185 10.8539C9.02103 11.2218 8.93287 11.6191 8.92576 12.0219C8.91865 12.4247 8.99275 12.8248 9.14364 13.1984C9.29452 13.5719 9.5191 13.9113 9.80397 14.1962C10.0888 14.481 10.4282 14.7056 10.8017 14.8565C11.1753 15.0074 11.5754 15.0815 11.9782 15.0744C12.381 15.0673 12.7783 14.9791 13.1463 14.8151C13.5143 14.6512 13.8455 14.4148 14.1201 14.12M10.73 5.08C11.1513 5.02751 11.5754 5.00079 12 5C19 5 22 12 22 12C21.5529 12.9571 20.9922 13.8569 20.33 14.68M6.61 6.60999C4.62125 7.96461 3.02987 9.82524 2 12C2 12 5 19 12 19C13.9159 19.0051 15.7908 18.4451 17.39 17.39M2 2L22 22"
                                                    stroke="#09090B" strokeWidth="2" strokeLinecap="round"
                                                    strokeLinejoin="round"/>
                                            </svg>
                                        ) : (
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M2 12C2 12 5 5 12 5C19 5 22 12 22 12C22 12 19 19 12 19C5 19 2 12 2 12Z"
                                                    stroke="#0C0C0C" strokeWidth="2" strokeLinecap="round"
                                                    strokeLinejoin="round"/>
                                                <path
                                                    d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                                                    stroke="#0C0C0C" strokeWidth="2" strokeLinecap="round"
                                                    strokeLinejoin="round"/>
                                            </svg>
                                        )}
                                    </div>
                                </div>
                                <label className="labels">
                                    <p className='label' id="label-phone">Numéro de téléphone</p>
                                    <input type="tel" className="inputs" placeholder="00.00.00.00.00"
                                           autoComplete="tel" value={phoneNumber}
                                           pattern="[0-9]{10}"
                                           onChange={(e) => setPhoneNumber(e.target.value)}/>
                                </label>
                                {error && <p className="error">{error}</p>}
                                <div className="button-container">
                                    <button type="button" onClick={deleteAccount} className="delete-button">Supprimer
                                        mon compte
                                    </button>
                                    <button type="button" className={"cancel-button"} onClick={resetInputs}>Annuler
                                    </button>
                                    <input type="submit" id="register" value="Valider"/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Account;
