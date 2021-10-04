import axios from "axios"

export default class FavoriteJobAdvertisementService {


    add(candidateId, jobAdvertisementId) {
        return axios.post(` http://localhost:8080/api/Favorite/add?candidateId=${candidateId}&jobAdvertisementId=${jobAdvertisementId}`)
    }
    getByCandidateId(id) {
        return axios.get("http://localhost:8080/api/Favorite/getByCandidateId?candidateId=" + id)
    }
    getByJobAdvertId(id) {
        return axios.get("http://localhost:8080/api/Favorite/getByAdvertisementId?id="+id)
    }

    getByJobAdvertIdAndCandidateId(candidateId,jobAdvertId) {
        return axios.get(`http://localhost:8080/api/Favorite/getByAdvertisementIdAndCandidateId?candidateId=${candidateId}&jobAdvertisementId=${jobAdvertId}`)
    }
    delete(id) {
        return axios.delete("http://localhost:8080/api/Favorite/delete?favoriteId=" + id)
    }


}
