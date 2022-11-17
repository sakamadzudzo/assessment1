import Home from "./pages/Home";
import Login from "./pages/Login";
// import About from "./components/About";
// import Products from "./components/Products";

// other
import { FC } from "react";

// interface
interface Route {
    key: string,
    title: string,
    path: string,
    enabled: boolean,
    component: FC<{}>
}

export const routes: Array<Route> = [
    {
        key: 'home-route',
        title: 'Home',
        path: '/home',
        enabled: true,
        component: Home
    },
    {
        key: 'login-route',
        title: 'Login',
        path: '/login',
        enabled: true,
        component: Login
    },
    // {
    //     key: 'initial-route',
    //     title: 'Initial Page',
    //     path: '/',
    //     enabled: true,
    //     component: App
    // }
]