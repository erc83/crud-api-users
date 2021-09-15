import {useHistory, useParams} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { deleteUserStartThunk } from '../../store/users/thunks'

const UserDelete = () => {
    const { id } = useParams()
    const users = useSelector(state => state.users.data)
    const [user, setUser] = useState({})
    const dispatch = useDispatch()
    const history = useHistory()
    
    const handlerOnDelete = ( ) => {
        dispatch(deleteUserStartThunk( parseInt(id) ))
        history.push("/")
    }
    
    useEffect(() => {
        const user = users.filter((user) => user.id === parseInt(id))[0]
        setUser(user)
    }, []) 

    return (
            <div> 
                De verdad quieres borrar a  : {user.name}
                <button onClick={handlerOnDelete}>Delete</button>
            </div>
    ) 
}

export default UserDelete
