document.addEventListener("DOMContentLoaded", function () {
  // Elements
  const card = document.querySelector(".card");
  const container = document.querySelector(".container");
  const title = document.querySelector(".title");
  const sheep = document.querySelector(".sheep img");
  const button = document.querySelector(".btn");
  const description = document.querySelector(".info h3");

  // Moving Animation Event
  container.addEventListener("mousemove", function (e) {
    const xAxis = (window.innerWidth / 2 - e.clientX) / 25;
    const yAxis = (window.innerHeight / 2 - e.clientY) / 25;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
  });

  // Animate on Hover
  container.addEventListener("mouseenter", function () {
    card.classList.add("has-transform");
    title.classList.add("has-transform");
    sheep.classList.add("has-transform");
    button.classList.add("has-transform");
    description.classList.add("has-transform");
  });

  container.addEventListener("mouseleave", function () {
    card.style.transform = "rotateY(0deg) rotateX(0deg)";
    card.classList.remove("has-transform");
    title.classList.remove("has-transform");
    sheep.classList.remove("has-transform");
    button.classList.remove("has-transform");
    description.classList.remove("has-transform");
  });
});

// Animation on click button
const animateButton = function (e) {
  e.preventDefault();
  // Reset animation
  e.target.classList.remove("animate");

  e.target.classList.add("animate");
  setTimeout(function () {
    e.target.classList.remove("animate");
  }, 700);
};

const buttons = document.getElementsByClassName("btn");

Array.from(buttons).forEach(function (button) {
  button.addEventListener("click", animateButton, false);
});
