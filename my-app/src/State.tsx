import User from "./entities/user";

interface State {
    tokenTimer: number,
    showPassword: boolean;
    user: User,
    token: String
}

export default State;