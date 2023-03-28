// Coloque aqui suas actions
// ACTIONS TYPES
export const SAVE_EMAIL = 'SAVE_EMAIL';
// ACTIONS CREATORS
export const saveEmail = (email) => ({
  type: SAVE_EMAIL,
  email,
});
