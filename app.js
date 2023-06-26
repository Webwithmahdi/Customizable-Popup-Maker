const error = document.querySelector(".error");
const title = document.querySelector(".title-create");
const titleColor = document.querySelector(".title-create-color");
const icon = document.querySelector(".icon-create");
const iconColor = document.querySelector(".icon-create-color");
const popupColor = document.querySelector(".popup-color");

const createRemoveButton = document.querySelector(
  ".create-remove-popup-button"
);

const popupPosition = document.querySelectorAll(".popup-position-area input");

createRemoveButton.addEventListener("click", createFunction);
window.addEventListener("keypress", function (e) {
  if (e.key == "Enter") {
    createFunction();
  }
});

function createFunction() {
  const popup = document.createElement("div");
  popup.classList.add("popup");
  popup.style.backgroundColor = popupColor.value;
  const popupTitle = document.createElement("span");
  popupTitle.classList.add("popup-title");
  popupTitle.innerText = title.value;
  popupTitle.style.color = titleColor.value;
  const popupIcon = document.createElement("span");
  popupIcon.innerHTML = `<i class="fas fa-${icon.value}"></i>`;
  popupIcon.classList.add("popup-icon");
  popupIcon.style.color = iconColor.value;
  const popupProgress = document.createElement("span");
  popupProgress.classList.add("popup-progress");
  popupProgress.classList.add("popup-progress-animation");
  popup.appendChild(popupTitle);
  popup.appendChild(popupIcon);
  popup.appendChild(popupProgress);
  if (title.value && icon.value) {
    error.style.opacity = "0";
    setTimeout(function () {
      error.style.display = "none";
    }, 300);
    for (let i = 0; i < 4; i++) {
      if (popupPosition[0].checked) {
        popup.classList.add("popup-top-left");
      } else if (popupPosition[1].checked) {
        popup.classList.add("popup-top-right");
      } else if (popupPosition[2].checked) {
        popup.classList.add("popup-bottom-right");
      } else {
        popup.classList.add("popup-bottom-left");
      }
    }
    if (document.querySelector(".popup")) {
      createRemoveButton.innerText="Create";
      document.querySelector(".popup").style.opacity = "0";
      document.querySelector(".popup").classList.remove("popup-transform");
      setTimeout(function () {
        document.querySelector(".popup").remove();
      }, 200);
    } else {
      createRemoveButton.innerHTML = "Remove";
      document.body.appendChild(popup);
      setTimeout(function () {
        popup.style.opacity = "1";
        popup.classList.add("popup-transform");
      }, 100);
    }
  } else {
    error.style.display = "block";
    setTimeout(function () {
      error.style.opacity = "1";
    }, 100);
  }
}
