import { connect } from 'react-redux';
import { fetchCurrencies, fetchCurrenciesByDate } from 'Store/currencies/actions';
import ExchangeRates from './ExchangeRates';

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
