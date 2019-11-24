import { takeLatest, call, put, all } from 'redux-saga/effects';
import { ToastActionsCreators } from 'react-native-redux-toast';

import api from '~/services/api';

import { updateProfileSuccess, updateProfileFailure } from './actions';

export function* updateProfile({ payload }) {
  try {
    const { name, email, ...rest } = payload.data;

    const profile = {
      name,
      email,
      ...(rest.oldPassword ? rest : {}),
    };

    const response = yield call(api.put, 'user-microservice/users', profile);

    yield put(
      ToastActionsCreators.displayInfo(
        'Sucesso! Perfil atualizado com sucesso',
        5000
      )
    );

    yield put(updateProfileSuccess(response.data));
  } catch (err) {
    yield put(
      ToastActionsCreators.displayError(
        'Falha na atualização! Houve um erro na atualização do perfil, verifique seus dados',
        5000
      )
    );

    yield put(updateProfileFailure());
  }
}

export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)]);
