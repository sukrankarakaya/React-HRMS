import axios from "axios"

export default class CandidateCoverLetterService{

    getAll() {

        return axios.get("http://localhost:8080/api/candidates/getAll")
    }

    add(candidateCoverLetter){
        return axios.post("http://localhost:8080/api/candidateCoverLetter/add", candidateCoverLetter)
    }

    
    getByCandidateId(id) {

        return axios.get("http://localhost:8080/api/candidateCoverLetter/getByCandidateId?id="+ id)
    }

    
    update(coverLetter){
        return axios.put("http://localhost:8080/api/candidateCoverLetter/update",coverLetter)
    }
    delete(id){
        return axios.delete("http://localhost:8080/api/candidateCoverLetter/delete?id="+id)
    }

}