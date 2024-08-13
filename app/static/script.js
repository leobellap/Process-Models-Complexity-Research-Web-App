const images = [
  "static/img/webp/rect1-min.webp",
  "static/img/webp/rect2-min.webp",
  "static/img/webp/rect3-min.webp",
  "static/img/webp/rect4-min.webp",
  "static/img/webp/rect5-min.webp",
  "static/img/webp/rect6-min.webp",
  "static/img/webp/rect7-min.webp",
  "static/img/webp/rect8-min.webp",
  "static/img/webp/rect9-min.webp",
  "static/img/webp/rect10-min.webp",
];

const modelNames = [
  "Model A",
  "Model B",
  "Model C",
  "Model D",
  "Model E",
  "Model F",
  "Model G",
  "Model H",
  "Model I",
  "Model J",
];

const preloadedImages = [];
images.forEach((src, index) => {
  preloadedImages[index] = new Image();
  preloadedImages[index].src = src;
});

document.getElementById("model-slider").addEventListener("input", function () {
  const index = this.value;
  document.getElementById("model-image").src = images[index];
  document.getElementById("model-name").textContent = modelNames[index];
});
