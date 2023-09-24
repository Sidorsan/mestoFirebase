import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._elementImageBigPicture = document.querySelector(".popup__image");
    this._elementTitleBigPicture = document.querySelector(
      ".popup__title_big_picture"
    );
    
  }

  openPopup(item) {
    this._elementImageBigPicture.src = item.link;
    this._elementImageBigPicture.alt = item.name;
    this._elementTitleBigPicture.textContent = item.name;
    super.openPopup();
  }
}
