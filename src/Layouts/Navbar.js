import React, { useState } from 'react';
import { NavLink,BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import {auth} from '../firebase-config'
import './Navbar.css'


function Navbar(props) {
    //const navigate = useNavigate();
    const [clickHome,setClickHome] = useState(false);
    const [clickLogin,setClickLogin] = useState(false);
    const [clickWP,setClickWP] = useState(false);

    const handleClickHome  = () => {setClickHome(true); setClickLogin(false); setClickWP(false);}
    const handleClickLogin  = () => {setClickHome(false); setClickLogin(true); setClickWP(false);}
    const handleClickWP  = () => {setClickHome(false); setClickLogin(false); setClickWP(true); }
    const logStatus = localStorage.getItem("isAuth");
    

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
                <NavLink exact to = '/login'>
                <div className= {clickLogin? "element Login active" : "element Login"} >
                <span onClick={handleClickLogin}>Login</span>
                
            </div>
                </NavLink>

               
                
                {/* <Router>
                    <nav>
                    <Link to = '/'>Home</Link>

                    {
                        logStatus ? (<Link to = "/login">Login</Link>) : (
                            <>
                            <Link to = '/writepost'>New Post</Link>
                            <button onClick={signout}></button>
                            </>
                        ) 
                    }
                    </nav>
                </Router> */}
               

        </div>
        </>
    );
}

export default Navbar;