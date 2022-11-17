// interface
interface User {
    id: number,
    username: String,
    password: String,
    name: String,
    dob: String,
    gender: String
}

export default User;
export const users: Array<User> = [
    {
        id: 1,
        username: "kali",
        password: "1@maFULL5t#(kENGINEER!",
        name: "One Kali",
        dob: "23/02/1984",
        gender: "Male"
    },
    {
        id: 2,
        username: "kali2",
        password: "I#mAFullSt@CkENGINEER!",
        name: "Another Kali",
        dob: "23/02/1984",
        gender: "Female"
    }
]