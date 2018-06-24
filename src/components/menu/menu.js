import React from "react";
import {projectDataActions} from "../../actions/index";
import {Link} from "react-router/es6";
import "./menu.scss";
import PropTypes from "prop-types";

export class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.logout.bind(this);
  }

  static propTypes = {
    cleanData: PropTypes.func.isRequired
  };


  logout() {
    window.sessionStorage.removeItem("token");
    this.props.cleanData();
  }

  render() {
    return (
      <div>
        menu
        <div onClick={this.handleLogout}> logout</div>logout
      </div>
    )
  }
}

