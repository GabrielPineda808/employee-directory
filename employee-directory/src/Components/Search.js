import React from 'react'
import Table from './Table'

function Search() {
    const styles ={
        margin : {
            marginBottom : 50
        },
        padding: {
            paddingLeft : 330
        },
        width: {
            width : 500
        },
        
    }

    return (
        <div className="container" >
            <input className="form-control" type="text" placeholder="Search Employee..." style={styles.width, styles.margin}></input>
            <Table />
        </div>
    )
    }
  
  export default Search;