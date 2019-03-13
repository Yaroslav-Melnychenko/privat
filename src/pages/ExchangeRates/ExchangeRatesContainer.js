import { connect } from 'react-redux';

import ExchangeRates from './ExchangeRates';
import { fetchCurrencies } from '../../app/store/currencies/actions';

const mapStateToProps = ({ currencies }) => {
  return {
    currencies
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: () => dispatch(fetchCurrencies())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ExchangeRates);
