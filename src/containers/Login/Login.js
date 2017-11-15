import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions/auth';
import { LoginPage } from '../../components/Auth';

function mapState2Props(state) {
  return {
    ...state.store.auth
  };
}

function mapDispatch2Props(dispatch) {
  const actions = bindActionCreators(actionCreators, dispatch);
  return {
    onLogin: actions.login
  };
}

export default connect(mapState2Props, mapDispatch2Props)(LoginPage);
