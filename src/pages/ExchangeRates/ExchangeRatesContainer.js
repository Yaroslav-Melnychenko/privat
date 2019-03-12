import { connect } from 'react-redux';

import ExchangeRates from './ExchangeRates';

const mapStateToProps = ({ currencies }) => {
  return {
    currencies
  };
};

export default connect(mapStateToProps)(ExchangeRates);
