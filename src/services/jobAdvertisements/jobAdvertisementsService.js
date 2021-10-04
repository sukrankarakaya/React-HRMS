import axios from "axios";


export default class JobAdvertisementsService {

    add(jobAdvertisement) {
        return axios.post("http://localhost:8080/api/JobAdvertisements/add" , jobAdvertisement)
    }

    getJobAdvertisements() {
        return axios.get("http://localhost:8080/api/JobAdvertisements/getAllActiveTrue")
    }

    getJobAdvertisementFalse() {
        return axios.get("http://localhost:8080/api/JobAdvertisements/getAllActiveFalse")
    }
    getByJobAdvertisementsDetailId(id) {
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
    delete(id){
        return axios.delete("http://localhost:8080/api/JobAdvertisements/delete?id="+id)
    }

    grtFilter(cityId,positionId,workingTimeId,wayOfWorkId){
        return axios.get(`http://localhost:8080/api/JobAdvertisements/getFilter?cityId=${cityId}&positionId=${positionId}&wayOfWorkingId=${wayOfWorkId}&workingTimeId=${workingTimeId}`)
    }

    getByFilter(jobAdvertisementFilters, pageNo, pageSize){
        return axios.post("http://localhost:8080/api/JobAdvertisements/getbyfilter?pageNo="+pageNo+"&pageSize="+pageSize,jobAdvertisementFilters)
    }


}

