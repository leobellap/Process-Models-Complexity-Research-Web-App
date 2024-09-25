const stepSlider = document.getElementById("stepSlider");
const difficultySlider = document.getElementById("complexitySlider");
const processImage = document.getElementById("processImage");
let stepName = document.getElementById("stepName");
let complexityLevel = document.getElementById("complexityLevel");

function updateImage() {
  const step = stepSlider.value;
  const difficulty = difficultySlider.value;
  processImage.src = `/static/images/webp/process_step${step}_difficulty${difficulty}.webp`;
  stepName.textContent = step;
  complexityLevel.textContent = difficulty;
}

stepSlider.addEventListener("input", updateImage);
difficultySlider.addEventListener("input", updateImage);

// Initial image update
updateImage();
