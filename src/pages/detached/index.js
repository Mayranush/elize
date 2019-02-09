import React from 'react';
import {connect} from "react-redux";
import {detachedActions, nonMatchingActions} from "../../actions";
import {Pagination} from "../../components/pagination/pagination";
import {selectDataDetached} from "../../selectors/detached";
import "./index.scss";

//hr_el_!!_**-&&    password
class Detached extends React.Component {
  constructor(props) {
    super(props);
    this.currentPageDetached = {
      value: 1
    };
  }

  clickFunctionDetached = (item) => {
    this.props.statusAll();
    this.props.detachedElize((this.props.data.filterBrandDetached),
      (this.props.data.filterTitleDetached),
      (this.props.data.filterSrcDetached),
      this.props.data.detachedSortBy,
      this.props.data.detachedSortDir,
      item - 1,
      this.props.data.itemsInEachPageDetached);
  };

  detachedDelete = (detId) => {
    this.props.statusAll();
    this.props.detachedDelete(detId)
      .then(() => {
        this.props.detachedElize((this.props.data.filterBrandDetached),
          (this.props.data.filterTitleDetached),
          (this.props.data.filterSrcDetached),
          this.props.data.detachedSortBy,
          this.props.data.detachedSortDir,
          this.currentPageDetached.value - 1,
          this.props.data.itemsInEachPageDetached)
      });
  };

  changeItemsInEachPageDetached = (e) => {
    this.props.statusAll();
    this.props.changeItemsInEachPageDetachedFunc(e.target.value);
    if (e.target.value > 0) {
      this.props.detachedElize((this.props.data.filterBrandDetached),
        (this.props.data.filterTitleDetached),
        (this.props.data.filterSrcDetached),
        this.props.data.detachedSortBy,
        this.props.data.detachedSortDir,
        this.currentPageDetached.value - 1,
        e.target.value);
    }
  };

  filterByBrandDetachedFunc = (e) => {
    this.props.statusAll();
    let brand = (e.target.value);
    this.props.filterByBrandDetached(brand);
    this.props.brandsElizeDetached(brand, this.props.data.filterSrcDetached, this.props.data.filterTitleDetached);
  };

  filterByTitleDetachedFunc = (e) => {
    this.props.statusAll();
    let title = (e.target.value);
    this.props.filterByTitleDetached(title);
    this.props.titleElizeDetached(this.props.data.filterBrandDetached,  this.props.data.filterSrcDetached, title);
  };

  filterBySrcDetachedFunc = (e) => {
    this.props.statusAll();
    let src = (e.target.value);
    this.props.filterBySrcDetached(src);
    this.props.srcElizeDetached(this.props.data.filterBrandDetached, src, this.props.data.filterTitleDetached);
  };

  searchElizeDetachedOnEnter = (e) => {
    this.props.statusAll();
    if (e.keyCode === 13) {
      this.searchElizeDetached();
    }
  };
  searchElizeDetached = () => {
    this.props.statusAll();
    this.props.detachedElize((this.props.data.filterBrandDetached),
      (this.props.data.filterTitleDetached),
      (this.props.data.filterSrcDetached),
      this.props.data.detachedSortBy,
      this.props.data.detachedSortDir,
      this.currentPageDetached.value - 1,
      this.props.data.itemsInEachPageDetached);
    this.currentPageDetached.value = 1;
  };

  setSortByDetached = (sortCol) => {
    this.props.statusAll();
    if (this.props.data.compareSortDir === "asc") {
      this.props.changeSortDir("desc");
      this.props.detachedElize((this.props.data.filterBrandDetached),
        (this.props.data.filterTitleDetached),
        (this.props.data.filterSrcDetached),
        sortCol,
        "desc",
        this.currentPageDetached.value - 1,
        this.props.data.itemsInEachPageDetached);
    } else {
      this.props.changeSortDir("asc");
      this.props.detachedElize((this.props.data.filterBrandDetached),
        (this.props.data.filterTitleDetached),
        (this.props.data.filterSrcDetached),
        sortCol,
        "asc",
        this.currentPageDetached.value - 1,
        this.props.data.itemsInEachPageDetached);
    }

  };

  componentDidMount() {
    // this.props.statusAll();
    this.props.detachedElize((this.props.data.filterBrandDetached),
      (this.props.data.filterTitleDetached),
      (this.props.data.filterSrcDetached),
      this.props.data.detachedSortBy,
      this.props.data.detachedSortDir,
      this.currentPageDetached.value - 1,
      this.props.data.itemsInEachPageDetached);
  }

  changeImageZoomHome(e) {
    this.props.changeImageZoomHome(e.target.src);
  }

