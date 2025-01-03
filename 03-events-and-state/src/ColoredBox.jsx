import { useState } from 'react'

export default function ColoredBox() {
    return (
        <>
            <div style={{
                margin:"10px",
                backgroundColor: "white",
                border: "2px solid black",
                height: "50px",
                width: "50px"
            }} />
            <button>Red</button><button>Green</button>
        </>
    )
}