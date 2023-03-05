import React from 'react'
import { convert } from '../data/Converter'

function Values(props) {
    console.log(props.data)
  return (
    <table>
        <thead>
            <tr>
            <th>Register</th>
            <th>Number</th>
            <th>Variable Name</th>
            <th>Format</th>
            <th>Note</th>
            <th>Converted Data</th>
            </tr>
        </thead>
        <tbody>
            {props.data.map((data, index, arr)=> 
                <tr key={data.id}>
                    <td>{data.id}</td>
                    <td>{data.number}</td>
                    <td>{data.name}</td>
                    <td>{data.format}</td>
                    <td>{data.Note}</td>
                    <td>{convert(data, index, arr)}</td>
                </tr>
            )}
        </tbody>
      </table>
  )
}

export default Values