/* BEGINNING */
    // console.log('Hello World');

    // let name;
    // console.log(name);

    // document.getElementById('title').textContent = 'Hello World'; // gets element in HTML document by its ID
    // document.getElementById('content').textContent = 'I like pizza';


/* VARIABLES */
    // let age = 100;
    // let price = 10.99;
    // let gpa = 4.0;

    // console.log(`You are ${age} years old.`);
    // console.log(`This gift cost $${price}.`);
    // console.log(`Your GPA is ${gpa}.`);

    // let name = "Tobenna"
    // console.log(typeof name);

    // let fullName = "Tobenna Okoli";
    // let age = "19";
    // let isStudent = true;

    // document.getElementById("p1").textContent = `Your name is: ${fullName}`;
    // document.getElementById("p2").textContent = `Your age is: ${age}`;
    // document.getElementById("p3").textContent = `Are you a student: ${isStudent}`;


/* ARITHMETIC OPERATORS */
    // let students = 40;
    // students **= 3;

    // console.log(students);


/* USER INPUT */
    // Ways to get user input:
        // 1. EASY WAY: window prompt
        // 2. PROFESSIONAL WAY: HTML textbox


    // let username = window.prompt("Username: ")
    // console.log(username);

    // let username;
    // document.getElementById("mySubmit").onclick = function(){
    //     username = document.getElementById("myText").value;
    //     console.log(username);
    //     document.getElementById("myText").value = "";
    //     document.getElementById("myH1").textContent = `Hello ${username}`;
    // }


/* TYPE CONVERSION */
    //  let age = window.prompt("How old are you?");
    //  age = Number(age);
    //  age++;
    //  console.log(age);

    //  let bool = "";
    //  bool = Boolean(bool);

    //  console.log(bool, typeof bool); //can be used to test of user entered anything (would be "true" if they did).


/* CONSTANTS */
    //  constant = variable that is immutable

    //  const PI = 3.14159;
    //  let radius;
    //  let circumference;

    //  document.getElementById("mySubmit").onclick = function(){
    //     radius = Number(document.getElementById("myText").value);
    //     circumference = 2 * PI * radius;
    //     document.getElementById("myH3").textContent = circumference + "cm";
    //     document.getElementById("myText").value = "";
    //  }


/* MATH */
    // let x = 3.5;
    // let y = 2;
    // let z = 1;
    // let w;
    // w = Math.round(x);
    // console.log(w);

    // console.log("ceiling f 3.49 : " + Math.ceil(x));
    // console.log("floor of 3.49: " + Math.floor(x));
    // console.log("tangent of 3.49: " + Math.tan(x));

    // if(Math.sign(x) == 1){
    //     console.log("x is positive");
    // }else if (Math.sign(x) == -1){
    //     console.log("x is negative");
    // }else{
    //     console.log("x is zero");
    // }

    // console.log(Math.max(x, y, z));
    // console.log(Math.min(x, y, z));


/* RANDOM NUMBER GENERATOR */
    // const min = 50;
    // const max = 100;
    // let rand1 = Math.floor(Math.random() * 100) + 1; // have to add 1 if you dont want to include 0.

    // let rand2 = Math.floor(Math.random() * (max - min)) + min; // random number between min and max values.

    // console.log(`rand1 = ${rand1}`);
    // console.log(`rand2 = ${rand2}`);


/* IF STATEMENTS */
    // let age;
    // const submit = document.getElementById("submit");
    // const result = document.getElementById("result");
    // let bool;

    // submit.onclick = function(){
    //     age = Number(document.getElementById("age").value);
    //     if(age >= 18){
    //         result.textContent = `You're ${age} years old. You're an adult!`;
    //     }else{
    //         result.textContent = `You're ${age} years old. You're an minor!`;
    //     }
    // }


/* CHECK PROPERTY */
    // .checked = determines the checked state of an HTML checkbox or radio button element
    
    // /*<input type="checkbox" id="subscribe"></input> 
    //  <label for="subscribe">Subscribe</label> --> with " for", clicking the label will also clich the checkbox*/

    // const subscribe = document.getElementById("subscribe");
    // const ccBtn = document.getElementById("ccBtn");
    // const apBtn = document.getElementById("apBtn");
    // const ppBtn = document.getElementById("ppBtn");
    // const submit = document.getElementById("submit");
    // const subResult = document.getElementById("subResult");
    // const payResult = document.getElementById("payResult");

    // submit.onclick = function(){
    //     if(subscribe.checked){
    //         subResult.textContent = `You are subscribed!`;
    //         if(ccBtn.checked){
    //             payResult.textContent = `You are paying with a credit card`;
    //         } else if(apBtn.checked){
    //             payResult.textContent = `You are paying with Apple Pay`;
    //         }else if(ppBtn.checked){
    //             payResult.textContent = `You are paying with PayPal`;
    //         }else{
    //             payResult.textContent = `You must select a payment type!`
    //         }
    //     }else{
    //         subResult.textContent = `You are NOT subscribed.`;
    //         payResult.textContent = "";
    //     }

    // }


/* TERNARY OPERATOR */
    // let age = 9;
    // let message = age >= 18? "You suck": "You don't suck"; // useful shorthand for assigning variables (instead of if-statements).
    // console.log(message);

    // let time = 17;
    // let greeting = time < 12? "goof morning" : "good afternoon";
    // console.log(greeting);

    // let isUgly = false;

    // let evaluation = isUgly? "You're ugly": "You're not ugly";
    // console.log(evaluation);


/* SWITCHES */
    // let day = Math.round((Math.random() * 7) + 1);

    // switch(day){
    //     case(1):
    //         console.log("It's Monday");
    //         break;
    //     case(2):
    //         console.log("It's Tuesday");
    //         break;
    //     case(3):
    //         console.log("It's Wednesday");
    //         break;
    //     case(4):
    //         console.log("It's Thursday");
    //         break;
    //     case(5):
    //         console.log("It's Friday");
    //         break;
    //     case(6):
    //         console.log("It's Saturday");
    //         break;
    //     case(7):
    //         console.log("It's Sunday");
    //         break;
    //     default:
    //         console.log(`${day} is not a day`);
    // }


/* STRING METHODS */
    // let userName = "Halomastrs  ";

    // console.log(userName.indexOf("s"));
    // console.log(userName.lastIndexOf("s"));
    // console.log(userName.length);
    // console.log(userName);
    // console.log(userName.trim());
    // console.log(userName.repeat(3));
    // console.log(userName.toUpperCase());
    // console.log(userName.startsWith("H"));
    // console.log(userName.startsWith("s"));

    // let phoneNumber = "204-555-0708";

    // console.log(phoneNumber.replaceAll("-","_"));
    // console.log(phoneNumber.padEnd(100, "*"));
    // console.log(phoneNumber.padStart(100, "*"));


/* STRING SLICING */
    // const fullName = "Elena Summer Gilbert";
    // // let firstName = fullName.slice(0,5);
    // // let lastName = fullName.slice(6);
    // // console.log(firstName);
    // // console.log(lastName);

    // console.log(fullName.slice(-1));// negative numbers start at the end
    // console.log(fullName.slice(-2)); // and go up as you decrease

    // let firstName = fullName.slice(0, fullName.indexOf(" "));
    // let lastName = fullName.slice(fullName.indexOf(" ") + 1); // from first space go all the way to the end of the String
    // console.log(firstName);
    // console.log(lastName);


