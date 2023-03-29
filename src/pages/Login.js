import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchAwesomeAPI, saveEmail } from '../redux/actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      senha: '',
      validEmail: false,
      validPassword: false,
      disabled: true,
    };
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    }, () => {
      const { email, senha } = this.state;
      this.setState({
        validEmail: this.verifyEmail(email),
        validPassword: this.verifyPassword(senha),
      }, () => {
        const { validEmail, validPassword } = this.state;
        if (validEmail === true && validPassword === true) {
          this.setState({ disabled: false });
        } else {
          this.setState({ disabled: true });
        }
      });
    });
  }

  verifyEmail(email) {
    const emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
    return emailRegex.test(email);
  }

  verifyPassword(password) {
    const minPassword = 5;
    return password.length > minPassword;
  }

  render() {
    const { email, senha, disabled } = this.state;
    const { history, dispatch } = this.props;
    return (
      <div className="App">
        <form
          onSubmit={ (e) => {
            e.preventDefault();
            dispatch(saveEmail(email));
            dispatch(fetchAwesomeAPI());
            history.push('/carteira');
          } }
        >
          <label htmlFor="id-email">
            Email
            <input
              name="email"
              data-testid="email-input"
              id="id-email"
              value={ email }
              type="email"
              onChange={ (e) => this.handleChange(e) }
            />
          </label>
          <label htmlFor="id-senha">
            Senha
            <input
              name="senha"
              data-testid="password-input"
              id="id-senha"
              value={ senha }
              type="senha"
              onChange={ (e) => this.handleChange(e) }
            />
          </label>
          <button type="submit" disabled={ disabled }>
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect(null)(Login);
