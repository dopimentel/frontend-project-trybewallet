// Coloque aqui suas actions
const URL = 'https://economia.awesomeapi.com.br/json/all';
// ACTIONS TYPES
export const SAVE_EMAIL = 'SAVE_EMAIL';
export const SAVE_CURRENCIES = 'SAVE_CURRENCIES';
export const ADD_EXPENSE = 'ADD_EXPENSE';

export const SAVE_EXCHANGE = 'SAVE_EXCHANGE';

// ACTIONS CREATORS
export const saveEmail = (email) => ({
  type: SAVE_EMAIL,
  email,
});

export const addExpense = (localState, exchangeRates) => ({
  type: ADD_EXPENSE,
  localState,
  exchangeRates,
});

export const saveCurrencies = (currencies) => ({
  type: SAVE_CURRENCIES,
  currencies,
});
export const saveExchange = (exchangeRates) => ({
  type: SAVE_EXCHANGE,
  exchangeRates,
});

export const fetchAwesomeAPI = () => (dispatch) => {
  fetch(URL)
    .then((response) => response.json())
    .then((currencies) => dispatch(saveCurrencies(currencies)));
};

export const fetchExchange = () => (dispatch) => {
  fetch(URL)
    .then((response) => response.json())
    .then((currencies) => dispatch(saveExchange(currencies)));
};

// Object.entries(currencies)
//       .map((currencie) => ({ ...currencie }))