/* METHOD CHAINING */
    //                 Without method chaining
    // let username = window.prompt("Enter your username: ")
    // username = username.trim();
    // username = username.toLowerCase();
    // console.log(username);


    //                  With Method chaining
    // let username2 = window.prompt("Enter your username: ").trim().toLowerCase();
    // console.log(username2);


/* LOGICAL OPERATORS */
    // const temp = 20;
    // const mood = 4;

    // if(temp == 20 && mood == 5){
    //     console.log("I'm happy");
    // }else if(temp < 20 && mood <= 5){
    //     console.log("I'm not happy");
    // }else if(temp == 20 || mood == 5){
    //     console.log("I'm Ok");
    // }


/* STRICT EQUALITY */
    // /* 
    //     = assignment operator
    //     == value comparison operator
    //     === strict equality operator (comparsion of both value and datatype)
    //     != inequality operator
    //     !== strict inequality operator
    //     */
    // // const PI = 3.14;

    // if(PI === "3.14"){
    //     console.log(`1. This is PI`);
    // }else{
    //     console.log(`2. This is NOT PI`);
    // }

        // if(PI !== "3.14"){
        //     console.log(`3. This is NOT PI`);
        // }else{
        //     console.log(`4. This is PI`);
    // }

/* WHILE LOOPS */
    // let username = window.prompt();

    // while(username === "" || username === null){
    //     alert("Please enter a valid username");
    //     username = window.prompt();
    // }

    // console.log(`Hello, ${username}`);


/* FOR LOOPS */
    // for(let i = 0; i < 20; i++){
    //     if (i == 12){
    //         continue;
    //     }else{
    //     console.log("hello");
    //     }
    //     if(i = 17){
    //         console.log("Breaking now");
    //         break;
    //     }
    // }


/* FUNCTIONS */
    // function happyBirthday(username){
    //     alert(`Check the console for a surprise!!!`)
    //     console.log(`Happy Happy Birthday ${username}`);
    // }

    // happyBirthday(7);
    // happyBirthday("Kelly");
    // happyBirthday("Amitra");


/* VARIABLE SCOPE */
    // let x = 30
    // var y = 20
    // function function1(){
    //     let x = 1
    //     console.log(x);
    // }
    // function function2(){
    //     let x = 10
    //     console.log(x);
    // }

/* ARRAYS */
    // let fruits = ["apple", "orange", "lychee"];

    // fruits[1] = "mango";
    // fruits.push("nectarine")
    // fruits.pop("nectarine")
    // fruits.push("cherry")
    // fruits.unshift("orange") // adds element to the beginning of array
    // fruits.shift() // removes first element in the array
    // console.log(fruits);
    // console.log(fruits[0]);
    // console.log(fruits[1]);
    // console.log(fruits[2]);
    // console.log(fruits[3]);

    // console.log(fruits.length);
    // console.log(fruits.indexOf("lychee"));

    // for(let fruit of fruits){ // prints the values
    //     console.log(fruit);
    // }

    // for(let fruit in fruits){ // prints the indexes
    //     console.log(fruit);
    // }

    // console.log(fruits.sort().reverse());


/* SPREAD OPERATOR */
    // /* spread operator: "..." allows iterable elemnts such as an array or string to be expanded into separate
    //                      elements (unpack the elements)*/
    // let numbers = [1, 2, 3, 4, 5];

    // let maximum = Math.max(...numbers); // unpacks array of elements into individual elements
    // console.log(maximum);

    // let name = "HELIOS";

    // let letters = [...name].join(".");
    // console.log(letters);

    // let fruits = ["apple", "banana", "peach"];
    // let veggies = ["celery", "peas", "bittergourd"];

    // let fruitsAndVeggies1 = [fruits, veggies];
    // let fruitsAndVeggies2 = [...fruits, ...veggies];

    // console.log(fruitsAndVeggies1);
    // console.log(fruitsAndVeggies2);


/* REST PARAMETERS */
    // /* rest parameters: (...rest) allows a function to work with diff number of arguments by bunding them into
    //                     an array.

    //                     spread: expands an array into separate elements
    //                     rest = bundles sepaprate elements into an array

    //                     opposite of spread = rest
    //                     opposite of rest = spread
    //  */
    // function openFridge(  ...foods){
    //     console.log(foods);
    //     console.log(...foods);
    // }

    // function getFoods(...foods){
    //     return foods;
    // }

    // const food1 = "pizza";
    // const food2 = "chicken alfredo";
    // const food3 = "sushi";
    // const food4 = "ginger soup";
    // const food5 = "squash";

    // openFridge(food1, food2, food3, food4, food5);

    // const foods = getFoods(food1, food2, food3, food4, food5);

    // console.log(`Here is what is in your fridge: ${foods}`);

    // function average(...nums){
    //     let result = 0;
    //     for(let num of nums){
    //         result += num;
    //     }

    //     return result/nums.length;
    // }

    // console.log(`Average: ${average(1, 2, 3, 90)}`)

    // function combineStrings(...strings){
    //     return strings.join(" ");

    // }

    // const fullName = combineStrings("Petrificus", "Sinomias", "Alberdine", "II")

    // console.log(fullName);


/* RANDOM PASSWORD GENERATOR */
    // function generatePassword(len, lower, upper, num, sym){
    //     const lowerChars = "abcdefghijklmnopqrstuvwxyz";
    //     const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    //     const numChars = "0123456789";
    //     const symChars = "!@#$%^&*(){}|:<>?[]_+=-',./";

    //     let allowedChars = ""; //represents users selections for all possible chars to be in the password.
    //     let password = "";

    //     allowedChars += lower ? lowerChars : "";
    //     allowedChars += upper ? upperChars : "";
    //     allowedChars += num ? numChars : "";
    //     allowedChars += sym ? symChars : "";


    //     if(len <= 0){
    //         return "passwrd length must be al least 1.";
    //     }

    //     if(allowedChars.length === 0){
    //         return "at least one option must be selected."
    //     }

    //     for(let i = 0; i < len; i++){
    //         const randIdx = Math.floor(Math.random() * allowedChars.length); // number between 0 - 26.
    //         password += allowedChars[randIdx];
    //     }

    //     return password;
    // }

    // const passwordLength = 20;
    // const includeLowerCase = true;
    // const includeUpperCase = false;
    // const includeNumbers = true;
    // const includeSymbols = false;

    // const password = generatePassword(passwordLength, 
    //                                   includeLowerCase, 
    //                                   includeUpperCase, 
    //                                   includeNumbers, 
    //                                   includeSymbols);

    // console.log(password);

/* CALLBACKS */
    //callback = a function that is passed as an argument to another function
    // /*                  Used to handle asynchronous operations:
    //                         1.Reading a file
    //                         2. Network requests
    //                         3. Interacting with databases

    //                     Callback is basically "Hey, when you're done, call this next"
    //  */
    // function sum(callback, x, y){
    //     let result = x + y;
    //     callback(result);

    // }

    // function displayResult(result){
    //     console.log(`My result is: ${result}`);
    // }

    // function displayPage(result){
    //     document.getElementById("myH1").textContent = result;
    // }

    // sum(displayPage, 7, 11);


