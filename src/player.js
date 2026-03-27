export default function Player(gb) {
  return {
    gameboard: gb,
    attack(enemyBoard, x, y) {
      return enemyBoard.receiveAttack(x, y);
    },
  };
}
