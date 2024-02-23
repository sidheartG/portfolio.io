// Get tabLinks & tabContents
var tabLinks = document.getElementsByClassName("tab-links"),
  tabContents = document.getElementsByClassName("tab-contents");

// On openTab fucntion call
function openTab(tabname) {
  for (item of tabLinks) {
    item.classList.remove("active-link");
  }
  for (item of tabContents) {
    item.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

// Get SideMenu
var sideMenu = document.getElementById("sidemenu");

// On openTab fucntion call
function openMenu() {
  sideMenu.style.right = "0";
}

function closeMenu() {
  sideMenu.style.right = "-200px";
}

const certificates = [
  "assets/Certificates/Coding-Ninjas.png",
  "assets/Certificates/Great-Learning-Java.jpg",
  "assets/Certificates/HackerRank-Java-Certificate.png",
  "assets/Certificates/HTML-by-Udemy.png",
  "assets/Certificates/TCSiON-Career-Edge.png",
  "assets/Certificates/Programming-In-Java.jpg",
  "assets/Certificates/Python-Coursera.png",
  "assets/Certificates/TCSION Master-Data-Management.png",
]

const leftImg = document.getElementById("imgleft")
const centerImg = document.getElementById("imgCenter")
const rightImg = document.getElementById("imgRight")
// const prevBtn = document.getElementById("prevBtn")
// const nextBtn = document.getElementById("nextBtn")
const leftDiv = document.getElementById("leftDiv")
const rightDiv = document.getElementById("rightDiv")

let leftIndex = 0;
let centerIndex = 1;
let rightIndex = 2;

function changeImage() {
  leftImg.src = certificates[leftIndex]
  centerImg.src = certificates[centerIndex]
  rightImg.src = certificates[rightIndex]

  if(rightIndex === certificates.length) {
    rightDiv.style.display = "none"
  } else {
    rightDiv.style.display = "block"
  }

  if(leftIndex === -1) {
    leftDiv.style.display = "none"
  } else {
    leftDiv.style.display = "block"
  }
}

// nextBtn.addEventListener("click", function () {
//   leftIndex -= 1;
//   rightIndex -= 1;
//   centerIndex -= 1;
//   changeImage();
// })

// prevBtn.addEventListener("click", function () {
//   leftIndex -= 1;
//   rightIndex -= 1;
//   centerIndex -= 1;
//   changeImage()
// })

leftDiv.addEventListener("click", function() {
  leftIndex -= 1;
  rightIndex -= 1;
  centerIndex -= 1;
  changeImage()
})

rightDiv.addEventListener("click", function () {
  leftIndex += 1;
  rightIndex += 1;
  centerIndex += 1; 
  changeImage();
})





changeImage();