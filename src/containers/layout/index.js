import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import "./style.scss";
import {Menu} from "../../components/menu/menu";
import {Header} from '../../components/header/header';
import {Footer} from "../../components/menu/footer";
import {passwordForgetActions, generalActions, signUpActions, popupActions} from "../../actions/index";
import {Popup} from "../../components/popup/popup";

class MainLayout extends React.Component {

  static propTypes = {
    children: PropTypes.node
  };

  constructor(props) {
    super(props);
    this.handleClosePopup = this.closePopup.bind(this);
  }

  closePopup() {
    this.props.changePopup('', false, false, '');
  }

  render() {                                       // <Menu cleanData={this.props.cleanData} />
    return (
      <main className="viewport">
        {this.props.popup.show &&
          <Popup popup={this.props.popup}
            closePopup={this.handleClosePopup}
            changePopup={this.props.changePopup} 
            confirmChangeInPopup={this.props.confirmChangeInPopup}
            passwordChangeInPopup={this.props.passwordChangeInPopup}
            changeAndResetPassword={this.props.changeAndResetPassword} />}
          <Header />
            {this.props.children}
          <Footer />
      </main>
    )
  }
}

export default connect(
  state => ({data: state.general, popup: state.popup}),
  {
    ...generalActions,
    ...popupActions
  }
)(MainLayout);