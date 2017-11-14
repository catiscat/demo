import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Field } from 'form-lib';
import { SchemaModel, StringType } from 'rsuite-schema';
import {
  Button, FormGroup, HelpBlock,
  InputGroup, IconFont
} from 'rsuite';
import { CustomField } from './CustomField';

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
  }

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
          <CustomField
            name="username"
            icon="user"
            error={errors.username}
            placeholder="用户名"
          />
          <CustomField
            name="password"
            icon="lock"
            error={errors.password}
            placeholder="密码"
            type="password"
          />
          <Button shape="primary" block size="lg" onClick={this.handleSubmitData}>
            {actionType === 'login' ? '登陆' : '注册'}
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
    handleSubmit(formData);
  }

  render() {
    return this.getUserForm();
  }

}
