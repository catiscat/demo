import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UserForm from '../common/UserForm';

export default class RegisterPage extends Component {

  static propTypes = {
    onRegister: PropTypes.func.isRequired,
  }

  getRegisterForm() {
    const { onRegister } = this.props;
    return (
      <UserForm
        actionType="register"
        handleSubmit={onRegister}
      />
    );
  }

  render() {
    return this.getRegisterForm();
  }
}