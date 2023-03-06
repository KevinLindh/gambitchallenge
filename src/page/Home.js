import Values from '../component/Values';
import { useEffect, useState } from 'react'
import './Home.css';
import { registarInfo } from '../data/RegistarData';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from "firebase/auth";
import {  signOut } from "firebase/auth";
import { auth } from "../firebase";


function Home() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    //Getting the specific data from the text file 
    const nonZeroes = registarInfo.filter(val => val.number !== 0);
    const [values, setValues] = useState(nonZeroes);

    const [activeUser, setActiveUser] = useState("")

    //Make sure the user is signed in
    useEffect(()=>{
      onAuthStateChanged(auth, (user) => {
          if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            setActiveUser(user);
            const uid = user.uid;
            setLoading(false)
            console.log("user is logged in")
          } else {
            navigate('/');
            console.log("user is logged out")
          }
        });
       
  }, [])

  //Logout
  const handleLogout = (e) => {        
    e.preventDefault();     
    signOut(auth).then(() => {
    // Sign-out successful.
        navigate("/");
        console.log("Signed out successfully")
    }).catch((error) => {
    // An error happened.
    console.log(error)
    });
}

    return (
      <div className="App">
        <section className='data'>
          <div className='user-logout'>
            <span>User: {activeUser.email}</span>
            <a className='logout-svg' onClick={handleLogout}>
              <span>Logout</span>
              <svg width="50px" height="50px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path fill="none" d="M0 0h24v24H0z"></path> <path d="M5 22a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5zm10-6l5-4-5-4v3H9v2h6v3z"></path> </g> </g></svg>
            </a>
          </div>
        {!loading ? <Values data={values}></Values>: <></>}
        </section>
      </div>
    );
  }
  
  export default Home;