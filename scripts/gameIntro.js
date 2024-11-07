let gameState = "intro";

const gameOutput = document.querySelector(".gameOutput");
const outputImgContainer = document.querySelector(".outputImgContainer");
const outputTextContainer = document.querySelector(".outputTextContainer");
const outputTextContainer2 = document.querySelector(".outputTextContainer2");

function gameIntro() {
  const profilePicture = document.createElement("img");
  profilePicture.src = "../assets/pyke-profile.jpg";
  profilePicture.alt = "PYKE profile picture";
  profilePicture.style.width = "100px";
  outputImgContainer.appendChild(profilePicture);

  displayMessage(
    `Hello, <strong>Commander</strong>. I am PYKE, your AI drone assistant. You were in an attack on your way to the Cyborg Space C325 settlement, and now you’ve woken up on this island. I’m here to help you navigate, repair the ship, and find your way to safety. Follow the instructions in your interface to proceed.`
  );

  setTimeout(() => {
    displayMessage2(`Write help and get list of commands to use.`);
  }, 10000);

  gameState = "processCommand";
}

function displayMessage(text) {
  const paragraph = document.createElement("p");
  // paragraph.innerHTML = text;
  typeWriter(paragraph, text, 0);
  outputTextContainer.appendChild(paragraph);
}

function displayMessage2(text) {
  const paragraph = document.createElement("p");
  typeWriter(paragraph, text, 0);
  outputTextContainer2.appendChild(paragraph);
}

function typeWriter(element, text, index) {
  if (index < text.length) {
    element.textContent += text.charAt(index);
    index++;
    gameOutput.scrollTop = gameOutput.scrollHeight;
    setTimeout(function () {
      typeWriter(element, text, index);
    }, 30);
  }
}

gameIntro();

export { gameIntro, gameState, displayMessage, displayMessage2, typeWriter };
