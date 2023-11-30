import React, {useState, useEffect, useContext} from 'react'
import { AuthContext } from '../context/AuthContext'

const HomePage = () => {

    let [notes, setNotes] = useState([])
    let {authTokens, logout} = useContext(AuthContext)

    useEffect(() => {
      getNotes()
    },[])

    let getNotes = async () => {
        let response = await fetch('http://127.0.0.1:8000/api/notes', {
            method:'GET',
            headers:{
                'Content-Type':'applicationn/json',
                'Authorization': `Bearer ${authTokens.access}`
            }
        })
        let data = await response.json()
        if (response.status === 200) {
            setNotes(data)
        }else if(response.statusText === 'Unauthorized'){
            logout()
        }
    }
  return (
    <div>
        <p>You are logged in to the home page!</p>

        <p>
            {notes.map(note => (
                <li key={note.id}>{note.body}</li>
            ))}
        </p>
    </div>
  )
}

export default HomePage