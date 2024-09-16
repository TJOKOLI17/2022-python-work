import React, {useState, useEffect, useRef} from 'react'

function UseRef(){
    // let [num, setNum] = useState(0);
    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);


    useEffect(() => {
        console.log("COMPONENT RENDERED");
    });
    
    function handleClick1(){
        // setNum(n => n + 1);
        inputRef1.current.style.backgroundColor = "yellow";
        inputRef2.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "";
    }

    function handleClick2(){
        // setNum(n => n + 1);
        inputRef1.current.style.backgroundColor = "";
        inputRef2.current.style.backgroundColor = "magenta";
        inputRef3.current.style.backgroundColor = "";
    }

    function handleClick3(){
        // setNum(n => n + 1);
        inputRef1.current.style.backgroundColor = "";
        inputRef2.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "lightgreen";
    }

    
    return(
        <div>
            <button style={{fontSize: "2rem", cursor: "pointer"}}onClick={handleClick1}>
                Click me
            </button>
            <br /><br />
            <input ref={inputRef1}/>
            
            <br /><br />
            <br /><br />
            
            <button style={{fontSize: "2rem", cursor: "pointer"}}onClick={handleClick2}>
                Click me
            </button>
            <br /><br />
            <input ref={inputRef2}/>

            <br /><br />
            <br /><br />

            <button style={{fontSize: "2rem", cursor: "pointer"}}onClick={handleClick3}>
                Click me
            </button>
            <br /><br />
            <input ref={inputRef3}/>
        </div>

    )

}

export default UseRef