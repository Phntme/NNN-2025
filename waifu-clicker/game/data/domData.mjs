export const element = {
  score: document.getElementById("score"),
  scoreBtn: document.getElementById("score-btn"),
  gameImg: document.querySelector(".game-image"),
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
  featureBtn: {
    upgrade: document.getElementById("upgrade-button"),
    warp: document.getElementById("warp-button"),
  },
  panel: {
    gameplay: document.getElementById("gameplay-panel"),
    warp: document.getElementById("warp-panel"),
  },
};
