// Fetching HTML Elements in variables by ID
var x = document.getElementById("form-sample");
var createform = document.createElement('form'); // Create new element form
createform.setAttribute("action", ""); // Setting Action attribute on form
createform.setAttribute("method", "post"); // setting method attribute on form
x.appendChild(createform);

var heading = document.createElement('h2'); // heading of the form
heading.innerHTML = "Contact Form";
createform.appendChild(heading);

var line = document.createElement('hr'); // giving horizontal row after heading
createform.appendChild(line);

var lineBreak = document.createElement('br'); // new line
createform.appendChild(lineBreak);

var nameLabel = document.createElement('label'); // create label for name field
nameLabel.innerHTML = "Name: "; // set field labels
createform.appendChild(nameLabel);

var inputElement = document.createElement('input') // create input field for name
inputElement.setAttribute("type", "text");
inputElement.setAttribute("name", "dname");
createform.appendChild(inputElement);

var inputBreak = document.createElement('br');
createform.appendChild(inputBreak);

var emailLabel = document.createElement('label'); // create label for email field
emailLabel.innerHTML = "Email: ";
createform.appendChild(emailLabel);

var emailElement = document.createElement('input'); // create input field for email
emailElement.setAttribute("type", "text");
emailElement.setAttribute("name", "dname");
createform.appendChild(emailElement);

var emailBreak = document.createElement('br');
createform.appendChild(emailBreak);

var messageLabel = document.createElement('label'); // append textarea
messageLabel.innerHTML = "Enter your message: ";
createform.appendChild(messageLabel);

var textAreaElement = document.createElement('textarea');
textAreaElement.setAttribute("name", "dmessage");
createform.appendChild(textAreaElement)

var textBreak = document.createElement('br');
createform.appendChild(textBreak);

var submitElement = document.createElement('input'); // apend submit button
submitElement.setAttribute("type", "submit");
submitElement.setAttribute("name", "dsubmit");
submitElement.setAttribute("value", "Submit");
createform.appendChild(submitElement);