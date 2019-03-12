export const currenciesHasErrored = (bool) => {
  return {
      type: 'CURRENCIES_HAS_ERRORED',
      hasErrored: bool
  };
}

export const currenciesIsLoading = (bool) => {
  return {
      type: 'CURRENCIES_IS_LOADING',
      isLoading: bool
  };
}

export function currenciesFetchDataSuccess(currency) {
  return {
      type: 'CURRENCIES_FETCH_DATA_SUCCESS',
      currency
  };
}

export function currenciesFetchData(url) {
  return (dispatch) => {
    dispatch(currenciesIsLoading(true));

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        dispatch(currenciesIsLoading(false));
          return response;
      })
        .then((response) => response.json())
        .then((items) => dispatch(currenciesFetchDataSuccess(items)))
        .catch(() => dispatch(currenciesHasErrored(true)));
  };
}