import React, { Component } from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';
import { Form } from 'form-lib';
import { SchemaModel, StringType } from 'rsuite-schema';
import { Button } from 'rsuite';
import { CustomField } from './CustomField';
import * as ResponseStatus from '../../constants/ResponseStatus';

const UserFormModel = SchemaModel({
  username: StringType().isEmail('邮箱格式错误').isRequired('请输入邮箱'),
  password: StringType().rangeLength(6, 30, '密码必须是6-30个字符').isRequired('请输入密码'),
});

export default class UserForm extends Component {

  static propTypes = {
    errors: PropTypes.object,
    formData: PropTypes.object,
    actionType: PropTypes.string.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    router: PropTypes.object,
  }

  static contextTypes = {
    router: PropTypes.object,
  };

  constructor(props) {
    super(props);
    this.state = {
      errors: {},
      formData: {},
    };
  }

  componentWillReceiveProps(nextProps) {
    const { formData, errors } = nextProps;
    this.setState({
      formData,
      errors,
    });
  }

  getButtonText() {
    const config = [
      {
        value: 'login',
        label: '登陆'
      },
      {
        value: 'register',
        label: '注册'
      },
      {
        value: 'resetPassword',
        label: '修改密码'
      }
    ];
    const { actionType } = this.props;
    let text;
    config.map((item) => {
      if (item.value === actionType) {
        text = item.label;
      }
    });
    return text;
  }

  getUserForm() {
    const { errors } = this.state;
    const { actionType } = this.props;
    return (
      <div className="user-form">
        <Form
          ref={(ref) => {
            this.form = ref;
          }}
          onChange={(value) => { this.handleChangeFormData(value) }}
          onCheck={(errors) => {
            this.setState({ errors });
          }}
          defaultValues={this.state.formData}
          model={UserFormModel}
          checkTrigger="blur"
        >
          {
            actionType === 'resetPassword' ? null :
              <CustomField
                name="username"
                icon="user"
                error={errors.username}
                placeholder="用户名"
              />
          }

          {
            actionType === 'register' ?
              <CustomField
                name="nick"
                icon="user-md"
                error={errors.nick}
                placeholder="昵称"
              />
              : null
          }
          <CustomField
            name="password"
            icon="lock"
            error={errors.password}
            placeholder="密码"
            type="password"
          />
          {
            actionType === 'login' ?
              <Link to={'/register'} className="forget-password">申请账户</Link>
              :
              null
          }

          <Button shape="primary" block size="lg" onClick={this.handleSubmitData}>
            {this.getButtonText()}
          </Button>
        </Form>
      </div>
    );
  }

  handleChangeFormData(value) {
    const { formData } = this.state;
    this.setState({
      formData: Object.assign({}, formData, value)
    });
  }

  handleSubmitData = () => {
    const { handleSubmit } = this.props;
    const { formData } = this.state;
    handleSubmit(formData, (response) => {
      if (response.status = ResponseStatus.SUCCESS) {
        sessionStorage.setItem('profile', encodeURIComponent(JSON.stringify(response.data)));
        this.context.router.push('/users');
      } else {
        this.setState({
          errors: response.errors
        });
      }
    });
  }

  render() {
    return this.getUserForm();
  }

}
