import React, {useState} from 'react'

function UpdateArray(){
    const [foods, setFoods] = useState(["Wine Gums", "Spaghetti", "Thinly Sliced Ribeye"]);
    

    const handleAddFood = (event) => {
        event.preventDefault();
        const newFood = document.getElementById("foodInput").value;
        
        document.getElementById("foodInput").value = "";

        if(!foods.includes(newFood)){
            setFoods(f => [...f, newFood]);
        }
    }

    function handleRemoveFood(index){
        setFoods(
            f => foods.filter((_, i) => i !== index)
        )
    }

    // document.addEventListener("keydown", event =>{
    //     if(event.key === "Enter"){
    //         document.getElementById("btn").click();
    //     }
    // })


    return(
        <div className="grocery-list">
            <h2>Grocery List</h2>
            <ol id="item-list">
                {foods.map((food, index) =>  
                <li key={index} onClick={() => handleRemoveFood(index)}>
                    {food}
                </li>)}
            </ol>
            {/* <input type="text" id="foodInput" placeholder='enter item'/>
            <button id="btn" onClick={handleAddFood}> Add Item</button> */}
            <form id="food-form" onSubmit={e => handleAddFood(e)}>
                <input type="text" id="foodInput" placeholder="enter item" />
                <button type="submit" id="btn">Add Item</button>
            </form>
        </div>
    );
}

export default UpdateArray