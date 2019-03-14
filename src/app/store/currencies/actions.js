import { getCurrentCashRate } from 'Services/api/currency';

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