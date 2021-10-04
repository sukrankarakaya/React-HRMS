import axios from "axios"

export default class CandidateLanguageService{

    getAll() {

        return axios.get("http://localhost:8080/api/candidateLanguages/getAll")
    }

    add(language){
        return axios.post("http://localhost:8080/api/candidateLanguages/add", language)
    }

    getByCandidateId(id){
        return axios.get("http://localhost:8080/api/candidateLanguages/getByCandidateId?id="+ id)
    }
    
    update(language){
        return axios.put("http://localhost:8080/api/candidateLanguages/update",language)
    }
    delete(id){
        return axios.delete("http://localhost:8080/api/candidateLanguages/delete?id="+id)
    }

}