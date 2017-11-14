import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions/login';
import { LoginPage } from '../../components/Login';

function mapState2Props(state) {
  const currentStatus = state.store.login;
  return {
    status: currentStatus.status
  };
}

function mapDispatch2Props(dispatch) {
  const actions = bindActionCreators(actionCreators, dispatch);
  return {
    onLogin: actions.login
  };
}

export default connect(mapState2Props, mapDispatch2Props)(LoginPage);
