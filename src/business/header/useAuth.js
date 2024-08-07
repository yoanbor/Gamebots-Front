import { useNavigate } from 'react-router-dom';

export const useAuth = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('userAccountId');
    localStorage.removeItem('username');
    localStorage.removeItem('token');
    navigate('/login');
  };

  return { handleLogout };
};
