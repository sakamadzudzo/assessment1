import axios from "axios";
import { toast } from "react-toastify";
import { API_URL } from '../enviroment';
import myLocalStorage from "../myLocalStorage";

class UserService {
    superSecureResource() {
        return axios
            .get(API_URL + "super-secure-resource", { headers: { Authorization: myLocalStorage.getItem('authHeader') } })
            .then(response => {
                return response.data;
            });
    }
}

export default new UserService();