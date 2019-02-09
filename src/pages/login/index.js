import React from "react";
import {connect} from "react-redux";
import {matchingActions, signInActions} from "../../actions/index";
import {Link} from "react-router/es6";
import "./login.scss";
import {push} from "react-router-redux";
let username = "";
let password = "";
export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.handleEmailChange = this.emailChange.bind(this);
    this.handlePasswordChange = this.passwordChange.bind(this);
    this.handlePasswordForget = this.loginUser.bind(this);
    if (this.props.matchingReducer.token !== null) {
      store.dispatch(push('/'));
    }
  }

  emailChange(e) {
     username = e.target.value;
    this.props.emailChange(username);

  }

  passwordChange(e) {
     password = e.target.value;
    this.props.passwordChange(password);
  }

  loginUser(e) {
    e.stopPropagation();
    e.preventDefault();
    let obj = {
      username: username,
      password: password,
    };

    this.props.signIn(obj);

  }

  render() {
    return (
      <div className="bg-dark bg-dark-login">
        <div className="card card-login mx-auto mt-5">
          <div className="card-header">
            <h4 className="register">Login</h4>
          </div>
          <div className="card-body">
            <form>
              <div className="form-group">
                <label htmlFor="inputEmail">Username</label>
                <input
                  className="form-control"
                  id="inputEmail"
                  placeholder="Enter username" onBlur={(e) => this.handleEmailChange(e)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="inputPassword">Password</label>

                <input
                  className="form-control"
                  id="inputPassword"
                  type="password"
                  placeholder="Password"
                  onKeyUp={(e) => this.handlePasswordChange(e)}
                />

              </div>
              <button className="btn btn-primary btn-block"
                      onClick={(e) => this.handlePasswordForget(e)}>Login
              </button>
            </form>

          </div>
        </div>
      </div>
    )
  }
}

export default connect(
  state => ({data: state.signIn, matchingReducer: state.matchingReducer}),
  {
    ...matchingActions,
    ...signInActions
  }
)(Login);