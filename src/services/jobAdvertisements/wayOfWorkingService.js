
import axios from "axios"


export default class WayOfWorkingService {
    getWayOfWorking(){

        return axios.get("http://localhost:8080/api/wayOfWorking/getAll")
    }
}
