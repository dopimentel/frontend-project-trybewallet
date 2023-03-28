import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    const { usuario } = this.props;
    return (
      <div>{usuario}</div>
    );
  }
}

const mapStateToProps = ({ user: { usuario } }) => ({
  usuario,
});

App.propTypes = {
  usuario: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(App);
