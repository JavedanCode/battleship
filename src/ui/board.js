const boards = new Map();

export function setBoardContainer(key, el) {
  boards.set(key, {
    container: el,
    clickHandler: null,
  });

  el.addEventListener("click", (e) => {
    if (!e.target.classList.contains("cell")) return;

    const board = boards.get(key);
    if (!board.clickHandler) return;

    const x = Number(e.target.dataset.x);
    const y = Number(e.target.dataset.y);

    board.clickHandler(x, y);
  });
}

export function onCellClickHandler(key, handler) {
  const board = boards.get(key);
  if (!board) return;

  board.clickHandler = handler;
}

export function renderBoard(key) {
  const board = boards.get(key);
  if (!board) throw new Error("No container defined");

  const { container } = board;

  container.innerHTML = "";

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      cell.dataset.x = i;
      cell.dataset.y = j;
      container.appendChild(cell);
    }
  }
}

export function updateCell(key, x, y, cellData) {
  const board = boards.get(key);
  if (!board) return;

  const { container } = board;

  const cellEl = container.querySelector(`[data-x="${x}"][data-y="${y}"]`);

  if (!cellEl) return;

  cellEl.classList.add("disabled");

  if (cellData.attacked && cellData.ship) {
    cellEl.classList.add("hit");
  } else if (cellData.attacked && !cellData.ship) {
    cellEl.classList.add("miss");
  }
}
