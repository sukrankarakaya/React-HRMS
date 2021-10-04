import axios from "axios"

export default class CandidateTechnologyService{

    getTechnology() {

        return axios.get("http://localhost:8080/api/tegnology/getAll")
    }

    add(technology){
        return axios.post("http://localhost:8080/api/tegnology/add", technology)
    }

    getByCandidateId(id){
        return axios.get("http://localhost:8080/api/tegnology/getByCandidateId?id="+ id)
    }
    

    update(technology){
        return axios.put("http://localhost:8080/api/tegnology/update",technology)
    }
    delete(id){
        return axios.delete("http://localhost:8080/api/tegnology/delete?id="+id)
    }


}
