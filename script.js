// This js for slider trek details
document.addEventListener("DOMContentLoaded", function () {

    const slider = document.getElementById("slider-container");
    const left = document.getElementById("left");
    const right = document.getElementById("right");

    right.addEventListener("click", function () {
        slider.scrollLeft += 300;
    });

    left.addEventListener("click", function () {
        slider.scrollLeft -= 300;
    });

});

// This is For FAQ 
const tabs = document.querySelectorAll('.tab');
const groups = document.querySelectorAll('.group');
tabs.forEach(tab => tab.addEventListener('click', () => {
  tabs.forEach(t => t.classList.remove('active'));
  groups.forEach(g => g.classList.remove('active'));
  tab.classList.add('active');
  document.getElementById(tab.dataset.target).classList.add('active');
}));
