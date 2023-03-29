import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addExpense, fetchAwesomeAPI } from '../redux/actions';

class WalletForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      description: '',
      currency: '',
      method: '',
      tag: '',
      exchangeRates: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  render() {
    const { value, description, currency, method, tag } = this.state;
    const { currencies, dispatch, exchangeRates } = this.props;
    return (
      <>
        <div>WalletForm</div>
        <form
          onSubmit={ (e) => {
            e.preventDefault();
            console.log('cliclou');
            dispatch(fetchAwesomeAPI());
            dispatch(addExpense(this.state, exchangeRates));
            this.setState({
              value: '',
              description: '',
              currency: '',
              method: '',
              tag: '',
            });
          } }
        >
          <label>
            Valor:
            <input
              data-testid="value-input"
              type="number"
              name="value"
              value={ value }
              onChange={ this.handleChange }
            />
          </label>
          <br />
          <label>
            Descrição:
            <input
              data-testid="description-input"
              type="text"
              name="description"
              value={ description }
              onChange={ this.handleChange }
            />
          </label>
          <br />
          <label htmlFor="currency">Moeda:</label>
          <select
            data-testid="currency-input"
            id="currency"
            name="currency"
            value={ currency }
            onChange={ this.handleChange }
          >
            {currencies.map((currencyElem) => (
              <option key={ currencyElem } value={ currencyElem }>
                {currencyElem}
              </option>
            ))}
          </select>

          <label htmlFor="method">Metodo de pagamento:</label>
          <select
            data-testid="method-input"
            id="method"
            name="method"
            value={ method }
            onChange={ this.handleChange }
          >
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>

          <label htmlFor="tag">Categoria:</label>
          <select
            data-testid="tag-input"
            id="tag"
            name="tag"
            value={ tag }
            onChange={ this.handleChange }
          >
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>

          <button type="submit">Adicionar despesa</button>
        </form>
      </>
    );
  }
}

const mapStateToProps = ({ wallet, exchangeRates }) => ({
  currencies: wallet.currencies,
  expenses: wallet.expenses,
  exchangeRates,
});

WalletForm.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  dispatch: PropTypes.func.isRequired,
  exchangeRates: PropTypes.shape({
  }).isRequired,
};

export default connect(mapStateToProps)(WalletForm);
