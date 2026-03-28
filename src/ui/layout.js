export default function renderLayout() {
  const content = document.createElement("div");
  content.id = "content";
  const playerBoard = document.createElement("div");
  playerBoard.id = "player-board";
  const enemyBoard = document.createElement("div");
  enemyBoard.id = "enemy-board";
  const buttonContainer = document.createElement("div");
  buttonContainer.id = "button-container";
  const rotateBtn = document.createElement("button");
  rotateBtn.textContent = "rotate";
  rotateBtn.id = "rotate-btn";
  const resetBtn = document.createElement("button");
  resetBtn.id = "reset-btn";
  resetBtn.textContent = "Reset";
  buttonContainer.appendChild(resetBtn);
  buttonContainer.appendChild(rotateBtn);
  content.appendChild(buttonContainer);
  content.appendChild(playerBoard);
  content.appendChild(enemyBoard);

  return content;
}
