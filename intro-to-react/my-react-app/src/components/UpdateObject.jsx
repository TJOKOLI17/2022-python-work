import React, {useState} from 'react'

function UpdateObject(){
    const [car, setCar] = useState({year: 2024 , 
                                    make: "Lexus", 
                                    model: "GX"});

    function handleYearChange(e){
        if(e.target.value <= new Date().getFullYear()){
            setCar(c => ({...c, year: e.target.value})); //() around {} lets js know you're making a object in a arrow function
        }
    }

    function handleMakeChange(e){
        setCar(c => ({...c, make: e.target.value}));

    }

    function handleModelChange(e){
        setCar(c => ({...c, model: e.target.value}));
    }


    return(
            <div>
                <p>My favorite car is: {car.year} {car.make} {car.model} </p>
                <input type="number" value={car.year} onChange={handleYearChange}/><br/><br/>
                <input type="text" value={car.make} onChange={handleMakeChange}/><br/><br/>
                <input type="text" value={car.model} onChange={handleModelChange}/><br/><br/>
            </div>
    );
}


export default UpdateObject