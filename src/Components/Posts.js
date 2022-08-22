import React, { useEffect, useState } from 'react';
import './Posts.css'
import {useNavigate} from 'react-router-dom'
import {db} from '../firebase-config'
import {collection, doc, getDocs, deleteDoc} from 'firebase/firestore'
import * as ImIcons from 'react-icons/im'


function Posts(props) {
    const [post, setPost] = useState([]);
    const userCollectionRef = collection(db,"posts");
    const mail = localStorage.getItem("email");
    const navigate = useNavigate();
    const isAuth = localStorage.getItem("isAuth");

    useEffect(() => {
       const  getPost = async () => {
            const data = await getDocs(userCollectionRef);
            setPost(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
        }
        getPost();
    },[])
    
    const deletepost = async (id) => {
        const userDoc = doc(db,"posts",id);
        await deleteDoc(userDoc,id).then(() => alert("post deleted!"));
        window.location.reload();
    }

    const redirect = (id) => {
         navigate(`/post/${id}`);
        // alert(`you  are going to post with post id: ${id}`)
    }

    

    return (
        <div >
            {post.map((post) => {return <div key = {post.id}> 
            <br/>
            <div  onClick={() => redirect(post.id)} style = {{border: "1px solid black", width: "90%", cursor: "pointer", borderRadius: "15px", position: "relative", left:"5%" }}>
           <h1 style = {{textAlign: "center"}}> {post.title }</h1>
          
            <p style = {{position: "relative" , left: "80%",width:"250px"}}>@{post.author}</p>  <br/><br/>
            </div>
           { isAuth &&  post.email===mail && <button className='DeleteButton' onClick = {() => deletepost(post.id)}><ImIcons.ImBin2/></button>}
            <br/><br/>
            </div>})}
        </div>
    ); 
}

export default Posts;