import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UserForm from '../common/UserForm';

export default class LoginPage extends Component {

  static propTypes = {
    onLogin: PropTypes.func.isRequired,
  }

  getLoginForm() {
    const { onLogin } = this.props;
    return (
      <UserForm
        actionType="login"
        handleSubmit={onLogin}
      />
    );
  }

  render() {
    return this.getLoginForm();
  }
}
