/*
     ██╗███████╗     ██████╗██╗  ██╗███████╗ █████╗ ████████╗    ███████╗██╗  ██╗███████╗███████╗████████╗
     ██║██╔════╝    ██╔════╝██║  ██║██╔════╝██╔══██╗╚══██╔══╝    ██╔════╝██║  ██║██╔════╝██╔════╝╚══██╔══╝
     ██║███████╗    ██║     ███████║█████╗  ███████║   ██║       ███████╗███████║█████╗  █████╗     ██║   
██   ██║╚════██║    ██║     ██╔══██║██╔══╝  ██╔══██║   ██║       ╚════██║██╔══██║██╔══╝  ██╔══╝     ██║   
╚█████╔╝███████║    ╚██████╗██║  ██║███████╗██║  ██║   ██║       ███████║██║  ██║███████╗███████╗   ██║   
 ╚════╝ ╚══════╝     ╚═════╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝   ╚═╝       ╚══════╝╚═╝  ╚═╝╚══════╝╚══════╝   ╚═╝                                                                                                                                                                                                                                                                                        
*/

// 📌 Comments ██████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████//
// In JS you can comment out a line using '//'

// Or comment out multiple lines using the same as CSS

/* 
All of the content within 
here is commented out!
*/

// Use comments as labels and/or headers
// Use comments to explain code
// Use comments to turn off lines or blocks of code

// 📌 Variables █████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████//

// Variables are how you can store data. Like putting a bunch of items in a container to store it. We can store any kind of data in a variable.
// In the CSS course we learned how to store property values in a variable. This is the same. 

/*
1. **Scope**:
   - **`var`**: Function-scoped. Variables declared with `var` are accessible throughout the function in which they are defined.
   - **`let`** and **`const`**: Block-scoped. They are only accessible within the block (e.g., loops, if statements) where they are declared, enhancing encapsulation and reducing unintended side effects.

2. **Redeclaration**:
   - **`var`**: Allows redeclaration within the same scope, which can lead to potential bugs.
   - **`let`**: Prevents redeclaration in the same block, promoting code safety.
   - **`const`**: Variables cannot be reassigned once declared, enforcing immutability.

3. **Hoisting**:
   - **`var`**, **`let`**, and **`const`**: All support hoisting, but `let` and `const` have more restrictive hoisting rules due to their block scoping, leading to runtime errors if accessed before declaration.

4. **Initialization**:
   - **`var`** and **`let`**: Can be declared without initialization.
   - **`const`**: Must be initialized at declaration since its value cannot change.

5. **Mutability**:
   - **`const`**: Enforces immutability, useful for constants and configuration settings.
   - **`let`**: Allows reassignment but not red declaration in the same scope.

6. **Compatibility and Best Practices**:
   - **`var`**: More universally supported in older environments but less recommended due to potential issues with scoping and redeclaration.
   - **`let`** and **`const`**: Encourage better practices by providing clearer scoping and immutability, making code more reliable and easier to debug.
*/

// Variables have to start with a letter
// Variables can contain letters numbers and underscores

// When naming a variable use either:
// Underscore case like this: variable_name
// Camel case like this: variableName

// global object
globalObject = 'The contents here is now a global object';

// var - Variable - Function Scope - Redeclareable ✅ - Reassignable ✅
var $name = 'Anthony Maximus';

// const - Constant Variable - Block scope - Redeclarable ❌ - Reassignable ❌
const insta = 'https://www.instagram.com/professor_maximusxo';

// let - Let Variable - Block scope - Redeclarable ❌ - Reassignable ✅
let youtube = 'https://www.youtube.com/@professormaximus9556';

var website = 'https://anthonymaximus.com';

// Declare an undefined variable
let birthday; //undefined

// Declare a null variable
let phone_number = null; //null

// Declare a variable array
let car_list = ['Genesis', 'BMW', 'Saab', 'Honda'];


// You may also see it written like this
let list = [
    'item1',
    'item2',
    'item3'
];

