import { useEffect, useState } from 'react'
import './App.css';
import Values from './component/Values';
import axios from 'axios';
import { registarInfo } from './data/RegistarData';

function App() {
  const [isLoading, setLoading] = useState(true);
  
  const [time, setTime] = useState("");

  //Getting the specific data from the text file 
    const nonZeroes = registarInfo.filter(val => val.number !== 0);

    const [values, setValues] = useState(nonZeroes);
  return (
    <div className="App">
      <span>Date:{time}</span>
      <Values data={values}></Values>
    </div>
  );
}

export default App;