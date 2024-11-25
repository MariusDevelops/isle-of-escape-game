import islandRegions from "./data/islandRegions.js";
import { gameIntro, gameState, displayMessage } from "./scripts/gameIntro.js";

let currentRegion = islandRegions.rockySeaside;

const gameOutput = document.querySelector(".gameOutput");
const gameInput = document.querySelector(".gameInput");
const outputImgContainer = document.querySelector(".outputImgContainer");
const outputTextContainer = document.querySelector(".outputTextContainer");

gameInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    processCommand();
  }
});

function processCommand() {
  const command = gameInput.value.trim().toLowerCase();
  const paragraph = document.createElement("p");

  outputTextContainer.textContent = "";

  if (gameState === "processCommand" && command === "help") {
    displayMessage(
      "list of commands: help, " +
        Object.keys(currentRegion.exits).join(", ") +
        "."
    );
  } else if (currentRegion.exits[command]) {
    const nextIslandRegionKey = currentRegion.exits[command];
    currentRegion = islandRegions[nextIslandRegionKey];
    displayMessage(
      `You moved ${command} to ${currentRegion.name}. ${currentRegion.description}`
    );
  } else {
    displayMessage("Wrong command or you can't move in that direction.");
  }
  gameOutput.scrollTop = gameOutput.scrollHeight;

  gameOutput.appendChild(paragraph);
  gameInput.value = "";
}