// We can insert an html element into a variable
const boxvariable = document.getElementById('var-box');

// Add some margin on the box
boxvariable.style.margin = '20px';

// Look in the console and you will see the box in there
console.log(boxvariable);

// Object Literal
let car = {
    Make: 'Acura',
    model: 'NSX'
};

// 📌  Output ████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████//
// We can output data in various ways 

// Window Alert
// Displays an alert popup window
document.getElementById('alert_butt').addEventListener('click', ()=> {
    window.alert('😳🚨 Oh Ohh... WINDOW ALERT!!! 🚨😳'); //if you scope this out side of the click event, the alert window would happen on page load, Annoying!
});

// Console Logs
// Outputs data to the developer tools console
console.log($name, insta, youtube, website);
console.log(car_list);

// InnerHTML
// Outputs data to the HTML with tags if you want to use them
let html_output_text = '<p>👀 This is a p tag and some text within, inserted into the HTML using innerHTML 👀</p>';
document.getElementById('innerhtml_example').innerHTML = html_output_text;

// InnerText
// Outputs text into an element
let text_output_text = '📝 This is plain text inserted into an HTML element using innerText 📝';
document.getElementById('innertext_example').innerText = text_output_text;

// Document Write
// Rewrites all the HTML
function document_write() {
    document.write('<h1>😝 This is the contents of the document write, your page is now GONE! 😝</h1>');
}

// Window Print
// Prints the page
// Use on a button: window.print()

// 📌 Objects ███████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████//

/* 
When it comes to JS usage for front end development, we generally want to target things and do something with them.

if:
HTML is structure, objects on the screen and content. Like a car
CSS is the design, the color of the car, the look of the car
JS is the mecanics of how things are going to move and function, the mecanics of how the car operates. 

There are various built in variable objects in JS. We dont need to cover them all but some are:

The window object (the browser window)
The document (the document IE the html file)
*/

// Examples:
// document
// window

// 📌 Methods ███████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████//
// After you target an object, you will have to target a thing on it. Like an element in the HTML element. For example get an element by its id attribute. This is known as a method.

// Example:
document.getElementById('someId1'); //Here we target an element with the ID of 'someId1' but we didnt do anything to it. 

// After we target an object and then target an element in the object, we want to do something to it.

// Example:
document.getElementById('someId2').style.backgroundColor = 'blue'; //Here we targeted an element with the ID of 'someId2' and then changed the border on it.

// Example of syntax flow:
// Object .method() .property = value

// See a list of methods on the /methods.html


// 📌 Dom Manipulation ██████████████████████████████████████████████████████████████████████████████████████████████████████████████████//

// Selecting things
// As stated in the section above, we want to select things and do something to them. We can use (not limited to):
// getElementById() - Target an element by an ID attribute name
// querySelector() - Target an element by a class name
// querySelectorAll() - Target multiple elements by class names

// You can manipulate the DOM using JS. Below we select an element with the id of 'box1' and change its backgroundColor to 'red'
document.getElementById('box1').style.backgroundColor = 'red';

// This can be used in conjunction with CSS to make it animate using transform property on CSS side. The element with the id of 'box2' has the transition property on it in the CSS
// Considerations: in this case it will animate automatically on page load because there is no event handling on it
document.getElementById('box2').style.width = '97%';


// 📌 Functions █████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████//
// A function is a block of code that does a particular thing, it can be executed in various ways, like when an event listener detects you clicked on an element

function functionName() {
    //The code for the function goes in here
}

// You might be wondering what the () are for. You can put parameters in there if you need to.

function function_with_parameters(length, height, width) {
    let plength = 20;
    let pheight = 30;
    let pwidth = 45;
}

// This function is triggered on a button press because in the HTML, on the element that triggers it, there is an onclick attribute. (this is the older way of doing this, the better way would be to use an event listener).
// If you declare a variable in a function, it will be scoped to that function.
function run_math() {
    // Because the variable below is in this function, it will only be available within.
    let x = 1+1;
    // Therefore, if we want to output the sum, in this case into a selector that we query with the class of 'math-box' which is in the document.
    document.querySelector('.math-box').innerText = x;
}

