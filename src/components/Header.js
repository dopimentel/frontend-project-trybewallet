import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { email, totalValue } = this.props;
    return (
      <header>
        <h1>Header</h1>
        <p data-testid="email-field">{email}</p>
        <p data-testid="total-field">
          {totalValue}
        </p>
        <p data-testid="header-currency-field">BRL</p>
      </header>
    );
  }
}

const mapStateToProps = ({ user, wallet }) => ({
  email: user.email,
  totalValue: wallet.expenses.reduce((acc, cur) => acc + parseInt(cur.value, 10), 0),
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  totalValue: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(Header);
