import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UserForm from '../common/UserForm';

export default class ResetPasswordPage extends Component {

  static propTypes = {
    onResetPassword: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  getResetPasswordForm() {
    const { errors } = this.state;
    const { onResetPassword } = this.props;
    return (
      <UserForm
        actionType="resetPassword"
        errors={errors}
        handleSubmit={onResetPassword}
      />
    );
  }

  render() {
    return this.getResetPasswordForm();
  }
}
