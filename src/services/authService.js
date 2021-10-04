
import axios from "axios"


export default class AuthService {
    login(login){

        return axios.post("http://localhost:8080/api/auth/login",login)
    }

    userLogin(values){

        return axios.post("http://localhost:8080/api/user/login",values)
    }


}