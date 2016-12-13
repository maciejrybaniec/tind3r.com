import { observable, transaction, computed, reaction } from 'mobx'
import _ from 'lodash'
import User from '../models/User'
import Data from '../data'

class UserStore {
  @observable users = []
  @observable message = null
  @observable isLoading = true;
  @observable needFb = false;

  constructor() {
    this.fetch()

    reaction(
      () => this.all.length,
      (length) => {
        if (length <= 3) {
          this.fetch()
        }
      }
    )
  }

  fetch() {
    Data.fetch().then(resp => {
      console.log(resp);
      if (!resp.results.length) {
        this.message = resp.message
        return
      }

      transaction(() => {
        _.each(resp.results, res => this.updateUser(res))
        this.isLoading = false
      })
    }).catch(resp => {
      this.needFb = true
      this.isLoading = false
    })
  }

  updateUser(json) {
    if (_.find(this.users, { id: json._id })) {
      return
    }

    const user = new User(this, json._id)
    user.setFromJson(json)
    this.users.push(user)
  }

  @computed get first() {
    return _.head(this.all)
  }

  @computed get tail() {
    return _.tail(this.all)
  }

  @computed get all() {
    return _.filter(this.users, { done: 0 })
  }
}

export default UserStore
