import React from 'react';
import {connect} from "react-redux";
import {attachedActions, nonMatchingActions} from "../../actions";
import {Pagination} from "../../components/pagination/pagination";
import {selectDataAttached} from "../../selectors/attached";
import "./index.scss";

//hr_el_!!_**-&&    password
class Attached extends React.Component {
  constructor(props) {
    super(props);
    this.currentPageAttached = {
      value: 1
    };
  }

  clickFunctionAttached = (item) => {
    this.props.statusAll();
    this.props.attachedElize((this.props.data.filterBrandAttached),
      (this.props.data.filterTitleAttached),
      (this.props.data.filterSrcAttached),
      this.props.data.attachedSortBy,
      this.props.data.attachedSortDir,
      item - 1,
      this.props.data.itemsInEachPageAttached);
  };

  detachSingle = (idElize, id) => {
    this.props.statusAll();
    this.props.detachSingle(idElize, id)
      .then(() => {
        this.props.attachedElize((this.props.data.filterBrandAttached),
          (this.props.data.filterTitleAttached),
          (this.props.data.filterSrcAttached),
          this.props.data.attachedSortBy,
          this.props.data.attachedSortDir,
          this.currentPageAttached.value - 1,
          this.props.data.itemsInEachPageAttached)
      });
  };

  changeItemsInEachPageAttached = (e) => {
    this.props.statusAll();
    this.props.changeItemsInEachPageAttachedFunc(e.target.value);
    if (e.target.value > 0) {
      this.props.attachedElize((this.props.data.filterBrandAttached),
        (this.props.data.filterTitleAttached),
        (this.props.data.filterSrcAttached),
        this.props.data.attachedSortBy,
        this.props.data.attachedSortDir,
        this.currentPageAttached.value - 1,
        e.target.value);
    }
  };

  filterByBrandAttachedFunc = (e) => {
    this.props.statusAll();
    let brand = (e.target.value);
    this.props.filterByBrandAttached(brand);
    this.props.brandsElizeAttached(brand, this.props.data.filterSrcAttached);
  };

  filterByTitleAttachedFunc = (e) => {
    this.props.statusAll();
    let title = (e.target.value);
    this.props.filterByTitleAttached(title);
    this.props.titleElizeAttached(this.props.data.filterBrandAttached, title);
  };

  filterBySrcAttachedFunc = (e) => {
    this.props.statusAll();
    let src = (e.target.value);
    this.props.filterBySrcAttached(src);
    this.props.srcElizeAttached(this.props.data.filterBrandAttached, src);
  };

  searchElizeAttachedOnEnter = (e) => {
    this.props.statusAll();
    if (e.keyCode === 13) {
      this.searchElizeAttached();
    }
  };
  searchElizeAttached = () => {
    this.props.statusAll();
    this.props.attachedElize((this.props.data.filterBrandAttached),
      (this.props.data.filterTitleAttached),
      (this.props.data.filterSrcAttached),
      this.props.data.attachedSortBy,
      this.props.data.attachedSortDir,
      this.currentPageAttached.value - 1,
      this.props.data.itemsInEachPageAttached);
    this.currentPageAttached.value = 1;
  };

  setSortByAttached = (sortCol) => {
    this.props.statusAll();
    if (this.props.data.compareSortDir === "asc") {
      this.props.changeSortDir("desc");
      this.props.attachedElize((this.props.data.filterBrandAttached),
        (this.props.data.filterTitleAttached),
        (this.props.data.filterSrcAttached),
        sortCol,
        "desc",
        this.currentPageAttached.value - 1,
        this.props.data.itemsInEachPageAttached);
    } else {
      this.props.changeSortDir("asc");
      this.props.attachedElize((this.props.data.filterBrandAttached),
        (this.props.data.filterTitleAttached),
        (this.props.data.filterSrcAttached),
        sortCol,
        "asc",
        this.currentPageAttached.value - 1,
        this.props.data.itemsInEachPageAttached);
    }

  };

  componentDidMount() {
    // this.props.statusAll();
    this.props.attachedElize((this.props.data.filterBrandAttached),
      (this.props.data.filterTitleAttached),
      (this.props.data.filterSrcAttached),
      this.props.data.attachedSortBy,
      this.props.data.attachedSortDir,
      this.currentPageAttached.value - 1,
      this.props.data.itemsInEachPageAttached);
  }

