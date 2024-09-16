/* INTRO TO REACT */
  //React = A JavaScript library (NOT FRAMEWORK) that is used to easily build and arrange user interfaces for a web application.
  //Component = A self contained section fo code that functions as a reusable building block.
  //jsx = JavaScriptXML: allows you to write HTML-like code in a JavaScript file.
  //React uses a virtual DOM, wich is a lightweight version of a real DOM:
      //We can keep track of any changes of any changes made to the virtual DOM
      //and only apply that specific chnage to the real DOM without needing to refresh 
      //the webpage (just that specific section). This reduces rendering-performance overhead.

import { useReducer, useState } from "react";

      // import Header from "./Header.jsx"
      // import Footer from "./Footer.jsx"
      // import Food from "./Food.jsx"
      
      // function App() {
      //   return(
      //     <>
      //     <Header/> {/*same as <Header></Header>*/}
      //     <Footer/>
      //     <Food/>
      //     </>
      // );
      // }


/* MAKING COMPONENTS IN REACT */
  //Make custom components in react with specific structure styling, & functionality
  //Can be reused multiple times
  //Combine HTML, CSS & JS into 1 rather than having 3 separate files

  // import Card from "./components/Card.jsx"


  // function App() {
  //   return(
  //     <>
  //       <Card/>
  //       <Card/>
  //       <Card/>
  //       <Card/>
  //     </>
  // );
  
  // }


/* HOW TO STYLE REACT COMPONENTS WITH CSS */
  //not including external frameworks (like tailwind, Bootstrap, etc) or preprocessors
  // 1. EXTERNAL: Good for global styles and small projects.
  // 2. MODULES: preferred for individual components that have unique styling.
  // 3. INLINE: good for small components with minimal styling. # PASS IN AS AN OBJECT

    //Whichever is used depends on what is needed.
  
  // import Button from "./Button.jsx"
  // function App() {
  //   return(
  //   <Button/>
  //   );
  // }


/* PROPS */
  //props = read-only properties that are shared b/w components.
  //        A parent component can sedn data to the child component
  //        <Componenet key=value/>

  // import Student from "./components/Student"
  // function App() {
  //     return(
  //       <>
  //         <Student name="Mordecai" age={31} isStudent={false}/>
  //         <Student name="Margeret" age={28} isStudent={true}/>
  //         <Student name="Benson" age={45} isStudent={false}/>
  //         <Student name="Skips" age={200} isStudent={false}/>
  //         <Student/>
  //       </>
  //     );
  // }



/* CONDITIONAL RENDERING */
  //Conditional Rendering: using if and switch statements to control which
  //                       elements will be rendered.

  // import UserGreeting from './components/UserGreeting'

  // function App() {
  //     return(
  //     <>
  //       <UserGreeting isLoggedIn={true} username="Halomastr"/>
  //       <UserGreeting username="Halomastr"/>
  //       <UserGreeting isLoggedIn={true}/>
  //     </>)
  //     ;
  //   }

/* RENDER LISTS */
  //Rendering a list of javascript variables 

  // import List from './components/List.jsx'

  // function App() {
  //   const lowCalFruits = [
  //     {id: 1, name: "apple", calories: 30}, 
  //     {id: 2, name: "orange", calories: 60}, 
  //     {id: 3, name: "coconut", calories: 75}, 
  //     {id: 4, name: "mango", calories: 90}
  //     ];

  //   const highCalFruits = [
  //     {id: 5, name: "grape", calories: 100}, 
  //     {id: 6, name: "strawberry", calories: 105}, 
  //     {id: 7, name: "lychee", calories: 172}, 
  //     {id: 8, name: "durian", calories: 307}
  //     ];

  //     return(
  //       <>
  //         <List  items={lowCalFruits} category="Low Calorie Fruits"/>
  //         <List items={highCalFruits} category="High Calorie Fruits"/>

  //       </>
  //     );
  //   }


/* CLICK EVENTS */
  //click event = An interaction when the user clicks on a scpecific element.
  //              We can respond to clicks by passing a
  //              callback to the onClick event handler.
  

  // import ProfilePic from "./components/ProfilePic.jsx"
  // function App() {
  //   return(
  //   <ProfilePic/>
  //   );
  // }


/* USESTATE() HOOK */
  //React hook = Special function that allows functional components
  //             to use React features without writing class components (React v16.8)
  //             (useState, useEffect, useContect, useReducer, useCallback, etc).

  // useState = A react hook that allows the creation of a stateful variable
  //            AND a setter to update its value in the Virtual DOM
  //            [name, setName].

  // import Counter from "./components/Counter";
  // function App() {
  //   return(
  //     <>
  //       <Counter/>
  //     </>
  //   );
  // }


  /* ONCHANGE EVENT HANDLER */
    //onChange() = event handler used primarily with form elements
    //             ex. <input> <textarea>, <select>, <radio>
    //             Triggers a function every time the value of the input area changes


  // import MyComponent from "./components/MyComponent";
  // function App() {
  //   return(
  //     <>
  //       <MyComponent/>
  //     </>
  //   );
  // }
