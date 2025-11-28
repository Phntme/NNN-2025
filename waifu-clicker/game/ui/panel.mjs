import { element } from "../data/domData.mjs";
import { gameData } from "../data/gameData.mjs";

export function showPanel(namaPanel) {
  element.transition.classList.add("active");

  setTimeout(() => {
    element.transition.classList.remove("active");
    document.querySelectorAll(".panel").forEach((panel) => {
      panel.classList.remove("active");
    });
    namaPanel.classList.add("active");
  }, 1500);
}

export function switchPanel(namaPanel, tombol) {
  document.querySelectorAll(".banner").forEach((banner) => {
    banner.classList.remove("active");
  });
  document.querySelectorAll(".show").forEach((showImage) => {
    showImage.classList.remove("active");
  });
  namaPanel.classList.add("active");
  tombol.classList.add("active");
}

// ketika user ke warp section terapkan harga warp yang inflasi
export function warpInflation() {
  gameData.warp.price.single = 1000 * gameData.warp.globalInflation;
  gameData.warp.price.multi = 10000 * gameData.warp.globalInflation;
}
