import React from "react";

function Box(props) {
    const styles = {
        backgroundColor: props.on ? "#222222" : "transparent"
    }
    
    return (
        <div style={styles} 
        className="box" 
        key={props.id}
        onClick={() => props.toggle(props.id)}
        ></div>
    )
}

export default Box;