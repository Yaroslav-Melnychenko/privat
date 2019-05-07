import { connect } from 'react-redux';
import { compose } from 'recompose';
import { GoogleApiWrapper } from 'google-maps-react';
import { fetchAtms } from 'Store/atms/actions';
import ATMs from './ATMs';

const mapStateToProps = ({ atms }) => {
  return {
    ...atms
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: () => dispatch(fetchAtms()),
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  GoogleApiWrapper({
    apiKey: (process.env.REACT_APP_GOOGLE_MAPS_API_KEY)
  })
)(ATMs);
