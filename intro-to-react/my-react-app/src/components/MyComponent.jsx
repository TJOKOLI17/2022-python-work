import React, {useState} from 'react';

function MyComponent(){
    const [name, setName] = useState("Guest"); //stateful variable
    const [quantity, setQuantity] = useState(1);
    const [comment, setComment] = useState("");
    const [payment, setPayment] = useState("");
    const [shipping, setShipping] = useState("Delivery");
    
    function handleNameChange(e){
        setName(e.target.value);
    }

    function handleQuantityChange(e){
        setQuantity(e.target.value);
    }

    function handleCommentChange(e){
        setComment(e.target.value);
    }

    function handlePaymentChange(e){
        setPayment(e.target.value);
    }

    function handleShippingChange(e){
        setShipping(e.target.value);
    }

    return(
        <div>
            <input value={name} onChange={handleNameChange}/>
            <p>Name: {name}</p>

            <input value={quantity} onChange={handleQuantityChange} type="number"/>
            <p>Quantity: {quantity}</p>

            <textarea value={comment} onChange={handleCommentChange} placeholder='Enter delivery instructions'></textarea>
            <p>Comment: {comment}</p>

            <select value={payment} onChange={handlePaymentChange}>
                <option value ="" >Select an option</option>
                <option value ="Visa" >Visa</option>
                <option value ="MasterCard" >Mastercard</option>
                <option value ="Apple Pay" >Apple Pay</option>
                <option value ="Gift Vard" >Gift Card</option>
            </select>
            <p>Payment: {payment}</p>
            <label>
                <input type="radio" 
                    value="Pickup" 
                    checked={shipping === "Pickup"} 
                    onChange={handleShippingChange}/>
                    Pickup
            </label>
            <br/>
            <label>
                <input type="radio" 
                    value="Delivery" 
                    checked={shipping === "Delivery"} 
                    onChange={handleShippingChange}/>
                    Delivery
            </label>
            <br />
            <p>Comment: {shipping}</p>
        </div>
    );

}

export default MyComponent