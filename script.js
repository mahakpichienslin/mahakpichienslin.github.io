const revealElements = document.querySelectorAll(".reveal");

const revealOnScroll = () => {
  revealElements.forEach((el) => {
    const rect = el.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (rect.top < windowHeight - 120) {
      el.classList.add("active");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

const robotModel = document.querySelector("#robotModel");

document.addEventListener("mousemove", (e) => {
  if (!robotModel) return;
  
  // ไม่ทำงานบนมือถือ
  if ('ontouchstart' in window) return;

  const x = -(e.clientX / window.innerWidth - 0.5) * 25;
  const y = (e.clientY / window.innerHeight - 0.5) * 12;

  robotModel.setAttribute("camera-orbit", `${x}deg ${75 - y}deg 15m`);
});

const slider = document.querySelector(".screenshots-track");

if (slider) {
  let isDown = false;
  let startX;
  let scrollLeft;

  slider.addEventListener("mousedown", (e) => {
    isDown = true;
    slider.classList.add("dragging");
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });

  slider.addEventListener("mouseleave", () => {
    isDown = false;
    slider.classList.remove("dragging");
  });

  slider.addEventListener("mouseup", () => {
    isDown = false;
    slider.classList.remove("dragging");
  });

  slider.addEventListener("mousemove", (e) => {
    if (!isDown) return;

    e.preventDefault();

    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 0.8;

    slider.scrollLeft = scrollLeft - walk;
  });
}