/* FOREACH() */
    //.forEach() = method used to iterate over the elements of an array and apply a specificed function (callback) to each element
    // array.forEach(callback)
    // element, index, array are alreay provided (built into the forEach method)
    // /*  Note: Must STRICTLY be used in the order "element, index, array" 
    //         in a function, otherwise the variables will misalign.
    //     */
    // let fruits  = ["apple", "orange", "kiwi", "lychee"];
    // fruits.forEach(capitalize);
    // fruits.forEach(display);

    // function capitalize(element, index, array){
    //     array[index] = element[0].toUpperCase()+element.slice(1);
    // }

    // function display(element){
    //     console.log(element);
    // }


/* MAP() */
    //.map() = accepts a callback anf applies said function to each element in an array, then retuns a new array.
    // map() is like forEach() EXCEPT AN NEW METHOD IS RETURNED (ORIGINAL ARRAY IS MAINTAINED - unlike forEach()).

    // const nums = [1, 2, 3, 4, 5];
    // const squaredNums = nums.map(square);
    // console.log(nums);
    // console.log(squaredNums);

    // function square(element){
    //     return Math.pow(element, 2);
    // }

    // const dates = ["2038-01-09", "2024-11-17", "2012-12-28"];

    // const formattedDates = dates.map(formatDates);
    // console.log(formattedDates);

    // function formatDates(element){
    //     parts = element.split("-");
    //     return `${parts[2]}-${parts[1]}-${parts[0]}`;
    // }


/* FILTER() */
    //.filter() = creates a new array by filtering out elements (functions passed in as a callback).

    // const numbers = [1, 2, 3, 4, 5, 6, 7 ,8 ,9, 10 ,11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    // const evenNumbers = numbers.filter(isEven);
    // console.log(evenNumbers);

    // function isEven(element){
    //     return element % 2 === 0;
    // }

/* REDUCE() */
    //.reduce() = reduces all values in an array to a single value.

    // const prices = [5, 25, 75, 125, 200];
    // const total = prices.reduce(sum); // in this case, all the values are being summed together.

    // console.log(`$${total.toFixed(2)}`);

    // function sum(prev, next){
    //     return prev + next;
    // }

    // const grades = [75, 98, 100, 64, 82];
    // const max = grades.reduce(getMax);
    // console.log(max.toFixed(1));

    // function getMax(prev, next){
    //     return Math.max(prev, next);
    // }


/* FUNCTION EXPRESSIONS */
    //function expressions = a way to define and use functions as valuables and variables (kinda like anonymous classes).

    // setTimeout(function(){
    //     console.log("hello");
    // }, 300)

    // const numbers = [10, 100, 20, 200, 1230, 123000];

    // const newNums1 = numbers.map(function(element){return element/10})
    // console.log(`newNums1: ${newNums1}`);

    // const newNums2 = numbers.filter(function(element){return element < 100})
    // console.log(`newNums2: ${newNums2}`);


    // const newNums3 = numbers.reduce(function(prev, next){return prev * next})
    // console.log(`newNums3: ${newNums3}`);


/* ARROW FUNCTIONS */
    //arrow function = a concise way to write a function expression. It's good for simple function that are only used once.
        //format: (parameters) => some code


    // const hello = (name, age) => console.log(`Hello ${name}! You are ${age} years old.`)

    // hello("Niko", 17);

    // setTimeout((name, age) => console.log(`Hello ${name}! You are ${age} years old.`), 3000);


/* JAVASCRIPT OBJECTS */
    //object = a collection of related properties and/or methods
    // /* Can represent real world objects (people, products, places) 
    //     format: object = {key: value;
    //                         function()}
    // */  
    // const spongebob = {
    //     firstName: "SpongeBob",
    //     lastName: "Squarepants",
    //     isEmployed: true,
    //     greet: function(){console.log("HeHeHeHe!");}
    // }

    // const patrick = {
    //     firstName: "Patrick",
    //     lastName: "Star",
    //     isEmployed: false,
    //     greet: () => {console.log("HuhHuhHuh!");}
    // }

    // console.log(spongebob.isEmployed);
    // console.log(patrick.lastName);
    // spongebob.greet();
    // patrick.greet();


/* WHAT IS "THIS"? */
    //this = reference to the object where "this" is used (the object depends on the immediate context)
    //persom.name = this.name

    // const person1 = {
    //     name: "Miliana",
    //     favFood: "lasagna",
    //     intro: function(){console.log(`Hi! I'm ${this.name}. My favorite food is ${this.favFood}.`)},
    // }

    // person1.intro();
    // console.log(this);


/* CONSTRUCTORS */
    //constructor = special method for defining the properties and methods of objects

    // function Car(make, model, year, color){
    //     this.make = make;
    //     this.model = model;
    //     this.year = year;
    //     this.color = color
    // }

    // const toyota = new Car("Toyota", "Camry", 2007, "red");
    // toyota.color = "orange";
    // console.log(toyota.make)
    // console.log(toyota.model)
    // console.log(toyota.year)
    // console.log(toyota.color);

/* CLASSES */
    //class = (ES6 feature) provides a more structured and cleaner way to work with objects.
    //Will be helpful with topics such as static keyword, encapsulation, and inheritance.

    // class Product{
    //     constructor(name, price){
    //         this.name = name;
    //         this.price = price;
    //     }

    //     displayProduct(){
    //         console.log(`Product: ${this.name}`);
    //         console.log(`Price: ${this.price.toFixed(2)}`);
    //     }

    //     calcTotal(salesTax){
    //         if(salesTax <= 0 || salesTax >= 1){
    //             throw new Error("sales tax must be greater than 0 and less than 1.")
    //         }
    //         return (this.price += (this.price * salesTax)).toFixed(2);
    //     }
    // }

    // const salesTax = 0.02;
    // const shirt = new Product("shirt", 14.99)
    // console.log(`Shirt costs: $${shirt.calcTotal(salesTax)}`); 



/* "STATIC" KEYWORD */
    //static = keyword that defines properties that belong to the class itself, rather than an instance of the class.
    //can be called by invoking the class name, instead of having to create an object first
    //i.e. Math class uses Math.random(), not "let m = new Math() then m.random()"

    // class User{
    //     static UserCount = 0;
    //     constructor(username){
    //         this.username = username;
    //         User.UserCount++;
    //     }
    // }

    // const Sandy = new User()
    // const Spongy = new User()
    // const Patty = new User()
    // const Sqiddy = new User()
    // console.log(User.UserCount); //Sandy.UserCount won't work as "UserCount" doesn't belong to a single object.


/* INHERITANCE */
    //inheritance = allows a new class to inherit properties and mthods from an existing class (parent -> child).
    //helps with code reusability

    // class Animal{
    //     alive = true;
    //     eat(){
    //         console.log(`This ${this.name} is eating`);
    //     }

    //     sleep(){
    //         console.log(`This ${this.name} is sleeping`);
    //     }

    //     kill(prey){
    //         console.log(`The ${this.name} killed the ${prey.name}`)
    //         prey.alive = false;
    //     }

    //     getState(){
    //         if(this.alive){
    //             console.log(`The ${this.name} is alive`)
    //         }else{
    //             console.log(`The ${this.name} is dead`)
    //         }
    //     }

    // }

    // class Rabbit extends Animal{
    //     name = "rabbit";
    // }

    // class Hawk extends Animal{
    //     name = "hawk";

    // }

    // const rabbit = new Rabbit();
    // rabbit.getState();


    // const hawk = new Hawk();
    // hawk.kill(rabbit);
    // rabbit.getState();


