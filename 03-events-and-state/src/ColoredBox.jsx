import { useState } from 'react'

export default function ColoredBox() {
    const [color, setColor] = useState("red");

    function redBox(){
        setColor("red");
    }
    function greenBox(){
        setColor("green");
    }

    return (
        <>
            <div id="box" style={{
                margin:"10px",
                backgroundColor: color,
                border: "2px solid black",
                height: "50px",
                width: "50px"
            }} />
            <button onClick={redBox}>Red</button><button onClick={greenBox}>Green</button>
        </>
    )
}