import React from 'react'
import Items from './TableItems'

function Table(props) {
    const styles = {
        margin : {
            marginTop : 50
        }
    }

    return (
        <table className="table table-striped table-dark table-bordered table-hover " style={styles.margin}>
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Department</th>
                </tr>
            </thead>
            <Items key={props.id} id={props.id} name={props.name} email={props.email} department={props.department} />
            </table>
    )
    }
  
  export default Table;