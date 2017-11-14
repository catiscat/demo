import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import App from '../components/App';
import * as actionCreators from '../actions/auth';

function mapState2Props(state) {
  return {
    ...state.store.settings
  };
}

function mapDispatch2Props(dispatch) {
  const actions = bindActionCreators(actionCreators, dispatch);
  return {
    onLogout: actions.logout
  };
}

export default connect(mapState2Props, mapDispatch2Props)(App);