/* COLOR PICKER APP */
    // import ColorPicker from './components/ColorPicker.jsx'
    // function App() {
    //   return(
    //     <><ColorPicker/></>
    //   );
    // }


/* UPDATE FUNCTIONS */
    //updater function = A function passed as an argument to seState() (usually).
    //                   ex. setYear(updateYear) #this is a better practice
    //                        usually passed in as an arrow function
    //                   Allow safe updates based on the previous state.
    //                   Used with multiple state updates and asynch functions.
    //                   Good practice to use updater funtions. 


  // import UpdateFunction from './components/UpdateFunction'
  // function App() {
  //   return(
  //     <>
  //       <UpdateFunction/>
  //     </>
  //   );
  // }


// function App() {
//   return(
//     <>
//     </>
//   );
// }


/* UPDATE OBJECTS IN STATE */
  // import UpdateObject from './components/UpdateObject.jsx'

  // function App() {
  //   return(
  //     <>
  //       <UpdateObject/>
  //     </>
  //   );
  // }


/* UPDATE ARRAYS IN STATE */
  // import GroceryList from './components/GroceryList.jsx'

  // function App() {
  //   return(
  //     <>
  //       <GroceryList/>
  //     </>
  //   );
  // }

/* UPDATE ARRAYS OF OBJECTS IN STATE */
  // import CarDesc from './components/CarDesc.jsx'

  // function App() {
  //   return(
  //     <>
  //       <CarDesc/>
  //     </>
  //   );
  // }

/* TO-DO LIST APP */
  // import ToDoList from './components/ToDoList.jsx'

  // function App() {
  //   return(
  //     <>
  //       <ToDoList/>
  //     </>
  //   );
  // }


/* USEEFFECT() HOOK */
    //useEffect() = React Hook that tells React DO SOME CODE WHEN (pick one):
    //              This component re-renders
    //              This compinent mounts (is create and append to the DOM)
    //              The state of the value

    //useEffect(function, [dependencies]);
    //  useEffect(() => {}); // Runs after every re-render
    //  useEffect(() => {}, []); // Runs only on mount
    //  useEffect(() => {}, [value]); //Runs on mount + when value changes
    //USES:
    // 1. Event Listeners
    // 2. DOM Manipulation
    // 3. Subscriptions (real-time updates)
    // 4. Fetching Data from an API
    // 5. Clean up when a component unmounts


  // import UseEffect from './components/UseEffect.jsx'

  // function App() {
  //   return(
  //     <>
  //       <UseEffect/>
  //     </>
  //   );
  // }


/* DIGITAL CLOCK APP */
  // import DigitalClock from './components/DigitalClock.jsx'

  // function App() {
  //   return(
  //         <>
  //         <DigitalClock/>
  //         </>
  //   );
  // }


/* USECONTEXT() HOOK */
  // /* useContext() = React Hook that allows you to share values 
  //                   between multiple levels of components
  //                   without passing props through each level.

  //     //PROVIDER COMPONENT
  //       1. import React, {createContext} from 'react';
  //       2. export const myContext = createContext();
  //       3. <MyContext.Provider value ={value}>
  //             <Child/>
  //          <MyContext.Provider>

  //     //CONSUMER COMPONENTS
  //       1. import React, {useContext} from 'react';
  //       2. import {MyContext} from './ComponentA'
  //       3. const value = useConext(myContext);


  //  */
  // import ComponentA from './components/ComponentA.jsx'

  //   function App() {
  //     return(
  //       <>
  //       <ComponentA/>
  //       </>
  //     );
  //   }


/* USEREF() HOOK */
  // /* useRef() = "use Reference" doesn't cause a component to re-render
  //               when its it value changes. 
                
  //               Used when you want a component to "remember" some info, 
  //               but you don't want that info to trigger new renders.

  //               1. Accessing/Interacting with DOM elements.
  //               2. Handling Focus, Animations, and Transitions.
  //               3. Managing Timers and Intervals.
   
  //  */

    // import UseRef from './components/UseRef.jsx'

    // function App() {
    //   return(
    //     <>
    //       <UseRef/>
    //     </>
    //   );
    // }

/* STOPWATCH APP */
//     import Stopwatch from './Stopwatch/Stopwatch.jsx'
//     function App() {
//       return(
//           <>
//             <Stopwatch/>
//           </>
//       );
//     }

export default function App() {
  return(<></>);
}

