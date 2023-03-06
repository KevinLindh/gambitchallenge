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

    useEffect(()=>{
      onAuthStateChanged(auth, (user) => {
          if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            const uid = user.uid;
            setLoading(false)
            // ...
            console.log("uid", uid)
          } else {
            navigate('/');
            console.log("user is logged out")
          }
        });
       
  }, [])

  const handleLogout = (e) => {        
    e.preventDefault();     
    signOut(auth).then(() => {
    // Sign-out successful.
        navigate("/");
        console.log("Signed out successfully")
    }).catch((error) => {
    // An error happened.
    });
}
    //Getting the specific data from the text file 
      const nonZeroes = registarInfo.filter(val => val.number !== 0);
      const [values, setValues] = useState(nonZeroes);

    return (
      <div className="App">
        <section className='data'>
        		<button onClick={handleLogout}>
                        Logout
            </button>
        {!loading ? <Values data={values}></Values>: <></>}
        </section>
      </div>
    );
  }
  
  export default Home;