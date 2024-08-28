import React, { useEffect, useState } from 'react';
import { NavLink,BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import {auth} from '../firebase-config'
import { getRemoteConfig, getValue,
    fetchAndActivate
 } from "firebase/remote-config";
import './Navbar.css'


// const remoteConfig = getRemoteConfig();
// remoteConfig.settings.minimumFetchIntervalMillis = 1000;

// async function fetchRemoteConfig() {
//     try {
//         const isFetched = await fetchAndActivate(remoteConfig);
//         console.log("trial",isFetched);

//         // if (isFetched) {
//             console.log("Remote config fetched and activated:", isFetched);
//             const bgColorValue = getValue(remoteConfig, "value"); // Assuming bg_color is a boolean
//             console.log(bgColorValue)
//             return bgColorValue;
//         // } else {
//         //     console.log("Remote config was not fetched.");
//         //     return false; // Default to false if fetching failed
//         // }
//     } catch (error) {
//         console.error("Error fetching remote config:", error);
//         return false; // Default to false if there's an error
//     }
// }

function Navbar(props) {
    //const navigate = useNavigate();
    const [clickHome,setClickHome] = useState(false);
    const [clickLogin,setClickLogin] = useState(false);
    const [clickWP,setClickWP] = useState(false);

    const handleClickHome  = () => {setClickHome(true); setClickLogin(false); setClickWP(false); }
    const handleClickLogin  = () => {setClickHome(false); setClickLogin(true); setClickWP(false);}
    const handleClickWP  = () => {setClickHome(false); setClickLogin(false); setClickWP(true); }
    const logStatus = localStorage.getItem("isAuth");

    const [color1, setColor] = useState("magenta"); 


    

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