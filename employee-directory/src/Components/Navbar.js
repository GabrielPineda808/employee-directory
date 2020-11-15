import React from 'react'

function Nav() {
    const styles ={
        center : {
            paddingLeft: 250
        },
        padding: {
            paddingLeft : 330
        }
    }

    return (
        <div className="jumbotron jumbotron-fluid bg-dark text-light">
            <div className="container">
                <h1 className="display-4" style={styles.center}>Employee Directory</h1>
                <p className="lead"  style={styles.padding}>Search for any of your employees!</p>
            </div>
        </div>
    );
  }
  
  export default Nav;