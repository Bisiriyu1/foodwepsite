let open = document.getElementById("menu");
let box = document.getElementsByClassName("container");

let isMenuOpen = false;

// Function to toggle the menu state
function toggleMenu() {
  if (isMenuOpen) {
    // Close the menu
    open.textContent = "close";
    box[0].style.display = "flex";
  } else {
    // Open the menu
   open.textContent = "menu";
   box[0].style.display = "none";
  }
  
  // Toggle the menu state
  isMenuOpen = !isMenuOpen;
}

// Add a click event listener to the button
menu.addEventListener('click', toggleMenu);













