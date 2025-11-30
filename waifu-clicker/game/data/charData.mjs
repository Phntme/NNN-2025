class Character {
  constructor(name, rarity, source) {
    this.name = name;
    this.rarity = rarity;
    this.source = source;
  }
}

export const charPool = {
  5: [
    new Character("WIP", 5, "img/wip.jpg"),
    new Character("FIX", 5, "img/fix.jpg"),
    new Character("SHOCKED", 5, "img/shocked.jpg"),
  ],
  4: [
    new Character("BLEH", 4, "img/bleh.jpg"),
    new Character("BLUSH", 4, "img/blush.jpg"),
    new Character("EARS", 4, "img/ears.jpg"),
    new Character("FURINA", 4, "img/furina.jpg"),
    new Character("HUTAO", 4, "img/hutao.jpg"),
  ],
  3: [
    new Character("GOLDSHI", 3, "img/goldshi.jpg"),
    new Character("HAYO", 3, "img/hayo.jpg"),
    new Character("LICK", 3, "img/lick.jpg"),
    new Character("NNN", 3, "img/nnn.jpg"),
    new Character("RUBY", 3, "img/ruby.jpg"),
    new Character("SCRATCH", 3, "img/scratch.jpg"),
    new Character("SMARD", 3, "img/smard.jpg"),
    new Character("SMOL", 3, "img/smol.jpg"),
    new Character("STUPIT", 3, "img/stupit.jpg"),
    new Character("THATS", 3, "img/thats.jpg"),
  ],
};
