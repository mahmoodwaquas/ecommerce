const sidenav = document.querySelector(".side-navbar");

function showNavbar() {
  if (sidenav) {
    sidenav.style.left = "0";
  }
}

function hideNavbar() {
  if (sidenav) {
    sidenav.style.left = "-60%";
  }
}
