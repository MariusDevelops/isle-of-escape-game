import islandRegions from "./data/islandRegions.js";

let currentRegion = islandRegions.rockySeaside;

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
    paragraph.textContent +=
      "list of commands: help, " +
      Object.keys(currentRegion.exits).join(", ") +
      ".";
  } else if (currentRegion.exits[command]) {
    const nextIslandRegionKey = currentRegion.exits[command];
    currentRegion = islandRegions[nextIslandRegionKey];
    paragraph.textContent += `You moved ${command} to ${currentRegion.name}. ${currentRegion.description}`;
  } else {
    paragraph.textContent +=
      "Wrong command or you can't move in that direction.";
  }
  gameOutput.scrollTop = gameOutput.scrollHeight;

  gameOutput.appendChild(paragraph);
  gameInput.value = "";
}
