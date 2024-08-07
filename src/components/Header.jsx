import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { MoonIcon } from '../styles/assets/icons/moon.jsx';
import { SunMoonIcon } from '../styles/assets/icons/sun-moon.jsx';
import { useTheme } from '../business/useTheme.js';
import { useUserAvatar } from '../business/header/useUserAvatar.js';
import { useAuth } from '../business/header/useAuth.js';

const Header = ({ onSearch }) => {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();
  const { userAvatar, selectedAvatarId } = useUserAvatar();
  const { handleLogout } = useAuth();

  const [searchTerm, setSearchTerm] = useState('');
  const [isMyAccountVisible, setIsMyAccountVisible] = useState(false);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    if (onSearch) {
      onSearch(event.target.value);
    }
  };

  const toggleMyAccountContainer = () => {
    setIsMyAccountVisible(prev => !prev);
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
        <button id="switch-dark-light" onClick={toggleTheme} aria-label="Toggle Theme">
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
              <img src="/src/styles/assets/icons/disconnect.svg" alt="icon déconnexion" />
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
