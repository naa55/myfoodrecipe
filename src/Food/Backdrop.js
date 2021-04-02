import React from 'react'

const Backdrop = (props) => {
    const styles = {
        style: {
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height:"100%",
            background: "rgba(0,0,0,0.5)",
            zIndex: "90"
        }
    }
    return (
        <div style={styles.style} onClick={props.clicked}></div>
    )
}

export default Backdrop
