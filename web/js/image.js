const images = document.querySelectorAll(".clickable-image");
const biggerImageDiv = document.getElementById("bigger-image-div");
const biggerImage = document.getElementById("bigger-image");

console.log(images);

const loadImages = () => {
  images.forEach((image) => {
    image.addEventListener("click", () => {
      console.log(image);
      biggerImage.src = image.src;
      biggerImageDiv.classList.remove("hidden");
    });
  });
};

biggerImageDiv.addEventListener("click", () => {
  biggerImageDiv.classList.add("hidden");
});

document.addEventListener("DOMContentLoaded", () => {
  loadImages();
});
