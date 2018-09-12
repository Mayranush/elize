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

    this.currentPageNonCompare.value = item;
    this.props.statusAll();
    this.props.nonCompareElize((this.props.data.filterBrandConElize),
      (this.props.data.filterTitleConElize),
      (this.props.data.filterSourceConElize),
      this.props.data.compareSortByConElize,
      this.props.data.compareSortDirConElize,
      item - 1, this.props.data.itemsInEachPageNonCompare);

  };

  clickFunctionNonCompareProducts = (item) => {
    this.currentPageNonCompareProducts.value = item;
    this.props.statusAll();
    this.props.nonCompareProducts((this.props.data.filterBrandCon),
      (this.props.data.filterTitleCon),
      this.props.data.filterSourceCon,
      this.props.data.compareSortByCon,
      this.props.data.compareSortDirCon,
      item - 1,
      this.props.data.itemsInEachPageNonCompareProducts);
  };

  clickFunctionCompare = (item) => {
    this.currentPageAttached.value = item;
    this.props.statusAll();
    this.props.attachedElize((this.props.data.filterBrandConAttached),
      (this.props.data.filterTitleConAttached),
      this.props.data.compareSortByConAttached,
      this.props.data.compareSortDirConAttached,
      item - 1, this.props.data.itemsInEachPageCompare);
  };

  changeItemsInEachPageNonCompare = (e) => {
    this.props.statusAll();
    this.props.changeItemsInEachPageNonCompareFunc(e.target.value);
    if (e.target.value > 0) {
      this.props.nonCompareElize((this.props.data.filterBrandConElize),
        (this.props.data.filterTitleConElize),
        (this.props.data.filterSourceConElize),
        this.props.data.compareSortByConElize,
        this.props.data.compareSortDirConElize,
        this.currentPageNonCompare.value - 1, e.target.value);
    }
  };

  changeItemsInEachPageNonCompareProducts = (e) => {
    this.props.statusAll();
    this.props.changeItemsInEachPageNonCompareProductsFunc(e.target.value);
    if (e.target.value > 0) {
      this.props.nonCompareProducts((this.props.data.filterBrandCon),
        (this.props.data.filterTitleCon),
        this.props.data.filterSourceCon,
        this.props.data.compareSortByCon,
        this.props.data.compareSortDirCon,
        this.currentPageNonCompareProducts.value - 1,
        e.target.value);
    }
  };

  changeItemsInEachPageCompare = (e) => {
    this.props.statusAll();
    this.props.changeItemsInEachPageCompareFuncSec(e.target.value);
    if (e.target.value > 0) {
      this.props.attachedElize((this.props.data.filterBrandConAttached),
        (this.props.data.filterTitleConAttached),
        this.props.data.compareSortByConAttached,
        this.props.data.compareSortDirConAttached,
        this.currentPageAttached.value - 1, e.target.value);
    }
  };

  attachMultiple = (e) => {
    e.stopPropagation();
    e.preventDefault();

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
    this.props.statusAll();
    let brand = (e.target.value);
    this.props.filterByBrandConElize(brand);
    this.props.brandsElizeConElize(brand, this.props.data.filterSourceConElize);
  };

  filterByTitleConElizeFunc = (e) => {
    this.props.statusAll();
    let title = (e.target.value);
    this.props.filterByTitleConElize(title);
    this.props.titleElizeConElize(this.props.data.filterBrandConElize, title);
  };
  filterBySourceConElizeFunc = (e) => {
    this.props.statusAll();
    let source = (e.target.value);
    this.props.filterBySourceConElize(source);
    this.props.sourceElizeConElize();
  };

  searchElizeConElize = () => {
    this.props.statusAll();
    this.props.nonCompareElize((this.props.data.filterBrandConElize),
      (this.props.data.filterTitleConElize),
      (this.props.data.filterSourceConElize),
      this.props.data.compareSortByConElize,
      this.props.data.compareSortDirConElize,
      this.currentPageNonCompare.value - 1, this.props.data.itemsInEachPageNonCompare);
  };
  searchElizeConElizeOnEnter = (e) => {
    this.props.statusAll();
    if (e.keyCode === 13) {
      this.searchElizeConElize();
    }
  };

  filterByBrandConFunc = (e) => {
    this.props.statusAll();
    let brand = (e.target.value);
    this.props.filterByBrandCon(brand);
    this.props.brandsElizeCon(brand, this.props.data.filterSourceCon);
  };

  filterByTitleConFunc = (e) => {
    this.props.statusAll();
    let title = (e.target.value);
    this.props.filterByTitleCon(title);
    this.props.titleElizeCon(this.props.data.filterBrandCon, (title));
  };
  filterBySourceConFunc = (e) => {
    this.props.statusAll();
    let source = (e.target.value);
    this.props.filterBySourceCon(source);
    this.props.sourceElizeCon();
  };
  searchElizeConOnEnter = (e) => {
    this.props.statusAll();
    if (e.keyCode === 13) {
      this.searchElizeCon();
    }
  };
  searchElizeCon = () => {
    this.props.statusAll();
    this.props.nonCompareProducts((this.props.data.filterBrandCon),
      (this.props.data.filterTitleCon),
      this.props.data.filterSourceCon,
      this.props.data.compareSortByCon,
      this.props.data.compareSortDirCon,
      this.currentPageNonCompareProducts.value - 1,
      this.props.data.itemsInEachPageNonCompareProducts);
  };
  filterByBrandConAttachedFunc = (e) => {
    this.props.statusAll();
    let brand = (e.target.value);
    this.props.filterByBrandConAttached(brand);
    this.props.brandsElizeConAttached(brand);
  };

  filterByTitleConAttachedFunc = (e) => {
    this.props.statusAll();
    let title = (e.target.value);
    this.props.filterByTitleConAttached(title);
    this.props.titleElizeConAttached(this.props.data.filterBrandConAttached, title);
  };
  searchElizeConAttachedOnEnter = (e) => {
    this.props.statusAll();
    if (e.keyCode === 13) {
      this.searchElizeConAttached();
    }
  };
  searchElizeConAttached = () => {
    this.props.statusAll();
    this.props.attachedElize((this.props.data.filterBrandConAttached),
      (this.props.data.filterTitleConAttached),
      this.props.data.compareSortByConAttached,
      this.props.data.compareSortDirConAttached,
      this.currentPageAttached.value - 1, this.props.data.itemsInEachPageCompare);
  };
  setSortByConElize = (sortCol) => {
    this.props.statusAll();
    if (this.props.data.compareSortDirConElize === "asc") {
      this.props.changeSortDirConElize("desc");
      this.props.nonCompareElize((this.props.data.filterBrandConElize),
        (this.props.data.filterTitleConElize),
        (this.props.data.filterSourceConElize),
        sortCol,
        "asc",
        this.currentPageNonCompare.value - 1, this.props.data.itemsInEachPageNonCompare);
    } else {
      this.props.changeSortDirConElize("asc");
      this.props.nonCompareElize((this.props.data.filterBrandConElize),
        (this.props.data.filterTitleConElize),
        (this.props.data.filterSourceConElize),
        sortCol,
        "desc",
        this.currentPageNonCompare.value - 1, this.props.data.itemsInEachPageNonCompare);
    }
  };
  setSortByCon = (sortCol) => {
    this.props.statusAll();
    if (this.props.data.compareSortDirCon === "asc") {
      this.props.changeSortDirCon("desc");
      this.props.nonCompareProducts((this.props.data.filterBrandCon),
        (this.props.data.filterTitleCon),
        this.props.data.filterSourceCon,
        sortCol,
        "asc",
        this.currentPageNonCompareProducts.value - 1,
        this.props.data.itemsInEachPageNonCompareProducts);
    } else {
      this.props.changeSortDirCon("asc");
      this.props.nonCompareProducts((this.props.data.filterBrandCon),
        (this.props.data.filterTitleCon),
        this.props.data.filterSourceCon,
        sortCol,
        "desc",
        this.currentPageNonCompareProducts.value - 1,
        this.props.data.itemsInEachPageNonCompareProducts);
    }
  };
  setSortByConAttached = (sortCol) => {
    this.props.statusAll();
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
    this.props.statusAll();
    this.allCalls();
  }

  allCalls = () => {
    this.props.nonCompareElize(this.props.data.filterBrandConElize,
      this.props.data.filterTitleConElize,
      this.props.data.filterSourceConElize,
      this.props.data.compareSortByConElize,
      this.props.data.compareSortDirConElize,
      this.currentPageNonCompare.value - 1, this.props.data.itemsInEachPageNonCompare);
    this.props.nonCompareProducts((this.props.data.filterBrandCon),
      (this.props.data.filterTitleCon),
      this.props.data.filterSourceCon,
      this.props.data.compareSortByCon,
      this.props.data.compareSortDirCon,
      this.currentPageNonCompareProducts.value - 1,
      this.props.data.itemsInEachPageNonCompareProducts);
    this.props.attachedElize((this.props.data.filterBrandConAttached),
      (this.props.data.filterTitleConAttached),
      this.props.data.compareSortByConAttached,
      this.props.data.compareSortDirConAttached,
      this.currentPageAttached.value - 1,
      this.props.data.itemsInEachPageCompare);
  };

  changeImageZoom(e) {
    this.props.changeImageZoom(e.target.src);
  }

  render() {
    return (
      <div className="main-content">
        <div className="half">
          <div className="table-title"> Не Сопоставление Продукты - Elize</div>
          <div className="lightbox-target" id="image">
            <img src={this.props.data.imageZoom}/>
            <a className="lightbox-close" href="#"></a>
          </div>
          {/*<div className="search-container">*/}
          {/*<input type="text" placeholder="Search by name" value={this.props.data.searchTextNonCompare}*/}
          {/*onChange={(e) => this.props.changeSearchTextNonCompare(e.target.value)}/>*/}
          {/*</div>*/}
          <div className="search-container">
            <input type="text" list="brandsConElize" placeholder="Filter by brand"
                   value={this.props.data.filterBrandConElize}
                   onChange={(e) => this.filterByBrandConElizeFunc(e)}
                   onClick={(e) => this.filterByBrandConElizeFunc(e)}
                   onKeyUp={(e) => this.searchElizeConElizeOnEnter(e)}/>
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
                   onChange={(e) => this.filterByTitleConElizeFunc(e)}
                   onKeyUp={(e) => this.searchElizeConElizeOnEnter(e)}/>
            <datalist id="titlesConElize"
                      className={this.props.data.filterTitleConElizeData.length > 0 ? "dropdown-filter" : ""}>
              {this.props.data.filterTitleConElizeData &&
              this.props.data.filterTitleConElizeData.map((item) => {
                return (<option value={item}> {item} </option>);
              })
              }
            </datalist>
          </div>
          <div className="search-container">
            <input type="text" list="sourceConElize" placeholder="Filter by source"
                   value={this.props.data.filterSourceConElize}
                   onChange={(e) => this.filterBySourceConElizeFunc(e)}
                   onClick={(e) => this.filterBySourceConElizeFunc(e)}
                   onKeyUp={(e) => this.searchElizeConElizeOnEnter(e)}/>
            <datalist id="sourceConElize"
                      className={this.props.data.filterSourceConElizeData.length > 0 ? "dropdown-filter" : ""}>
              {this.props.data.filterSourceConElizeData &&
              this.props.data.filterSourceConElizeData.map((item) => {
                return (<option value={item}> {item} </option>);
              })
              }
            </datalist>
          </div>
          <div className=" search-button">
            <button className="btn btn-primary " type="button" onClick={this.searchElizeConElize}><i
              className="fa fa-search"></i></button>
          </div>
          {/*<button className="btn btn-primary export-to-excel" type="button" onClick={this.exportDataNonCompare}>Export
          </button>*/}
          {this.props.dataFilteredNoneCompare &&
          <div className="table-body">
            <table className="table">
              <thead className="thead-inverse">
              <tr>
                <th onClick={() => this.setSortByConElize("brand")}>Бренд-Elize</th>
                <th onClick={() => this.setSortByConElize("fullTitle")}>Название-Elize</th>
                <th>Фото</th>
                <th onClick={() => this.setSortByConElize("id")}>Id-Elize</th>
              </tr>
              </thead>
              <tbody>
              {
                this.props.dataFilteredNoneCompare.map((item) => {
                  return (<tr key={item.idElize + " " + item.id}>
                    <th title={item.brandElize} className="only-th">{item.brandElize}</th>

                    <td className="wraped-tbl">
                      <a href={item.urlElize} target="_blank">{item.fullTitleElize}</a>
                    </td>
                    <td><a className="image-size lightbox" href="#image">
                      <img className="image-size" onMouseOver={(e) => this.changeImageZoom(e)} src={item.imageElize}/>
                    </a>
                    </td>
                    <td scope="row">{item.idElize}</td>
                  </tr>);
                })
              }
              </tbody>
            </table>
          </div>}
          <div className="first-pagination">
            <div className="products-count-first">
              <span className="desc-text">Продукты: </span>
              <span className="count-val">{this.props.data.countNonCompare}</span>
            </div>
            <div className="in-any-page">
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
                   onChange={(e) => this.filterByBrandConFunc(e)}
                   onClick={(e) => this.filterByBrandConFunc(e)}
                   onKeyUp={(e) => this.searchElizeConOnEnter(e)}/>
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
                   onChange={(e) => this.filterByTitleConFunc(e)}
                   onKeyUp={(e) => this.searchElizeConOnEnter(e)}/>
            <datalist id="titlesCon"
                      className={this.props.data.filterTitleConData.length > 0 ? "dropdown-filter" : ""}>
              {this.props.data.filterTitleConData &&
              this.props.data.filterTitleConData.map((item) => {
                return (<option value={item}> {item} </option>);
              })
              }
            </datalist>
          </div>
          <div className="search-container">
            <input type="text" list="sourceCon" placeholder="Filter by source"
                   value={this.props.data.filterSourceCon}
                   onChange={(e) => this.filterBySourceConFunc(e)}
                   onClick={(e) => this.filterBySourceConFunc(e)}
                   onKeyUp={(e) => this.searchElizeConOnEnter(e)}/>
            <datalist id="sourceCon"
                      className={this.props.data.filterSourceConData.length > 0 ? "dropdown-filter" : ""}>
              {this.props.data.filterSourceConData &&
              this.props.data.filterSourceConData.map((item) => {
                return (<option value={item}> {item} </option>);
              })
              }
            </datalist>
          </div>
          <div className=" search-button">
            <button className="btn btn-primary " type="button" onClick={this.searchElizeCon}><i
              className="fa fa-search"></i></button>
          </div>
          {/*<button className="btn btn-primary export-to-excel" type="button"
                  onClick={this.exportDataNonCompareProducts}>Export
          </button>*/}
          {this.props.dataFilteredNoneCompareProducts &&
          <div className="table-body">
            <table className="table">
              <thead className="thead-inverse">
              <tr>
                <th className="input-id-header" onClick={() => this.setSortByCon("id")}>Id-Elize</th>
                <th>Фото</th>
                <th onClick={() => this.setSortByCon("title")}>Название</th>

                <th onClick={() => this.setSortByCon("brand")}>Бренд</th>
              </tr>
              </thead>
              <tbody>
              {
                this.props.dataFilteredNoneCompareProducts.map((item, index) => {
                  return (<tr key={item.id}>
                    <td className="input-id">
                      <input type="number" className="form-control input-id"
                             onChange={e => this.props.updateInputValue(e, index, this.props.data.inputValue)}/>
                    </td>

                    <td><a className="image-size lightbox" href="#image">
                      <img className="image-size" onMouseOver={(e) => this.changeImageZoom(e)} src={item.image}/>
                    </a>
                    </td>
                    <td className="wraped-tbl">
                      <a href={item.url} target="_blank">{item.fullTitle}</a>
                    </td>
                    <td title={item.brand}>{item.brand}</td>
                  </tr>);
                })
              }
              </tbody>
            </table>
          </div>}
          <button type="button"
                  className={(this.props.data.statusAll === 'IDLE') ? "btn btn-success attach-btn" : "btn btn-success attach-btn disabled-btn dis-all"}
                  onClick={(e) => this.attachMultiple(e)}>Прикрепить
            все
          </button>
          <div>
            <div className="products-count">
              <span className="desc-text">Продукты: </span>
              <span className="count-val">{this.props.data.countNonCompareProducts}</span>
            </div>
            <div className="in-any-page">
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
        </div>

        <div className="table-title">Прикрепление Продукты</div>
        {/*<div className="search-container">*/}
        {/*<input type="text" placeholder="Search by name" value={this.props.data.searchTextAttached}*/}
        {/*onChange={(e) => this.props.changeSearchTextAttachedSec(e.target.value)}/>*/}
        {/*</div>*/}
        <div className="search-container">
          <input type="text" list="brandsConAttached" placeholder="Filter by brand"
                 value={this.props.data.filterBrandConAttached}
                 onChange={(e) => this.filterByBrandConAttachedFunc(e)}
                 onKeyUp={(e) => this.searchElizeConAttachedOnEnter(e)}/>
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
                 onChange={(e) => this.filterByTitleConAttachedFunc(e)}
                 onKeyUp={(e) => this.searchElizeConAttachedOnEnter(e)}/>
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
        {/*  <button className="btn btn-primary export-to-excel" type="button" onClick={this.exportDataAttached}>Export
        </button>*/}
        {this.props.dataFilteredAttached &&
        <div className="table-body">
          <table className="table">
            <thead className="thead-inverse">
            <tr>
              <th></th>
              <th onClick={() => this.setSortByConAttached("brand")}>Бренд-Elize</th>
              <th onClick={() => this.setSortByConAttached("fullTitle")}>Название-Elize</th>
              <th>Фото-Elize</th>
              <th>Фото</th>
              <th onClick={() => this.setSortByConAttached("fullTitle")}>Название</th>
              <th onClick={() => this.setSortByConAttached("brand")}>Бренд</th>
              <th onClick={() => this.setSortByConAttached("price")}>Цена-Elize</th>
              <th onClick={() => this.setSortByConAttached("price")}>Цена</th>
            </tr>
            </thead>
            <tbody>
            {
              this.props.data.dataAttached.map((item) => {
                return (<tr key={item.idElize + " " + item.id}>
                  <td>

                    {item.idElize && item.id &&
                    <button className={(this.props.data.statusAll === 'IDLE') ? "btn " : "btn disabled-btn"}
                            onClick={() => this.detachSingle({
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
                  <td><a className="image-size lightbox" href="#image">
                    <img className="image-size" onMouseOver={(e) => this.changeImageZoom(e)} src={item.imageElize}/>
                  </a>
                  </td>
                  <td><a className="image-size lightbox" href="#image">
                    <img className="image-size" onMouseOver={(e) => this.changeImageZoom(e)} src={item.image}/>
                  </a>
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

          <div className="products-count-first">
            <span className="desc-text">Продукты: </span>
            <span className="count-val">{this.props.data.countAttached}</span>
          </div>
          <div className="in-any-page">
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
  {...secondPageActions, ...generalActions}
)(About);