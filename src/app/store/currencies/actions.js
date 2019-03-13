// import { getCurrentCashRate } from 'Services/api/currency';

export const initCurrency = (currencies) => {
  return {
    type: 'INIT_CURRENCY',
    currencies
  }
}

// export async function fetchCurrencies() {
//   return await getCurrentCashRate().then(response => {
//     return response
//   });
// }

export function fetchCurrencies(url = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5') {
  return (dispatch) => {
    fetch(url)
    .then((response) => response.json())
    .then((items) => dispatch(initCurrency(items)));
  };
}