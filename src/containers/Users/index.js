import React, { Component } from 'react';
import Frame from '../../components/common/Frame';
import UserList from './UserList';


class UserListView extends Component {
  render() {
    return (
      <Frame>
        {this.props.children || <UserList />}
      </Frame>
    );
  }
}

export default UserListView;
