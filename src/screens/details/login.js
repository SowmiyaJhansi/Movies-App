import React, { Component } from "react";
import LoginModal from "react-login-modal";
 
class Login extends Component {
    handleRegister = (firstName, lastName, emailId, password, contactNumbers) => {};
  handleLogin = (username, password) => {}
 
  render() {
    return (
      <LoginModal
        handleRegister={this.handleRegister}
        handleLogin={this.handleLogin}
      />
    );
  }
}
export default Login;