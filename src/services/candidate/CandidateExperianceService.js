import axios from "axios"

export default class CandidateExperianceService{

    getExperiance() {

        return axios.get("http://localhost:8080/api/experiances/getAll")
    }

    add(Experiance){
        return axios.post("http://localhost:8080/api/experiances/add", Experiance)
    }

    getByCandidateId(id){
        return axios.get("http://localhost:8080/api/experiances/getByCandidateId?id="+ id)
    }
    update(experiance){
        return axios.put("http://localhost:8080/api/experiances/update",experiance)
    }

    delete(id){
        return axios.delete("http://localhost:8080/api/experiances/delete?id="+id)
    }

    

}