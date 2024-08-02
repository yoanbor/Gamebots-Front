import { useState, useCallback, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { MoonIcon } from "../assets/icons/moon.jsx";
import getUserAccountByUserIdController from "../controllers/user/GetUserAccountByUserIdController.jsx";
import {SunMoonIcon} from "../assets/icons/sun-moon.jsx";

const Header = ({ onSearch }) => {
    const navigate = useNavigate();
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
    const [searchTerm, setSearchTerm] = useState('');
    const [userAvatar, setUserAvatar] = useState('');
    const [selectedAvatarId, setSelectedAvatarId] = useState(null);
    const [isMyAccountVisible, setIsMyAccountVisible] = useState(false);

    const fetchUserAvatar = useCallback(async () => {
        try {
            const userAccountId = localStorage.getItem('userAccountId');
            if (userAccountId) {
                const user = await getUserAccountByUserIdController(userAccountId);
                if (user && user.image && user.image.source) {
                    setUserAvatar(user.image.source);
                    setSelectedAvatarId(user.image.idImage);
                }
            }
        } catch (error) {
            console.error("Erreur lors de la récupération de l'avatar utilisateur", error);
        }
    }, []);

    useEffect(() => {
        fetchUserAvatar();

        const handleAvatarUpdate = () => {
            fetchUserAvatar();
        };

        window.addEventListener('avatarUpdated', handleAvatarUpdate);

        return () => {
            window.removeEventListener('avatarUpdated', handleAvatarUpdate);
        };
    }, [fetchUserAvatar]);

    useEffect(() => {
        document.body.className = theme === 'dark' ? 'dark-theme' : 'light-theme';
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
    };

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
        if (onSearch) {
            onSearch(event.target.value);
        }
    };

    const toggleMyAccountContainer = () => {
        setIsMyAccountVisible(prev => !prev);
    };

    const handleLogout = () => {
        localStorage.removeItem('userAccountId');
        localStorage.removeItem('username');
        localStorage.removeItem('token');
        navigate('/login');
    };

    const handleAccountClick = () => {
        navigate('/account', { state: { initialAvatarId: selectedAvatarId } });
    };

    return (
        <header>
            <div className="header-left-part">
                <NavLink to={"/home"}>
                    <img src="/Logo.svg" alt="logo Gamebots" />
                    <h1>Gamebots</h1>
                </NavLink>
            </div>
            <div className="header-right-part">
                <button id="switch-dark-light" onClick={toggleTheme}>
                    {theme === 'dark' ? <MoonIcon /> : <SunMoonIcon />}
                </button>
                <form>
                    <input
                        type="text"
                        placeholder="Rechercher"
                        aria-label="Rechercher"
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                </form>
                <button
                    className="my-account"
                    onClick={toggleMyAccountContainer}
                    aria-haspopup="true"
                    aria-expanded={isMyAccountVisible}
                >
                    <img src={userAvatar} alt="avatar utilisateur" />
                </button>
                {isMyAccountVisible && (
                    <div className="my-account-container">
                        <div className="go-to-my-account" onClick={handleAccountClick}>
                            <img src={userAvatar} alt="avatar utilisateur" />
                            <p>Mon compte</p>
                        </div>
                        <button onClick={handleLogout} className="disconnect">
                            <img src="/icons/User-xuser.svg" alt="icon déconnexion" />
                            <p>Se déconnecter</p>
                        </button>
                    </div>
                )}
            </div>
        </header>
    );
};

Header.propTypes = {
    onSearch: PropTypes.func,
};

export default Header;
