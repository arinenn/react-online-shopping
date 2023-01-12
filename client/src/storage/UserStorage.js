import { makeAutoObservable } from 'mobx';

export default class UserStorage {
  constructor() {
    this._isAuth = false;
    this._user = {};
    makeAutoObservable(this);
  }
  get isAuth() {
    return this._isAuth;
  }
  get user() {
    return this._user;
  }
  set isAuth(bool) {
    this._isAuth = bool;
  }
  set user(obj) {
    this._user = obj;
  }

  setIsAuth(bool) {
    this.isAuth = bool;
  }
  setUser(obj) {
    this.user = obj;
  }
}
