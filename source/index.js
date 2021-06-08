// Open navigation on click on menu icon
const nav = document.getElementsByTagName("nav")[0];
const body = document.getElementsByTagName("body")[0];
document.getElementById("toggleMenu").onclick = () => {
  nav.classList.toggle("open");
};

// Close navigation on any link click inside navigation
const link = document.getElementsByClassName("navigation-menu-item");
for (const item of link) {
  item.onclick = () => {
    nav.classList.toggle("open");
  };
}

// Dark modee
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
