// Typing Animation for Name
const name = "N4!TR0 07"; // Replace with your name
const typingName = document.getElementById('typing-name');
let index = 0;

function typeName() {
  if (index < name.length) {
    typingName.textContent += name.charAt(index);
    index++;
    setTimeout(typeName, 150); // Adjust typing speed here
  } else {
    setTimeout(resetName, 3000); // Reset after 3 seconds
  }
}

function resetName() {
  typingName.textContent = '';
  index = 0;
  typeName();
}

typeName(); // Start the typing animation