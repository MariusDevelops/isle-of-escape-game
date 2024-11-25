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
    `Hello, Commander. I am Poko2, your AI drone assistant. You were in an attack on your way to the Cyborg Space C325 settlement, and now you’ve woken up on this island.<br>
    I’m here to help you navigate, repair the ship, and find your way to safety.<br><br>
    Follow the instructions in your interface to proceed.<br>
    Type <strong style="color: lightgreen;">HELP</strong> and get list of commands to use.`
  );

  gameState = "processCommand";
}

function displayMessage(text) {
  const paragraph = document.createElement("p");
  paragraph.innerHTML = text;
  outputTextContainer.appendChild(paragraph);
}

gameIntro();

export { gameIntro, gameState, displayMessage };
