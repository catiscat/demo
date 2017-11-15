import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UserForm from '../common/UserForm';

export default class ResetPasswordPage extends Component {

  static propTypes = {
    onResetPassword: PropTypes.func.isRequired,
  }

  getResetPasswordForm() {
    const { onResetPassword } = this.props;
    return (
      <UserForm
        actionType="resetPassword"
        handleSubmit={onResetPassword}
      />
    );
  }

  render() {
    return this.getResetPasswordForm();
  }
}