  changeImageZoomHome(e) {
    this.props.changeImageZoomHome(e.target.src);
  }

  render() {
    return (
      <div className="main-content">
        <div className="table-title">Прикрепление Продукты</div>
        {/*<div className="search-container">*/}
        {/*<input type="text" placeholder="Search by name" value={this.props.data.searchTextAttached}*/}
        {/*onChange={(e) => this.props.changeSearchTextAttached(e.target.value)}/>*/}
        {/*</div>*/}
        <div className="search-container">
          <input type="text" list="brandsAttached" placeholder="Filter by brand"
                 value={this.props.data.filterBrandAttached}
                 onChange={(e) => this.filterByBrandAttachedFunc(e)}
                 onClick={(e) => this.filterByBrandAttachedFunc(e)}
                 onKeyUp={(e) => this.searchElizeAttachedOnEnter(e)}
          />
          <datalist id="brandsAttached"
                    className={this.props.data.filterBrandAttachedData.length > 0 ? "dropdown-filter" : ""}>
            {this.props.data.filterBrandAttachedData &&
            this.props.data.filterBrandAttachedData.map((item, index) => {
              return (<option key={index} value={item}> {item} </option>);
            })
            }
          </datalist>
        </div>
        <div className="search-container">
          <input type="text" list="titlesAttached" placeholder="Filter by title"
                 value={this.props.data.filterTitleAttached}
                 onChange={(e) => this.filterByTitleAttachedFunc(e)}
                 onKeyUp={(e) => this.searchElizeAttachedOnEnter(e)}/>
          <datalist id="titlesAttached"
                    className={this.props.data.filterTitleAttachedData.length > 0 ? "dropdown-filter" : ""}>
            {this.props.data.filterTitleAttachedData &&
            this.props.data.filterTitleAttachedData.map((item, index) => {
              return (<option key={index} value={item}> {item} </option>);
            })
            }
          </datalist>
        </div>
        <div className="search-container">
          <input type="text" list="srcAttached" placeholder="Filter by source"
                 value={this.props.data.filterSrcAttached}
                 onChange={(e) => this.filterBySrcAttachedFunc(e)}
                 onClick={(e) => this.filterBySrcAttachedFunc(e)}
                 onKeyUp={(e) => this.searchElizeAttachedOnEnter(e)}/>
          <datalist id="srcAttached"
                    className={this.props.data.filterSrcAttachedData.length > 0 ? "dropdown-filter" : ""}>
            {this.props.data.filterSrcAttachedData &&
            this.props.data.filterSrcAttachedData.map((item, index) => {
              return (<option key={index} value={item}> {item} </option>);
            })
            }
          </datalist>
        </div>
        <div className=" search-button">
          <button className="btn btn-primary " type="button" onClick={this.searchElizeAttached}><i
            className="fa fa-search"></i></button>
        </div>
        {/*<button className="btn btn-primary export-to-excel" type="button" onClick={this.exportDataAttached}>Export*/}
        {/*</button>*/}
        {this.props.dataFilteredAttached &&
        <div className="table-body">
          <table className="table">
            <thead className="thead-inverse">
            <tr>
              <th></th>
              <th onClick={() => this.setSortByAttached("brand")}>Бренд-Elize</th>
              <th onClick={() => this.setSortByAttached("fullTitle")}>Название-Elize</th>
              <th>Фото-Elize</th>
              <th>Фото</th>
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

                    {item.idElize && item.id &&
                    <button className={(this.props.second.statusAll === 'IDLE') ? "btn " : "btn disabled-btn"}
                            onClick={() => this.detachSingle({
                              elizeId: item.idElize,
                              productId: item.id
                            })}>
                      Открепить
                    </button>
                    }
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
            <span className="count-val">{this.props.data.countAttached}</span>
          </div>
          <div className="in-any-page">
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
            <Pagination
              maxPageCount={Math.ceil(this.props.data.countAttached / this.props.data.itemsInEachPageAttached)}
              currentPage={this.currentPageAttached}
              clickFunction={this.clickFunctionAttached}
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
    data: state.attachedReducer,
    second: state.nonMatchingReducer,
    dataFilteredAttached: selectDataAttached(state)
  }),
  { ...nonMatchingActions, ...attachedActions}
)(Attached);