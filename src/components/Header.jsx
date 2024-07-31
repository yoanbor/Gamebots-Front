import { useState, useCallback, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { MoonIcon } from "../assets/icons/moon.jsx";
import { SunMoonIcon } from "../assets/icons/sun-moon.jsx";
import PropTypes from 'prop-types';

const Header = ({ onSearch }) => {
    const [isMyAccountVisible, setIsMyAccountVisible] = useState(false);
    const navigate = useNavigate();
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
    const [searchTerm, setSearchTerm] = useState('');

    const toggleMyAccountContainer = useCallback(() => {
        setIsMyAccountVisible(prev => !prev);
    }, []);

    const handleLogout = useCallback(() => {
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        localStorage.removeItem('userAccountId');
        navigate('/login');
    }, [navigate]);

    useEffect(() => {
        document.body.className = theme === 'dark' ? 'dark-theme' : 'light-theme';
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
    }

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
        onSearch(event.target.value);
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
                <button id={"switch-dark-light"} onClick={toggleTheme}>
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
                    <img src="/avatars/AvatarPath.png" alt="avatar utilisateur" />
                </button>
                {isMyAccountVisible && (
                    <div className="my-account-container">
                        <NavLink to={"/account"} onClick={() => setIsMyAccountVisible(false)}>
                            <div className="go-to-my-account">
                                <img src="/avatars/AvatarPath.png" alt="avatar utilisateur" />
                                <p>Mon compte</p>
                            </div>
                        </NavLink>
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
    onSearch: PropTypes.func.isRequired,
};

export default Header;
