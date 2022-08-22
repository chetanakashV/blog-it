import React from 'react';
import { useState } from 'react';
import {SignInWithGoogle} from '../firebase-config'
import styled from 'styled-components';
import Navbar from '../Layouts/Navbar'; 
import Navbar2 from '../Layouts/Navbar2'; 
import './RegLog.css'
import * as MdIcons from 'react-icons/md'
import { async } from '@firebase/util';

 

function RegLog(props) {

    const [isLoggedIn, setLogstatus] = useState(false);

    const signin = async () => {
        await SignInWithGoogle().then(alert("done"));
        localStorage.setItem("isAuth",true);
        setLogstatus(true);
       window.location.reload();
    }


 
    return (
        <div>
             {props.isAuth? <Navbar2 signout = {props.signout}/>: <Navbar/>}
            <br/><br/><br/>
            <button onClick={signin}  type="button" class="login-with-google-btn">Sign In with google</button><br/><br/>
            <h1> Welcome  {localStorage.getItem("name")} </h1>
            <h1> (Your Email: {localStorage.getItem("email")})</h1><br/>
            <img src = {localStorage.getItem("image")}/> 
        </div>
    );
}

export default RegLog;