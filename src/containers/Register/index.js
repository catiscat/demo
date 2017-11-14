import React, { Component } from 'react';
import Frame from '../../components/common/Frame';
import Register from './Register';

class RegisterView extends Component {
  render() {
    return (
      <Frame
        hideSidebar
      >
        {this.props.children || <Register />}
      </Frame>
    );
  }
}

export default RegisterView;
