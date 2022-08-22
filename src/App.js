import Post from './Components/Post';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PostsLand from './Layouts/PostsLand';
import WritePost from './Components/WritePost';
import './App.css';
import Check from './check';
import RegLog from './Auth/RegLog';
import Navbar from './Layouts/Navbar';
import Navbar2 from './Layouts/Navbar2';
import {useState } from 'react';
import {signOut} from "firebase/auth"
import {auth} from "./firebase-config"

function App() {
  
  const [isAuth, setAuth] = useState(localStorage.getItem("isAuth"));

  const signout = () => {
    signOut(auth).then(() => 
    {localStorage.clear(); 
      setAuth(false);
      window.location.pathname = '/login';})
    }

  return (
    <div className="App">
    <Router>
     
      <Routes>
        <Route exact path = '/' element ={<PostsLand isAuth = {isAuth}  signout = {signout}/>}/>

        <Route exact path = '/login' element ={<RegLog isAuth = {isAuth}  signout = {signout}/>}/>
        
        <Route exact path = '/writepost' element ={<WritePost isAuth = {isAuth} signout = {signout}/>}/>

        <Route  path = '/post/:id' element ={<Post />}/>

        <Route  path = '/check/:id' element ={<Check/>}/>

      </Routes>
    </Router>
    </div>
  );
}

export default App;
