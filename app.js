// Custom cursor
const cursor = document.querySelector("#cursor");
const cursor2 = document.querySelector("#cursor2");
document.addEventListener("mousemove", function (e) {
  const x = e.pageX - 10;
  const y = e.pageY - 10;
  cursor.style.left = x + "px";
  cursor.style.top = y + "px";

  cursor2.style.left = x + 20 + "px";
  cursor2.style.top = y + 20 + "px";
});

// Theme toggle button event
const body = document.querySelector("body");
const themeBtn = document.querySelector(".theme-btn");
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("darkmode");
  toggleThemeBtn();
});
function toggleThemeBtn() {
  if (themeBtn.innerHTML === "dark_mode") {
    themeBtn.innerHTML = "flare";
  } else {
    themeBtn.innerHTML = "dark_mode";
  }
}

// Auto scroll
const scrollTo = document.querySelector(".arrow");
const homeSection = document.querySelector(".landing");
const aboutSection = document.querySelector(".about");
const portfolioSection = document.querySelector(".projects-container");
const contactSection = document.querySelector(".contact-container");

scrollTo.addEventListener("click", () => {
  aboutSection.scrollIntoView({ behavior: "smooth" });
});

const navList = document.querySelector(".navList");
const navItems = document.querySelectorAll(".navItem");
navList.addEventListener("click", (e) => {
  const menuName = e.target.textContent;
  switch (menuName) {
    case "About":
      aboutSection.scrollIntoView({ behavior: "smooth" });
      break;
    case "Portfolio":
      portfolioSection.scrollIntoView({ behavior: "smooth" });
      break;
    case "Contact":
      contactSection.scrollIntoView({ behavior: "smooth" });
      break;
    case "Home":
      homeSection.scrollIntoView({ behavior: "smooth" });
      break;
  }
});

// Hamburger dropdown
const dropIcon = document.querySelector(".dropdown-icon");
dropIcon.addEventListener("click", showNav);
function showNav() {
  navList.classList.toggle("hamburger");
}

// Hiding nav bar on down scroll
let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector("header").style.top = "0";
  } else {
    document.querySelector("header").style.top = "-70px";
  }
  prevScrollpos = currentScrollPos;
};

// Observer section revealing
const allSections = document.querySelectorAll(".section");

function revealSection(entries, Observer) {
  const [entry] = entries;
  // console.log(entry);

  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section--hidden");
  Observer.unobserve(entry.target);
}

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.2,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});

// Landing header animation
let i = 0;
function typeWriter() {
  const header1 = document.querySelector(".header1");
  const txt = "{ Hello there! }"; /* The text */
  let speed = 70;
  if (i < txt.length) {
    header1.innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
window.addEventListener("load", typeWriter);
