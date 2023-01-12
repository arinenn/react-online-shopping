import { makeAutoObservable } from 'mobx';

export default class DeviceStorage {
  constructor() {
    this._types = [
      { id: 1, name: 'Fridges' },
      { id: 2, name: 'Phones' },
    ];
    this._brands = [
      { id: 1, name: 'Samsung' },
      { id: 2, name: 'Apple' },
    ];
    this._devices = [
      {
        id: 1,
        name: 'iPhone 12 Pro',
        price: 25000,
        rating: 5,
        img: 'img',
      },
      {
        id: 2,
        name: 'iPhone 12 Pro',
        price: 25000,
        rating: 5,
        img: 'img',
      },
      {
        id: 3,
        name: 'iPhone 12 Pro',
        price: 25000,
        rating: 5,
        img: 'img',
      },
      {
        id: 4,
        name: 'iPhone 12 Pro',
        price: 25000,
        rating: 5,
        img: 'img',
      },
    ];
    makeAutoObservable(this);
  }
  get types() {
    return this._types;
  }
  get brands() {
    return this._brands;
  }
  get devices() {
    return this._devices;
  }
  set types(arr) {
    this._types = arr;
  }
  set brands(arr) {
    this._brands = arr;
  }
  set devices(arr) {
    this._devices = arr;
  }

  setTypes(arr) {
    this.types = arr;
  }
  setBrands(arr) {
    this.brands = arr;
  }
  setDevices(arr) {
    this.devices = arr;
  }
}
