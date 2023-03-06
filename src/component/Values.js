import React from 'react'
import { convert } from '../data/Converter'

function Values(props) {

  return (
        <div className='values'>
            {props.data.map((data, index, arr)=> {
                if((index+1 < arr.length && data.name !== arr[index+1].name) || data.id === 45 || data.id === 47 || data.id === 99){
                return <div key={data.id} className='individual-value'>
                    <span className='register-num'>Register: {data.number === 1 ? <span>{data.id}</span> : data.id === 99 ? <span>{data.id}-{data.id+1}</span> : data.number === 2 ? <span>{data.id-1}-{data.id}</span> : <span>{data.id-2}-{data.id}</span>}</span>
                        <h2>{data.name}</h2>
                        <span className='converted-data'>{convert(data, index, arr)}</span>
                        <span className='data-units'>{data.note}</span>
                    </div>
                }
            }
            )}
        </div>
  )
}

export default Values