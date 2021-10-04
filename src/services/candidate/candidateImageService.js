import axios from "axios"

export default class CandidateImageService{

    getImage() {

        return axios.get("http://localhost:8080/api/candidateImage/getAll")
    }

    add(image){
        return axios.post("http://localhost:8080/api/candidateImage/add", image)
    }

    getByCandidateId(id){
        return axios.get("http://localhost:8080/api/candidateImage/getByCandidateId?id="+ id)
    }


    update(image){
        return axios.put("http://localhost:8080/api/candidateImage/update",image)
    }
    delete(id){
        return axios.delete("http://localhost:8080/api/candidateImage/delete?id="+id)
    }


}
