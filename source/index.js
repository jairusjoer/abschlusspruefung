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
