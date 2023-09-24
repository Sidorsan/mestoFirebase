export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._page = document.querySelector(".page");
  }
  openPopup() {
    this._popup.classList.add("popup_opened");
    this._page.addEventListener("keydown", this._handleEscClose);
  }
  
  closePopup() {
    this._popup.classList.remove("popup_opened");
    this._page.removeEventListener("keydown", this._handleEscClose);
  }

  _handleEscClose = (evt) => {
    if (evt.key === "Escape") {
      this.closePopup();
    }
  };

  setEventListeners() {
    this._popup.addEventListener("mousedown", (evt) => {
      if (evt.target.classList.contains("popup_opened")) {
        this.closePopup();
      }
      if (evt.target.classList.contains("popup__close")) {
        this.closePopup();
      }
    });
  }
}
