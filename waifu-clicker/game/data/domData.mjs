export const element = {
  score: document.getElementById("score"),
  scoreBtn: document.getElementById("score-btn"),
  gameImg: document.querySelector(".game-image"),
  gameStatus: {
    tap: document.getElementById("tap-status"),
    auto: document.getElementById("auto-status"),
    multi: document.getElementById("multi-status"),
  },
  gameValue: {
    tap: document.getElementById("tap-value"),
    auto: document.querySelector(".auto-value"),
    interval: document.querySelector(".auto-interval"),
    multi: document.getElementById("multi-value"),
    minus: document.getElementById("minus-value"),
  },
  upgradeBtn: {
    tap: document.getElementById("upgrade-finger"),
    auto: document.getElementById("upgrade-auto"),
    multi: document.getElementById("upgrade-multi"),
  },
  upgradePrice: {
    tap: document.getElementById("tap-price"),
    auto: document.getElementById("auto-price"),
    multi: document.getElementById("multi-price"),
  },
  popup: {
    minus: document.querySelector(".currency-minus"),
  },
};
