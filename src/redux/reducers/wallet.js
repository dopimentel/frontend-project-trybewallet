import { SAVE_CURRENCIES, ADD_EXPENSE, REMOVE_EXPENSE } from '../actions';

// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = { currencies: [],
  expenses: [],
  editor: false,
  idToEdit: 0,
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SAVE_CURRENCIES:
    return {
      ...state,
      currencies: Object.keys(action.currencies).filter(
        (currency) => currency !== 'USDT',
      ),
    };
  case ADD_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses,
        { ...action.expense, id: state.expenses.length }],
    };
  case REMOVE_EXPENSE:
    return {
      ...state,
      expenses: state.expenses.filter((expense) => expense.id !== action.id),
    };

  default:
    return state;
  }
};

export default wallet;

// expenses: [{
//   "id": 0,
//   "value": "3",
//   "description": "Hot Dog",
//   "currency": "USD",
//   "method": "Dinheiro",
//   "tag": "Alimentação",
//   "exchangeRates": {
//     "USD": {
//       "code": "USD",
//       "name": "Dólar Comercial",
//       "ask": "5.6208",
//       ...
//     },
//     "CAD": {
//       "code": "CAD",
//       "name": "Dólar Canadense",
//       "ask": "4.2313",
//       ...
//     },
//     "EUR": {
//       "code": "EUR",
//       "name": "Euro",
//       "ask": "6.6112",
//       ...
//     },
//     "GBP": {
//       "code": "GBP",
//       "name": "Libra Esterlina",
//       "ask": "7.2498",
//       ...
//     },
//     "ARS": {
//       "code": "ARS",
//       "name": "Peso Argentino",
//       "ask": "0.0729",
//       ...
//     },
//     "BTC": {
//       "code": "BTC",
//       "name": "Bitcoin",
//       "ask": "60299",
//       ...
//     },
//     "LTC": {
//       "code": "LTC",
//       "name": "Litecoin",
//       "ask": "261.69",
//       ...
//     },
//     "JPY": {
//       "code": "JPY",
//       "name": "Iene Japonês",
//       "ask": "0.05301",
//       ...
//     },
//     "CHF": {
//       "code": "CHF",
//       "name": "Franco Suíço",
//       "ask": "6.1297",
//       ...
//     },
//     "AUD": {
//       "code": "AUD",
//       "name": "Dólar Australiano",
//       "ask": "4.0124",
//       ...
//     },
//     "CNY": {
//       "code": "CNY",
//       "name": "Yuan Chinês",
//       "ask": "0.8278",
//       ...
//     },
//     "ILS": {
//       "code": "ILS",
//       "name": "Novo Shekel Israelense",
//       "ask": "1.6514",
//       ...
//     },
//     "ETH": {
//       "code": "ETH",
//       "name": "Ethereum",
//       "ask": "5184",
//       ...
//     },
//     "XRP": {
//       "code": "XRP",
//       "name": "Ripple",
//       "ask": "1.4",
//       ...
//     }
//   }
// }]
