import React, {useState} from 'react'

function ColorPicker(){
    const [color, setColor] = useState("#FFFFFF");

    function handleColorChange(event){
        setColor(event.target.value)
    }

    return(
        <>
            <div className='color-picker-div'>
                <h1>Color Picker</h1>
                <div className='color-display' style={{backgroundColor: color}}> {/*If your embedding some JavaScript and changing CSS props, must enclose those props within an object*/}
                    <p>Selected Color:{color}</p>
                </div>
                <label>Select a Color: </label>
                <input type="color" value={color} onChange={handleColorChange}/>
            </div>
        </>
    )
}

export default ColorPicker