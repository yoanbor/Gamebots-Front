import { useState, useCallback } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Header = () => {
    const [isMyAccountVisible, setIsMyAccountVisible] = useState(false);
    const navigate = useNavigate();

    const toggleMyAccountContainer = useCallback(() => {
        setIsMyAccountVisible(prev => !prev);
    }, []);

    const handleLogout = useCallback(() => {
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        localStorage.removeItem('userAccountId');
        navigate('/login');
    }, [navigate]);

    return (
        <header>
            <div className="header-left-part">
                <NavLink to={"/home"}>
                    <img src="/Logo.svg" alt="logo Gamebots" />
                    <h1>Gamebots</h1>
                </NavLink>
            </div>
            <div className="header-right-part">
                <form>
                    <input type="text" placeholder="Rechercher" aria-label="Rechercher" />
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

export default Header;
