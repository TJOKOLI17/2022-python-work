import PropTypes from 'prop-types'

function List(props){
    // const fruits = [
    //                 {id: 1, name: "apple", calories: 100}, 
    //                 {id: 2, name: "orange", calories: 75}, 
    //                 {id: 3, name: "coconut", calories: 40}, 
    //                 {id: 4, name: "mango", calories: 200}
    //                 ];
    
    /*SORTS*/
        // fruits.sort((a, b) => a.name.localeCompare(b.name)); //ALPHABETICAL
        // fruits.sort((a, b) => b.name.localeCompare(a.name)); //REVERSE-ALPHABETICAL
        // fruits.sort((a, b) => a.calories - b.calories); //NUMERIC
        // fruits.sort((a, b) => b.calories - a.calories); //REVERSE-NUMERIC

    /*MAP()*/
        // const listItems = fruits.map(fruit => 
        //                                         <li key={fruit.id}>
        //                                             {fruit.name}: &nbsp;
        //                                             <b>{fruit.calories} cal</b>
        //                                         </li>
        //                             );

    /*FILTER() */                           
        // const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
        // const listItems = lowCalFruits.map(lowCalFruits => 
        //                                                     <li key={lowCalFruits.id}>
        //                                                         {lowCalFruits.name}: &nbsp;
        //                                                         <b>{lowCalFruits.calories} cal</b>
        //                                                     </li>
        //                                     );

    const category = props.category;
    const itemList = props.items;

    const listItems = itemList.map(item => 
                                        <li key={item.id}>
                                            {item.name}: &nbsp;
                                            <b>{item.calories} cal</b>
                                        </li>
                                );
    const listCategory = <h3 className="list-category">{category}</h3>;
    const listItemDisplay = <ol className="list-items">{listItems}</ol>;
    
    return (
        <>
            {itemList.length >= 0 && (
                <>
                    {listCategory}
                    {listItemDisplay}
                </>
            )}
        </>
    );
    
}

List.propTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number,
                                              name: PropTypes.string,
                                              calories: PropTypes.number,       
                                             })),
}

List.defaultProps = {
    category: "Category",
    items: [],
}

export default List