  render() {
    return (
      <div className="main-content">
        <div className="table-title">Открепление Продукты</div>
        {/*<div className="search-container">*/}
        {/*<input type="text" placeholder="Search by name" value={this.props.data.searchTextDetached}*/}
        {/*onChange={(e) => this.props.changeSearchTextDetached(e.target.value)}/>*/}
        {/*</div>*/}
        <div className="search-container">
          <input type="text" list="brandsDetached" placeholder="Filter by brand"
                 value={this.props.data.filterBrandDetached}
                 onChange={(e) => this.filterByBrandDetachedFunc(e)}
                 onClick={(e) => this.filterByBrandDetachedFunc(e)}
                 onKeyUp={(e) => this.searchElizeDetachedOnEnter(e)}
          />
          <datalist id="brandsDetached"
                    className={this.props.data.filterBrandDetachedData.length > 0 ? "dropdown-filter" : ""}>
            {this.props.data.filterBrandDetachedData &&
            this.props.data.filterBrandDetachedData.map((item, index) => {
              return (<option key={index} value={item}> {item} </option>);
            })
            }
          </datalist>
        </div>
        <div className="search-container">
          <input type="text" list="titlesDetached" placeholder="Filter by title"
                 value={this.props.data.filterTitleDetached}
                 onChange={(e) => this.filterByTitleDetachedFunc(e)}
                 onKeyUp={(e) => this.searchElizeDetachedOnEnter(e)}/>
          <datalist id="titlesDetached"
                    className={this.props.data.filterTitleDetachedData.length > 0 ? "dropdown-filter" : ""}>
            {this.props.data.filterTitleDetachedData &&
            this.props.data.filterTitleDetachedData.map((item, index) => {
              return (<option key={index} value={item}> {item} </option>);
            })
            }
          </datalist>
        </div>
        <div className="search-container">
          <input type="text" list="srcDetached" placeholder="Filter by source"
                 value={this.props.data.filterSrcDetached}
                 onChange={(e) => this.filterBySrcDetachedFunc(e)}
                 onClick={(e) => this.filterBySrcDetachedFunc(e)}
                 onKeyUp={(e) => this.searchElizeDetachedOnEnter(e)}/>
          <datalist id="srcDetached"
                    className={this.props.data.filterSrcDetachedData.length > 0 ? "dropdown-filter" : ""}>
            {this.props.data.filterSrcDetachedData &&
            this.props.data.filterSrcDetachedData.map((item, index) => {
              return (<option key={index} value={item}> {item} </option>);
            })
            }
          </datalist>
        </div>
        <div className=" search-button">
          <button className="btn btn-primary " type="button" onClick={this.searchElizeDetached}><i
            className="fa fa-search"></i></button>
        </div>
        {/*<button className="btn btn-primary export-to-excel" type="button" onClick={this.exportDataDetached}>Export*/}
        {/*</button>*/}
        {this.props.dataFilteredDetached &&
        <div className="table-body">
          <table className="table">
            <thead className="thead-inverse">
            <tr>
              <th></th>
              <th onClick={() => this.setSortByDetached("brand")}>Бренд-Elize</th>
              <th onClick={() => this.setSortByDetached("fullTitle")}>Название-Elize</th>
              <th>Фото-Elize</th>
              <th>Фото</th>
              <th onClick={() => this.setSortByDetached("fullTitle")}>Название</th>
              <th onClick={() => this.setSortByDetached("brand")}>Бренд</th>
              <th onClick={() => this.setSortByDetached("price")}>Цена-Elize</th>
              <th onClick={() => this.setSortByDetached("price")}>Цена</th>
            </tr>
            </thead>
            <tbody>
            {
              this.props.dataFilteredDetached.map((item) => {
                return (<tr key={item.idElize + " " + item.id}>
                  <td>

                    {item.idElize && item.id &&
                    <button className={(this.props.second.statusAll === 'IDLE') ? "btn " : "btn disabled-btn"}
                            onClick={() => this.detachedDelete({
                              detId: item.detId
                            })}>
                      Удалить
                    </button>}
                    <div className="lightbox-target" id="image">
                      <img src={this.props.data.imageZoom}/>
                      <a className="lightbox-close" href="#"></a>
                    </div>
                  </td>
                  <td title={item.brandElize}>{item.brandElize}</td>
                  <td title={item.fullTitleElize}>
                    <a href={item.urlElize} target="_blank">{item.fullTitleElize}</a>
                  </td>
                  <td>
                    <a className="image-size lightbox" href="#image">
                      <img className="image-size" onMouseOver={(e) => this.changeImageZoomHome(e)} src={item.imageElize}/>
                    </a>
                  </td>
                  <td>
                    <a className="image-size lightbox" href="#image">
                      <img className="image-size" onMouseOver={(e) => this.changeImageZoomHome(e)} src={item.image}/>
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
          <div className="products-count-first-page">
            <span className="desc-text">Продукты: </span>
            <span className="count-val">{this.props.data.countDetached}</span>
          </div>
          <div className="in-any-page">
            <span className="desc-text">В каждом странице: </span>
            <select className="count-input" defaultValue={this.props.data.itemsInEachPageDetached}
                    onChange={this.changeItemsInEachPageDetached}>
              <option value="5">5</option>
              <option value="50">50</option>
              <option value="100">100</option>
              <option value="200">200</option>
            </select>
          </div>
          <div className="pagination-block">
            {Math.ceil(this.props.data.countDetached / this.props.data.itemsInEachPageDetached) > 1 &&
            <Pagination
              maxPageCount={Math.ceil(this.props.data.countDetached / this.props.data.itemsInEachPageDetached)}
              currentPage={this.currentPageDetached}
              clickFunction={this.clickFunctionDetached}
              isProduct={true}
            />}
          </div>
        </div>
      </div>
    )
  }
}

export default connect(
  state => ({
    data: state.detachedReducer,
    second: state.nonMatchingReducer,
    dataFilteredDetached: selectDataDetached(state)
  }),
  { ...nonMatchingActions, ...detachedActions}
)(Detached);