/* "SUPER" KEYWORD */
    //super = keyword used to call the parent constructor or access the properties or methods of the parent object
        //this = this object
        //super = the parent object
    
    // class Animal{
    //     constructor(name, age){
    //         this.name = name;
    //         this.age = age;
    //     }

    //     move(speed){
    //         console.log(`${this.name} moves at a speed of ${speed} mph`);
    //     }
    // }
    // class Tiger extends Animal{
    //     constructor(name, age, runSpeed){
    //         super(name, age);
    //         this.runSpeed = runSpeed;
    //     }

    //     run(){
    //         super.move(this.runSpeed)
    //         console.log(`This tiger can run`);
    //     }
    // }
    // class Monkey extends Animal{
    //     constructor(name, age, swingSpeed){
    //         super(name, age);
    //         this.swingSpeed = swingSpeed;
    //     }

    //     swing(){
    //         super.move(this.swingSpeed)
    //         console.log(`This monkey can swing`);
    //     }
    // }
    // class Goldfish extends Animal{
    //     constructor(name, age, swimSpeed){
    //         super(name, age);
    //         this.swimSpeed = swimSpeed;
    //     }

    //     swim(){
    //         console.log(`This goldfish can run`);
    //         super.move(this.swimSpeed)
    //     }
    // }

    // const tiger = new Tiger("tiger", 1, 25); 
    // tiger.run(tiger.speed);

    // const monkey = new Monkey("monkey", 10, 50);
    // monkey.swing(monkey.speed);

    // const goldfish = new Goldfish("goldy", 150, 15);
    // goldfish.swim(goldfish.speed);


/* GETTERS AND SETTERS */
    //getter = special method that makes a property readable.
    //setter = special method that makes a property writeable.

    //validate and  modify a value when reading/writing a property.

    // class Rectangle{
    //     constructor(width, height){
    //         if(!this.isValidNumber(width)||!this.isValidNumber(height)){
    //             console.error("width and/or height is not a valid number");
    //         }else{
    //             this._width = width;
    //             this.height = height;
    //         }
    //     }

    //     isValidNumber(number){
    //         if(number < 0){
    //             return false;
    //         }
    //         return true;
    //     }

    //     get width(){
    //         return `${this._width} cm`;
    //     }

    //     get height(){
    //         return `${this._height} cm`;
    //     }

    //     set width(width){
    //         if(!this.isValidNumber(width)){
    //             console.error("Width is not a valid number");
    //         }else{
    //             this._width = width;
    //         }
    //     }

    //      set height(height){
    //         if(!this.isValidNumber(height)){
    //             console.error("Height is not a valid number");
    //         }else{
    //             this._height = height;
    //         }
    //     }

    //     get area(){
    //         return `${(this._width * this._height).toFixed(1)} cm^2`;
    //     }
    // }

    // class Person{
    //     constructor(firstName, lastName, age){
    //         this.firstName = firstName;
    //         this.lastName = lastName;
    //         this.age = age;
    //     }

    //     set firstName(firstName){
    //         if(typeof firstName === "string" && firstName.length > 0){
    //             this._firstName = firstName;
    //         }else{
    //             console.error("First name must be a non-empty string.");
    //         }
    //     }

    //     get firstName(){
    //         return this._firstName;
    //     }

    //     set lastName(lastName){
    //         if(typeof lastName === "string" && lastName.length > 0){
    //             this._lastName = lastName;
    //         }else{
    //             console.error("Last name must be a non-empty string.");
    //         }
    //     }

    //     get lastName(){
    //         return this._lastName;
    //     }
        
    //     set age(age){
    //         if(typeof age === "number" && age >= 0){
    //             this._age = age;
    //         }else{
    //             console.error("Age must be a non-negative number.");
    //         }
    //     }

    //     get age(){
    //         return this._age;
    //     }
    // }

    // const p = new Person("Timmy", "Turner", 17)
    // p.firstName = "Joe";
    // console.log(p.firstName);
    // console.log(p.lastName);
    // console.log(p.age);

    // const rect = new Rectangle(34, 83);
    // rect.width = 2;
    // console.log(rect.width);
    // console.log(rect.height);
    // console.log(rect.area);

/* DESTRUCTURING */
    //destructuring = extracts values from arrays and objects, then assign to variables in a convenient way.
    //[] = to perform array destructuring
    //{}  = to perform object destructuring

    // let a = 1;
    // let b = 2;

    // [a, b] = [b, a]

    // console.log(a);
    // console.log(b);

    // //Swapping two colors in an array
    // const colors = ["red", "green", "blue", "orange", "purple"];

    // [colors[0], colors[4]] =  [colors[4], colors[0]];

    // console.log(colors);

    // //assigning array elements to variables
    // const [firstColor, secondColor, thirdColor, ...extraColors] = colors;

    // console.log(firstColor);
    // console.log(secondColor);
    // console.log(thirdColor);
    // console.log(extraColors); //combining with rest parameters to get remaining array elements

    // const person1 = {
    //     first: "Sandy",
    //     last: "Cheeks",
    //     age: "35",
    //     job: "Scientist",
    // }

    // const person2 = {
    //     first: "Pearl",
    //     last: "Krabs",
    //     age: "17",
    // }

    // const {first, last, age, job="unemployed"} = person2;

    // console.log(first);
    // console.log(last);
    // console.log(age);
    // console.log(job);

    // //destructure in function parameters
    // function displayPerson({first, last, age, job="unemployed"}){ //LINE 1000!!!
    //     console.log(`name: ${first} ${last} \n age: ${age} \n job: ${job} `);
    // }
    
    // displayPerson(person1);
    // displayPerson(person2);


/* NESTED OBJECTS */
    //nested object = Objects inside other Objects
    //allow you to represent more complex data structures
    //Child Object is enclosed inside a Parent Object

    // const person = {
    //     fullName: "Dipper Pines",
    //     age: "13",
    //     isStudent: true,
    //     hobbies: ["investigating", "flirting", "dancing"],
    //     address: {
    //         street: "329 Gravity Blvd",
    //         town: "Gravity Falls",
    //         country: "USA",
    //     }
    // }

    // for(const property in person.address){
    //     console.log(person.address[property] + `\n`);
    // }

    // class Address{
    //     constructor(street, city, country){
    //         this.street = street;
    //         this.city = city
    //         this.country = country
    //     }

    //     displayAddress(name){
    //         console.log(`${name} lives at: `);
    //         console.log(this.street);
    //         console.log(this.city);
    //         console.log(this.country);
    //     }
    // }

    // class Person{
    //     constructor(name, age, ...address){
    //         this.name = name;
    //         this.age = age;
    //         this.address = new Address(...address);
    //     }
    // }

    // const person1 = new Person("Eugene Krabs", 56, 
    //     "519 Greedy Ln.", "Bikini Bottom", "Int waters");

    // const person2 = new Person("Squidward Tentacles", 37, 
    //     "125 Conch St.", "Bikini Bottom", "Int waters");

    // const person3 = new Person("Penelope Puff", 52, 
    //     "428 Puffer Av.", "Bikini Bottom", "Int waters");


    // console.log(person3.address.displayAddress(person3.name));


