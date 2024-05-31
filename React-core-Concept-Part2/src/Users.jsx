
import { useEffect, useState } from "react"


export default function Users () {

    const [users, setUsers] = useState([]);


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data))

    }, [])


    return (
        <div>
            <h1>User: {users.length} </h1>
        </div>
    )
}



/**
 * 1. Declaire a state to hold the data.
 * 2. userEffect with call back and dependencies array.
 * 3. use fatch and load data.
 * **/ 