import axios from "axios";


export default class JobPositionList{

getJobAdvertisaments(){
    return axios.get("http://localhost:8080/api/JobAdvertisements/getAllActiveTrue")
}


}

