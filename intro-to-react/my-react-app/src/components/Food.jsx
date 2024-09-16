function Food(){
    const food1 = "Pizza";
    const food2 = "Chocolate";
    const object = {
        name: "I'm a JavaScript Object"
    }
    return(
        <ul>
            <li>Apple</li>
            <li>{food1}</li>
            <li>{food2.toUpperCase()}</li>
            <li>{object.name}</li>
        </ul>
    );
}

export default Food