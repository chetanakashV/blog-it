import React from 'react';
import Posts from '../Components/Posts';
import Navbar from '../Layouts/Navbar';
import Navbar2 from './Navbar2';

function PostsLand(props) {
    return ( 
        <div>
           {props.isAuth? <Navbar2 signout = {props.signout}/>: <Navbar/>}
            <h1 style = {{position: "relative", left:"-40%",color:"red", fontFamily:"'Times New Roman', Times, serif", fontSize:"35px"}}><i><u>Posts:</u> </i> </h1>
            <Posts/>
        </div>
    );
}

export default PostsLand;