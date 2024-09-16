

function Button(){
    const styles = {
        backgroundColor: "hsl(200, 100%, 50%)",
        fontSize: "2rem",
        color: "white",
        padding: "10px 20px",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer",
    }

    let count = 0;
    const handleClick = function(e){
        e.target.textContent = "touch me MORE!!!";
    }

    // const handleClick2 = function(name){
    //     console.log(`${name}, stop clicking me.`)
    //     // to pass callback: onClick={() =>{handleClick2(name)}}
    // }


    return(
        <button style={styles} onDoubleClick={(e) => {handleClick(e)}}>Click Me</button>
    );
 
}


export default Button