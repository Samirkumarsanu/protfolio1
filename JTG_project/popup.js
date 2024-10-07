function showPopup() {
    const popup = document.getElementById("popup");
    popup.style.display = "block";
  
    // Add event listener to close the popup when the user clicks outside
    popup.addEventListener("click", function (event) {
      if (event.target === popup) {
        popup.style.display = "none";
      }
    });
  }