// Not out here
//console.log(x); //this will return an error because it is outside the confines of the function above.


// 📌 Event Handling ████████████████████████████████████████████████████████████████████████████████████████████████████████████████████//
// Similar to CSS pseudo class events, JS can do things in the case of an event. We can tell any element to run some JS when interacted with. JS event handling is more robust.
// There are many events, not limited to:

// Mouse Events //
// onclick - The user clicks an HTML element
// ondblclick - The user double clicks an HTML element
// onmouseover - The user moves the mouse over an HTML element
// onmouseenter - The user enters the mouse over an element
// onmouseout - The user moves the mouse away from an HTML element - event triggers when the mouse pointer leaves any child elements as well the selected element.
// onmouseleave - The user moves the mouse away from an HTML element - event is only triggered when the mouse pointer leaves the selected element.

// Key Events //
// onkeydown - The user pushes a keyboard key
// onload - The browser has finished loading the page

// Some examples below 👇🏾

// #box3
// In this case, this function will only happen when we actually interact with the targeted element, in this case click
function box_click() {
    document.getElementById('box3').style.width = '97%';
}

// #box4
// In this case, this function will only happen when we actually interact with the targeted element, in this case dblclick
function box_double_click() {
    document.getElementById('box4').style.width = '97%';
}

// #box5
// In this case the event will happen when the mouse moves over the box
function box_mouseover() {
    document.getElementById('box5').style.width = '97%';
    document.getElementById('box5').style.backgroundColor = 'skyblue';
}

// #box6
// In this case the event will happen when the mouse enters the element
function box_mouseenter() {
    document.getElementById('box6').style.width = '97%';
    document.getElementById('box6').style.backgroundColor = 'skyblue';
}

function box_return() {
    document.getElementById('box6').style.width = '200px';
    document.getElementById('box6').style.backgroundColor = '#fff';
}

// box7
// In this case the event will trigger when the mouse leaves the element
function box_mouseleave() {
    document.getElementById('box7').style.width = '97%';
}

// box8
// In this case the event is on mousedown (when the button is clicked)
function box_mousedown() {
    document.getElementById('box8').style.transform = 'scale(2) rotate(300deg)';
    document.getElementById('box8').style.backgroundColor = 'red';
}

function box_mouseup() {
    document.getElementById('box8').style.transform = 'scale(1) rotate(0deg)';
    document.getElementById('box8').style.backgroundColor = '#fff';
}

//box9
// The right way to do event listening. In the above cases, we used a very basic way to handle events, this was so that you can grasp the over all concept it at a bare bones level. Now that you understand it, below is the proper way to do it!
// In this case the event will trigger when the user pushes a keyboard key we will also insert the element into a variable. Lets walk through it...

// Below we will insert the html element with the id of 'keydownexample' into a variable, it will be easier to work with that way.
let key_down_example = document.getElementById('keydownexample');

key_down_example.addEventListener('keydown', ()=> {
    key_down_example.style.backgroundColor = 'skyblue';
    key_down_example.style.transform = 'scale(2) translate(35px, 0px)';
});

// Compare the example we just looked at to the ones above. See the difference? Putting the element in a variable makes it easier to work with.
// No need to type document.getElementById('keydownexample') over and over!


//box10
// A more efficient way of handling events is the example below using addEventListener. This keeps the HTML cleaner because it eliminates the need to use an attribute to call a function.

// Insert the element into a variable
const box10 = document.getElementById('box10');
// Add the event listener when it is clicked and run the function within
box10.addEventListener('click', function() {
    //Style the element
    box10.style.backgroundColor = 'red';
});
   
// It could also look like this, using an *arrow function* '()=>' this is the superior method
box10.addEventListener('dblclick', ()=> {
    box10.style.backgroundColor = "#fff";
});

// As you can see, the above example is much more efficient and faster to code. This same principle exists in many ways. Basically any time you need to handle events, it is better to use an event listener.