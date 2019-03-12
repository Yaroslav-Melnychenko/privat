const initState = {
  currency: [
    {
      currency: 'USD',
      saleRateNB: 26.3891670,
      purchaseRateNB: 26.3891670,
    },
    {
      currency: 'EUR',
      saleRateNB: 29.7432300,
      purchaseRateNB: 29.7432300,
    }
  ]
};

const currencyReducer = (state = initState) => {
  return state;
}

export default currencyReducer;