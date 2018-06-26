import React from "react";
import {projectDataActions} from "../../actions/index";
import {Link} from "react-router/es6";
import "./pagination.scss";
import PropTypes from "prop-types";
import classNames from 'classnames/bind';

export class Pagination extends React.Component {
  constructor(props) {
    super(props);
    this.states = ['less', 'begin', 'middle', 'end'];
    this.currentState = '';
    this.choosedPageFromTable = this.choosedPageFromTable.bind(this);
    this.choosedPage = this.choosedPage.bind(this);
    this.checkingForState = this.checkingForState.bind(this);
    this.changingState = this.changingState.bind(this);
    this.makingArrOfPagesForView = this.makingArrOfPagesForView.bind(this);
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.firstPage = this.firstPage.bind(this);
    this.lastPage = this.lastPage.bind(this);
    this.floatToRight = false;
    this.state = {
      pages: []
    }
  }

  static propTypes = {
    maxPageCount: PropTypes.number,
    currentPage: PropTypes.object,
    clickFunction: PropTypes.func
  };

  componentDidMount() {
    this.choosedPageFromTable(this.props.currentPage);
  }


  changingState = () => {
    let pageArr = [];
    if (this.currentState == this.states[0]) {
      for (var j = 1; j <= this.props.maxPageCount; j++) {
        pageArr.push(j);
      }
      this.floatToRight = true;
      return this.makingArrOfPagesForView(pageArr);
    }
    if (this.currentState == this.states[1]) {
      pageArr = [1, 2, 3, '...', '>', '>>'];
      this.floatToRight = true;
      return this.makingArrOfPagesForView(pageArr);
    }
    if (this.currentState == this.states[2]) {
      pageArr = ['<<', '<', '...'];
      for (var k = this.currentPage - 1; k <= this.currentPage + 1; k++) {
        pageArr.push(k);
      }
      pageArr.push('...', '>', '>>');
      this.floatToRight = false;
      return this.makingArrOfPagesForView(pageArr);
    }
    if (this.currentState = this.states[3]) {
      pageArr = ['<<', '<', '...'];
      for (var l = this.props.maxPageCount - 2; l <= this.props.maxPageCount; l++) {
        pageArr.push(l);
      }
      this.floatToRight = false;
      return this.makingArrOfPagesForView(pageArr);
    }
  };

  makingArrOfPagesForView = (arr) => {
    let arrToReturn = [];
    let item = {};
    for (var j = 0; j < arr.length; j++) {
      item.value = arr[j];
      if (this.currentPage == arr[j]) {
        item.model = true;
      } else {
        item.model = false;
      }
      arrToReturn.push(item);
      item = {}
    }
    this.setState({pages: arrToReturn});
  };

  checkingForState = () => {
    if (this.props.maxPageCount <= 3) {
      this.currentState = this.states[0];
      return this.changingState();
    } else {
      if (this.currentPage <= 2) {
        this.currentState = this.states[1];
        return this.changingState();
      } else {
        if (this.props.maxPageCount - this.currentPage < 3) {
          this.currentState = this.states[3];
          return this.changingState();
        } else {
          this.currentState = this.states[2];
          return this.changingState();
        }
      }
    }
  };

  nextPage = () => {
    this.currentPage++;
    return this.checkingForState();
  };
  previousPage = () => {
    this.currentPage--;
    return this.checkingForState();
  };
  firstPage = () => {
    this.currentPage = 1;
    return this.checkingForState();
  };
  lastPage = () => {
    this.currentPage = this.props.maxPageCount;
    return this.checkingForState();
  };
  choosedPage = (val) => {
    this.currentPage = val;
    return this.checkingForState();
  };

  choosedPageFromTable = (item) => {
    if (item.value == '>') {
      this.nextPage();
      this.props.clickFunction(this.currentPage);
    }
    if (item.value == '>>') {
      this.lastPage();
      this.props.clickFunction(this.currentPage);
    }
    if (item.value == '<') {
      this.previousPage();
      this.props.clickFunction(this.currentPage);
    }
    if (item.value == '<<') {
      this.firstPage();
      this.props.clickFunction(this.currentPage);
    }
    if (typeof(item.value) == 'number') {
      this.choosedPage(item.value);
      this.props.clickFunction(this.currentPage);
    }
  };

  render() {
    return (
      <div className={this.floatToRight ? "pagination-block pagination-to-right" : "pagination-block"}>
        {
          this.state.pages && this.state.pages.map((item, i) => {
            let className = classNames('each-page', {
              'page-active':   item.model,
              'page-etc': item.value == '...'
            });
            return (
              <div key={i}  className={className}
                   onClick={() => this.choosedPageFromTable(item)}>
                <span className="page-text">{item.value}</span>
              </div>
            )
          })
        }
      </div>
    )
  }
}