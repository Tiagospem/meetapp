export function setDate(date) {
  return {
    type: '@main/SET_DATE',
    payload: { date }
  }
}

export function removeDate() {
  return {
    type: '@main/REMOVE_DATE'
  }
}
