import React, {useState, useEffect} from 'react'

/* useEffect() TUTORIAL */
    // function UseEffect(){
    //     const [count, setCount] = useState(0);
    //     const [color, setColor] = useState("green");

    //     /* useEffect() ACTIVE WHEN A DEPENDECY CHANGES AND/OR IS MOUNTED TO THE DOM*/
    //     // useEffect(() => {
    //     //     document.title = `Count: ${count} ${color}`;
    //     // }, [count]); // page title will update when added to the DOM 
    //     //              // + every time we incremement count (color will never change).

    //     /* useEffect() ACTIVE ONLY WHEN ELEMENT IS MOUNTED TO THE DOM*/
    //         // useEffect(() => {
    //         //     document.title = `Count: ${count}`;
    //         // }, []); // page title will update only when added to the DOM 
    //         //         //  -> (in this case only when file is saved).
    
    //     /* useEffect() ALWAYS ACTIVE */
    //         // useEffect(() => {
    //         //     document.title = `Count: ${count} ${color}`;
    //         // }); // page title will update every time we incremement count AND change color.

    //     /* HOW useEffect() CAN BE USED FOR REOSURCE CLEANUP */
    //         useEffect(() => {
    //             document.title = `Count: ${count} ${color}`;
    //             document.removeEventListener
    //             return () => {
    //                 //Some cleanup code
    //                 //i.e document.removeEventListener
    //             }
    //         }, [count]);
        

    //     function addCount(){
    //         setCount(c => c + 1);
    //     }

    //     function subCount(){
    //         setCount(c => c - 1);
    //     }

    //     function changeColor(){
    //         setColor(c => c === "green" ? "red" : "green");
    //     }

    //     return(
    //             <>
    //             <p style={{color: color}}>Count: {count}</p>
    //             <button onClick={subCount}>Subtract</button>
    //             <button onClick={addCount}>Add</button>
    //             <br />
    //             <button onClick={changeColor}>Change Color</button>
    //             </>
    //     );
    // }

    function UseEffect(){
        const [width, setWidth] = useState(window.innerWidth);
        const [height, setHeight] = useState(window.innerHeight);

        useEffect(() =>{
            window.addEventListener("resize", handleResize);
            console.log("EVENT LISTENER ADDED");
            /* Use effect would mount infinitel without a useEffect() */

            return () =>{
                window.removeEventListener("resize", handleResize);
                console.log("EVENT LISTENER REMOVED");
                /* This onyl works with NO DEPENDENCIES */
            }
        }, []);

        useEffect(() =>{
            document.title = `Display: ${width} x ${height}`;
        }, [width, height]);
    
    function handleResize(){
            setWidth(window.innerWidth);
            setHeight(window.innerHeight)
        }
        return(
                <>
                <p>Dimensions: Width x Height</p>
                <p>{width} x {height}</p>
                </>
        );
    }

export default UseEffect