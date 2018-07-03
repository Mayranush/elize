import React from 'react';
import { connect } from "react-redux";
import { generalActions } from "../../actions";
import {Pagination} from "../../components/pagination/pagination";
import { selectDataCompare, selectDataCompareAttached } from "../../selectors/general";
import "./home.scss";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.currentPageCompare = {
      value: 1
    };
    this.currentPageAttached = {
      value: 1
    };
  }

  clickFunctionCompare = (item) => {
    this.props.compareElize(item - 1, this.props.data.itemsInEachPageCompare);
  };

  clickFunctionAttached = (item) => {
    this.props.compareElize(item - 1, this.props.data.itemsInEachPageAttached);
  };

  attachSingle = (idElize, id) => {
    this.props.attachSingle(idElize, id)
      .then( () => {
          this.props.compareElize(this.currentPageCompare.value - 1, this.props.data.itemsInEachPageCompare);
          this.props.attachedElize(this.currentPageAttached.value - 1, this.props.data.itemsInEachPageAttached)
      });
  };

  detachSingle = (idElize, id) => {
    this.props.detachSingle(idElize, id)
      .then( () => {
        this.props.compareElize(this.currentPageCompare.value - 1, this.props.data.itemsInEachPageCompare);
        this.props.attachedElize(this.currentPageAttached.value - 1, this.props.data.itemsInEachPageAttached)
      });
  };

  unsimilar = (idElize, id) => {
    this.props.unsimilar(idElize, id)
      .then( () => {
        this.props.compareElize(this.currentPageCompare.value - 1, this.props.data.itemsInEachPageCompare);
        this.props.attachedElize(this.currentPageAttached.value - 1, this.props.data.itemsInEachPageAttached)
      });
  };

  changeItemsInEachPageCompare = (e) => {
    this.props.changeItemsInEachPageCompareFunc(e.target.value);
    if(e.target.value > 0) {
      this.props.compareElize(this.currentPageCompare.value - 1, e.target.value);
    }
  };

  changeItemsInEachPageAttached =(e) => {
    this.props.changeItemsInEachPageAttachedFunc(e.target.value);
    if(e.target.value > 0) {
      this.props.attachedElize(this.currentPageAttached.value - 1, e.target.value);
    }
  };

  componentDidMount() {
    this.props.compareElize(this.currentPageCompare.value - 1, this.props.data.itemsInEachPageCompare);
    this.props.attachedElize(this.currentPageAttached.value - 1, this.props.data.itemsInEachPageAttached);
  }

  exportData = () => {
    window.open("http://63.142.251.65:8888/compare-elize-export");
  };
  exportDataAttached = () => {
    window.open("http://63.142.251.65:8888/attached-elize-export");
  };

  render() {
    return (
      <div className="main-content" >
        <div className="table-title">Сопоставление Продукты</div>
        <div className="search-container">
          <input type="text" placeholder="Search by name" value={this.props.data.searchText} onChange={(e) => this.props.changeSearchText(e.target.value)}/>
        </div>
        <button className="btn btn-primary export-to-excel" type="button"  onClick={this.exportData}>Export</button>
        {this.props.dataFiltered &&
        <div className="table-body">
          <table className="table">
            <thead className="thead-inverse">
            <tr>
              <th></th>
              <th>Бренд-Elize</th>
              <th>Название-Elize</th>
              <th>Название</th>
              <th>Бренд</th>
              <th></th>
            </tr>
            </thead>
            <tbody>
            {
              this.props.dataFiltered.map((item) => {
                return ( <tr key={item.idElize + " " +item.id}>
                  <td>
                    {item.idElize && item.id && <button type="button" className="btn btn-success" onClick={() => this.attachSingle({elizeId: item.idElize, productId: item.id})}>
                      Прикрепить
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
                  <td>
                    {item.idElize && item.id && <button className="btn" onClick={() => this.unsimilar({elizeId: item.idElize, productId: item.id})}>
                      Открепить
                    </button>}
                  </td>
                </tr>);
              })
            }
            </tbody>
          </table>
        </div>}
        <div>
          <span className="desc-text">Продукты: </span>
          <span className="count-val">{this.props.data.countCompare}</span>
        </div>
        <div>
          <span className="desc-text">В каждом странице: </span>
          <input type="number" className="count-input" defaultValue={this.props.data.itemsInEachPageCompare} onChange={this.changeItemsInEachPageCompare}/>
        </div>
        <div className="pagination-block">
          {Math.ceil(this.props.data.countCompare / this.props.data.itemsInEachPageCompare) > 1 &&
          <Pagination maxPageCount={Math.ceil(this.props.data.countCompare / this.props.data.itemsInEachPageCompare)}
                      currentPage={this.currentPageCompare} clickFunction={this.clickFunctionCompare}/>}
        </div>
        <div className="table-title">Прикрепление Продукты</div>
        <div className="search-container">
          <input type="text" placeholder="Search by name" value={this.props.data.searchTextAttached} onChange={(e) => this.props.changeSearchTextAttached(e.target.value)}/>
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
          <input type="number" className="count-input" defaultValue={this.props.data.itemsInEachPageAttached} onChange={this.changeItemsInEachPageAttached}/>
        </div>
        <div className="pagination-block">
          {Math.ceil(this.props.data.countAttached / this.props.data.itemsInEachPageAttached) > 1 &&
          <Pagination maxPageCount={Math.ceil(this.props.data.countAttached / this.props.data.itemsInEachPageAttached)}
                      currentPage={this.currentPageAttached} clickFunction={this.clickFunctionAttached}/>}
        </div>
      </div>
    )
  }
}

export default connect(
  state => ({ data:  state.general, dataFiltered: selectDataCompare(state), dataFilteredAttached: selectDataCompareAttached(state)}),
  { ...generalActions }
)(Home);