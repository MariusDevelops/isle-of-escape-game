const gameOutput = document.querySelector(".gameOutput");
const gameInput = document.querySelector(".gameInput");

gameInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    processCommand();
  }
});

function processCommand() {
  const command = gameInput.value.trim().toLowerCase();
  const paragraph = document.createElement("p");

  if (command === "help") {
    paragraph.textContent += "list of commands: north, east, south, west";
  } else {
    paragraph.textContent += "wrong command";
  }
  gameOutput.scrollTop = gameOutput.scrollHeight;

  gameOutput.appendChild(paragraph);
  gameInput.value = "";
}
