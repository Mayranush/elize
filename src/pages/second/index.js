import React from 'react';
import { connect } from "react-redux";
import { generalActions, secondPageActions } from "../../actions";
import {Pagination} from "../../components/pagination/pagination";
import { selectDataNoneCompare, selectDataNoneCompareProducts, selectDataCompareAttached } from "../../selectors/secondPageSelectors";
import "./second.scss";
import general from "../../reducers/generalReducer";
import {selectDataCompare} from "../../selectors/general";

class About extends React.Component {
  constructor(props) {
    super(props);
    this.currentPageNonCompare = {
      value: 1
    };
    this.currentPageNonCompareProducts = {
      value: 1
    };
    this.currentPageAttached = {
      value: 1
    };
    this.textInput = [];
  }

  clickFunctionNonCompare = (item) => {
    this.props.nonCompareElize(item - 1, this.props.data.itemsInEachPageNonCompare);
  };

  clickFunctionNonCompareProducts = (item) => {
    this.props.nonCompareProducts(item - 1, this.props.data.itemsInEachPageNonCompareProducts);
  };

  clickFunctionCompare = (item) => {
    this.props.attachedElize(item - 1, this.props.data.itemsInEachPageCompare);
  };

  changeItemsInEachPageNonCompare = (e) => {
    this.props.changeItemsInEachPageNonCompareFunc(e.target.value);
    if(e.target.value > 0) {
      this.props.nonCompareElize(this.currentPageNonCompare.value - 1, e.target.value);
    }
  };

  changeItemsInEachPageNonCompareProducts = (e) => {
    this.props.changeItemsInEachPageNonCompareProductsFunc(e.target.value);
    if(e.target.value > 0) {
      this.props.nonCompareProducts(this.currentPageNonCompareProducts.value - 1, e.target.value);
    }
  };

  changeItemsInEachPageCompare = (e) => {
    this.props.changeItemsInEachPageCompareFuncSec(e.target.value);
    if(e.target.value > 0) {
      this.props.attachedElize(this.currentPageAttached.value - 1, e.target.value);
    }
  };

  attachMultiple = () => {
    let obj = [];
    this.props.data.dataNonCompareProducts.map((item, index) => {
      let each = {};
      let productValue = this.props.data.inputValue[index];
      if(productValue){
        each = {"elizeId": productValue, "productId": item.id};
        obj.push(each);
      }
    });
    this.props.attachMultiple(obj)
      .then(() => this.allCalls());
  };

  detachSingle = (idElize, id) => {
    this.props.detachSingle(idElize, id)
      .then( () => {
        this.allCalls();
      });
  };

  componentDidMount() {
    this.allCalls();
  }

  allCalls = () => {
    this.props.nonCompareElize(this.currentPageNonCompare.value - 1, this.props.data.itemsInEachPageNonCompare);
    this.props.nonCompareProducts(this.currentPageNonCompareProducts.value - 1, this.props.data.itemsInEachPageNonCompareProducts);
    this.props.attachedElize(this.currentPageAttached.value - 1, this.props.data.itemsInEachPageCompare);
  };

  exportDataNonCompare = () => {
    window.open("http://63.142.251.65:8888/non-compare-elize-export");
  };
  exportDataNonCompareProducts = () => {
    window.open("http://63.142.251.65:8888/non-compare-products-export");
  };
  exportDataAttached = () => {
    window.open("http://63.142.251.65:8888/attached-elize-export");
  };

