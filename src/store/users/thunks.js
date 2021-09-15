import {
    fetchUsersFailure,
    fetchUsersStart,
    fetchUsersSuccess,
    deleteUserStart,
    deleteUserSuccess,
    deleteUserFailure
} from './actions'


export const fetchUsersStartThunk = () => {
    return async (dispatch, getState) => {
        // const {users} = getState();
        // if(users.data.length > 10) { return; }
        dispatch(fetchUsersStart());
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users')
            const data = await response.json();
            dispatch(fetchUsersSuccess(data))
        } catch (error) {
            dispatch(fetchUsersFailure(error.message))
        }
    }
}

export const deleteUserStartThunk = (id) => {
    return async (dispatch, getState) => {
        // const {users} = getState();
        // if(users.data.length > 10) { return; }
        dispatch(deleteUserStart());
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {method: 'DELETE'})
            const data = await response.json();
            
            dispatch(deleteUserSuccess(id))
            
            
        } catch (error) {
            dispatch(deleteUserFailure(error.message))
        }
    }
}



