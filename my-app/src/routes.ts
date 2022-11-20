import Home from "./pages/Home";
import Login from "./pages/Login";
// import About from "./components/About";
// import Products from "./components/Products";

// other
import { FC } from "react";
import myLocalStorage from "./myLocalStorage";
import Logout from "./pages/Logout";

// interface
interface Route {
    key: string,
    title: string,
    path: string,
    enabled: boolean,
    component: FC<{}>
}

var condRoutes: Array<Route> = [];

if (myLocalStorage.getItem('token')) {
    condRoutes = [{
        key: 'home-route',
        title: 'Home',
        path: '/',
        enabled: true,
        component: Home
    },
    {
        key: 'logout-route',
        title: 'Logout',
        path: '/logout',
        enabled: true,
        component: Logout
    }]
} else {
    condRoutes = [{
        key: 'home-route',
        title: 'Home',
        path: '/',
        enabled: true,
        component: Home
    },
    {
        key: 'login-route',
        title: 'Login',
        path: '/login',
        enabled: true,
        component: Login
    },]
}

export const routes: Array<Route> = condRoutes;