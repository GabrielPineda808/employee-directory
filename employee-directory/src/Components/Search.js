import React, { useState } from 'react'
// import Table from './Table'
import Employees from "../Employees.json"
import Items from './TableItems'

function Search(){
    const styles ={
        margin : {
            marginBottom : 50
        },
        padding: {
            paddingLeft : 330
        },
        width: {
            width : 500,
            marginLeft : 300
        }
        
    }
    const employees = useState(Employees)
    const emp = employees[0]
    emp.map(res =>{
        console.log(res.name)
    })
    

    return (
        <div className="container" >
            <input className="form-control" type="text" placeholder="Search Employee by Name..."  style={styles.width}></input>
            {emp.map(res => {
                <Items key={res.id} id={res.id} name={res.name} email={res.email} department={res.department} />
            })}
            
            
            
            
            
        </div>
    )
    }
  
  export default Search;