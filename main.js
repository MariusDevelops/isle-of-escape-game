import islandRegions from "./data/islandRegions.js";
import commandShorthand from "./data/commandShorthand.js";
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
  const moveDirection = Object.keys(currentRegion.exits)
    .join(", ")
    .toUpperCase();
  const moveDirectionHtml = `<span class="highlight">${moveDirection}</span>`;
  const fullCommand = commandShorthand[command] || command;

  if (gameState === "processCommand" && fullCommand === "help") {
    displayMessage(
      `<br>Command list - <span class="highlight">HELP</span>
      <br>Move - ${moveDirectionHtml}.`
    );
  } else if (currentRegion.exits[fullCommand]) {
    const nextIslandRegionKey = currentRegion.exits[fullCommand];
    currentRegion = islandRegions[nextIslandRegionKey];
    displayMessage(
      `<br>You moved ${fullCommand} to ${currentRegion.name}. ${currentRegion.description}`
    );
  } else {
    displayMessage(`<br>Wrong command or you can't move in that direction.`);
  }
  gameOutput.scrollTop = gameOutput.scrollHeight;

  gameOutput.appendChild(paragraph);
  gameInput.value = "";
}
