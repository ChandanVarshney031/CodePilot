require('dotenv').config();
const mongoose = require('mongoose');
const Course = require('./backend/models/Course');

mongoose.connect(process.env.MONGODB_URI)
.then(async () => {
    console.log('DB Connected for updating Tabbed Web Dev');

    const webNotes = [
        `## **HTML**

### **What is HTML**
HTML (HyperText Markup Language) is the standard markup language used to create and design websites and web applications. It describes the structure of a web page using markup.
\`\`\`html
<h1>Welcome to HTML!</h1>
<p>This is a markup language.</p>
\`\`\`

### **index.html**
The \`index.html\` file is typically the default or homepage of a website. When a user visits a directory on a web server, the server looks for this file to display first.
\`\`\`html
<!-- Linking back to the homepage -->
<a href="index.html">Go Home</a>
\`\`\`

### **HTML Basic Structure**
\`\`\`html
<!DOCTYPE html>
<html>
<head>
  <title>Page Title</title>
</head>
<body>
  <h1>My First Heading</h1>
  <p>My first paragraph.</p>
</body>
</html>
\`\`\`

### **Comments**
Comments in HTML are not displayed in the browser. They help document your source code.
\`\`\`html
<!-- This is a comment -->
\`\`\`

### **HTML is Not Case Sensitive**
HTML tags are not case sensitive: \`<P>\` means the same as \`<p>\`. However, it is standard practice and highly recommended to use lowercase.
\`\`\`html
<P>Uppercase tag</P>
<p>Lowercase tag (Recommended)</p>
\`\`\`

### **HTML Attributes**
Attributes provide additional information about HTML elements. They are always specified in the start tag and usually come in name/value pairs like \`name="value"\`.
\`\`\`html
<input type="text" placeholder="Enter name" required>
\`\`\`

### **Heading Tag**
Headings are defined with the \`<h1>\` to \`<h6>\` tags. \`<h1>\` defines the most important heading, and \`<h6>\` the least.
\`\`\`html
<h1>Heading 1</h1>
<h2>Heading 2</h2>
\`\`\`

### **Paragraph Tag**
The \`<p>\` tag defines a paragraph. Browsers automatically add an empty line before and after a paragraph.
\`\`\`html
<p>This is a paragraph.</p>
\`\`\`

### **Anchor Tag**
The \`<a>\` tag defines a hyperlink. The \`href\` attribute specifies the URL.
\`\`\`html
<a href="https://example.com">Visit Example</a>
\`\`\`

### **Image Tag**
The \`<img>\` tag is used to embed an image. It is empty, meaning it contains attributes only. \`src\` and \`alt\` are required.
\`\`\`html
<img src="image.jpg" alt="Description">
\`\`\`

### **br Tag**
The \`<br>\` tag inserts a single line break. It is an empty tag with no end tag.
\`\`\`html
<p>First line<br>Second line</p>
\`\`\`

### **Bold, Italic and Underline Tag**
- \`<b>\` or \`<strong>\` for bold text.
- \`<i>\` or \`<em>\` for italic text.
- \`<u>\` for underlined text.
\`\`\`html
<b>Bold</b>, <i>Italic</i>, <u>Underline</u>
\`\`\`

### **Big and Small Tag**
- \`<big>\` defines bigger text (deprecated in HTML5).
- \`<small>\` defines smaller text.
\`\`\`html
<small>Small text</small>
\`\`\`

### **hr Tag**
The \`<hr>\` tag defines a thematic break, displayed as a horizontal rule.
\`\`\`html
<hr>
\`\`\`

### **Subscript and Superscript Tag**
- \`<sub>\` defines subscript text.
- \`<sup>\` defines superscript text.
\`\`\`html
<p>H<sub>2</sub>O and E=mc<sup>2</sup></p>
\`\`\`

### **pre Tag**
The \`<pre>\` tag defines preformatted text. It preserves both spaces and line breaks.
\`\`\`html
<pre>
Line 1
  Line 2
</pre>
\`\`\`

### **Page Layout Techniques**
Layouts can be created using semantic HTML5 elements like \`<header>\`, \`<nav>\`, \`<main>\`, \`<section>\`, \`<article>\`, \`<aside>\`, and \`<footer>\`.
\`\`\`html
<header>Site Logo</header>
<main>Main Content</main>
<footer>Copyright Info</footer>
\`\`\`

### **section Tag**
The \`<section>\` tag defines a thematic grouping of content, typically with a heading.
\`\`\`html
<section>
  <h2>Latest News</h2>
  <p>Breaking news updates.</p>
</section>
\`\`\`

### **article Tag**
The \`<article>\` tag specifies independent, self-contained content.
\`\`\`html
<article>
  <h2>Blog Post Title</h2>
  <p>Article content goes here...</p>
</article>
\`\`\`

### **aside Tag**
The \`<aside>\` tag defines content aside from the page content (e.g., a sidebar).
\`\`\`html
<aside>
  <h4>Related Links</h4>
  <a href="#">Link 1</a>
</aside>
\`\`\`

### **div Tag**
The \`<div>\` tag is a block-level container used to group other HTML elements, often for styling with CSS.
\`\`\`html
<div class="container">
  <p>Grouped content.</p>
</div>
\`\`\`

### **Block and Inline Element**
- **Block elements** start on a new line and take up full width (e.g., \`<div>\`, \`<p>\`, \`<h1>\`).
- **Inline elements** do not start on a new line and only take up necessary width (e.g., \`<span>\`, \`<a>\`, \`<img>\`).
\`\`\`html
<div>Block Element (takes full line)</div>
<span>Inline Element</span> <span>(stays on same line)</span>
\`\`\`

### **span Tag**
The \`<span>\` tag is an inline container used to mark up a part of a text or document.
\`\`\`html
<p>My mother has <span style="color:blue">blue</span> eyes.</p>
\`\`\`

### **Unordered and Ordered Lists in HTML**
- Unordered list (\`<ul>\`) uses bullet points.
- Ordered list (\`<ol>\`) uses numbers or letters.
\`\`\`html
<ul>
  <li>Item 1</li>
</ul>
<ol>
  <li>Item A</li>
</ol>
\`\`\`

### **Tables in HTML (Including Caption, thead, tbody, colspan)**
Tables are defined with \`<table>\`. Rows use \`<tr>\`, headers use \`<th>\`, and data cells use \`<td>\`.
The \`<caption>\` adds a title, \`<thead>\` groups headers, \`<tbody>\` groups data, and \`colspan\` merges columns.
\`\`\`html
<table border="1">
  <caption>Student Grades</caption>
  <thead>
    <tr>
      <th>Name</th>
      <th>Grade</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Alice</td>
      <td>A</td>
    </tr>
    <tr>
      <!-- Colspan example -->
      <td colspan="2">No more students</td>
    </tr>
  </tbody>
</table>
\`\`\`

### **Form in HTML (Including Action, Labels, Checkbox, Select)**
The \`<form>\` tag creates a form. \`action\` defines where data is sent. \`<label>\` helps accessibility.
\`\`\`html
<form action="/submit-form">
  <label for="username">Name:</label>
  <input type="text" id="username" name="user_name">

  <input type="checkbox" id="subscribe" name="newsletter">
  <label for="subscribe">Subscribe?</label>

  <select name="gender">
    <option value="male">Male</option>
    <option value="female">Female</option>
  </select>

  <button type="submit">Submit</button>
</form>
\`\`\`

### **Class and ID**
- \`class\`: Specifies one or more class names for an element (can be used multiple times).
- \`id\`: Specifies a unique ID for an element.
\`\`\`html
<p id="unique-paragraph" class="text-bold highlight">Styled paragraph</p>
\`\`\`

### **Textarea**
The \`<textarea>\` tag defines a multi-line text input control.
\`\`\`html
<textarea rows="4" cols="50" placeholder="Write a message..."></textarea>
\`\`\`

### **iframe Tag**
The \`<iframe>\` tag specifies an inline frame to embed another document.
\`\`\`html
<iframe src="https://example.com" width="500" height="200"></iframe>
\`\`\`

### **Video Tag**
The \`<video>\` tag is used to embed video content.
\`\`\`html
<video controls width="400">
  <source src="movie.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>
\`\`\``,
        `## **CSS**

### **What is CSS**
CSS (Cascading Style Sheets) is used to style and layout web pages. It dictates how HTML elements should be displayed on screen, paper, or in other media.
\`\`\`css
/* Example CSS Document */
body {
  font-family: sans-serif;
}
\`\`\`

### **Basic Syntax**
A CSS rule consists of a selector and a declaration block.
\`\`\`css
selector {
  property: value;
}
\`\`\`

### **Inline Tag (Style Attribute)**
Inline styles are applied directly to an HTML element using the \`style\` attribute.
\`\`\`html
<h1 style="color: blue;">Hello World</h1>
\`\`\`

### **Style Tag**
The \`<style>\` tag is used to define internal CSS within the \`<head>\` section of an HTML document.
\`\`\`html
<style>
  body { background-color: linen; }
</style>
\`\`\`

### **Color Property**
The \`color\` property sets the text color of an element.
\`\`\`css
p { color: red; }
\`\`\`

### **Background Color Property**
The \`background-color\` property sets the background color of an element.
\`\`\`css
div { background-color: lightblue; }
\`\`\`

### **RGB and Hexadecimal Color Systems**
- **Hexadecimal:** A 6-digit code representing Red, Green, and Blue (e.g., \`#FF0000\` for red).
- **RGB:** Defines color using \`rgb(red, green, blue)\` values from 0 to 255.
\`\`\`css
h1 { color: #00ff00; }
p { color: rgb(0, 0, 255); }
\`\`\`

### **Selectors**
Selectors are used to "find" (or select) the HTML elements you want to style.
- **Universal Selector (\`*\`):** Selects all elements. \`* { margin: 0; }\`
- **Element Selector:** Selects elements based on the element name. \`p { color: blue; }\`
- **Class Selector (\`.\`):** Selects elements with a specific class. \`.highlight { color: yellow; }\`
- **ID Selector (\`#\`):** Selects a single unique element. \`#header { font-size: 24px; }\`

### **Text Properties**
- **\`text-align\`:** Aligns text (left, right, center, justify).
- **\`text-decoration\`:** Adds/removes decorations (underline, none).
- **\`font-weight\`:** Sets the thickness of the font (bold, normal).
- **\`font-family\`:** Specifies the font for text.
\`\`\`css
h1 {
  text-align: center;
  text-decoration: underline;
  font-weight: bold;
  font-family: Arial, sans-serif;
}
\`\`\`

### **Absolute Units in CSS (Pixels)**
Pixels (\`px\`) are fixed-size units that do not scale relative to other elements.
\`\`\`css
div { width: 300px; }
\`\`\`

### **Relative Units in CSS (%, em, rem)**
- **\`%\`**: Relative to the parent element.
- **\`em\`**: Relative to the font-size of the element.
- **\`rem\`**: Relative to the font-size of the root element (\`<html>\`).
\`\`\`css
.container { width: 50%; }
.text-em { font-size: 2em; }
.text-rem { font-size: 1.5rem; }
\`\`\`

### **Line Height**
The \`line-height\` property specifies the vertical space between lines of text.
\`\`\`css
p { line-height: 1.5; }
\`\`\`

### **Text Transform**
The \`text-transform\` property controls the capitalization of text (uppercase, lowercase, capitalize).
\`\`\`css
p { text-transform: uppercase; }
\`\`\`

### **Box Model in CSS**
Every element is a rectangular box consisting of:
- **Width/Height**: The actual content area.
- **Padding**: Transparent area around the content.
- **Border**: A line that goes around the padding and content.
- **Margin**: Transparent area outside the border.
\`\`\`css
div {
  width: 300px;
  height: 200px;
  padding: 10px;
  border: 1px solid black;
  margin: 20px;
}
\`\`\`

### **Display Property**
- **\`inline\`**: Element takes up only necessary width, no line breaks (e.g., \`<span>\`). Width/height cannot be set.
- **\`block\`**: Element takes full width, starts on a new line (e.g., \`<div>\`).
- **\`inline-block\`**: Like inline, but allows setting width and height.
- **\`none\`**: Completely removes the element from the document layout.
\`\`\`css
.block-box { display: block; }
.inline-box { display: inline; }
.hidden-box { display: none; }
\`\`\`

### **Visibility**
The \`visibility\` property specifies whether an element is visible or hidden. \`visibility: hidden;\` hides the element but it still takes up space (unlike \`display: none;\`).
\`\`\`css
.invisible { visibility: hidden; }
\`\`\`

### **Alpha Channel (Opacity 0 to 1)**
The \`opacity\` property sets the transparency level, from \`0.0\` (fully transparent) to \`1.0\` (fully opaque).
\`\`\`css
div { opacity: 0.5; }
\`\`\`

### **Position**
- **\`static\`**: Default. Not positioned in any special way.
- **\`relative\`**: Positioned relative to its normal position.
- **\`absolute\`**: Positioned relative to its closest positioned ancestor.
- **\`fixed\`**: Positioned relative to the viewport (stays fixed on scroll).
- **\`sticky\`**: Toggles between relative and fixed depending on scroll position.
\`\`\`css
.absolute-box {
  position: absolute;
  top: 50px;
  left: 100px;
}
\`\`\`

### **Z-Index**
The \`z-index\` property specifies the stack order of an element (which element should be placed in front of, or behind, the others).
\`\`\`css
div { z-index: 10; }
\`\`\`

### **Background Image & Size**
- **\`background-image\`**: Sets an image as the background.
- **\`background-size\`**: Specifies the size of the background image (e.g., \`cover\`, \`contain\`).
\`\`\`css
body {
  background-image: url('bg.jpg');
  background-size: cover;
}
\`\`\`

### **Flexbox Layout & Model**
Flexbox makes it easy to design a flexible, responsive layout structure without using floats or positioning.
The model consists of a **Flex Container** (the parent) and **Flex Items** (the children).
\`\`\`css
.flex-container {
  display: flex;
}
\`\`\`

### **Flexbox Direction**
The \`flex-direction\` property defines the direction flex items are placed in the container.
- \`row\` (default), \`row-reverse\`, \`column\`, \`column-reverse\`.
\`\`\`css
.vertical-layout {
  display: flex;
  flex-direction: column;
}
\`\`\`

### **Properties for Flex Container**
- **\`justify-content\`**: Aligns items horizontally (e.g., \`center\`, \`space-between\`).
- **\`flex-wrap\`**: Specifies whether the items should wrap or not (\`nowrap\`, \`wrap\`).
- **\`align-items\`**: Aligns items vertically (\`center\`, \`stretch\`).
- **\`align-content\`**: Modifies the behavior of \`flex-wrap\`, aligning flex lines.
\`\`\`css
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}
\`\`\`

### **Properties for Flex Item**
- **\`align-self\`**: Overrides the container's \`align-items\` property for a single item.
- **\`flex-grow\`**: Specifies how much an item will grow relative to others.
- **\`flex-shrink\`**: Specifies how much an item will shrink relative to others.
\`\`\`css
.item {
  flex-grow: 1;
  align-self: flex-end;
}
\`\`\`

### **Media Queries**
Media queries allow you to apply CSS styles depending on the device's screen size or features.
\`\`\`css
@media (max-width: 600px) {
  body { background-color: lightblue; }
}
\`\`\`

### **Transitions**
Transitions allow you to change property values smoothly over a given duration.
- **\`transition-property\`**: The CSS property to transition (e.g., \`width\`, \`background-color\`).
- **\`transition-duration\`**: How long the transition takes.
- **\`transition-timing-function\`**: The speed curve (\`ease\`, \`linear\`).
- **\`transition-delay\`**: Delay before the transition starts.
- **\`transition\` (shorthand)**: Combines all the above.
\`\`\`css
div {
  transition: width 2s ease-in-out 0.5s;
}
\`\`\`

### **CSS Transform**
The \`transform\` property allows you to visually manipulate elements.
- **\`rotate(deg)\`**: Rotates the element.
- **\`scale(x, y)\`**: Scales the element larger or smaller.
- **\`translate(x, y)\`**: Moves the element from its current position.
- **\`skew(deg, deg)\`**: Skews the element along the X and Y axes.
\`\`\`css
div { transform: rotate(45deg) scale(1.5) translate(50px, 100px); }
\`\`\`

### **Animation Properties**
Animations allow an element to gradually change from one style to another.
- **\`animation-name\`**: Name of the \`@keyframes\` to bind to the selector.
- **\`animation-duration\`**: How long the animation takes to complete.
- **\`animation-timing-function\`**: The speed curve of the animation.
- **\`animation-delay\`**: Delay before the animation starts.
- **\`animation-iteration-count\`**: Number of times the animation should run (e.g., \`infinite\`).
- **\`animation-direction\`**: Whether the animation should play forwards, backwards, or alternate.
\`\`\`css
.animated-box {
  animation-name: slide;
  animation-duration: 2s;
  animation-iteration-count: infinite;
}
\`\`\`

### **Animation Shorthand**
The \`animation\` property combines all animation properties into one line.
\`\`\`css
div {
  animation: mymove 5s linear 2s infinite alternate;
}
\`\`\`

### **% in Animation (@keyframes)**
Keyframes define the styles at different stages of the animation using percentages (0% is start, 100% is end).
\`\`\`css
@keyframes example {
  0%   { background-color: red; }
  50%  { background-color: yellow; }
  100% { background-color: green; }
}
\`\`\``,
        `## **JavaScript**

### **What is JavaScript**
JavaScript is a high-level, dynamic, and interpreted programming language primarily used to create interactive and dynamic content on web pages.
\`\`\`javascript
// Example
document.body.innerHTML = "<h1>Hello JavaScript!</h1>";
\`\`\`

### **console.log**
\`console.log()\` is a built-in function used to print output to the web console, heavily used for debugging.
\`\`\`javascript
console.log("Hello, World!");
\`\`\`

### **Variable Rules**
- Variable names can contain letters, digits, underscores, and dollar signs.
- They must begin with a letter, \`$\`, or \`_\`.
- They are case sensitive (\`y\` and \`Y\` are different variables).
- Reserved words (like JavaScript keywords) cannot be used as names.
\`\`\`javascript
let $my_var1 = "Valid";
\`\`\`

### **let, const, and var**
- \`var\`: Function-scoped, can be re-declared and updated (legacy).
- \`let\`: Block-scoped, can be updated but not re-declared.
- \`const\`: Block-scoped, cannot be updated or re-declared.
\`\`\`javascript
var name = "Alice";
let age = 25;
const PI = 3.14159;
\`\`\`

### **Data Types**
Primitive Data Types include: String, Number, Boolean, Undefined, Null, Symbol, and BigInt. Non-Primitive: Object, Array.
\`\`\`javascript
let str = "Hello";     // String
let num = 100;         // Number
let isTrue = true;     // Boolean
let x;                 // Undefined
let y = null;          // Null
\`\`\`

### **Comments in JS**
Comments are ignored by the browser and used to explain code.
\`\`\`javascript
// This is a single-line comment

/*
This is a 
multi-line comment
*/
\`\`\`

### **Operators in JS - Assignment, Comparison, Logical**
- **Assignment**: \`=\`, \`+=\`, \`-=\`
- **Comparison**: \`==\` (loose equality), \`===\` (strict equality), \`!=\`, \`>\`, \`<\`
- **Logical**: \`&&\` (AND), \`||\` (OR), \`!\` (NOT)
\`\`\`javascript
let a = 10;
a += 5; // Assignment (a = 15)
console.log(a === 15); // Comparison (true)
console.log(a > 10 && a < 20); // Logical (true)
\`\`\`

### **Conditional Statements**
\`if\`, \`else if\`, and \`else\` are used to perform different actions based on different conditions.
\`\`\`javascript
let hour = 10;
if (hour < 12) {
    console.log("Good morning");
} else {
    console.log("Good afternoon");
}
\`\`\`

### **Ternary Operator**
A shorthand for an \`if...else\` statement.
\`\`\`javascript
let age = 18;
let status = (age >= 18) ? "Adult" : "Minor";
console.log(status);
\`\`\`

### **Loops in JS - for, while, do-while, for-of, for-in**
Loops are used to execute a block of code multiple times.
\`\`\`javascript
// for loop
for (let i = 0; i < 3; i++) { console.log(i); }

// while loop
let j = 0;
while (j < 3) { console.log(j); j++; }

// do-while loop
let k = 0;
do { console.log(k); k++; } while(k < 3);

// for-of (Iterables like Arrays)
let arrList = ["A", "B"];
for (let item of arrList) { console.log(item); }

// for-in (Object properties)
let obj = { a: 1, b: 2 };
for (let key in obj) { console.log(key, obj[key]); }
\`\`\`

### **Strings in JS and Their Functions**
Strings store a series of characters.
\`\`\`javascript
let text = "JavaScript";
console.log(text.length); // 10
\`\`\`

### **Template Literals & String Interpolation**
Template literals use backticks (\` \`) and allow multi-line strings and easy variable interpolation using \`\${}\`.
\`\`\`javascript
let userName = "John";
let greeting = \`Hello \${userName}, welcome!\`;
console.log(greeting);
\`\`\`

### **String Methods in JS**
\`\`\`javascript
let strValue = "  Hello World!  ";

console.log(strValue.toUpperCase()); // "  HELLO WORLD!  "
console.log(strValue.toLowerCase()); // "  hello world!  "
console.log(strValue.trim());        // "Hello World!"
console.log(strValue.slice(2, 7));   // "Hello"
console.log("Hello".concat(" ", "World")); // "Hello World"
console.log(strValue.replace("World", "JS")); // "  Hello JS!  "
console.log(strValue.charAt(2));     // "H"
\`\`\`

### **Arrays in JS**
Arrays are special variables that can hold more than one value.
\`\`\`javascript
let fruits = ["Apple", "Banana", "Orange"];
console.log(fruits[0]); // "Apple"
\`\`\`

### **Array Methods**
\`\`\`javascript
let arr = [1, 2, 3];

arr.push(4);        // Adds 4 to end: [1, 2, 3, 4]
arr.pop();          // Removes from end: [1, 2, 3]
arr.unshift(0);     // Adds 0 to start: [0, 1, 2, 3]
arr.shift();        // Removes from start: [1, 2, 3]

console.log(arr.toString()); // "1,2,3"

let arr2 = arr.concat([4, 5]); // Combines arrays

// slice(start, end) - non-destructive
let sliced = arr2.slice(1, 3); // [2, 3]

// splice(start, deleteCount, item1...) - destructive
arr2.splice(1, 1, 99); // Removes 1 item at index 1, adds 99
\`\`\`

### **Functions in JS**
Functions are blocks of code designed to perform a particular task.
\`\`\`javascript
function add(a, b) {
    return a + b;
}
console.log(add(5, 3)); // 8
\`\`\`

### **Arrow Functions**
A shorter syntax for writing function expressions.
\`\`\`javascript
const multiply = (a, b) => a * b;
console.log(multiply(4, 2)); // 8
\`\`\`

### **forEach Loop in Array**
Executes a provided function once for each array element.
\`\`\`javascript
let nums = [1, 2, 3];
nums.forEach((num) => console.log(num * 2));
\`\`\`

### **Callback Function**
A function passed into another function as an argument, which is then invoked inside the outer function.
\`\`\`javascript
function processData(callback) {
    console.log("Processing...");
    callback();
}
processData(() => console.log("Done!"));
\`\`\`

### **map, filter, reduce**
\`\`\`javascript
let numbers = [1, 2, 3, 4];

// map: creates a new array populated with the results
let doubled = numbers.map(n => n * 2); // [2, 4, 6, 8]

// filter: creates a new array with elements that pass a test
let evens = numbers.filter(n => n % 2 === 0); // [2, 4]

// reduce: executes a reducer function resulting in a single value
let sum = numbers.reduce((total, n) => total + n, 0); // 10
\`\`\`

### **DOM (Document Object Model)**
The DOM is a programming interface for web documents, representing the page so programs can change the document structure, style, and content.

### **DOM Manipulation - Selecting with ID, Class, Tag, querySelector**
\`\`\`javascript
let byId = document.getElementById("header");
let byClass = document.getElementsByClassName("items");
let byTag = document.getElementsByTagName("p");

// querySelector is more versatile (uses CSS selectors)
let firstItem = document.querySelector(".items"); 
let allItems = document.querySelectorAll(".items");
\`\`\`

### **Properties - tagName, innerText, innerHTML, textContent**
\`\`\`javascript
let el = document.getElementById("myDiv");

console.log(el.tagName); // "DIV"

// Gets/sets the visible text
el.innerText = "New Text"; 

// Gets/sets the HTML content (can inject tags)
el.innerHTML = "<strong>Bold Text</strong>"; 

// Gets/sets all text content, including hidden text
el.textContent = "Raw Text content";
\`\`\`

### **Events in JS & Event Handling**
Events are "things" that happen to HTML elements (like clicks). JavaScript can react to these events.

### **Event Object**
When an event occurs, an event object is passed to the handler containing information about the event.
\`\`\`javascript
document.querySelector("button").onclick = function(event) {
    console.log("Clicked at coordinates:", event.clientX, event.clientY);
};
\`\`\`

### **Event Listeners**
The modern way to attach event handlers.
\`\`\`javascript
const btn = document.querySelector("#myBtn");
btn.addEventListener("click", () => {
    alert("Button was clicked!");
});
\`\`\`

### **Classes in JS**
Classes are templates for creating objects.
\`\`\`javascript
class Person {
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log(\`Hi, I am \${this.name}\`);
    }
}
const p = new Person("Alice");
p.greet();
\`\`\`

### **Inheritance & super Keyword**
Inheritance allows a class to inherit methods and properties from another class using \`extends\`. \`super\` calls the parent's constructor.
\`\`\`javascript
class Employee extends Person {
    constructor(name, jobTitle) {
        super(name); // Calls Person's constructor
        this.jobTitle = jobTitle;
    }
}
const emp = new Employee("Bob", "Developer");
\`\`\`

### **Error Handling using try-catch**
\`\`\`javascript
try {
    let x = y + 1; // y is not defined
} catch (error) {
    console.log("An error occurred:", error.message);
} finally {
    console.log("This always runs.");
}
\`\`\`

### **Sync in JS - Synchronous and Asynchronous**
- **Synchronous**: Executes line by line. Blocking.
- **Asynchronous**: Can execute in the background. Non-blocking.
\`\`\`javascript
console.log("1. Sync");
setTimeout(() => console.log("3. Async"), 1000);
console.log("2. Sync");
\`\`\`

### **Callbacks & Callback Hell**
Callbacks are used to handle async operations. Nesting too many callbacks leads to "Callback Hell" (Pyramid of Doom), making code hard to read.
\`\`\`javascript
setTimeout(() => {
    console.log("Step 1");
    setTimeout(() => {
        console.log("Step 2");
        setTimeout(() => {
            console.log("Step 3");
        }, 1000);
    }, 1000);
}, 1000);
\`\`\`

### **Promises**
Promises represent the eventual completion (or failure) of an asynchronous operation. They resolve "Callback Hell".
\`\`\`javascript
let myPromise = new Promise((resolve, reject) => {
    let success = true;
    if (success) resolve("Operation Successful");
    else reject("Operation Failed");
});

myPromise
    .then(result => console.log(result))
    .catch(error => console.log(error));
\`\`\`

### **async / await**
Syntactic sugar over Promises, making async code look synchronous.
\`\`\`javascript
async function fetchUser() {
    try {
        let response = await fetch('https://api.example.com/user');
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Error fetching user:", error);
    }
}
\`\`\`

### **IIFE - Immediately Invoked Function Expression**
A function that runs as soon as it is defined. Useful for avoiding variable hoisting from within blocks and avoiding polluting the global scope.
\`\`\`javascript
(function() {
    console.log("This runs immediately!");
})();

// Arrow function syntax
(() => {
    console.log("Also runs immediately!");
})();
\`\`\``
        ,`## **MySQL**

### **Introduction to MySQL**
MySQL is a popular, open-source Relational Database Management System (RDBMS) that uses Structured Query Language (SQL) for database management.

### **Database and Table Operations**
To start using MySQL, you must first create a database and tables inside it.
\`\`\`sql
-- Create a database
CREATE DATABASE codepilot_db;

-- Use the database
USE codepilot_db;

-- Create a users table
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
\`\`\`

### **Basic SQL Queries (CRUD)**
\`\`\`sql
-- INSERT: Add a new record
INSERT INTO users (username, email) VALUES ('chandan', 'chandan@example.com');

-- SELECT: Retrieve data
SELECT * FROM users WHERE id = 1;

-- UPDATE: Modify data
UPDATE users SET username = 'chandan_dev' WHERE id = 1;

-- DELETE: Remove data
DELETE FROM users WHERE id = 1;
\`\`\`

### **MySQL JOINs**
JOINs are used to query data from multiple tables based on a related column between them.
\`\`\`sql
-- INNER JOIN (Matches in both tables)
SELECT users.username, orders.order_date
FROM users
INNER JOIN orders ON users.id = orders.user_id;

-- LEFT JOIN (All from left table, matching from right)
SELECT users.username, orders.order_date
FROM users
LEFT JOIN orders ON users.id = orders.user_id;
\`\`\`

### **Node.js Integration**
In modern web development, you connect to MySQL from a Node.js backend using libraries like \`mysql2\`.
\`\`\`javascript
const mysql = require('mysql2');

// Create connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'codepilot_db'
});

// Perform query
connection.query(
    'SELECT * FROM users',
    function(err, results, fields) {
        if (err) throw err;
        console.log(results); // Array of user objects
    }
);
\`\`\``
    ];

    await Course.updateOne(
        { title: 'Web Development Bootcamp' },
        { $set: { notes: webNotes } }
    );

    console.log('Web Dev Tabbed Notes Updated in DB!');
    process.exit();
})
.catch(err => {
    console.error(err);
    process.exit(1);
});
