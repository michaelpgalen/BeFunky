// Responsive Menu
function toggleResponsive(menuHam) {
    let topNav = document.getElementById("topnav");
    if (topNav.className === "topnav") {
      topNav.className += " open";
    } else {
      topnav.className = "topnav";
    }
    menuHam.classList.toggle("change");
  } 