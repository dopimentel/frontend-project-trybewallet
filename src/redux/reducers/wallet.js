import { SAVE_CURRENCIES } from "../actions";

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
      currencies: action.currencies,
    };
  default:
    return state;
  }
};

export default wallet;
