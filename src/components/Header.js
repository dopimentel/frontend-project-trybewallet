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
  totalValue: wallet.expenses.reduce((acc, cur) => {
    const { currency } = cur;
    const { ask } = cur.exchangeRates[currency];
    return acc + (parseFloat(cur.value) * parseFloat(ask));
  }, 0).toFixed(2),
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  totalValue: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Header);
