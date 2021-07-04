import axios from "axios"

export default class EmployeeService{

    getEmployies(){
        return axios.get("http://localhost:8080/api/employee/getAll")
    }

}

