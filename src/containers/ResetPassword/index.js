import React, { Component } from 'react';
import Frame from '../../components/common/Frame';
import ResetPassword from './ResetPassword';

class ResetPasswordView extends Component {
  render() {
    return (
      <Frame
        hideSidebar
      >
        {this.props.children || <ResetPassword />}
      </Frame>
    );
  }
}

export default ResetPasswordView;
