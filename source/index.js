import Glide from "@glidejs/glide";
import "@glidejs/glide/dist/css/glide.core.min.css";

new Glide(".glide", {
  gap: 24
}).mount();

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

/* FEATURE: NAVIGATION
const nav = document.getElementsByTagName("nav")[0];
document.getElementById("toggleMenu").onclick = () => {
  nav.classList.toggle("open");
};
*/
