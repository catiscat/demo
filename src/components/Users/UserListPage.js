import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Table, Column, Cell, HeaderCell } from 'rsuite-table';

export default class UserListPage extends Component {
  static propTypes = {
    data: PropTypes.array,
    status: PropTypes.string,
    onFetchUsers: PropTypes.func,
  }

  componentDidMount() {
    const { onFetchUsers } = this.props;
    onFetchUsers();
  }

  render() {
    const { userList } = this.props;
    return (
      <div className="page-content">
        <Table
          height={500}
          data={userList}
          headerHeight={40}
          rowHeight={40}
        >
          <Column width={200} fixed resizable>
            <HeaderCell>Type</HeaderCell>
            <Cell dataKey="type" />
          </Column>
          <Column width={120} resizable>
            <HeaderCell>ID</HeaderCell>
            <Cell dataKey="id" />
          </Column>
        </Table>
      </div>
    );
  }
}

