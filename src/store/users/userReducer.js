import {
    FETCH_USERS_START,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE,
    DELETE_USER_START,
    DELETE_USER_SUCCESS,
    DELETE_USER_FAILURE
} from './constants'
import { initialStateUser } from '../initialState'

const usersReducer = (state = initialStateUser, action) => {
    switch (action.type) {
        case FETCH_USERS_START:
            return{
                ...state,
                isLoading: true,
            };
        case FETCH_USERS_SUCCESS:
            return{
                ...state,
                isLoading: false,
                data: action.payload,
            };
        case FETCH_USERS_FAILURE:
            return{
                ...state,
                errorMessage: action.payload,
                isLoading: false,
                data: [],
            };

        case  DELETE_USER_START:
            return{
                ...state,
                isLoading: true,
            };

        case DELETE_USER_SUCCESS:
            return{
                ...state,
                isLoading: false,
                data: state.data.filter((user) => user.id !== parseInt(action.payload)),
            };

        case DELETE_USER_FAILURE:
            return{
                ...state,
                errorMessage: action.payload,
                isLoading: false,
                data: [],
            };

        default:
            return state;       
    }
}

export default usersReducer;