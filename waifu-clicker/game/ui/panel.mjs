export function showPanel(namaPanel) {
  document.querySelectorAll(".panel").forEach((panel) => {
    panel.classList.remove("active");
  });
  namaPanel.classList.add("active");
}
