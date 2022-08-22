import React, { useState } from 'react';
import { NavLink,BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import * as GrIcons from 'react-icons/gr'
import './Navbar.css'




function Navbar2(props) {
    //const navigate = useNavigate();
    const [clickHome,setClickHome] = useState(false);
    const [clickLogin,setClickLogin] = useState(false);
    const [clickWP,setClickWP] = useState(false);

    const handleClickHome  = () => {setClickHome(true); setClickLogin(false); setClickWP(false);}
    const handleClickLogin  = () => {setClickHome(false); setClickLogin(true); setClickWP(false);}
    const handleClickWP  = () => {setClickHome(false); setClickLogin(false); setClickWP(true); }
 
   


    return (
        <>
        <div className='Navbar'><br/>
    
                <NavLink exact to= '/'> 
            <div className= {clickHome? "element Home active" : "element Home"} >
            <span onClick={handleClickHome}>
                Home
                </span>
            </div>
                </NavLink>
                <NavLink exact to = '/writepost'>
                <div className= {clickWP? "element NewPost active" : "element NewPost"} >
            <span onClick={handleClickWP}>New Post</span>
            </div>
                </NavLink>

              <button className='Logoutbutt' onClick = {props.signout}> Logout <GrIcons.GrLogout /></button>
                

          
               

        </div>
        </>
    );
}

export default Navbar2;