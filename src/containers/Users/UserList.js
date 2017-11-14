import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions/users';
import { UserListPage } from '../../components/Users';


function mapState2Props(state) {
  const currentStatus = state.store.users;
  return {
    userList: currentStatus.data,
    status: currentStatus.status
  };
}

function mapDispatch2Props(dispatch) {
  const actions = bindActionCreators(actionCreators, dispatch);
  return {
    onFetchUsers: actions.getUsers
  };
}

export default connect(mapState2Props, mapDispatch2Props)(UserListPage);
