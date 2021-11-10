//set logged in user name
let userName = document.querySelector("#userName");
let numUserLoggedIn = localStorage.getItem("loggedInUser");
userName.innerText = localStorage.getItem("name" + numUserLoggedIn);

//parallax effect
let stars = document.querySelector("#stars");
let fog = document.querySelector("#fog");
let miniFog = document.querySelector("#miniFog");
let moon = document.querySelector("#moon");
let cliffBack = document.querySelector("#cliffBack");
let cliff = document.querySelector("#cliff");
let landingContent = document.querySelector("#landingContent");

window.addEventListener("scroll", () => {
  let scollVal = window.scrollY;
  stars.style.left = scollVal * 0.25 + "px";
  fog.style.top = scollVal * -0.1 + "px";
  miniFog.style.top = scollVal * 1.3 + "px";
  moon.style.top = scollVal * 1.3 + "px";
  cliffBack.style.top = scollVal * 0.3 + "px";
  cliff.style.top = scollVal * 0 + "px";
  landingContent.style.transform = "translateY(" + scollVal * -1.5 + "px" + ")";
});
