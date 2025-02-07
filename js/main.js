document.addEventListener("DOMContentLoaded", () => {
  const popupOverlay = document.querySelector(".popup-overlay");
  const popupBtn = document.querySelector(".popup-btn");
  const closePopupBtn = document.querySelector(".close-popup");

  const togglePopup = () => popupOverlay.classList.toggle("active");

  if (popupBtn && closePopupBtn && popupOverlay) {
    popupBtn.addEventListener("click", togglePopup);

    closePopupBtn.addEventListener("click", togglePopup);

    popupOverlay.addEventListener("click", (event) => {
      if (event.target === popupOverlay) togglePopup();
    });
  }
});
