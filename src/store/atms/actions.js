import { getAtmsByCity } from 'Services/api/atms';

const initAtms = (atms) => {
  return {
    type: 'INIT_ATMS',
    atms
  }
}

export const fetchAtms = () => {
  return async (dispatch) => {
    const { data } = await getAtmsByCity();
    dispatch(initAtms(data))
  }
}