/* ARRAY OF OBJECTS */
    // const fruits = [{name: "apple", color: "red", calories: 80,}, 
    //                 {name:"grapes", color:"green", calories: 100,},
    //                 {name:"lychee", color:"white", calories: 125,},
    //                 {name:"mango", color:"yellow", calories: 145,},]

    // console.log(fruits[0].name);
    // console.log(fruits[1].name);
    // console.log(fruits[2].name);
    // console.log(fruits[3].name);

    // fruits.pop();
    // fruits.push({name: "plum", color: "purple", calories: 72})

    // console.log(fruits);

    // //forEach()
    // fruits.forEach(fruit => console.log(fruit.color))

    // //map()
    // const fruitNames = fruits.map(fruit => fruit.name);
    // console.log(fruitNames);
    
    // //filter()
    // const highCalorieFruits = fruits.filter(fruit => fruit.calories >= 100);
    // console.log(highCalorieFruits);

    // //reduce()
    // const maxFruit = fruits.reduce((max, fruit) => //max = prev, fruit = next
    //                                 fruit.calories > max.calories ? fruit : max)
    // console.log(maxFruit);


/* SORTING */
    //sort() = method used to sort array elements
    //sorts elements as strings in lexicographic order, NOT ALPHABETICAL
    //lexicographic = (alphabet + numbers + strings + symbols) as strings

    // const fruits = ["orange", "banana", "coconut", "kiwi", "grapes", "nectarine"]

    // console.log(fruits.sort());

    // const nums = [1, 9, 10, 5, 4, 3, 8, 2, 7, 6]; // prints (10) [1, 10, 2, 3, 4, 5, 6, 7, 8, 9]
    // //numbers are sorted as strings, therefore "10" comes before othe numbers

    // console.log(nums.sort((prev, next) => prev - next ));
    // console.log(nums.sort((prev, next) => next - prev ));

    // const people = [{name: "Sokka", age: 15},
    //                 {name: "Katara", age: 14},
    //                 {name: "Aang", age: 12},
    //                 {name: "Toph", age: 12}]
    // people.sort((prev, next) => prev.age - next.age);
    // console.log(people);
    
    // people.sort((prev, next) => prev.name.localeCompare(next.name))
    // console.log(people);



/* SHUFFLE AN ARRAY */
    // const cards = ["A", 2, 3, 4,5, 6,7, 8, 9, 10, 'J', 'O,', 'K',]


    // function shuffle(array){
    //     //Fisher-Yates Shuffling Algorithm
    //     for(i = array.length - 1; i > 0; i--){
    //         const rand = Math.floor(Math.random() * (i + 1));
    //         [array[i], array[rand]] = [array[rand], array[i]]
    //     }
    // }

    // shuffle(cards);
    // console.log(cards);


/* DATES */
    //Date Objects = Objects that contain values that represent dates and times (the objects can be changed and formatted).
    //Date(year, month, day, hour, minute, second, millisecond)
    // const date = new Date(2023, 10, 17, 5, 6, 9, 17); //pass in numbers (months go from 0-11)
    // const dateAsString = new Date("2024-03-03T12:00:00Z"); //pass in a string (months go from 1-12)
    // const dateAsEpic = new Date(1300000000019); //date your computer thinks time began
    // console.log(dateAsString);
    // console.log(dateAsEpic);
    // date.setFullYear(2025, 0, 17)
    // const date = new Date();
    // console.log(date);
    // console.log(date.getDate());
    // console.log(date.getFullYear());
    // console.log(date.getDay());
    // console.log(date.getHours());
    // console.log(date.getMinutes());
    // console.log(date.getSeconds());


/* CLOSURES */
    //closure = a function defined inside another function.
    //the inner function has access to the variables and scope of the outer function
    //allows for private variables and state maintenance.

    // function outer(){
    //     let message = "Hello"
    //     function inner(){
    //         console.log(message);
    //     }
    //     //message = "goodbye"; - this WILL change the message.
    //     inner();
    // }

    //message = "goodbye"; - this WON'T change the message.
    // outer();

    // function createCounter(){
    //     let count = 0;
    //     function increment(){
    //         count++
    //         console.log(`Count increased to: ${count}`)
    //     }

    //     return {increment, getCount} //reutrning an object with the increment method 

    //     function getCount(){
    //         return count;
    //     }
    //     /* in Object & Class form:
    //         same as the Object:
    //         const counterAsObject = {
    //             count: 0,
    //             increment: function(){
    //                 this.count++;
    //                 console.log(`CounterAsObject increased to: ${this.count}`)
    //             }
    //         }

    //         -----------------------
    //         same as the Class:
    //         class CounterAsClass {
    //             constructor(){
    //                 this.count = 0;
    //             }
    //             increment(){
    //                 this.count++;
    //                 console.log(`CounterAsClass increased to: ${this.count}`)
    //             }
    //         }
    //     */
    // }

    // const counter = createCounter();
    // counter.increment();
    // counter.increment();
    // counter.increment();

    // console.log(counter.getCount()); //what is inside "{}" is an object's properties and methods

    // function createGame(){
    //     let score = 0;

    //     function increaseScore(points){
    //         score += points;
    //         console.log(`+${points}pts`);
    //     }

    //     function decreaseScore(points){
    //         score -= points;
    //         console.log(`-${points}pts`);
    //     }

    //     function getScore(points){
    //         console.log(`The current score is ${score}`);
    //     }

    //     return {increaseScore, decreaseScore, getScore}
    // }

    // const game = createGame();

    // game.increaseScore(40);
    // game.getScore();
    // game.decreaseScore(24)
    // game.getScore();
    // game.score = 10000;
    // game.getScore();


/* SET TIMEOUTS */
    //setTimeout() = function in Javascript that allows you to schedule
    // The execution of a function after a delay in milliseconds
    //Times are approximate (varies based on the workdload of the Javascript runtime environment)
    //setTimeout(callback, delay)


    // let timeoutID;

    // function startTimer(){
    //     timeoutID = setTimeout(() => {
    //         window.alert("You clicked a button")
    //     }, 3000);
    //     console.log("Timeout started");
    // }

    // function clearTimer(){
    //     clearTimeout(timeoutID) // MUST pass in an ID
    //     console.log("Timeout cancelled");
    // }


/* ES6 MODULES */
    // ES6 Module = An external file that contains reusable code that be imported into other Javascript files.
    //Write reusable code for many different apps
    //Can contains vairables, classes, functions, etc.
    // import {PI, getCircumference, getArea, getVolume} from './mathUtil.js'; MY FIRST MODULE!!!

    // console.log(getCircumference(77).toFixed(2));
    // console.log(getArea(40).toFixed(2));
    // console.log(getVolume(19).toFixed(2));


/* ASYNCHRONOUS CODE */
    //synchronous = Executes line by line consecutively in a sequential manner
    //asynchronous = Allows multiple operations to be perfrmed concurrently without waiting
    //               Doesn't block the execution flow and allows the porgram to continue
    //               (One with I/O operations, network requests, fetching data)
    //               Handled with: Callbacks, Promises, Async/Await

    // function func1(callback){
    //     setTimeout(() => {console.log("Task 1");
    //                         callback()}, 3000);
    // }

    // function func2(){
    //     console.log("Task 2");
    //     console.log("Task 3");
    //     console.log("Task 4");
    // }

    // func1(func2);


