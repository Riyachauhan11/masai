// JavaScript to handle button events

// Function to change the button color on click
function changeColor(event) {
    event.target.style.backgroundColor = 'lightblue';
}

// Function to display a message near the button on mouseover
function showMessage(event) {
    const messageId = `message${event.target.id.replace('button', '')}`;
    const message = document.getElementById(messageId);
    if (message) {
        message.style.display = 'block';
    }
}

// Function to hide the message on mouseout
function hideMessage(event) {
    const messageId = `message${event.target.id.replace('button', '')}`;
    const message = document.getElementById(messageId);
    if (message) {
        message.style.display = 'none';
    }
}

// Function to hide the button on double-click
function hideButton(event) {
    event.target.style.display = 'none';
}

// Adding event listeners to the buttons
const buttons = document.querySelectorAll('.button');

buttons.forEach(button => {
    button.addEventListener('click', changeColor); // Change color on click
    button.addEventListener('mouseover', showMessage); // Show message on mouseover
    button.addEventListener('mouseout', hideMessage); // Hide message on mouseout
    button.addEventListener('dblclick', hideButton); // Hide button on double-click
});
