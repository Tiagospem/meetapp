export function setSubscriptions(subscriptions) {
  return {
    type: '@main/SET_SUBSCRIPTIONS',
    payload: { subscriptions }
  }
}

export function removeSubscription(id) {
  return {
    type: '@main/REMOVE_SUBSCRIPTION',
    payload: { id }
  }
}
