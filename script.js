const imgBox = document.querySelector(".img__box");
const img = document.querySelectorAll(".img");
const img1 = document.querySelector(".img1");
const img2 = document.querySelector(".img2");

imgBox.addEventListener("mouseover", function (e) {
  if (e.target.classList.contains("img1")) {
    img1.style.width = "60%";
    img2.style.width = "40%";
  } else if (e.target.classList.contains("img2")) {
    img1.style.width = "40%";
    img2.style.width = "60%";
    // img2.style.transform = `scale(1.2)`;
  }
});
