export class UserInfo {
  constructor(nameSelector, jobSelector, avatar) {
    this._nameSelector = nameSelector;
    this._jobSelector = jobSelector;
    this._avatar = avatar
   
  }
  getUserInfo() {
    const userInfo = {
      profileName: this._nameSelector.textContent,
      job: this._jobSelector.textContent,
    };
    return userInfo;
  }

  setUserInfo(data) {
    this._nameSelector.textContent = data.name;
    this._jobSelector.textContent = data.about;
    this._avatar.src = data.avatar;
    this._nameSelector.id = data._id; 
  }
}
