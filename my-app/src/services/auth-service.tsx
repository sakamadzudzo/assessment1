import axios from "axios";
import React from "react";
import State from "../State";
import { API_URL } from './../enviroment';

class AuthService {
    login(username: String, password: String) {
        return axios
            .post(API_URL + "login", {
                username: username,
                password: password
            })
            .then(response => {
                console.log(response.data);
                // setValues({ user: response.data.data, tokenTimer: 300, showPassword: false, token: response.data.token })
                return response.data;
            });
    }

    logout() {
        // setValues({ user: { id: 0, username: '', name: '', dob: '', gender: '' }, tokenTimer: 0, showPassword: false, token: '' });
    }
}

export default new AuthService();