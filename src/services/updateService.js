// @flow

import uuid from 'uuid';

import API from '../utils/api';

type SubscribeHandlerType = (unreadMatches: number) => void;

type SubscriberType = {
  id: string,
  handler: SubscribeHandlerType,
};

const updateService = () => {
  let update;
  let lastUpdate;
  let subscribers = [];

  /**
   * Send updated data to subscribers.
   * @param {Object} updateData Updated data.
   * @returns {void} Returns nothing.
   */
  const handleUpdates = (updateData: Object) => {
    subscribers.forEach((s: SubscriberType) => {
      s.handler(updateData);
    });
  };
  /**
   * Update matches by request data.
   * @returns {void} Returns nothing.
   */
  const updateMatches = () => {
    API.get('/updates').then((response) => {
      handleUpdates(response.data);
    });
  }
  /**
   * Stop service update.
   * @returns {void} Returns nothing.
   */
  const stopUpdate = () => {
    clearInterval(update);
    update = 0;
  };
  /**
   * Register subscriber in service.
   * @param {Function} subscribeHandler Update callback to fire.
   * @returns {string} Subscription identifier.
   */
  const subscribeToSource = (subscribeHandler: SubscribeHandlerType) => {
    const subId = uuid.v4();

    subscribers.push({
      id: subId,
      handler: subscribeHandler,
    });

    if (!update) {
      update = setInterval(() => {
        updateMatches();
      }, 2000);
    }

    return subId;
  };
  /**
   * Cancel subscription for provided identifier.
   * @param {string} subscriberId Subscriber identifier.
   * @returns {void} Returns nothing.
   */
  const unsubscribe = (subscriberId: string) => {
    subscribers = subscribers.filter(s => s.id !== subscriberId);
    if (!subscribers.length) {
      stopUpdate();
    }
  };

  return {
    subscribeToSource,
    unsubscribe,
  };
}

export default updateService();
