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

let introPlaying = true;

window.addEventListener("load", () => {
  if (!robotModel) return;

  const introOrbits = [
    "18deg 75deg 15m",
    "-18deg 75deg 15m",
    "12deg 75deg 15m",
    "-8deg 75deg 15m",
    "0deg 75deg 15m"
  ];

  let index = 0;

  const playIntroLook = () => {
    if (index >= introOrbits.length) {
      introPlaying = false;
      return;
    }

    robotModel.setAttribute("camera-orbit", introOrbits[index]);
    index++;

    setTimeout(playIntroLook, 320);
  };

  setTimeout(playIntroLook, 600);
});

document.addEventListener("mousemove", (e) => {
  if (!robotModel) return;
  if (introPlaying) return;
  if ("ontouchstart" in window) return;

  const x = -(e.clientX / window.innerWidth - 0.5) * 25;
  const y = (e.clientY / window.innerHeight - 0.5) * 12;

  robotModel.setAttribute("camera-orbit", `${x}deg ${75 - y}deg 15m`);
});
