import produce from 'immer'

const INITIAL_STATE = {
  date: null
}

export default function main(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@main/SET_DATE': {
        draft.date = action.payload.date
        break
      }
      case '@main/REMOVE_DATE': {
        draft.date = null
        break
      }
      default:
    }
  })
}
