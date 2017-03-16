 //* @flow */

import { action, observable } from 'mobx';

import updateService from '../services/updateService';

class MatchStore {
  subscriptionId: string;
  @observable unreadMatches: number;

  handleMatchUpdate(matchesCount: number) {
    unreadMatches = matchesCount;
  }

  @action initUpdate() {
    updateService.subscribeToSource(this.handleMatchUpdate);
  }

  @action stopUpdate() {
    if (this.subscriptionId) {
      updateService.unsubscribe(this.subscriptionId);
    }
  }
}

export default new MatchStore();
