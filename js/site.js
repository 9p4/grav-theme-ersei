document.addEventListener("DOMContentLoaded", (event) => {
  document.querySelector("#toggle").onclick = function(){
    document.querySelector("#toggle").classList.toggle("active");
    document.querySelector("#overlay").classList.toggle("open");
    document.querySelector("body").classList.toggle("mobile-nav-open");
  };
});

window.onscroll = function() {
  if (document.body.scrollTop > 75 || document.documentElement.scrollTop > 75) {
    document.getElementById("header").classList.add("scrolled");
  } else {
    document.getElementById("header").classList.remove("scrolled");
  }
};

if (document.getElementById("to-start")) {document.getElementById("to-start").onclick = function() {
  document.getElementById("start").scrollIntoView();
}};
