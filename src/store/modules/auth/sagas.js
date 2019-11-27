import { takeLatest, call, put, all } from 'redux-saga/effects';
import { ToastActionsCreators } from 'react-native-redux-toast';

import api from '~/services/api';

import { signInSuccess, signFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, 'user-microservice/sessions', {
      email,
      password,
    });

    const { token, user } = response.data;

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signInSuccess(token, user));
  } catch (err) {
    yield put(
      ToastActionsCreators.displayError(
        'Falha na autenticação! Houve um erro no login, verifique seus dados',
        5000
      )
    );

    yield put(signFailure());
  }
}

export function* signUp({ payload, navigation }) {
  try {
    const { name, email, password, confirmPassword } = payload;

    yield call(api.post, 'user-microservice/users', {
      name,
      email,
      password,
      confirmPassword,
    });

    yield put(
      ToastActionsCreators.displayInfo(
        'Sucesso! Cadastro realizado com sucesso',
        2000
      )
    );

    navigation.navigate('SignIn');
  } catch (err) {
    yield put(
      ToastActionsCreators.displayError(
        'Falha no cadastro! Houve um erro no cadastro, verifique seus dados',
        5000
      )
    );

    yield put(signFailure());
  }
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
]);
