import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class WalletForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      description: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  render() {
    const { value, description } = this.state;
    const { currencies } = this.props;
    return (
      <>
        <div>WalletForm</div>
        <form onSubmit={ this.handleSubmit }>
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
          <select data-testid="currency-input" id="currency">
            {currencies.map((currency) => (
              <option key={ currency } value={ currency }>
                {currency}
              </option>
            ))}
          </select>
          <label htmlFor="method">Metodo de pagamento:</label>
          <select data-testid="method-input" id="method">
            <option value="method">Dinheiro</option>
            <option value="method">Cartão de crédito</option>
            <option value="method">Cartão de débito</option>
          </select>

          <label htmlFor="tag">Categoria:</label>
          <select data-testid="tag-input" id="tag">
            <option value="tag">Alimentação</option>
            <option value="tag">Lazer</option>
            <option value="tag">Trabalho</option>
            <option value="tag">Transporte</option>

            <option value="tag">Saúde</option>
          </select>

          <button type="submit">Enviar</button>
        </form>
      </>
    );
  }
}

const mapStateToProps = ({ wallet }) => ({
  currencies: wallet.currencies,
});

WalletForm.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps)(WalletForm);