/* ERROR HANDLING */
    //Error = An Object that is created to represent a problem that occurs
    //        Errors often occur with user input or establishing a connection

    //try{} = Encloses code that could potentially throw an error
    //catch{} = Catches and handles any a specific Error from the try block.
    //finally{} = (optional) ALWAYS executes. Used mostly for cleanup (ex. close files, close connections, release resources).
    
    // NETWORK ERRORS
    // PROMISE REJECTION
    // SECURITY ERRORS

    // try{
    // console.leg("hello");
    // }catch(error){
    //     console.error(error);
    // }finally{
    //     //CLOSE FILES
    //     //CLOSE CONNECTIONS
    //     //RELEASE RESOURCES
    //     console.log("YOU HIT THE FINALLY BLOCK");
    // }

    // try{
    //     const dividend = Number(window.prompt("Enter a dividend: "));
    //     const divisor = Number(window.prompt("Enter a divisor: "));

    //     if(isNaN(dividend) || isNaN(divisor)){
    //         throw new Error("inputs must be numbers");;
    //     }
    //     if(divisor == 0){
    //         throw new Error("divisor can't be 0");
    //     }

    //     const result = dividend / divisor;
    //     console.log(result);
    // }catch(error){
    //     console.error(error)
    // }

    // console.log("You reached the end");


/* WHAT IS DOM? */
    //DOM = Document Object Model
        //Object{} that represents the page you see in the web browser and provides an API for you to interact with.
        //Web browser constructs the DOM when it loads an HTML document,
        //and structures all the elements in a tree-like representation.
        //JavaScript can access the DOM to dynamically change the content, structure, and style of a web page.
    
    // let isLightMode = true;
    // //HTML for toggleButton: <button id="toggleButton" onclick="toggle()">Toggle: Dark Mode</button>
    // const toggleButton = document.getElementById("toggleButton");


    // /**
    //  * function to toggle color of webpage from light to dark.
    //  */
    // function toggle(){ 
    //     if(isLightMode){
    //         document.body.style.backgroundColor = "hsl(225, 6%, 13%)";
    //         toggleButton.textContent = "Toggle: Light Mode";
    //         isLightMode = false;
    //     }else{
    //         document.body.style.backgroundColor = "hsl(0, 0%, 100%)";
    //         toggleButton.textContent = "Toggle: Dark Mode";
    //         isLightMode = true;
    //     }
    // }


/* ELEMENT SELECTORS */
    //Element selectors = methods used to target and maniuplate HTML elements
    //                    They allow you to select one or more HTML elements from the DOM

    // 1. document.getElementById()          // ELEMENT OR NULL
    // 2. document.getElementsByClassName()  // HTML COLLECTION (is NOT an array)
    // 3. document.getElementsByTagName()    // HTML COLLECTION (is NOT an array)
    // 4. document.querySelector()           // ELEMENT OR NULL
    // 5. document.querySelectorAll()        // NODELIST

    // /*const myH1 = document.getElementById("myH1");
    // myH1.style.backgroundColor = "orange";
    // myH1.style.textAlign = "center";
    // console.log(myH1)
    // */

    // /*const fruits = document.getElementsByClassName("fruits"); 
    // for(let fruit of fruits){
    //      fruit.style.backgroundColor = "yellow";
    // }
    // console.log(fruits);

    // const fruitArray = Array.from(fruits); //HTML collections DON'T have a built-in forEach() method.
    // fruitArray.forEach(element => element.style.backgroundColor = "orange");
    // console.log(fruitArray);
    // */

    // /*const h4 = document.getElementsByTagName("h4");
    // const li = Array.from(document.getElementsByTagName("li"));
    // console.log(h4);

    // h4[0].style.color = "red";

    // for(let heading of h4){
    //     heading.style.backgroundColor = "yellow"
    // }

    // li.forEach(element =>{element.style.backgroundColor = "lightblue"})
    // */

    // /*const element1 = document.querySelector("li");
    // const element2 = document.querySelector(".test");
    // element1.style.backgroundColor = "yellow";
    // element2.style.backgroundColor = "lightblue";

    // console.log(element1);
    // console.log(element2);
    // */

    // /*const veggies = document.querySelectorAll("li");
    // console.log(veggies);
    // veggies.forEach(veggie => veggie.style.color = "purple");
    // */


/* DOM NAVIGATION */
    // DOM Navigation = The process of navigating through the structure of an HTML document using JavaScript.

    // .firstElementchild = returns first child element of the parent element
    // .lastElementChild = returns last child element of the parent element
    // .nextElementSibling = returns next element after the previous element AT THE SAME LEVEL.
    // .previousElementSibling
    // .parentElement
    // .children

    
    // /*firstElementChild
    // const ulElements = document.querySelectorAll("ul");
    
    // ulElements.forEach(ulElement => {
    //     const firstChild = ulElement.firstElementChild; 
    //     firstChild.style.backgroundColor = "lavender"})


    // ulElements.forEach(ulElement => {
    //     const lastChild = ulElement.lastElementChild; 
    //     lastChild.style.backgroundColor = "lime"})
    // */

    // /*lastElementChild
    // const element = document.getElementById("mango");
    // const nextSibling = element.nextElementSibling;

    // nextSibling.style.color = "red";
    // */

    // /*nextElementSibling
    // const element = document.getElementById("eggplant");
    // const prevSibling = element.previousElementSibling;

    // prevSibling.style.color = "blue";
    // */

    // /*parentElement
    // const element = document.getElementById("cake");
    // const parent = element.parentElement;
    // parent.style.backgroundColor = "yellow"
    // */

    // /*children
    // const parent = document.getElementById("desserts");
    // const children = Array.from(parent.children);
    // console.log(children);

    // children.forEach(dessert =>{
    //     dessert.style.color = "blue";
    // })
    // */


/* ADD & CHANGE HTML */
    // const newH1 = document.createElement("h1"); //STEP 1: CREATE NEW ELEMENT
// newH1.textContent = "Hello World" //STEP 2: ADD ATRIBUTES/PROPERTIES -> can be interchanged with step 3
// document.body.prepend(newH1)//STEP 3: APPEND ELEMENT TO DOM -> can be interchanged with step 2
// //append() = puts new element at the end of the parent
// //prepend() = puts new element at the start of the parent
// newH1.id = "myH1";
// newH1.style.color = "tomato";
// newH1.style.textAlign = "center";

// const box1 = document.getElementById("box1");
// box1.append(newH1);

// const boxes = document.querySelectorAll(".box")
// console.log(boxes.length);
// // document.body.insertBefore(newH1, boxes[1])

// //REMOVE HTML ELEMENT
// box1.removeChild(newH1); // can only be called on the direct parent of an element.

// const newItem = document.createElement("li")
// newItem.textContent = "Coconut";
// document.body.append(newItem);
// newItem.style.backgroundColor = "lightgreen";
// newItem.id = "coconut";
// document.getElementById("fruits").append(newItem);
// const fruits = document.querySelectorAll("#fruits li");
// console.log(newItem.id)


// let i = -1;
// function moveCoconut(){
//     i++;
//     while(i < 3){
//         document.getElementById("fruits").insertBefore(newItem, fruits[i]);
//         break;
//     }
//     if(i == 3){
//         document.getElementById("fruits").append(newItem)
//         i = -1;
//     }
// }

// setInterval(() => {moveCoconut()}, 300);


