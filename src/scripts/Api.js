export class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;

  }

  _checkJson(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getInitialUser() {
    return fetch(`https://${this._baseUrl}/users/me`, {
      method: "GET",
      headers: this._headers,
    }).then((res) => this._checkJson(res));
  }

  getInitialCard() {
    return fetch(`https://mesto.${this._baseUrl}/cards`, {
      method: "GET",
      headers: this._headers,
    }).then((res) => this._checkJson(res));
  }

getAllNeededData() {
  return Promise.all([this.getInitialUser(), this.getInitialCard()])
}




  postInitialCards(data) {
    return fetch(`https://mesto.${this._baseUrl}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        link: data.link,
      }),
    }).then((res) => this._checkJson(res));
  }

  patchUser(data) {
    return fetch(`https://${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        about: data.about,
      }),
    }).then((res) => this._checkJson(res));
  }

  deleteCard(id) {
    return fetch(`https://mesto.${this._baseUrl}/cards/${id}`, {
      method: "DELETE",
      headers: this._headers,
    }).then((res) => this._checkJson(res));
  }

  likeCard(id) {
    return fetch(`https://mesto.${this._baseUrl}/cards/${id}/likes`, {
      method: "PUT",
      headers: this._headers,
    }).then((res) => this._checkJson(res));
  }

  disLikeCard(id) {
    return fetch(`https://mesto.${this._baseUrl}/cards/${id}/likes`, {
      method: "DELETE",
      headers: this._headers,
    }).then((res) => this._checkJson(res));
  }

  patchAvatar(data) {
    return fetch(`https://mesto.${this._baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar: data.avatar,
      }),
    }).then((res) => this._checkJson(res));
  }
}
