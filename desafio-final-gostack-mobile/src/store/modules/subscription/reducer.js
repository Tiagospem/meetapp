import produce from 'immer'

const INITIAL_STATE = {
  subscriptions: []
}

export default function main(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@main/SET_SUBSCRIPTIONS': {
        draft.subscriptions = action.payload.subscriptions
        break
      }
      case '@main/REMOVE_SUBSCRIPTION': {
        const subscriptions = state.subscriptions.filter(
          item => item.id !== action.payload.id
        )
        console.tron.log(subscriptions)
        draft.subscriptions = subscriptions
        break
      }
      default:
    }
  })
}
