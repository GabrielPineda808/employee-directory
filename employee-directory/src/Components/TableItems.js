import React from 'react'

function Items(props) {

    return (
        <tbody>
         <tr>
            <th scope="row">{props.id}</th>
            <td>{props.name}</td>
            <td>{props.email}</td>
            <td>{props.department}</td>
        </tr> 
         
        
        </tbody>
    );
  }
  
  export default Items;