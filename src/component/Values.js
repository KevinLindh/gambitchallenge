import React from 'react'
import { convert } from '../data/Converter'

function Values(props) {
    console.log(props.data)
  return (
    <table>
        <thead>
            <tr>
            <th>Register</th>
            <th>Variable Name</th>
            <th>Note</th>
            <th>Converted Data</th>
            </tr>
        </thead>
        <tbody>
            {props.data.map((data, index, arr)=> {
                if((index > 0 && data.name !== arr[index-1].name) || data.id === 45 || data.id === 47){
                return <tr key={data.id}>
                        <td>{data.id}</td>
                        <td>{data.name}</td>
                        <td>{data.note}</td>
                        <td>{convert(data, index, arr)}</td>
                    </tr>
                }
            }
            )}
        </tbody>
      </table>
  )
}

export default Values