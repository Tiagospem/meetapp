import { Alert } from 'react-native'
import { all, takeLatest, put, call } from 'redux-saga/effects'
import api from '~/services/api'
import { signInSuccess, signFailure, signUpSuccess } from './actions'

/**
 * @param payload
 * use function* with asterisk to
 * async function and yield as same await
 */
export function* signIn({ payload }) {
  try {
    const { email, password } = payload
    const response = yield call(api.post, 'sessions', { email, password })
    const { token, user } = response.data
    api.defaults.headers.Authorization = `Bearer ${token}`
    console.tron.log('debug', response)
    yield put(signInSuccess(token, user))
    //history.push('/dashboard');
  } catch (e) {
    Alert.alert('Falha na autenticação', 'verifique seus dados!')
    yield put(signFailure())
  }
}

export function* signUp({ payload }) {
  try {
    const { name, email, password } = payload
    yield call(api.post, 'users', {
      name,
      email,
      password
    })
    Alert.alert(
      'Sucesso',
      'Cadastro efetuado com sucesso, efetue login com seus dados de acesso!'
    )
    yield put(signUpSuccess())
    //history.push('/');
  } catch (e) {
    Alert.alert('Falha no cadastro', 'verifique seus dados!')
    yield put(signFailure())
  }
}

/**
 * @param payload
 * intercepts saga actions to set
 * token header to API requests
 */
export function setToken({ payload }) {
  if (!payload) {
    return
  }
  const { token } = payload.auth
  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`
  }
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp)
])
