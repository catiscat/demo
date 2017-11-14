import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Table, Column, Cell, HeaderCell } from 'rsuite-table';

export default class UserListPage extends Component {
  static propTypes = {
    data: PropTypes.array,
    status: PropTypes.string,
    onFetchUsers: PropTypes.func,
    userList: PropTypes.array,
  }

  componentDidMount() {
    const { onFetchUsers } = this.props;
    onFetchUsers();
  }

  render() {
    const { userList } = this.props;
    console.log(userList,"userListuserList")
    return (
      <div className="page-content">
        <Table
          height={500}
          data={userList}
          headerHeight={40}
          rowHeight={40}
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

