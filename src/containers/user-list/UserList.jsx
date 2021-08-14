import React, { useEffect }  from 'react'
import { useSelector, useDispatch }  from 'react-redux'
//import { usersSelector } from '../../store/users/selector'
import { fetchUsersStartThunk } from '../../store/users/thunks'

const UserList = () => {
    const users = useSelector(state => state.users.data);
    console.log(users)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchUsersStartThunk())
    }, [])

    return (
        <div>
            Falta renderizar la lista de usuarios            
        </div>
    )
}

export default UserList
