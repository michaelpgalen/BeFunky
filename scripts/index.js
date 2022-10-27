// Responsive Menu
function toggleResponsive(x) {
    let topNav = document.getElementById("topnav");
    if (topNav.className === "topnav") {
      topNav.className += " open";
    } else {
      topnav.className = "topnav";
    }
    x.classList.toggle("change");

  } 