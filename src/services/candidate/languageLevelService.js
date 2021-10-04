import axios from "axios"

export default class LanguageLevelService{

    getLanguageLevel() {

        return axios.get("http://localhost:8080/api/languageLevels/getAll")
    }


    

}