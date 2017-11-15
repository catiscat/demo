import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Table, Column, Cell, HeaderCell } from 'rsuite-table';
import * as ResponseStatus from '../../constants/ResponseStatus';

export default class UserListPage extends Component {
  static propTypes = {
    onFetchUsers: PropTypes.func,
    userList: PropTypes.object,
  }

  static contextTypes = {
    router: PropTypes.object,
  };

  componentDidMount() {
    const { onFetchUsers } = this.props;
    onFetchUsers({}, (response) => {
      if (response.status === ResponseStatus.FAILURE) {
        if (response.errno === ResponseStatus.UNAUTHORIZED) {
          this.context.router.push('/login');
        }
      }
    });
  }

  render() {
    const { userList } = this.props;
    const loading = userList && userList.data ? false : true;
    return (
      <div className="page-content">
        <Table
          height={950}
          data={userList && userList.data}
          headerHeight={40}
          rowHeight={40}
          loading={loading}
        >
          <Column width={200}>
            <HeaderCell>ID</HeaderCell>
            <Cell dataKey="id" />
          </Column>
          <Column width={200}>
            <HeaderCell>用户名</HeaderCell>
            <Cell dataKey="username" />
          </Column>
          <Column width={200}>
            <HeaderCell>昵称</HeaderCell>
            <Cell dataKey="nick" />
          </Column>
          <Column width={200}>
            <HeaderCell>创建时间</HeaderCell>
            <Cell dataKey="createdAt" />
          </Column>
          <Column width={200}>
            <HeaderCell>更新时间</HeaderCell>
            <Cell dataKey="updatedAt" />
          </Column>
          <Column width={200}>
            <HeaderCell>最后登陆时间</HeaderCell>
            <Cell dataKey="last" />
          </Column>
        </Table>
      </div>
    );
  }
}

