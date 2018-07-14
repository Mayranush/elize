import React from 'react';
import {connect} from "react-redux";
import {generalActions, secondPageActions} from "../../actions";
import {Pagination} from "../../components/pagination/pagination";
import {
  selectDataNoneCompare,
  selectDataNoneCompareProducts,
  selectDataCompareAttached
} from "../../selectors/secondPageSelectors";
import "./second.scss";
import general from "../../reducers/generalReducer";
import {selectDataCompare} from "../../selectors/general";
import store from "../../store";

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
    this.props.nonCompareElize((this.props.data.filterBrandConElize),
      (this.props.data.filterTitleConElize),
      this.props.data.compareSortByConElize,
      this.props.data.compareSortDirConElize,
      item - 1, this.props.data.itemsInEachPageNonCompare);
  };

  clickFunctionNonCompareProducts = (item) => {
    this.props.nonCompareProducts((this.props.data.filterBrandCon),
      (this.props.data.filterTitleCon),
      this.props.data.compareSortByCon,
      this.props.data.compareSortDirCon,
      item - 1,
      this.props.data.itemsInEachPageNonCompareProducts);
  };

  clickFunctionCompare = (item) => {
    this.props.attachedElize((this.props.data.filterBrandConAttached),
      (this.props.data.filterTitleConAttached),
      this.props.data.compareSortByConAttached,
      this.props.data.compareSortDirConAttached,
      item - 1, this.props.data.itemsInEachPageCompare);
  };

  changeItemsInEachPageNonCompare = (e) => {
    this.props.changeItemsInEachPageNonCompareFunc(e.target.value);
    if (e.target.value > 0) {
      this.props.nonCompareElize((this.props.data.filterBrandConElize),
        (this.props.data.filterTitleConElize),
        this.props.data.compareSortByConElize,
        this.props.data.compareSortDirConElize,
        this.currentPageNonCompare.value - 1, e.target.value);
    }
  };

  changeItemsInEachPageNonCompareProducts = (e) => {
    this.props.changeItemsInEachPageNonCompareProductsFunc(e.target.value);
    if (e.target.value > 0) {
      this.props.nonCompareProducts((this.props.data.filterBrandCon),
        (this.props.data.filterTitleCon),
        this.props.data.compareSortByCon,
        this.props.data.compareSortDirCon,
        this.currentPageNonCompareProducts.value - 1,
        e.target.value);
    }
  };

  changeItemsInEachPageCompare = (e) => {
    this.props.changeItemsInEachPageCompareFuncSec(e.target.value);
    if (e.target.value > 0) {
      this.props.attachedElize((this.props.data.filterBrandConAttached),
        (this.props.data.filterTitleConAttached),
        this.props.data.compareSortByConAttached,
        this.props.data.compareSortDirConAttached,
        this.currentPageAttached.value - 1, e.target.value);
    }
  };

  attachMultiple = () => {
    let obj = [];
    this.props.data.dataNonCompareProducts.map((item, index) => {
      let each = {};
      let productValue = this.props.data.inputValue[index];
      if (productValue) {
        each = {"elizeId": productValue, "productId": item.id};
        obj.push(each);
      }
    });
    this.props.attachMultiple(obj)
      .then(() => this.allCalls());
  };

  detachSingle = (idElize, id) => {
    this.props.detachSingle(idElize, id)
      .then(() => {
        this.allCalls();
      });
  };

  filterByBrandConElizeFunc = (e) => {
    let brand = (e.target.value);
    this.props.filterByBrandConElize(brand);
    this.props.brandsElizeConElize(brand);
  };

  filterByTitleConElizeFunc = (e) => {
    let title = (e.target.value);
    this.props.filterByTitleConElize(title);
    this.props.titleElizeConElize(this.props.data.filterBrandConElize, title);
  };

  searchElizeConElize = () => {
    this.props.nonCompareElize((this.props.data.filterBrandConElize),
      (this.props.data.filterTitleConElize),
      this.props.data.compareSortByConElize,
      this.props.data.compareSortDirConElize,
      this.currentPageNonCompare.value - 1, this.props.data.itemsInEachPageNonCompare);
  };

  filterByBrandConFunc = (e) => {
    let brand = (e.target.value);
    this.props.filterByBrandCon(brand);
    this.props.brandsElizeCon(brand);
  };

  filterByTitleConFunc = (e) => {
    let title = (e.target.value);
    this.props.filterByTitleCon(title);
    this.props.titleElizeCon(this.props.data.filterBrandCon, (title));
  };

  searchElizeCon = () => {
    this.props.nonCompareProducts((this.props.data.filterBrandCon), (this.props.data.filterTitleCon),
      this.props.data.compareSortByCon,
      this.props.data.compareSortDirCon,
      this.currentPageNonCompareProducts.value - 1,
      this.props.data.itemsInEachPageNonCompareProducts);
  };
  filterByBrandConAttachedFunc = (e) => {
    let brand = (e.target.value);
    this.props.filterByBrandConAttached(brand);
    this.props.brandsElizeConAttached(brand);
  };

  filterByTitleConAttachedFunc = (e) => {
    let title = (e.target.value);
    this.props.filterByTitleConAttached(title);
    this.props.titleElizeConAttached(this.props.data.filterBrandConAttached, title);
  };

  searchElizeConAttached = () => {
    this.props.attachedElize((this.props.data.filterBrandConAttached),
      (this.props.data.filterTitleConAttached),
      this.props.data.compareSortByConAttached,
      this.props.data.compareSortDirConAttached,
      this.currentPageAttached.value - 1, this.props.data.itemsInEachPageCompare);
  };
  setSortByConElize = (sortCol) => {

    if (this.props.data.compareSortDirConElize === "asc") {
      this.props.changeSortDirConElize("desc");
      this.props.nonCompareElize((this.props.data.filterBrandConElize),
        (this.props.data.filterTitleConElize),
        sortCol,
        "asc",
        this.currentPageNonCompare.value - 1, this.props.data.itemsInEachPageNonCompare);
    } else {
      this.props.changeSortDirConElize("asc");
      this.props.nonCompareElize((this.props.data.filterBrandConElize),
        (this.props.data.filterTitleConElize),
        sortCol,
        "desc",
        this.currentPageNonCompare.value - 1, this.props.data.itemsInEachPageNonCompare);
    }
  };
  setSortByCon = (sortCol) => {

    if (this.props.data.compareSortDirCon === "asc") {
      this.props.changeSortDirCon("desc");
      this.props.nonCompareProducts((this.props.data.filterBrandCon),
        (this.props.data.filterTitleCon),
        sortCol,
        "asc",
        this.currentPageNonCompareProducts.value - 1,
        this.props.data.itemsInEachPageNonCompareProducts);
    } else {
      this.props.changeSortDirCon("asc");
      this.props.nonCompareProducts((this.props.data.filterBrandCon),
        (this.props.data.filterTitleCon),
        sortCol,
        "desc",
        this.currentPageNonCompareProducts.value - 1,
        this.props.data.itemsInEachPageNonCompareProducts);
    }
  };
  setSortByConAttached = (sortCol) => {

    if (this.props.data.compareSortDirConAttached === "asc") {
      this.props.changeSortDirConAttached("desc");
      this.props.attachedElize((this.props.data.filterBrandConAttached),
        (this.props.data.filterTitleConAttached),
        sortCol,
        "asc",
        this.currentPageAttached.value - 1,
        this.props.data.itemsInEachPageCompare);
    } else {
      this.props.changeSortDirConAttached("asc");
      this.props.attachedElize((this.props.data.filterBrandConAttached),
        (this.props.data.filterTitleConAttached),
        sortCol,
        "desc",
        this.currentPageAttached.value - 1,
        this.props.data.itemsInEachPageCompare);
    }
  };
  componentDidMount() {
    this.allCalls();
  }

  allCalls = () => {
    this.props.nonCompareElize((this.props.data.filterBrandConElize),
      (this.props.data.filterTitleConElize),
      this.props.data.compareSortByConElize,
      this.props.data.compareSortDirConElize,
      this.currentPageNonCompare.value - 1, this.props.data.itemsInEachPageNonCompare);
    this.props.nonCompareProducts((this.props.data.filterBrandCon),
      (this.props.data.filterTitleCon),
      this.props.data.compareSortByCon,
      this.props.data.compareSortDirCon,
      this.currentPageNonCompareProducts.value - 1,
      this.props.data.itemsInEachPageNonCompareProducts);
    this.props.attachedElize((this.props.data.filterBrandConAttached),
      (this.props.data.filterTitleConAttached),
      this.props.data.compareSortByConAttached,
      this.props.data.compareSortDirConAttached,this.currentPageAttached.value - 1, this.props.data.itemsInEachPageCompare);
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
      <div className="main-content">
        <div className="half">
          <div className="table-title"> Не Сопоставление Продукты - Elize</div>
          {/*<div className="search-container">*/}
            {/*<input type="text" placeholder="Search by name" value={this.props.data.searchTextNonCompare}*/}
                   {/*onChange={(e) => this.props.changeSearchTextNonCompare(e.target.value)}/>*/}
          {/*</div>*/}
          <div className="search-container">
            <input type="text" list="brandsConElize" placeholder="Filter by brand"
                   value={this.props.data.filterBrandConElize}
                   onChange={(e) => this.filterByBrandConElizeFunc(e)}/>
            <datalist id="brandsConElize"
                      className={this.props.data.filterBrandConElizeData.length > 0 ? "dropdown-filter" : ""}>
              {this.props.data.filterBrandConElizeData &&
              this.props.data.filterBrandConElizeData.map((item) => {
                return (<option value={item}> {item} </option>);
              })
              }
            </datalist>
          </div>
          <div className="search-container">
            <input type="text" list="titlesConElize" placeholder="Filter by title"
                   value={this.props.data.filterTitleConElize}
                   onChange={(e) => this.filterByTitleConElizeFunc(e)}/>
            <datalist id="titlesConElize"
                      className={this.props.data.filterTitleConElizeData.length > 0 ? "dropdown-filter" : ""}>
              {this.props.data.filterTitleConElizeData &&
              this.props.data.filterTitleConElizeData.map((item) => {
                return (<option value={item}> {item} </option>);
              })
              }
            </datalist>
          </div>
          <div className=" search-button">
            <button className="btn btn-primary " type="button" onClick={this.searchElizeConElize}><i
              className="fa fa-search"></i></button>
          </div>
          <button className="btn btn-primary export-to-excel" type="button" onClick={this.exportDataNonCompare}>Export
          </button>
          {this.props.dataFilteredNoneCompare &&
          <div className="table-body">
            <table className="table">
              <thead className="thead-inverse">
              <tr>
                <th onClick={() => this.setSortByConElize("id")}>Id-Elize</th>
                <th onClick={() => this.setSortByConElize("fullTitle")}>Название-Elize</th>
                <th onClick={() => this.setSortByConElize("brand")}>Бренд-Elize</th>
              </tr>
              </thead>
              <tbody>
              {
                this.props.dataFilteredNoneCompare.map((item) => {
                  return (<tr key={item.idElize + " " + item.id}>
                    <th scope="row">{item.idElize}</th>
                    <td title={item.fullTitleElize}>
                      <a href={item.urlElize} target="_blank">{item.fullTitleElize}</a>
                    </td>
                    <td title={item.brandElize}>{item.brandElize}</td>
                  </tr>);
                })
              }
              </tbody>
            </table>
          </div>}
          <div>
            <span className="desc-text">Продукты: </span>
            <span className="count-val">{this.props.data.countNonCompare}</span>
          </div>
          <div>
            <span className="desc-text">В каждом странице: </span>
            <select className="count-input" defaultValue={this.props.data.itemsInEachPageNonCompare}
                    onChange={this.changeItemsInEachPageNonCompare}>
              <option value="5">5</option>
              <option value="50">50</option>
              <option value="100">100</option>
              <option value="200">200</option>
            </select>
          </div>
          <div className="pagination-block">
            {Math.ceil(this.props.data.countNonCompare / this.props.data.itemsInEachPageNonCompare) > 1 &&
            <Pagination
              maxPageCount={Math.ceil(this.props.data.countNonCompare / this.props.data.itemsInEachPageNonCompare)}
              currentPage={this.currentPageNonCompare} clickFunction={this.clickFunctionNonCompare}/>}
          </div>
        </div>

        <div className="half">
          <div className="table-title"> Не Сопоставление Продукты - Конкурент</div>
          {/*<div className="search-container">*/}
          {/*<input type="text" placeholder="Search by name" value={this.props.data.searchTextNonCompareProducts}*/}
          {/*onChange={(e) => this.props.changeSearchTextNonCompareProducts(e.target.value)}/>*/}
          {/*</div>*/}
          <div className="search-container">
            <input type="text" list="brandsCon" placeholder="Filter by brand"
                   value={this.props.data.filterBrandCon}
                   onChange={(e) => this.filterByBrandConFunc(e)}/>
            <datalist id="brandsCon"
                      className={this.props.data.filterBrandConData.length > 0 ? "dropdown-filter" : ""}>
              {this.props.data.filterBrandConData &&
              this.props.data.filterBrandConData.map((item) => {
                return (<option value={item}> {item} </option>);
              })
              }
            </datalist>
          </div>
          <div className="search-container">
            <input type="text" list="titlesCon" placeholder="Filter by title"
                   value={this.props.data.filterTitleCon}
                   onChange={(e) => this.filterByTitleConFunc(e)}/>
            <datalist id="titlesCon"
                      className={this.props.data.filterTitleConData.length > 0 ? "dropdown-filter" : ""}>
              {this.props.data.filterTitleConData &&
              this.props.data.filterTitleConData.map((item) => {
                return (<option value={item}> {item} </option>);
              })
              }
            </datalist>
          </div>
          <div className=" search-button">
            <button className="btn btn-primary " type="button" onClick={this.searchElizeCon}><i
              className="fa fa-search"></i></button>
          </div>
          <button className="btn btn-primary export-to-excel" type="button"
                  onClick={this.exportDataNonCompareProducts}>Export
          </button>
          {this.props.dataFilteredNoneCompareProducts &&
          <div className="table-body">
            <table className="table">
              <thead className="thead-inverse">
              <tr>
                <th onClick={() => this.setSortByCon("id")}>Id-Elize</th>
                <th onClick={() => this.setSortByCon("title")}>Название</th>
                <th onClick={() => this.setSortByCon("brand")}>Бренд</th>
              </tr>
              </thead>
              <tbody>
              {
                this.props.dataFilteredNoneCompareProducts.map((item, index) => {
                  return (<tr key={item.id}>
                    <td>
                      <input type="number" className="form-control"
                             onChange={e => this.props.updateInputValue(e, index, this.props.data.inputValue)}/>
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
          <button type="button" className="btn btn-success attach-btn" onClick={() => this.attachMultiple()}>Прикрепить
            все
          </button>

          <div>
            <span className="desc-text">Продукты: </span>
            <span className="count-val">{this.props.data.countNonCompareProducts}</span>
          </div>
          <div>
            <span className="desc-text">В каждом странице: </span>
            <select className="count-input" defaultValue={this.props.data.itemsInEachPageNonCompareProducts}
                    onChange={this.changeItemsInEachPageNonCompareProducts}>
              <option value="5">5</option>
              <option value="50">50</option>
              <option value="100">100</option>
              <option value="200">200</option>
            </select>
          </div>
          <div className="pagination-block">
            {Math.ceil(this.props.data.countNonCompareProducts / this.props.data.itemsInEachPageNonCompareProducts) > 1 &&
            <Pagination
              maxPageCount={Math.ceil(this.props.data.countNonCompareProducts / this.props.data.itemsInEachPageNonCompareProducts)}
              currentPage={this.currentPageNonCompareProducts} clickFunction={this.clickFunctionNonCompareProducts}/>}
          </div>
        </div>

        <div className="table-title">Прикрепление Продукты</div>
        {/*<div className="search-container">*/}
          {/*<input type="text" placeholder="Search by name" value={this.props.data.searchTextAttached}*/}
                 {/*onChange={(e) => this.props.changeSearchTextAttachedSec(e.target.value)}/>*/}
        {/*</div>*/}
        <div className="search-container">
          <input type="text" list="brandsConAttached" placeholder="Filter by brand"
                 value={this.props.data.filterBrandConAttached}
                 onChange={(e) => this.filterByBrandConAttachedFunc(e)}/>
          <datalist id="brandsConAttached"
                    className={this.props.data.filterBrandConAttachedData.length > 0 ? "dropdown-filter" : ""}>
            {this.props.data.filterBrandConAttachedData &&
            this.props.data.filterBrandConAttachedData.map((item) => {
              return (<option value={item}> {item} </option>);
            })
            }
          </datalist>
        </div>
        <div className="search-container">
          <input type="text" list="titlesConAttached" placeholder="Filter by title"
                 value={this.props.data.filterTitleConAttached}
                 onChange={(e) => this.filterByTitleConAttachedFunc(e)}/>
          <datalist id="titlesConAttached"
                    className={this.props.data.filterTitleConAttachedData.length > 0 ? "dropdown-filter" : ""}>
            {this.props.data.filterTitleConAttachedData &&
            this.props.data.filterTitleConAttachedData.map((item) => {
              return (<option value={item}> {item} </option>);
            })
            }
          </datalist>
        </div>
        <div className=" search-button">
          <button className="btn btn-primary " type="button" onClick={this.searchElizeConAttached}><i
            className="fa fa-search"></i></button>
        </div>
        <button className="btn btn-primary export-to-excel" type="button" onClick={this.exportDataAttached}>Export
        </button>
        {this.props.dataFilteredAttached &&
        <div className="table-body">
          <table className="table">
            <thead className="thead-inverse">
            <tr>
              <th></th>
              <th onClick={() => this.setSortByConAttached("brand")}>Бренд-Elize</th>
              <th onClick={() => this.setSortByConAttached("fullTitle")}>Название-Elize</th>
              <th onClick={() => this.setSortByConAttached("fullTitle")}>Название</th>
              <th onClick={() => this.setSortByConAttached("brand")}>Бренд</th>
              <th onClick={() => this.setSortByConAttached("price")}>Цена-Elize</th>
              <th onClick={() => this.setSortByConAttached("price")}>Цена</th>
            </tr>
            </thead>
            <tbody>
            {
              this.props.dataFilteredAttached.map((item) => {
                return (<tr key={item.idElize + " " + item.id}>
                  <td>
                    {item.idElize && item.id && <button className="btn" onClick={() => this.detachSingle({
                      elizeId: item.idElize,
                      productId: item.id
                    })}>
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

          <select className="count-input" defaultValue={this.props.data.itemsInEachPageCompare}
                  onChange={this.changeItemsInEachPageCompare}>
            <option value="5">5</option>
            <option value="50">50</option>
            <option value="100">100</option>
            <option value="200">200</option>
          </select>
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
  state => ({
    data: state.secondPage,
    dataFilteredNoneCompare: selectDataNoneCompare(state),
    dataFilteredNoneCompareProducts: selectDataNoneCompareProducts(state),
    dataFilteredAttached: selectDataCompareAttached(state)
  }),
  {...secondPageActions}
)(About);