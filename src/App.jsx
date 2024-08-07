import { useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PageError from './pages/PageError.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Home from './pages/Home.jsx';
import Account from './pages/Account.jsx';
import GameDetails from './pages/Game.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
    errorElement: <PageError />,
  },
  {
    path: '/home',
    element: <Home />,
    errorElement: <PageError />,
  },
  {
    path: '/login',
    element: <Login />,
    errorElement: <PageError />,
  },
  {
    path: '/register',
    element: <Register />,
    errorElement: <PageError />,
  },
  {
    path: '/account',
    element: <Account />,
    errorElement: <PageError />,
  },
  {
    path: '/game/:id',
    element: <GameDetails />,
    errorElement: <PageError />,
  },
]);

function App() {
  useEffect(() => {
    const theme = localStorage.getItem('theme') || 'light';
    document.body.className = theme === 'dark' ? 'dark-theme' : 'light-theme';
  }, []);

  return <RouterProvider router={router} />;
}

export default App;
