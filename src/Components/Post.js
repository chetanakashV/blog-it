import React, { useEffect, useState } from 'react';
import {db} from '../firebase-config'
import { useParams } from 'react-router';
import {collection, doc, getDocs,getDoc,deleteDoc} from 'firebase/firestore'

import * as ImIcons from 'react-icons/im'

function Post(props) {
    const [post, setPost] = useState([]);
    const {id} = useParams();
    const userCollectionRef = collection(db,"posts");
    const mailid = localStorage.getItem("email");
    const deletepost = async (id) => {
        const userDoc = doc(db,"posts",id);
        await deleteDoc(userDoc,id).then(() => alert("post deleted!"));
        window.location.reload();
    }
    useEffect(() => {
       const  getPost = async () => {
            const data = await getDocs(userCollectionRef);
            setPost(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
        }
        getPost();
    },[])

    return (
        <div style = {{width: "90%", position: "relative", left: "5%"}}>
            {id}
            {post.map((post) => {return <div key = {post.title}> 
            <div style = {{border: "1px solid black", position : "relative", borderRadius:"15px"}}>
             <u><><i>{post.title}</i></> </u><br/> <br/>
            <p  style = {{textAlign:"left"}}>{post.content}</p> <br/><span  style ={{maxWidth:"15px"}}> 
           { localStorage.getItem("isAuth") &&  mailid == post.email && <button style ={{position: "relative", left:"55%", background: "white", border: "none",color: "red"}} onClick = {() => deletepost(post.id)} ><ImIcons.ImBin2/> </button>}
               @{post.author}</span><br/>
            </div>
             <br/><br/></div>})}
        </div>
    );
}

export default Post;