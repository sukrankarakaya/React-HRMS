import axios from "axios";


export default class JobAdvertisementsService {

    add(jobAdvertisement) {
        return axios.post("http://localhost:8080/api/JobAdvertisements/add" , jobAdvertisement)
    }

    getJobAdvertisaments() {
        return axios.get("http://localhost:8080/api/JobAdvertisements/getAllActiveTrue")
    }

    getByJobAdvertisamentsDetailId(id) {
        return axios.get("http://localhost:8080/api/JobAdvertisements/getJobAdvertisementDetailsById?id=" + id)
    }


    jobAdvertisementConfirm(id) {
        return axios.post("http://localhost:8080/api/JobAdvertisements/changeActiveToClose?id=" + id)
    }


    jobAdvertisementConfirmTrue(id) {
        return axios.post("http://localhost:8080/api/JobAdvertisements/changeActiveToCloseTrue?id=" + id)
    }

    getById(id){
        return axios.get("http://localhost:8080/api/JobAdvertisements/getById?id="+id)
    }


}

