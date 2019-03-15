import { connect } from 'react-redux';
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

export default connect(mapStateToProps, mapDispatchToProps)(ATMs);
