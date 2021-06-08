// MILESTONES SlIDER
new Glide(".milestones-glide", {
  type: "carousel",
  gap: 24,
}).mount();

// COMMENTS SLIDER
new Glide(".comments-glide", {
  type: "carousel",
  autoplay: 3000,
  gap: 24,
  peek: 216,
  breakpoints: {
    768: {
      peek: 48,
    },
  },
}).mount();

const nav = document.getElementsByTagName("nav")[0];
const body = document.getElementsByTagName("body")[0];
document.getElementById("toggleMenu").onclick = () => {
  nav.classList.toggle("open");
  body.classList.toggle("noscroll");
};

/* FEATURE: DARK MODE
const body = document.getElementsByTagName("body")[0];
// Check available local storage
if (localStorage.getItem("mode") == "dark") {
  body.classList.toggle("dark");
}
// Toggle state on click event
document.getElementById("toggleState").onclick = () => {
  // Check and update current state
  if (localStorage.getItem("mode") == "dark") {
    localStorage.setItem("mode", "light");
  } else {
    localStorage.setItem("mode", "dark");
  }
  body.classList.toggle("dark");
};
*/
