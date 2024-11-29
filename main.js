import islandRegions from "./data/islandRegions.js";
import commandShorthand from "./data/commandShorthand.js";
import { gameIntro, gameState, displayMessage } from "./scripts/gameIntro.js";
import player from "./data/player.js";

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
  const regionItems = currentRegion.items.join(", ").toUpperCase();
  const regionItemsHtml = `<span class="highlight">${regionItems}</span>`;

  if (gameState === "processCommand" && fullCommand === "help") {
    displayMessage(
      `<br>Command list - <span class="highlight">HELP / H</span>.
      <br>Move - ${moveDirectionHtml}.
      <br>Investigate place - <span class="highlight">INVESTIGATE / INV</span>.
      <br>Pickup item - <span class="highlight">PICKUP [ITEM NAME]</span>.
      <br>Drop item - <span class="highlight">DROP [ITEM NAME]</span>.`
    );
  } else if (currentRegion.exits[fullCommand]) {
    const nextIslandRegionKey = currentRegion.exits[fullCommand];
    currentRegion = islandRegions[nextIslandRegionKey];
    displayMessage(
      `<br>You moved ${fullCommand} to ${currentRegion.name}. ${currentRegion.description}`
    );
  } else if (fullCommand === "investigate") {
    fullCommand in currentRegion
      ? displayMessage(`<br>${currentRegion[fullCommand]} ${regionItemsHtml}`)
      : displayMessage(`<br>There is nothing of interest here.`);
  } else if (fullCommand.startsWith("pickup ")) {
    const itemToPick = fullCommand.slice(7).trim();
    pickUpItem(itemToPick);
  } else if (fullCommand.startsWith("drop ")) {
    const itemToDrop = fullCommand.slice(5).trim();
    dropItem(itemToDrop);
  } else {
    displayMessage(`<br>Wrong command or you can't move in that direction.`);
  }
  gameOutput.scrollTop = gameOutput.scrollHeight;

  gameOutput.appendChild(paragraph);
  gameInput.value = "";
}

function pickUpItem(item) {
  if (currentRegion.items.includes(item)) {
    player.inventory.push(item);
    currentRegion.items = currentRegion.items.filter((i) => i !== item);
    displayMessage(`<br>You picked up: ${item}.`);
    updateInventoryUI();
  } else {
    displayMessage(`<br>${item} is not available to pick up here.`);
  }
}

function dropItem(item) {
  if (player.inventory.includes(item)) {
    player.inventory = player.inventory.filter((i) => i !== item);
    currentRegion.items.push(item);
    displayMessage(`<br>You dropped: ${item}.`);
    updateInventoryUI();
  } else {
    displayMessage(`<br>You don't have ${item} in your inventory.`);
  }
}

function updateInventoryUI() {
  const inventoryContainer = document.querySelector(".inventoryListContainer");
  inventoryContainer.innerHTML = "";

  if (player.inventory.length === 0) {
    inventoryContainer.textContent = "Inventory is empty.";
    return;
  }

  const inventoryList = document.createElement("div");
  player.inventory.forEach((item) => {
    const listItem = document.createElement("p");
    listItem.textContent = item.toUpperCase();
    inventoryList.appendChild(listItem);
  });

  inventoryContainer.appendChild(inventoryList);
}
