import axios from "axios"

export default class CandidateSchoolService{

    getSchool() {

        return axios.get("http://localhost:8080/api/candidateSchools/getAll")
    }

    add(school){
        return axios.post("http://localhost:8080/api/candidateSchools/add", school)
    }


    getByCandidateId(id){
        return axios.get("http://localhost:8080/api/candidateSchools/getByCandidateId?id="+ id)
    }
    
    update(school){
        return axios.put("http://localhost:8080/api/candidateSchools/update",school)
    }
    delete(id){
        return axios.delete("http://localhost:8080/api/candidateSchools/delete?id="+id)
    }

}