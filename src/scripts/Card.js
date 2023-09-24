export class Card {
  constructor(
    { item, handleCardClick, handleDeleteIconClick, nameInputValue, api },
    cardSelector
  ) {
    
    this._name = item.name;
    this._link = item.link;
    this._cardId = item._id;
    this.likes = item.likes;
    this._apiCards = api;
    this._counter = item.likes.length;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._handleDeleteIconClick = handleDeleteIconClick;
    this._ownerId = item.owner._id;
    this._userId = nameInputValue.id;
    this._cardElement = this._getTemplate();
    this._cardImage = this._cardElement.querySelector(".element__image");
    this._cardTitle = this._cardElement.querySelector(".element__title");
    this._elementCounter = this._cardElement.querySelector(".element__counter");
    this._elementDelete = this._cardElement.querySelector(".element__delete");
    this._elementLike = this._cardElement.querySelector(".element__like");
  }
  _getTemplate() {
    const itemTemplateContent = document
      .querySelector(this._cardSelector)
      .content.querySelector(".element__item")
      .cloneNode(true);
    return itemTemplateContent;
  }

  createCard() {
    this._checkId();
    this._checkingLikesWhenLoadingPage();
    this._likeCounter();
    this._setEventListeners();
    this._cardElement.id = this._cardId;
    this._cardImage.src = this._link;
    this._cardTitle.textContent = this._name;
    this._cardImage.alt = this._name;
    return this._cardElement;
  }

  _checkId() {
    if (this._ownerId !== this._userId) {
      this._elementDelete.remove();
    }
  }

  _likeCounter() {
    if (this._counter > 0) {
      this._elementCounter.textContent = this._counter;
    } else {
      this._elementCounter.textContent = "";
    }
  }

  _userLikeCheck() {
    const userWhoLiked = this.likes.some((user) => user._id === this._userId);
    return userWhoLiked;
  }

  _checkingLikesWhenLoadingPage() {
    if (!this._userLikeCheck()) {
      this._elementLike.classList.remove("element__like_active");
    } else {
      this._elementLike.classList.add("element__like_active");
    }
  }

  _handleLikeClick() {
    if (this._userLikeCheck()) {
      this._apiCards
        .disLikeCard(this._cardId)
        .then((data) => (this.likes = data.likes))
        .then((data) => {
          this._counter = data.length;
          this._likeCounter();
        })
        .then(this._elementLike.classList.remove("element__like_active"))
        .catch((err) => alert(err));
    } else {
      this._apiCards
        .likeCard(this._cardId)
        .then((data) => (this.likes = data.likes))
        .then((data) => {
          this._counter = data.length;
          this._likeCounter();
        })
        .then(this._elementLike.classList.add("element__like_active"))
        .catch((err) => alert(err));
    }
  }

  _setEventListeners() {
    if (this._cardElement.querySelector(".element__delete")) {
      this._elementDelete.addEventListener("click", () => {
        this._handleDeleteIconClick();
      });
    }

    this._elementLike.addEventListener("click", () => {
      this._handleLikeClick();
    });

    this._cardImage.addEventListener("click", () => {
      this._handleCardClick({});
    });
  }
}
