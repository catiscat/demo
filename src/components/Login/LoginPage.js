import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UserForm from '../common/UserForm';

export default class LoginPage extends Component {

  static propTypes = {
    onLogin: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  getLoginForm() {
    const { errors } = this.state;
    const { onLogin } = this.props;
    return (
      <UserForm
        actionType="login"
        errors={errors}
        handleSubmit={onLogin}
      />
    );
  }

  render() {
    return this.getLoginForm();
  }
}