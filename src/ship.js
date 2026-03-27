export default function Ship(l) {
  return {
    length: l,
    hits: 0,
    hit() {
      if (!this.isSunk()) ++this.hits;
    },
    isSunk() {
      return this.hits >= this.length ? true : false;
    },
  };
}
