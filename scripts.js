const inputError = document.getElementById("input-error");
const imgInput = document.getElementById("img-url");
const topTextInput = document.getElementById("top-text");
const topSlider = document.getElementById("top-font-size");
const bottomTextInput = document.getElementById("bottom-text");
const bottomSlider = document.getElementById("bottom-font-size");
const outputTop = document.getElementById("top-font-value");
const outputBottom = document.getElementById("bottom-font-value");
const fontColor = document.getElementById("font-color");
const generateBtn = document.getElementById("generate-btn");
const generatorBody = document.getElementById("generator-body");

// Display default value
outputTop.innerHTML = `${topSlider.value} px`;
outputBottom.innerHTML = `${bottomSlider.value} px`;

topSlider.addEventListener("input", function (e) {
  e.preventDefault();
  outputTop.innerHTML = `${topSlider.value} px`;
});

bottomSlider.addEventListener("input", function (e) {
  e.preventDefault();
  outputBottom.innerHTML = `${bottomSlider.value} px`;
});

generateBtn.addEventListener("click", function (e) {
  e.preventDefault();

  if (imgInput.value !== "") {
    createMemeCard();
    resetForm();
  } else {
    imgInput.style.border = " 3px solid red";
    inputError.innerHTML = "Please provide a image URL!";
  }
});

imgInput.addEventListener("input", function (e) {
  imgInput.style.border = "2px solid";
  inputError.innerHTML = "";
});

generatorBody.addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.tagName === "BUTTON") {
    e.target.parentElement.remove();
  }
});

function createMemeCard() {
  let card = document.createElement("div");
  card.classList.add(
    "w3-card-4",
    "w3-center",
    "w3-display-container",
    "meme-card"
  );
  generatorBody.appendChild(card);
  addMemeContent();
}

function addMemeContent() {
  let card = document.querySelector(".meme-card");
  let memeImg = document.createElement("img");
  let topText = document.createElement("div");
  let bottomText = document.createElement("div");
  let removeBtn = document.createElement("button");
  let imageSrc = imgInput.value;

  memeImg.setAttribute("src", imageSrc);
  memeImg.classList.add("meme");
  topText.classList.add("w3-display-topmiddle", "inner-padding", "meme-text");
  bottomText.classList.add(
    "w3-display-bottommiddle",
    "inner-padding",
    "meme-text"
  );
  removeBtn.classList.add(
    "w3-button",
    "w3-circle",
    "w3-display-topright",
    "inner-padding"
  );

  topText.style.fontSize = `${topSlider.value}px`;
  topText.innerHTML = topTextInput.value;
  topText.style.color = fontColor.value;
  bottomText.style.fontSize = `${bottomSlider.value}px`;
  bottomText.innerHTML = bottomTextInput.value;
  bottomText.style.color = fontColor.value;

  removeBtn.innerHTML = "X";

  card.appendChild(memeImg);
  card.appendChild(topText);
  card.appendChild(bottomText);
  card.appendChild(removeBtn);
}

function resetForm() {
  imgInput.value = "";
  topTextInput.value = "";
  bottomTextInput.value = "";
  topSlider.value = 16;
  bottomSlider.value = 16;
  outputTop.innerHTML = `${topSlider.value} px`;
  outputBottom.innerHTML = `${bottomSlider.value} px`;
  document.querySelector(".meme-card").classList.remove("meme-card");
}
