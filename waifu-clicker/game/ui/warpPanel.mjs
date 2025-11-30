import { element } from "../data/domData.mjs";

function showResult() {
  setTimeout(() => {
    element.warp.result.classList.add("active");
  }, 3400);
}

export { showResult };