  render() {
    return (
      <div className="main-content" >
        <div className="first-tbl">
          <div className="table-title"> Не Сопоставление Продукты - Elize</div>
          <div className="search-container">
            <input type="text" placeholder="Search by name" value={this.props.data.searchTextNonCompare} onChange={(e) => this.props.changeSearchTextNonCompare(e.target.value)}/>
          </div>
          <button className="btn btn-primary export-to-excel" type="button"  onClick={this.exportDataNonCompare}>Export</button>
          {this.props.dataFilteredNoneCompare &&
          <div className="table-body">
            <table className="table">
              <thead className="thead-inverse">
              <tr>
                <th>Id-Elize</th>
                <th>Название-Elize</th>
                <th>Бренд-Elize</th>
                <th>Название</th>
                <th>Бренд</th>
              </tr>
              </thead>
              <tbody>
                {
                  this.props.dataFilteredNoneCompare.map((item) => {
                    return ( <tr key={item.idElize + " " +item.id}>
                      <th scope="row">{item.idElize}</th>
                      <td title={item.fullTitleElize}>
                        <a href={item.urlElize} target="_blank">{item.fullTitleElize}</a>
                      </td>
                      <td title={item.brandElize}>{item.brandElize}</td>
                      <td title={item.fullTitle}>
                        <a href={item.url} target="_blank">{item.fullTitle}</a>
                      </td>
                      <td title={item.brand}>{item.brand}</td>
                    </tr>);
                  })
                }
              </tbody>
            </table>
          </div>}
          <div>
            <span className="desc-text">Продукты</span>
            <span className="count-val">{this.props.data.countNonCompare}</span>
          </div>
          <div>
            <span className="desc-text">В каждом странице: </span>
            <input type="number" className="count-input" defaultValue={this.props.data.itemsInEachPageNonCompare} onChange={this.changeItemsInEachPageNonCompare}/>
          </div>
          <div className="pagination-block">
            {Math.ceil(this.props.data.countNonCompare / this.props.data.itemsInEachPageNonCompare) > 1 &&
            <Pagination maxPageCount={Math.ceil(this.props.data.countNonCompare / this.props.data.itemsInEachPageNonCompare)}
                        currentPage={this.currentPageNonCompare} clickFunction={this.clickFunctionNonCompare}/>}
          </div>
        </div>

        <div className="second-tbl">
          <div className="table-title"> Не Прикрепление Продукты - Конкурент</div>
          <div className="search-container">
            <input type="text" placeholder="Search by name" value={this.props.data.searchTextNonCompareProducts} onChange={(e) => this.props.changeSearchTextNonCompareProducts(e.target.value)}/>
          </div>
          <button className="btn btn-primary export-to-excel" type="button"  onClick={this.exportDataNonCompareProducts}>Export</button>
          {this.props.dataFilteredNoneCompareProducts &&
          <div className="table-body">
            <table className="table">
              <thead className="thead-inverse">
              <tr>
                <th>Id-Elize</th>
                <th>Название</th>
                <th>Бренд</th>
              </tr>
              </thead>
              <tbody>
              {
                this.props.dataFilteredNoneCompareProducts.map((item, index) => {
                  return ( <tr key={item.id}>
                      <td>
                        <input type="number" className="form-control" onChange={e => this.props.updateInputValue(e, index, this.props.data.inputValue)} />
                      </td>
                      <td title={item.fullTitle}>
                        <a href={item.url} target="_blank">{item.fullTitle}</a>
                      </td>
                      <td title={item.brand}>{item.brand}</td>
                  </tr>);
                })
              }
              </tbody>
            </table>
          </div>}
          <button type="button" className="btn btn-success attach-btn" onClick={() => this.attachMultiple()}>Прикрепить все</button>

          <div>
            <span className="desc-text">Продукты: </span>
            <span className="count-val">{this.props.data.countNonCompareProducts}</span>
          </div>
          <div>
            <span className="desc-text">В каждом странице: </span>
            <input type="number" className="count-input" defaultValue={this.props.data.itemsInEachPageNonCompareProducts} onChange={this.changeItemsInEachPageNonCompareProducts}/>
          </div>
          <div className="pagination-block">
            {Math.ceil(this.props.data.countNonCompareProducts / this.props.data.itemsInEachPageNonCompareProducts) > 1 &&
            <Pagination maxPageCount={Math.ceil(this.props.data.countNonCompareProducts / this.props.data.itemsInEachPageNonCompareProducts)}
                        currentPage={this.currentPageNonCompareProducts} clickFunction={this.clickFunctionNonCompareProducts}/>}
          </div>
        </div>

        <div className="table-title">Прикрепление Продукты</div>
        <div className="search-container">
          <input type="text" placeholder="Search by name" value={this.props.data.searchTextAttached} onChange={(e) => this.props.changeSearchTextAttachedSec(e.target.value)}/>
        </div>
        <button className="btn btn-primary export-to-excel" type="button"  onClick={this.exportDataAttached}>Export</button>
        {this.props.dataFilteredAttached &&
        <div className="table-body">
          <table className="table">
            <thead className="thead-inverse">
            <tr>
              <th></th>
              <th>Бренд-Elize</th>
              <th>Название-Elize</th>
              <th>Название</th>
              <th>Бренд</th>
              <th>Цена-Elize</th>
              <th>Цена</th>
            </tr>
            </thead>
            <tbody>
            {
              this.props.dataFilteredAttached.map((item) => {
                return ( <tr key={item.idElize + " " +item.id}>
                  <td>
                    {item.idElize && item.id && <button className="btn" onClick={() => this.detachSingle({elizeId: item.idElize, productId: item.id})}>
                      Открепить
                    </button>}
                  </td>
                  <td title={item.brandElize}>{item.brandElize}</td>
                  <td title={item.fullTitleElize}>
                    <a href={item.urlElize} target="_blank">{item.fullTitleElize}</a>
                  </td>
                  <td title={item.fullTitle}>
                    <a href={item.url} target="_blank">{item.fullTitle}</a>
                  </td>
                  <td title={item.brand}>{item.brand}</td>
                  <td title={item.priceElize}>{item.priceElize}</td>
                  <td title={item.price}>{item.price}</td>
                </tr>);
              })
            }
            </tbody>
          </table>
        </div>}
        <div>
          <span className="desc-text">Продукты: </span>
          <span className="count-val">{this.props.data.countAttached}</span>
        </div>
        <div>
          <span className="desc-text">В каждом странице: </span>
          <input type="number" className="count-input" defaultValue={this.props.data.itemsInEachPageCompare} onChange={this.changeItemsInEachPageCompare}/>
        </div>
        <div className="pagination-block">
          {Math.ceil(this.props.data.countAttached / this.props.data.itemsInEachPageCompare) > 1 &&
          <Pagination maxPageCount={Math.ceil(this.props.data.countAttached / this.props.data.itemsInEachPageCompare)}
                      currentPage={this.currentPageAttached} clickFunction={this.clickFunctionCompare}/>}
        </div>
      </div>
    )
  }
}

export default connect(
  state => ({ data:  state.secondPage, dataFilteredNoneCompare: selectDataNoneCompare(state), dataFilteredNoneCompareProducts: selectDataNoneCompareProducts(state), dataFilteredAttached: selectDataCompareAttached(state)}),
  { ...secondPageActions }
)(About);