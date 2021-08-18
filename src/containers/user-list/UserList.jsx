import React, { useEffect }  from 'react'
import { useSelector, useDispatch }  from 'react-redux'
//import { usersSelector } from '../../store/users/selector'
import { fetchUsersStartThunk } from '../../store/users/thunks'
import { Link } from 'react-router-dom'

const UserList = () => {
    const users = useSelector(state => state.users.data);
    console.log(users)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchUsersStartThunk())
    }, [])

    return (
        <div>
            {   
                <div className="container">
                    {users.map((user) => (
                        <div key={user.id} className="row">
                            <div className="col-4">
                                {user.name}
                            </div>
                            <div className="col-3">
                                <Link to={`/users/delete/${user.id}`} >Delete</Link>
                            </div>
                        </div>
                    ) ) }                    
                </div>
            }        
        </div>
    )
}

export default UserList
