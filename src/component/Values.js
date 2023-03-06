import React from 'react'
import { convert } from '../data/Converter'

function Values(props) {
    console.log(props.data)
  return (
        <div className='values'>
            {props.data.map((data, index, arr)=> {
                if((index > 0 && data.name !== arr[index-1].name) || data.id === 45 || data.id === 47){
                return <div key={data.id} className='individual-value'>
                        <h2>{data.name}</h2>
                        <span>Register: {data.number === 1 ? <span>{data.id}</span> : data.number === 2 ? <span>{data.id}-{data.id+1}</span> : <span>{data.id}-{data.id+2}</span>}</span>
                        <span>{convert(data, index, arr)}</span>
                        <span>{data.note}</span>
                    </div>
                }
            }
            )}
        </div>
  )
}

export default Values