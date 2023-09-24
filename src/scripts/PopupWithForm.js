import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, { handleFormSubmit }) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._inputList = this._popup.querySelectorAll(".form__input");
    this._popupForm = this._popup.querySelector(".form");
    this._popupButtonSubmit = this._popup.querySelector(
      ".popup__submit-button"
    );
  }

  _getInputValues() {
    this._formValues = {};
    this._inputList.forEach(
      (input) => (this._formValues[input.name] = input.value)
    );
    return this._formValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popup.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
    });
  }

  closePopup() {
    super.closePopup();
    this._popupForm.reset();
  }

  renderLoading(isLoading) {
    if (isLoading) {
      this._popupButtonSubmit.textContent = "Сохранение...";
    } else {
      this._popupButtonSubmit.textContent = this._popupButtonSubmit.value;
    }
  }
}
