// Select all the image container elements
const imageContainersCollection =
  document.getElementsByClassName("image-container");

// Convert the HTMLCollection to array
const imageContainers = [...imageContainersCollection];

imageContainers.forEach((element) => {
  // Add active class whem clicked
  element.addEventListener("click", () => {
    removeActive();
    element.classList.add("active");
  });
});

// remove active class from all image container elements
function removeActive() {
  imageContainers.forEach((element) => {
    element.classList.remove("active");
  });
}
