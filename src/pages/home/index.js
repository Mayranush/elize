import React from 'react';
import {connect} from "react-redux";
import {generalActions} from "../../actions";
import {Pagination} from "../../components/pagination/pagination";
import {selectDataCompare, selectDataCompareAttached} from "../../selectors/general";
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
    this.props.compareElize((this.props.data.filterBrand),
      (this.props.data.filterTitle),
      this.props.data.compareSortBy,
      this.props.data.compareSortDir,
      item - 1,
      this.props.data.itemsInEachPageCompare);
  };

  clickFunctionAttached = (item) => {
    this.props.attachedElize((this.props.data.attachedBrandElize),
      (this.props.data.attachedTitleElize),
      this.props.data.attachedSortBy,
      this.props.data.attachedSortDir,
      item - 1,
      this.props.data.itemsInEachPageAttached);
  };

  attachSingle = (idElize, id) => {
    this.props.attachSingle(idElize, id)
      .then(() => {
        this.props.compareElize((this.props.data.filterBrand),
          (this.props.data.filterTitle),
          this.props.data.compareSortBy,
          this.props.data.compareSortDir,
          this.currentPageCompare.value - 1,
          this.props.data.itemsInEachPageCompare);
        this.props.attachedElize((this.props.data.attachedBrandElize),
          (this.props.data.attachedTitleElize),
          this.props.data.attachedSortBy,
          this.props.data.attachedSortDir,
          this.currentPageAttached.value - 1,
          this.props.data.itemsInEachPageAttached)
      });
  };

  detachSingle = (idElize, id) => {
    this.props.detachSingle(idElize, id)
      .then(() => {
        this.props.compareElize((this.props.data.filterBrand),
          (this.props.data.filterTitle),
          this.props.data.compareSortBy,
          this.props.data.compareSortDir, this.currentPageCompare.value - 1, this.props.data.itemsInEachPageCompare);
        this.props.attachedElize((this.props.data.attachedBrandElize),
          (this.props.data.attachedTitleElize),
          this.props.data.attachedSortBy,
          this.props.data.attachedSortDir,
          this.currentPageAttached.value - 1,
          this.props.data.itemsInEachPageAttached)
      });
  };

  unsimilar = (idElize, id) => {
    this.props.unsimilar(idElize, id)
      .then(() => {
        this.props.compareElize((this.props.data.filterBrand),
          ( this.props.data.filterTitle),
          this.props.data.compareSortBy,
          this.props.data.compareSortDir, this.currentPageCompare.value - 1, this.props.data.itemsInEachPageCompare);
        this.props.attachedElize((this.props.data.attachedBrandElize),
          (this.props.data.attachedTitleElize),
          this.props.data.attachedSortBy,
          this.props.data.attachedSortDir,
          this.currentPageAttached.value - 1,
          this.props.data.itemsInEachPageAttached)
      });
  };

  changeItemsInEachPageCompare = (e) => {
    this.props.changeItemsInEachPageCompareFunc(e.target.value);
    if (e.target.value > 0) {
      this.props.compareElize((this.props.data.filterBrand),
        (this.props.data.filterTitle),
        this.props.data.compareSortBy,
        this.props.data.compareSortDir, this.currentPageCompare.value - 1, e.target.value);
    }
  };

  changeItemsInEachPageAttached = (e) => {
    this.props.changeItemsInEachPageAttachedFunc(e.target.value);
    if (e.target.value > 0) {
      this.props.attachedElize((this.props.data.attachedBrandElize),
        (this.props.data.attachedTitleElize),
        this.props.data.attachedSortBy,
        this.props.data.attachedSortDir,
        this.currentPageAttached.value - 1,
        e.target.value);
    }
  };

  filterByBrandFunc = (e) => {
    let brand = (e.target.value);
    this.props.filterByBrand(brand);
    this.props.brandsElize(brand);
  };
  filterByTitleFunc = (e) => {
    let title = (e.target.value);
    this.props.filterByTitle(title);
    this.props.titleElize(this.props.data.filterBrand, title);
  };

  filterByBrandAttachedFunc = (e) => {
    let brand = (e.target.value);
    this.props.filterByBrandAttached(brand);
    this.props.brandsElizeAttached(brand);
  };

  filterByTitleAttachedFunc = (e) => {
    let title = (e.target.value);
    this.props.filterByTitleAttached(title);
    this.props.titleElizeAttached(this.props.data.filterBrandAttached, title);
  };


  searchElize = () => {
    this.props.compareElize((this.props.data.filterBrand),
      (this.props.data.filterTitle),
      this.props.data.compareSortBy,
      this.props.data.compareSortDir,
      this.currentPageCompare.value - 1,
      this.props.data.itemsInEachPageCompare);
  };
  searchElizeAttached = () => {
    this.props.attachedElize((this.props.data.filterBrandAttached),
      (this.props.data.filterTitleAttached),
      this.props.data.compareSortBy,
      this.props.data.compareSortDir,
      this.currentPageAttached.value - 1,
      this.props.data.itemsInEachPageAttached);
  };
  setSortBy = (sortCol) => {
    if (this.props.data.compareSortDir === "asc") {
      this.props.changeSortDir("desc");
      this.props.compareElize((this.props.data.filterBrand),
        (this.props.data.filterTitle),
        sortCol,
        "desc",
        this.currentPageCompare.value - 1,
        this.props.data.itemsInEachPageCompare);
    } else {
      this.props.changeSortDir("asc");
      this.props.compareElize((this.props.data.filterBrand),
        (this.props.data.filterTitle),
        sortCol,
        "asc",
        this.currentPageCompare.value - 1,
        this.props.data.itemsInEachPageCompare);
    }

  };
  setSortByAttached = (sortCol) => {

    if (this.props.data.compareSortDir === "asc") {
      this.props.changeSortDir("desc");
      this.props.attachedElize((this.props.data.attachedBrandElize),
        (this.props.data.attachedTitleElize),
        sortCol,
        "asc",
        this.currentPageAttached.value - 1,
        this.props.data.itemsInEachPageAttached);
    } else {
      this.props.changeSortDir("asc");
      this.props.attachedElize((this.props.data.attachedBrandElize),
        (this.props.data.attachedTitleElize),
        sortCol,
        "asc",
        this.currentPageAttached.value - 1,
        this.props.data.itemsInEachPageAttached);
    }

  };

  componentDidMount() {
    this.props.compareElize((this.props.data.filterBrand),
      (this.props.data.filterTitle),
      this.props.data.compareSortBy,
      this.props.data.compareSortDir,
      this.currentPageCompare.value - 1,
      this.props.data.itemsInEachPageCompare);
    this.props.attachedElize((this.props.data.attachedBrandElize),
      (this.props.data.attachedTitleElize),
      this.props.data.attachedSortBy,
      this.props.data.attachedSortDir,
      this.currentPageAttached.value - 1,
      this.props.data.itemsInEachPageAttached);
  }

  exportData = () => {
    window.open("http://63.142.251.65:8888/api/compare-elize-export");

  };
  exportDataAttached = () => {
    window.open("http://63.142.251.65:8888/attached-elize-export");
  };

  render() {
    return (
      <div className="main-content">
        <div className="table-title">Сопоставление Продукты</div>
        <div className="search-container">
          {/*/!*<input type="text" placeholder= "Search by n ame" value={this.props.data.searchText}*!/*/}
          {/*/!*onChange={(e) => this.props.changeSearchText(e.target.value)}/>*!/*/}
          <input type="text" list="brands" placeholder="Filter by brand" value={this.props.data.filterBrand}
                 onChange={(e) => this.filterByBrandFunc(e)}/>
          <datalist id="brands" className={this.props.data.filterBrandData.length > 0 ? "dropdown-filter" : ""}>
            {this.props.data.filterBrandData &&
            this.props.data.filterBrandData.map((item) => {
              return (<option value={item}> {item} </option>);
            })
            }
          </datalist>
        </div>
        <div className="search-container">
          <input type="text" list="titles" placeholder="Filter by title" value={this.props.data.filterTitle}
                 onChange={(e) => this.filterByTitleFunc(e)}/>
          <datalist id="titles" className={this.props.data.filterTitleData.length > 0 ? "dropdown-filter" : ""}>
            {this.props.data.filterTitleData &&
            this.props.data.filterTitleData.map((item) => {
              return (<option value={item}> {item} </option>);
            })
            }
          </datalist>
        </div>
        <div className=" search-button">
          <button className="btn btn-primary " type="button" onClick={this.searchElize}><i
            className="fa fa-search"></i></button>
        </div>

        <button className="btn  btn-primary export-to-excel" type="button" onClick={this.exportData}>Export</button>
        {this.props.dataFiltered &&
        <div className="table-body">
          <table className="table">
            <thead className="thead-inverse">
            <tr>
              <th></th>
              <th onClick={() => this.setSortBy("brand")}>Бренд-Elize</th>
              <th onClick={() => this.setSortBy("fullTitle")}>Название-Elize</th>
              <th onClick={() => this.setSortBy("fullTitle")}>Название</th>
              <th onClick={() => this.setSortBy("brand")}>Бренд</th>
              <th></th>
            </tr>
            </thead>
            <tbody>
            {
              this.props.dataFiltered.map((item) => {
                return (<tr key={item.idElize + " " + item.id}>

                  <td>
                    {item.idElize && item.id &&
                    <button className="btn" onClick={() => this.unsimilar({elizeId: item.idElize, productId: item.id})}>
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
                  <td>
                    {item.idElize && item.id && <button type="button" className="btn btn-success"
                                                        onClick={() => this.attachSingle({
                                                          elizeId: item.idElize,
                                                          productId: item.id
                                                        })}>
                      Прикрепить
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
          <select className="count-input" defaultValue={this.props.data.itemsInEachPageCompare}
                  onChange={this.changeItemsInEachPageCompare}>
            <option value="5">5</option>
            <option value="50">50</option>
            <option value="100">100</option>
            <option value="200">200</option>
          </select>
        </div>
        <div className="pagination-block">
          {Math.ceil(this.props.data.countCompare / this.props.data.itemsInEachPageCompare) > 1 &&
          <Pagination maxPageCount={Math.ceil(this.props.data.countCompare / this.props.data.itemsInEachPageCompare)}
                      currentPage={this.currentPageCompare} clickFunction={this.clickFunctionCompare}/>}
        </div>
        <div className="table-title">Прикрепление Продукты</div>
        {/*<div className="search-container">*/}
        {/*<input type="text" placeholder="Search by name" value={this.props.data.searchTextAttached}*/}
        {/*onChange={(e) => this.props.changeSearchTextAttached(e.target.value)}/>*/}
        {/*</div>*/}
        <div className="search-container">
          <input type="text" list="brandsAttached" placeholder="Filter by brand"
                 value={this.props.data.filterBrandAttached}
                 onChange={(e) => this.filterByBrandAttachedFunc(e)}/>
          <datalist id="brandsAttached"
                    className={this.props.data.filterBrandAttachedData.length > 0 ? "dropdown-filter" : ""}>
            {this.props.data.filterBrandAttachedData &&
            this.props.data.filterBrandAttachedData.map((item) => {
              return (<option value={item}> {item} </option>);
            })
            }
          </datalist>
        </div>
        <div className="search-container">
          <input type="text" list="titlesAttached" placeholder="Filter by title"
                 value={this.props.data.filterTitleAttached}
                 onChange={(e) => this.filterByTitleAttachedFunc(e)}/>
          <datalist id="titlesAttached"
                    className={this.props.data.filterTitleAttachedData.length > 0 ? "dropdown-filter" : ""}>
            {this.props.data.filterTitleAttachedData &&
            this.props.data.filterTitleAttachedData.map((item) => {
              return (<option value={item}> {item} </option>);
            })
            }
          </datalist>
        </div>
        <div className=" search-button">
          <button className="btn btn-primary " type="button" onClick={this.searchElizeAttached}><i
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
              <th onClick={() => this.setSortByAttached("brand")}>Бренд-Elize</th>
              <th onClick={() => this.setSortByAttached("fullTitle")}>Название-Elize</th>
              <th onClick={() => this.setSortByAttached("fullTitle")}>Название</th>
              <th onClick={() => this.setSortByAttached("brand")}>Бренд</th>
              <th onClick={() => this.setSortByAttached("price")}>Цена-Elize</th>
              <th onClick={() => this.setSortByAttached("price")}>Цена</th>
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
          <select className="count-input" defaultValue={this.props.data.itemsInEachPageAttached}
                  onChange={this.changeItemsInEachPageAttached}>
            <option value="5">5</option>
            <option value="50">50</option>
            <option value="100">100</option>
            <option value="200">200</option>
          </select>
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
  state => ({
    data: state.general,
    dataFiltered: selectDataCompare(state),
    dataFilteredAttached: selectDataCompareAttached(state)
  }),
  {...generalActions}
)(Home);