/* MOUSE EVENTS */
    //eventListener = Listen for specific events to create interactive webpages
    //                Events: click, mouseover, mouseout
    //                .addEventListener(event, callback)

    // const myBox = document.getElementById("myBox");



    // myBox.addEventListener("click", event => {
    //     event.target.style.backgroundColor = "tomato";
    //     event.target.textContent = "OUCH 🤕";

    // })

    // myBox.addEventListener("mouseover", event => {
    //     event.target.style.backgroundColor = "yellow";
    //     event.target.textContent = "DON'T DO IT! 🤕";

    // })

    // myBox.addEventListener("mouseout", event => {
    //     event.target.style.backgroundColor = "lightgreen";
    //     event.target.textContent = "Click Me 😃";

    // })


/* KEY EVENTS */
    //eventListener = Listen for specific events to create interactive webpages
    //                Events: keyup, keydown (is also "keypress", but no compatible with all web browsers)
    //                .addEventListener(event, callback)
    
    // const myBox = document.getElementById("myBox");
    // document.addEventListener("keydown", event =>{
    //     myBox.textContent = "🥳";
    //     myBox.style.backgroundColor = "lavender";
    // })

    // document.addEventListener("keyup", event =>{
    //     myBox.textContent = "😃";
    //     myBox.style.backgroundColor = "lightblue";
    // })

    // const moveAmount = 50;
    // let x = 0;
    // let y = 0;

    // document.addEventListener("keydown", event =>{
    //     event.preventDefault();// prevents events default method for occuring
    //     if(event.key.startsWith("Arrow")){
    //         switch(event.key){
    //             case "ArrowUp":
    //                 y -= moveAmount;
    //                 break;
    //             case "ArrowDown":
    //                 y += moveAmount;
    //                 break;
    //             case "ArrowLeft":
    //                 x -= moveAmount;
    //                 break;
    //             case "ArrowRight":
    //                 x += moveAmount;
    //                 break;
    //         }

    //         myBox.style.top = `${y}px`;
    //         myBox.style.left = `${x}px`;
    //     }
    // })


/* HIDE/SHOW HTML */
    // const myBtn = document.getElementById("myBtn");
    // const myImg = document.getElementById("myImg");

    // myBtn.addEventListener("click", event =>{
    //     if(myImg.style.visibility === "hidden"){
    //         myImg.style.visibility = "visible";
    //         myBtn.textContent = "Hide";
    //     }else{
    //         myImg.style.visibility = "hidden";
    //         myBtn.textContent = "Show";
    //     }
    // })


/* NODELISTS */
    //nodeList = Static collection of HTML elements (id, classm element)
    //           Created using querySelectorAll()
    //           Similar to an array, but no map(), filter() or reduce().
    //           NodeList won't update to automatically reflect changes.

    // let btns = document.querySelectorAll(".btns"); //MUST USE "let" otherwise you cannot reassign it
    // const newBtn = document.createElement("button");
    // newBtn.textContent = "Button 5"
    // newBtn.classList = "btns"
    // document.body.appendChild(newBtn);
    // btns = document.querySelectorAll(".btns");

    // console.log(btns);

    // btns.forEach(btn =>{
    //     btn.style.color = "white";
    // })

    // btns.forEach(btn =>{

    //     btn.addEventListener("mouseover", event =>{
    //         event.target.style.backgroundColor = "hsl(0, 100%, 77%)";
    //     })

    //     btn.addEventListener("mouseout", event =>{
    //         event.target.style.backgroundColor = "hsl(0, 100%, 87%)";
    //     })

    //     btn.addEventListener("click", event =>{
    //         event.target.remove();
    //         btns = document.querySelectorAll(".btns");
    //         console.log(btns);
    //     })
    // })


/* CLASSLISTS */
    //classList = Element property in JavaScript that is used to interact
    //             with an element's list of classes (CSS classes)
    //             Allows you to mkae reusable classes for many
    //             elementsacross your webpage

    //add()
    //remove()
    //toggle()
    //replace(oldClass, newClass)
    //contains()

    // const myBtn = document.getElementById("myBtn");
    // const myH1 = document.getElementById("myH1")

    // myH1.classList.add("enabled");
    // myBtn.classList.add("enabled");
    // // myBtn.classList.remove("enabled");

    // myH1.addEventListener("mouseover", event => {
    //     event.target.classList.toggle("hover");
    // })

    // myH1.addEventListener("mouseout", event => {
    //     event.target.classList.toggle("hover");
    // })

    // myH1.addEventListener("click", event => {
    //     if(event.target.classList.contains("disabled")){
    //         event.target.textContent += "🤕"
    //     }else{
    //         event.target.classList.replace("enabled", "disabled");
    //     }
    // })

    // myBtn.addEventListener("mouseover", event => {
    //     event.target.classList.toggle("hover");
    // })

    // myBtn.addEventListener("mouseout", event => {
    //     event.target.classList.toggle("hover");
    // })

    // myBtn.addEventListener("click", event => {
    //     if(event.target.classList.contains("disabled")){
    //         event.target.textContent += "🤕"
    //     }else{
    //         event.target.classList.replace("enabled", "disabled");
    //     }
    // })
    
    // console.log(myBtn.classList);


    // let btns = document.querySelectorAll(".btns");

    // btns.forEach(btn => {
    //     btn.classList.add("enabled");
    // })

    // btns.forEach(btn => {
    //     btn.addEventListener("mouseover", event => {
    //         event.target.classList.toggle("hover");
    //     })

    //     btn.addEventListener("mouseout", event => {
    //         event.target.classList.toggle("hover");
    //     })

    //     btn.addEventListener("click", event => {
    //         if (event.target.classList.contains("disabled")){
    //             event.target.textContent += "🤬"
    //         }else{
    //             event.target.classList.replace("enabled", "disabled");
    //         }
    //     })
    // })


/* CALLBACK HELL */
    //Callback Hell = Situation where callbacks are nested 
    //                within other callbacks to the degree 
    //                where the code is diffcult to read.

    //                Old pattern to handle asynchronous functions.
    //                Promises + Async/Await are now 
    //                used to avoid Callback Hell.

    // function task1(callback){
    //     setTimeout(() => {
    //         console.log("Task 1 complete");
    //         callback();
    //     }, 2000)
    // }

    // function task2(callback){
    //     setTimeout(() => {
    //         console.log("Task 2 complete");
    //         callback()
    //     }, 1000)
    // }

    // function task3(callback){
    //     setTimeout(() => {
    //         console.log("Task 3 complete");
    //         callback()
    //     }, 3000)
    // }

    // function task4(callback){
    //     setTimeout(() => {
    //         console.log("Task 4 complete");
    //         callback()
    //     }, 1500)
    // }

    // task1(() => {
    //     task2(() => {
    //         task3(() => {
    //             task4(() => {console.log("All tasks completed");}); //this can become a callback hell with more layers
    //         });
    //     });
    // });


/* PROMISES */
    //Promise = An Object that manages asyncronous operations.
    //          Wrap a Promise Object around asynchronous code
    //          "I promise to return a value."
    //          PENDING -> RESOLVED or REJECTED
    //          new Promise(resolve, reject) => {asynchronous code})

    // function walkDog(){
    //     return new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             const dogWalked = true;
    //             if(dogWalked){
    //                 resolve("I walked the dog 🐶");
    //             }else{
    //                 reject("You didn't walk the dog 🐶");
    //             }
    //         }, 1500);
    //     })
    // }

    // function cleanKitchen(){
    //     return new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             const kitchenCleaned = true; //if a Promise fails to resolve, the rest of the code is not carried out
    //             if(kitchenCleaned){
    //                 resolve("I cleaned the kitchen 🚮");
    //             }else{
    //                 reject("You didn't clean the kitchen ");
    //             }
    //         }, 2500);
    //     })
    // }

    // function takeOutTrash(){
    //     return new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             const trashTakenOut = true;
    //             if(trashTakenOut){
    //                 resolve("I took out the trash 🧹");
    //             }else{
    //                 reject("You didn't take out the trash 🧹");
    //             }
    //         }, 500);
    //     });

    // }

    // walkDog().then(value => {console.log(value); return cleanKitchen()}) //value represents the resolve from the Promise Object
    //          .then(value => {console.log(value); return takeOutTrash()})
    //          .then(value => {console.log(value); console.log("All chores completed. GO HAVE FUN!");})
    //          .catch(error => console.error(error)); //error represents the reject from the Promise Object


