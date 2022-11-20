import axios from "axios";
import { API_URL } from './../enviroment';
import myLocalStorage from "../myLocalStorage";

class AuthService {
    login(username: String, password: String) {
        return axios
            .post(API_URL + "login", {
                username: username,
                password: password
            })
            .then(response => {
                console.log(response.data);
                myLocalStorage.setItem("user", response.data.data, 300);
                myLocalStorage.setItem("token", response.data.token, 300);
                const AuthStr = 'Bearer '.concat(response.data.token);
                myLocalStorage.setItem('authHeader', AuthStr, 300);
                return response.data;
            });
    }

    logout() {
        myLocalStorage.clear();
        window.location.href = '/';
    }
}

export default new AuthService();