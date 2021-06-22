import "./styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];

const h2 = document.querySelector("h2");

const superEventHandler = {
  mouseenter: function () {
    h2.innerHTML = "The Mouse is here!!";
    h2.style.color = colors[0];
  },
  mouseleave: function () {
    h2.innerHTML = "The Mouse is gone!!";
    h2.style.color = colors[1];
  },
  resize: function () {
    h2.innerHTML = "You just resized!!";
    h2.style.color = colors[2];
  },
  contextmenu: function () {
    h2.innerHTML = "That was a right click!!";
    h2.style.color = colors[4];
  }
};

h2.addEventListener("mouseenter", superEventHandler.mouseenter);
h2.addEventListener("mouseleave", superEventHandler.mouseleave);
window.addEventListener("resize", superEventHandler.resize);
window.addEventListener("contextmenu", superEventHandler.contextmenu);

function init() {}
init();
