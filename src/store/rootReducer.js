
import { combineReducers } from "redux";
import authReducer from "./reducers/authReducer";


const rootReducer = combineReducers({
    //favorite : favoriteReducer
    auth :authReducer
})


export default  rootReducer;