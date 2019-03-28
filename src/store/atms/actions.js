import { getAtmsByCity } from 'Services/api';
import { INIT_ATMS } from './constants';

const initAtms = (atms) => {
  return {
    type: INIT_ATMS,
    atms
  }
}

export const fetchAtms = () => {
  return async (dispatch) => {
    const { data } = await getAtmsByCity();
    dispatch(initAtms(data))
  }
}