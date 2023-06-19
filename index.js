const imgBox = document.querySelector(".image");
const allBoxes = document.getElementsByClassName("box");

// Event listeners for draggable element imgBox
imgBox.addEventListener("dragstart", (e) => {
  console.log("Dragstart has been triggered");
  e.target.classList.add("control");
  setTimeout(() => {
    e.target.classList.add("hide");
  }, 0);
});

imgBox.addEventListener("dragend", (e) => {
  console.log("Dragend has been triggered");
  e.target.classList.remove("hide");
});

for (let allBox of allBoxes) {
  allBox.addEventListener("dragover", (e) => {
    console.log("Dragover method is triggered");
    e.preventDefault();
  });

  allBox.addEventListener("dragenter", (e) => {
    console.log("Dragenter method is triggered");
    e.target.classList.add("dashed");
  });

  allBox.addEventListener("dragleave", (e) => {
    console.log("Dragleave method is triggered");
    e.target.classList.remove("dashed");
  });

  allBox.addEventListener("drop", (e) => {
    console.log("Drop method is triggered");
    e.target.appendChild(imgBox);
  });
}
