const character = document.querySelector(".character");

document.addEventListener("mousemove", (e) => {
  if (!character) return;

  const x = (e.clientX / window.innerWidth - 0.5) * 20;
  const y = (e.clientY / window.innerHeight - 0.5) * 20;

  character.style.transform = `translate(${x}px, ${y}px) rotate(${x * 0.15}deg)`;
});
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

robotModel.addEventListener("load", () => {
  // ปิด environment light
  robotModel.environmentImage = null;
  robotModel.exposure = 1;
});

document.addEventListener("mousemove", (e) => {
  if (!robotModel) return;

  const x = -(e.clientX / window.innerWidth - 0.5) * 25;
  const y = (e.clientY / window.innerHeight - 0.5) * 12;

  robotModel.setAttribute(
    "camera-orbit",
    `${x}deg ${75 - y}deg 15m`
  );
});