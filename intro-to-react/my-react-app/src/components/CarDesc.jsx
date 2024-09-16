import React, {useState} from 'react'

function CarDesc(){
    const [cars, setCars] = useState([]);

    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carMake, setCarMake] = useState("");
    const [carModel, setCarModel] = useState("");

    

    function handleAddCar(){
        const newCar = {year: carYear, 
            make: carMake, 
            model: carModel};

        if(newCar.year !== "" && newCar.make !== "" && newCar.model !== ""){
            setCars(c => [...c, newCar]); 
            setCarYear(new Date().getFullYear()) ;
            setCarMake("");
            setCarModel("");
        }

      
    }

    function handleRemoveCar(index){
        setCars(
            c => cars.filter((_, i) => i !== index)
        )
    }

    function handleYearChange(event){
        if(event.target.value <= new Date().getFullYear()){
            setCarYear(event.target.value); 
        }
    }

    function handleMakeChange(event){
        setCarMake(event.target.value); 
    }

    function handleModelChange(event){
        setCarModel(event.target.value); 
    }

    return(
            <div>
                <h2>Cars</h2>
                <ul>
                    {cars.map((car, index) => 
                    <li style={{cursor: 'pointer'}} key={index} onClick={() => handleRemoveCar(index)}>
                        {car.year} {car.make} {car.model}
                    </li>)}
                </ul>
                <input type="number" value={carYear} onChange={handleYearChange}/><br/><br/>
                <input type="text" 
                       value={carMake} 
                       onChange={handleMakeChange} 
                       placeholder='enter car make'
                /><br/><br/>
                <input type="text" 
                       value={carModel} 
                       onChange={handleModelChange} 
                       placeholder='enter car model'
                /><br/><br/>
                <button id="addCarBtn" onClick={handleAddCar}>Add Car</button>
            </div>
    );
}

export default CarDesc