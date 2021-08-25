
const hamburger = document.getElementById("hamburger");
const mobileNav = document.getElementById("mobileNav");
const lis = document.getElementById("lis");

hamburger.addEventListener('click', function() {
  if (mobileNav.style.height == '0px'){
    mobileNav.style.height = '250px';
  } else (mobileNav.style.height = '0px')
})
