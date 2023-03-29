// Coloque aqui suas actions
const URL = 'https://economia.awesomeapi.com.br/json/all';
// ACTIONS TYPES
export const SAVE_EMAIL = 'SAVE_EMAIL';
export const SAVE_CURRENCIES = 'SAVE_CURRENCIES';

// ACTIONS CREATORS
export const saveEmail = (email) => ({
  type: SAVE_EMAIL,
  email,
});

export const saveCurrencies = (currencies) => ({
  type: SAVE_CURRENCIES,
  currencies,
});

export const fetchAwesomeAPI = () => (dispatch) => {
  fetch(URL)
    .then((response) => response.json())
    .then((currencies) => dispatch(saveCurrencies(Object.keys(currencies)
      .filter((currencie) => currencie !== 'USDT'))));
};

// Object.entries(currencies)
//       .map((currencie) => ({ ...currencie }))
