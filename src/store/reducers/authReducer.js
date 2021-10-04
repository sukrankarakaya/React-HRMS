import { USER_LOGOUT } from "store/actions/userActions";
import { USER_LOGIN } from "store/actions/userActions";
import { authItems } from "store/initialValues/authItems";


const initialState = {
    authItems: authItems
}


export default function authReducer(state = initialState, { type, payload }) {

    switch (type) {
        case USER_LOGIN:
            return {
                ...state,
                authItems: [...[{ login: true, user: payload }]]
            }
        case USER_LOGOUT:
            return {
                ...state,
                authItems: [{ login: false, user: { id: 0, userType: 0 } }]
            };

        default:
            return state;
    }

}