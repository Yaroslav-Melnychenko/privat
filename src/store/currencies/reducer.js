const currencyReducer = (state = [], action) => {
  switch (action.type) {
    case 'INIT_CURRENCY':
      return action.currencies;
    default:
      return state;
  }
}

export default currencyReducer;