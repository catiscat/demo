import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions/register';
import { RegisterPage } from '../../components/Register';

function mapState2Props(state) {
  return {
    ...state.store.register
  };
}

function mapDispatch2Props(dispatch) {
  const actions = bindActionCreators(actionCreators, dispatch);
  return {
    onRegister: actions.register
  };
}

export default connect(mapState2Props, mapDispatch2Props)(RegisterPage);
