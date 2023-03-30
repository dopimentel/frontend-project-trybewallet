import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { removeExpense } from '../redux/actions';

class Table extends Component {
  handleDelete(id) {
    const { dispatch } = this.props;
    dispatch(removeExpense(id));
  }

  render() {
    const { expenses, handleEdit, handleDelete } = this.props;
    console.log(expenses);
    const header = [
      'Descrição',
      'Tag',
      'Método de pagamento',
      'Valor',
      'Moeda',
      'Câmbio utilizado',
      'Valor convertido',
      'Moeda de conversão',
      'Editar/Excluir',
    ];

    return (
      <table>
        <thead>
          <tr>
            {header.map((head) => (
              <th key={ head }>{head}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {expenses
            && expenses.map((expense) => (
              <tr key={ expense.id }>
                <td>{expense.description}</td>
                <td>{expense.tag}</td>
                <td>{expense.method}</td>
                <td>{parseFloat(expense.value).toFixed(2)}</td>
                <td>{expense.exchangeRates[expense.currency].name}</td>
                <td>
                  {parseFloat(
                    expense.exchangeRates[expense.currency].ask,
                  ).toFixed(2)}
                </td>
                <td>
                  {(
                    parseFloat(expense.value)
                    * parseFloat(expense.exchangeRates[expense.currency].ask)
                  ).toFixed(2)}
                </td>
                <td>Real</td>
                <td>
                  <button
                    data-testid="edit-btn"
                    onClick={ () => handleEdit(expense.id) }
                  >
                    Editar
                  </button>
                  <button
                    data-testid="delete-btn"
                    onClick={ () => this.handleDelete(expense.id) }
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = ({ wallet }) => ({
  expenses: wallet.expenses,
});

Table.propTypes = {
  expenses: PropTypes.arrayOf({
    id: PropTypes.number,
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(Table);
