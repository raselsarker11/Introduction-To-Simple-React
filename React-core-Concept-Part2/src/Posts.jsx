
import { useEffect, useState } from "react";


import './Post.css'
import Post from './Post';


export default function Posts() {

    const [posts, setPosts] = useState([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data =>{
            console.log("data: " , data)
            setPosts(data);
        })
    }, [])

    return(
        <div>
            <h1>Posts: {posts.length} </h1>
            {posts.map(post => (
                <Post key={post.id} post={post} />
            ))}
        </div>
    )
}