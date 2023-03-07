import React from 'react'
import { convert } from '../data/Converter'
import { useState, useEffect } from "react";

function Values(props) {
    if(!localStorage.getItem("pinned")){
        localStorage.setItem("pinned", JSON.stringify("0"))
    }
    const[pinned, setPinned] = useState(localStorage.getItem("pinned"));

    const handleClick = (e, key) =>{
        e.preventDefault();
        let current = pinned
        if(pinned.indexOf(key) === -1){
        current += `,${key}` 
        let newVal = current.split("\\").join("")
        setPinned(newVal);
        localStorage.setItem("pinned", JSON.stringify(pinned));
        }
    }

    const removePin = (e, key) =>{
        e.preventDefault();
        if(pinned.split(",").indexOf(key)){
        let compareArr = pinned.split(",")
        let removedKey = compareArr.filter(val => val !== key.toString());
        setPinned(removedKey.join(","));
        localStorage.setItem("pinned", JSON.stringify(removedKey.join(",")));
        }
    }

    useEffect(()=>{
        //storing as to pin the card
        let stored = localStorage.getItem("pinned");
        let cleaned = stored.split("\\").join("").split("\"").join("");
        localStorage.setItem("pinned", cleaned);
    }, []);

  return (
        <div>
            <div className='pinned'>
            <h2>Pinned values</h2>
            <p>To pin/unpin a data point please click on the entire card</p>
            <div className='values-pinned'>
            {props.data.map((data, index, arr)=> {
                if((index > 0 && data.name !== arr[index-1].name && pinned.split(",").indexOf(data.id.toString()) !== -1) || (data.id === 45 && pinned.split(",").indexOf(data.id.toString()) !== -1) || (data.id === 47 && pinned.split(",").indexOf(data.id.toString()) !== -1) || (data.id === 1 && pinned.split(",").indexOf(data.id.toString()) !== -1)){
                return <div key={data.id} value={data.id} className='individual-value-pinned' onClick={e => removePin(e, data.id)} >
                    <span className='register-num'>Register: {data.number === 1 ? <span>{data.id}</span> : data.number === 2 ? <span>{data.id}-{data.id+1}</span> : <span>{data.id}-{data.id+2}</span>}</span>
                        <h2>{data.name}</h2>
                        <span className='converted-data'>{convert(data, index, arr)}</span>
                        <span className='data-units'>{data.note}</span>
                    </div>
                }
            }
            )}
        </div>
          </div>
          <div>
          <h2>All other readings</h2>
          <div className='values'>
          {props.data.map((data, index, arr)=> {
                if((index > 0 && data.name !== arr[index-1].name) || data.id === 45 || data.id === 47 || data.id === 1){
                return <div key={data.id} value={data.id} className='individual-value' onClick={e => handleClick(e, data.id)} >
                    <span className='register-num'>Register: {data.number === 1 ? <span>{data.id}</span> : data.number === 2 ? <span>{data.id}-{data.id+1}</span> : <span>{data.id}-{data.id+2}</span>}</span>
                        <h2>{data.name}</h2>
                        <span className='converted-data'>{convert(data, index, arr)}</span>
                        <span className='data-units'>{data.note}</span>
                    </div>
                }
            }
            )}
            </div>
          </div>
        </div>
  )
}

export default Values