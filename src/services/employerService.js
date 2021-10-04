import axios from "axios"

export default class EmployerService {

    getEmployers() {
        return axios.get("http://localhost:8080/api/employer/getAll")
    }

    add(employer) {
        return axios.post("http://localhost:8080/api/employer/add", employer)
    }

    delete(id) {
        return axios.delete("http://localhost:8080/api/employer/delete?id=" + id)
    }

    getById(id) {
        return axios.get("http://localhost:8080/api/employer/getById?id=" + id)

    }
    update(employer) {
        return axios.put("http://localhost:8080/api/employer/update", employer)
    }
    getByEmployerId(id) {
        return axios.get("http://localhost:8080/api/JobAdvertisements/getByActiveAndEmployerId?id=" + id)

    }


}