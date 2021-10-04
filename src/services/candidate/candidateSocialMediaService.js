import axios from "axios"

export default class CandidateSocialMediaService{

    getSocialMedia() {

        return axios.get("http://localhost:8080/api/socialMedia/getAll")
    }

    add(socialMedia){
        return axios.post("http://localhost:8080/api/socialMedia/add", socialMedia)
    }

    getByCandidateId(id){
        return axios.get("http://localhost:8080/api/socialMedia/getByCandidateId?id="+ id)
    }
    
    update(socialMedia){
        return axios.put("http://localhost:8080/api/socialMedia/update",socialMedia)
    }
    delete(id){
        return axios.delete("http://localhost:8080/api/socialMedia/delete?id="+id)
    }
}