/* ASYNC/AWAIT */
    //ASYNC/AWAIT = Async: makes a function return a Promise
    //              Await: makes a function wait for a Promise
    //              Allows you to write asynchronous code in a synchronous manner.

    //              Async doesn't have tp resolve or reject parameters.
    //              Everything after Await is placed in an event queue.

    // function walkDog(){
    //     return new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             const dogWalked = true;
    //             if(dogWalked){
    //                 resolve("I walked the dog 🐶");
    //             }else{
    //                 reject("You didn't walk the dog 🐶");
    //             }
    //         }, 1500);
    //     })
    // }

    // function cleanKitchen(){
    //     return new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             const kitchenCleaned = false; //if a Promise fails to resolve, the rest of the code is not carried out
    //             if(kitchenCleaned){
    //                 resolve("I cleaned the kitchen 🚮");
    //             }else{
    //                 reject("You didn't clean the kitchen ");
    //             }
    //         }, 2500);
    //     })
    // }

    // function takeOutTrash(){
    //     return new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             const trashTakenOut = true;
    //             if(trashTakenOut){
    //                 resolve("I took out the trash 🧹");
    //             }else{
    //                 reject("You didn't take out the trash 🧹");
    //             }
    //         }, 500);
    //     });

    // }

    // walkDog().then(value => {console.log(value); return cleanKitchen()}) //value represents the resolve from the Promise Object
    //          .then(value => {console.log(value); return takeOutTrash()})
    //          .then(value => {console.log(value); console.log("All chores completed. GO HAVE FUN!");})
    //          .catch(error => console.error(error)); //error represents the reject from the Promise Object
    
    //INSTEAD OF THE ABOVE, DO THE BELOW

    // async function doChores(){
    //     try{
    //         const walkDogResult = await walkDog();
    //         console.log(walkDogResult);
    //         const cleanKitchenResult = await cleanKitchen();
    //         console.log(cleanKitchenResult);
    //         const takeOutTrashResult = await takeOutTrash();
    //         console.log(takeOutTrashResult);
            
    //         console.log("All chores completed. GO HAVE FUN!");
    //     }catch(error){
    //         console.error(error);
    //     }
    // }
    // doChores();


/* JSON FILES */
    //JSON = (JavaScript Object Notation) data-interchange format
    //       Used for exchanging data b/w a server and a web application.
    //       JSON files {key:value} OR [{}, {}, {}]  

    //       JSON.stringify = converts JS Object to a JSON string.
    //       JSON.parse = converse a JSON string to a JS Object.

    // const jsonNames = `["Spongebob", "Patrick", "Squidward", "Sandy"]`;
    // const jsonPerson = `{
    //     "name": "Spongebob",
    //     "age": 27,
    //     "isEmployed": true,
    //     "hobbies": ["Jellyfishing", "Bubble-blowing", "Karate"]
    // }`;

    // const jsonPeople = `[{
    //     "name": "Spongebob",
    //     "age": 27,
    //     "isEmployed": true
    // },
    // {
    //     "name": "Patrick",
    //     "age": 30,
    //     "isEmployed": false
    // },
    // {
    //     "name": "Squidward",
    //     "age": 40,
    //     "isEmployed": true
    // },
    // {
    //     "name": "Sandy",
    //     "age": 28,
    //     "isEmployed": false
    // }
    // ]`;
    // // const jsonString = JSON.stringify(names);
    // // const jsonPerson = JSON.stringify(person);
    // // const jsonPeople = JSON.stringify(people);

    // // const parsedNames = JSON.parse(jsonNames);
    // // const parsedNames = JSON.parse(jsonNames);
    // // const parsedPerson = JSON.parse(jsonPerson);
    // // const parsedPeople = JSON.parse(jsonPeople);
    
    // // console.log(parsedNames);
    // // console.log(parsedPerson);
    // // console.log(parsedPeople);

    // // fetch("person.json").then(response => response.json()).then(value => console.log(value))
    // // fetch("names.json").then(response => response.json()).then(value => console.log(value))
    // fetch("people.json").then(response => response.json())
    //                     .then( values => values.forEach(value => {console.log(value.name)}))
    //                     .catch(error => console.error(`THIS IS YOUR ERROR: ${error}`));


/* FETCH DATA FROM AN API */ 
    //fetch() = A function used for making HTTP requests to fetch resources.
    //          (JSON style data, images, files).
    //          Simplifies asynchronous data fetching in JavaScript
    //          used for interacting with APIs to retrieve and send
    //          data asynchronously over the web
    //          fetch(url, {options}) 
    // /*(options not covered in this video
    //                                  but methods like:
    //                                    {method: "GET"} -> gets data (is implicit when you call fetch()).
    //                                    {method: "POST"} -> sends data
    //                                    {method: "PUT"} -> replaces data
    //                                    {method: "DELETE"} -> deletes data
                                       
    // */

    //API data on Snivy (valid pokemon)
    // fetch("https://pokeapi.co/api/v2/pokemon/snivy")
    // .then(response => {
    //     if(!response.ok){
    //         throw new Error("Error 404: resource not found 🤕"); //status code of 200 - means its ok.
    //     }
    //     return response.json()
    // })
    // .then(data => console.log(data.name)) 
    // .catch(error => console.error(error));
    
    //API data on Snivy (invalid pokemon)
    // fetch("https://pokeapi.co/api/v2/pokemon/appa")
    // .then(response => {
    //     if(!response.ok){
    //         throw new Error("Error 404: resource not found 🤕");
    //     }
    //     return response.json()
    // })
    // .then(data => console.log(data)) //status code of 404 - means it's NOT ok.
    // .catch(error => console.error(error));

    // const pokemonSprite = document.getElementById("pokemonSprite");
    // document.addEventListener("keydown", event => {
    //     if(event.key == "Enter"){
    //         document.getElementById("fetchBtn").click();
    //     }
    // });
    
    // async function fetchData(){
    //     try{
    //         const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
    //         const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    //         if(!response.ok){
    //             throw new Error("Can't locate resource")
    //         }

    //         const pokeData = await response.json();
    //         const spriteImg = pokeData.sprites.front_default;
    //         pokemonSprite.src = spriteImg;
    //         pokemonSprite.alt = `Image of ${pokemonName}`;
    //         pokemonSprite.style.display = "block";
    //     }catch(error){
    //         pokemonSprite.src = `NO IMAGE TO DISPLAY`;
    //         pokemonSprite.alt = `Image not found`;
    //         pokemonSprite.style.display = "block";
    //         console.error(error);
    //     }
    // };



    
/*YOU FINISHED! CONGRATS!!! GO FORTH, AND CREATE INTERACTIVE WEBSITES!!!*/