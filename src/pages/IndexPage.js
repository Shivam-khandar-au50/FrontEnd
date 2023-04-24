 import { useEffect, useState } from "react";
import Post from "../Post";
export default function IndexPage() {
    const [posts,setPosts] = useState([]);
    useEffect(()=> {
        fetch('https://back-21ng.onrender.com/post').then((response =>{          //async function thats why we use then
            response.json().then(posts =>{                              //async function thats why we use then
               setPosts(posts);
            })
        }))
    },[]);
    return (
        <>
        {posts.length >0 && posts.map(post =>(
            <Post  {...post} />
        ))}
        </>
    )
}