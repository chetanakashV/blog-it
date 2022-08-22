import React,{useState} from 'react';
import Navbar from '../Layouts/Navbar';
import Navbar2 from '../Layouts/Navbar2';
import './WritePost.css'
import {db} from '../firebase-config'
import {collection, doc, getDocs,getDoc, addDoc} from 'firebase/firestore'

function WritePost(props) {
    const [title,setTitle] = useState("");
    const [content,setContent] = useState("");
    // const [author, setAuthor] = useState("");
    // const [email, setEmail] = useState("");
    const userCollectionRef = collection(db,"posts");
    
    const owner = localStorage.getItem("name");
    const mailad = localStorage.getItem("email");
   
     const addPost = async () => {
             await addDoc(userCollectionRef,{title: title, content: content, email: mailad, author: owner} ).then(alert("The post is created"));
            window.location.reload();
    }

    return (
        <>
            {props.isAuth? <Navbar2 signout = {props.signout}/>: <Navbar/>}
        <div className = "block">
           <br/>
           <label className="Label">Title </label><br/>
           <input type = "text" required  className="text" value = {title} onChange = {e => {setTitle(e.target.value)}}/>
           <br/>
           <br/>
           <label className="Label">Content </label><br/>
           <textarea value = {content} required  onChange = {e => {setContent(e.target.value)}} /><br/><br/>
           <button  className="Button" onClick={addPost} > Post It</button>
        </div>
        </>
    );
}

export default WritePost;