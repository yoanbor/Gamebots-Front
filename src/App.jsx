import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PageError from "./PageError.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Home from "./pages/Home.jsx";
import Account from "./pages/Account.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <PageError/>
    },
    {
        path: "/home",
        element: <Home />,
        errorElement: <PageError/>
    },
    {
        path: "/login",
        element: <Login />,
        errorElement: <PageError/>
    },
    {
        path: "/register",
        element: <Register />,
        errorElement: <PageError/>
    },
    {
        path: 'account',
        element: <Account/>,
    }
    ]);

function App() {
    return <RouterProvider router={router}/>;
}

export default App;
