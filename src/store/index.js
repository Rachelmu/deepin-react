import { observable, computed, action, useStrict } from 'mobx'

class Store {
  constructor() {

  }

  @observable loginStatus = false

  @action changeLoginStatus(option) {
    this.loginStatus = option
  }
}


export default new Store()