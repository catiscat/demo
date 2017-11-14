import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UserForm from '../common/UserForm';

export default class RegisterPage extends Component {

  static propTypes = {
    onRegister: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  getRegisterForm() {
    const { errors } = this.state;
    const { onRegister } = this.props;
    return (
      <UserForm
        actionType="register"
        errors={errors}
        handleSubmit={onRegister}
      />
    );
  }

  render() {
    return this.getRegisterForm();
  }
}