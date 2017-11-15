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
    formData: PropTypes.object,
    actionType: PropTypes.string.isRequired,
    handleSubmit: PropTypes.func.isRequired,
  }

  static contextTypes = {
    router: PropTypes.object,
    events: PropTypes.object,
  };

  constructor(props) {
    super(props);
    this.state = {
      errors: {},
      formData: {},
    };
  }

  componentWillReceiveProps(nextProps) {
    const { formData } = nextProps;
    this.setState({
      formData,
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
          checkDelay={200}
          onChange={(value) => { this.handleChangeFormData(value) }}
          onCheck={(errors) => { this.setState({ errors }) }}
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

  handleLoginResponse(response) {
    if (response.status === ResponseStatus.SUCCESS) {
      sessionStorage.setItem('profile', encodeURIComponent(JSON.stringify(response)));
      this.context.router.push('/users');
    } else {
      this.setState({
        errors: {
          password: response.err && response.err.message
        }
      });
    }
  }

  handleRegisterError(response) {
    const config = [
      {
        name: 'MissingPasswordError',
        value: 'password'
      },
      {
        name: 'MissingUsernameError',
        value: 'username'
      },
      {
        name: 'UserExistsError',
        value: 'username'
      }
    ];

    config.map((item) => {
      if (item.name === response.name) {
        this.setState({
          errors: { [item.value]: response.message }
        });
      }
    });
  }

  handleRegisterResponse(response) {
    if (!response.message) {
      this.context.router.push('/login');
    } else {
      this.handleRegisterError(response);
    }
  }

  handleResetPasswordResponse(response) {
    if (response.errno === 0) {
      sessionStorage.removeItem('profile');
      this.context.events.onLogout();
      this.context.router.push('/login');

    } else {
      this.setState({
        errors: response.msg
      });
    }
  }

  handleSubmitResponse = (response) => {
    const { actionType } = this.props;
    if (actionType === 'login') {
      this.handleLoginResponse(response);
    } else if (actionType === 'register') {
      this.handleRegisterResponse(response);
    } else if (actionType === 'resetPassword') {
      this.handleResetPasswordResponse(response);
    }
  }

  handleSubmitData = () => {
    const { handleSubmit } = this.props;
    const { formData } = this.state;
    handleSubmit(formData, (response) => {
      this.handleSubmitResponse(response);
    });
  }

  render() {
    return this.getUserForm();
  }

}
