import axios from "axios"

export default class CandidateService{


    add(candidate){
        return axios.post("http://localhost:8080/api/candidates/add",candidate)
    }


    getCandidates() {

        return axios.get("http://localhost:8080/api/candidates/getAll")
    }

    getCandidateCvById(id) {

        return axios.get("http://localhost:8080/api/candidates/getCandidateCVById?id=" +id)
    }

    getById(id) {

        return axios.get("http://localhost:8080/api/candidates/getById?id=" +id)
    }
    update(candidate){
        return axios.put("http://localhost:8080/api/candidates/update",candidate)
    }
    delete(id){
        return axios.delete("http://localhost:8080/api/candidates/delete?id="+id)
    }


}