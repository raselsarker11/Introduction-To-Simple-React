import { useEffect, useState } from 'react'

import './Friends.css'
import Friend from './Friend';


export default function Friends() {

    const [friends, setFriends] =useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => {
            console.log("data: " , data)
            setFriends(data)
        })
    }, [])

    return (
        <div className='box'>
            <h1>Friends: {Friends.length} </h1>
            {
                friends.map(friend => <Friend>
                    friend={friend}
                </Friend>)
            }
        </div>
    )
}



/**
 * 1. state to hold data.
 * 2. useEffect with dependencies array.
 * 3. use fatch to load data.
 * 4. display data on the component
 */
