import { getCurrentCashRate, getCurrentCashByDate } from 'Services/api/currency';

const initCurrency = (currencies) => {
  return {
    type: 'INIT_CURRENCY',
    currencies
  }
}

export const fetchCurrencies = () => {
  return async (dispatch) => {
    const { data } = await getCurrentCashRate();
    dispatch(initCurrency(data))
  }
}

export const fetchCurrenciesByDate = (timeDate) => {
  return async (dispatch) => {
    const { data } = await getCurrentCashByDate(timeDate);
    dispatch(initCurrency(data));
  }
}