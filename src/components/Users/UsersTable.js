import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Table, Column, Cell, HeaderCell } from 'rsuite-table';

const propTypes = {
  data: PropTypes.array,
  status: PropTypes.string,
  onFetchUsers: PropTypes.func,
  tableHeight: PropTypes.number.isRequired,
  tableDefaultHeight: PropTypes.number.isRequired,
  frameHeight: PropTypes.number.isRequired,
};

const defaultProps = {
  tableDefaultHeight: 400,
  frameHeight: 140
};

class UsersTable extends Component {

  componentDidMount() {
    const { onFetchUsers } = this.props;
    onFetchUsers();
  }

  handleChangePage = (dataKey) => {
    const { displayLength } = this.state;
  }

  handleChangeLength = (dataKey) => {
    this.setState({
      displayLength: dataKey
    });
  }

  render() {
    const { data = [] } = this.props;
    const { tableHeight, tableDefaultHeight } = this.props;
    return (
      <div className="page-content">
        <Table
          height={tableHeight || tableDefaultHeight}
          data={data}
          headerHeight={40}
          rowHeight={40}
          locale={{}}
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

UsersTable.propTypes = propTypes;
UsersTable.defaultProps = defaultProps;

export default UsersTable;
