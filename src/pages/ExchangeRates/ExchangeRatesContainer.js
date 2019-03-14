import { connect } from 'react-redux';

import ExchangeRates from './ExchangeRates';
import { fetchCurrencies, fetchCurrenciesByDate } from '../../app/store/currencies/actions';

const mapStateToProps = ({ currencies }) => {
  return {
    currencies
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: () => dispatch(fetchCurrencies()),
    fetchDataByDate: (date) => dispatch(fetchCurrenciesByDate(date))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ExchangeRates);
