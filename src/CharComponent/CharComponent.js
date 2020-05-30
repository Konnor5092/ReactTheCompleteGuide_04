import React from 'react'

const style = {
    display: 'inline-block', 
    padding: '16px', 
    textAlign: 'center', 
    margin: '16px', 
    border: '1px solid black'
}

const charComponent = (props) => {
    return (
        <div className="charComponent" style={style} onClick={props.clicked}>
            <p>{props.charProp}</p>
        </div>       
    )
}

export default charComponent;