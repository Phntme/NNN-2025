class Character {
  constructor(name, rarity) {
    this.name = name;
    this.rarity = rarity;
  }
}

export const charPool = {
  5: [new Character("A", 5), new Character("B", 5), new Character("C", 5)],
  4: [
    new Character("A", 4),
    new Character("B", 4),
    new Character("C", 4),
    new Character("D", 4),
    new Character("E", 4),
  ],
  3: [
    new Character("A", 3),
    new Character("B", 3),
    new Character("C", 3),
    new Character("D", 3),
    new Character("E", 3),
    new Character("F", 3),
    new Character("G", 3),
    new Character("H", 3),
    new Character("I", 3),
    new Character("J", 3),
  ],
};
