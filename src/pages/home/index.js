import React from 'react';
import {connect} from "react-redux";
import {generalActions, secondPageActions} from "../../actions";
import {Pagination} from "../../components/pagination/pagination";
import {selectDataCompare, selectDataCompareAttached} from "../../selectors/general";
import "./home.scss";

//hr_el_!!_**-&&    password
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

  changeImageZoom(e) {
    this.props.changeImageZoom(e.target.src);
  }

  clickFunctionCompare = (item) => {
    this.props.statusAll();
    this.props.compareElize((this.props.data.filterBrand),
      (this.props.data.filterTitle),
      this.props.data.compareSortBy,
      this.props.data.compareSortDir,
      item - 1,
      this.props.data.itemsInEachPageCompare,
      this.props.data.filterSource);
  };

  clickFunctionAttached = (item) => {
    this.props.statusAll();
    this.props.attachedElize((this.props.data.filterBrandAttached),
      (this.props.data.attachedTitleElize),
      this.props.data.attachedSortBy,
      this.props.data.attachedSortDir,
      item - 1,
      this.props.data.itemsInEachPageAttached);
  };

  attachSingle = (idElize, id) => {
    this.props.statusAll();
    this.props.attachSingle(idElize, id)
      .then(() => {
        this.props.compareElize((this.props.data.filterBrand),
          (this.props.data.filterTitle),
          this.props.data.compareSortBy,
          this.props.data.compareSortDir,
          this.currentPageCompare.value - 1,
          this.props.data.itemsInEachPageCompare,
          this.props.data.filterSource);
        this.props.attachedElize((this.props.data.filterBrandAttached),
          (this.props.data.attachedTitleElize),
          this.props.data.attachedSortBy,
          this.props.data.attachedSortDir,
          this.currentPageAttached.value - 1,
          this.props.data.itemsInEachPageAttached)
      });
  };

  detachSingle = (idElize, id) => {
    this.props.statusAll();
    this.props.detachSingle(idElize, id)
      .then(() => {
        this.props.compareElize((this.props.data.filterBrand),
          (this.props.data.filterTitle),
          this.props.data.compareSortBy,
          this.props.data.compareSortDir,
          this.currentPageCompare.value - 1,
          this.props.data.itemsInEachPageCompare,
          this.props.data.filterSource);
        this.props.attachedElize((this.props.data.filterBrandAttached),
          (this.props.data.attachedTitleElize),
          this.props.data.attachedSortBy,
          this.props.data.attachedSortDir,
          this.currentPageAttached.value - 1,
          this.props.data.itemsInEachPageAttached)
      });
  };

  unsimilar = (idElize, id) => {
    this.props.statusAll();
    this.props.unsimilar(idElize, id)
      .then(() => {
        this.props.compareElize((this.props.data.filterBrand),
          (this.props.data.filterTitle),
          this.props.data.compareSortBy,
          this.props.data.compareSortDir,
          this.currentPageCompare.value - 1,
          this.props.data.itemsInEachPageCompare,
          this.props.data.filterSource);
        this.props.attachedElize((this.props.data.filterBrandAttached),
          (this.props.data.attachedTitleElize),
          this.props.data.attachedSortBy,
          this.props.data.attachedSortDir,
          this.currentPageAttached.value - 1,
          this.props.data.itemsInEachPageAttached)
      });
  };

  changeItemsInEachPageCompare = (e) => {
    this.props.statusAll();
    this.props.changeItemsInEachPageCompareFunc(e.target.value);
    if (e.target.value > 0) {
      this.props.compareElize((this.props.data.filterBrand),
        (this.props.data.filterTitle),
        this.props.data.compareSortBy,
        this.props.data.compareSortDir,
        this.currentPageCompare.value - 1,
        e.target.value,
        this.props.data.filterSource);
    }
  };

  changeItemsInEachPageAttached = (e) => {
    this.props.statusAll();
    this.props.changeItemsInEachPageAttachedFunc(e.target.value);
    if (e.target.value > 0) {
      this.props.attachedElize((this.props.data.filterBrandAttached),
        (this.props.data.attachedTitleElize),
        this.props.data.attachedSortBy,
        this.props.data.attachedSortDir,
        this.currentPageAttached.value - 1,
        e.target.value);
    }
  };

  filterByBrandFunc = (e) => {
    this.props.statusAll();
    let brand = (e.target.value);
    this.props.filterByBrand(brand);
    this.props.brandsElize(brand);
  };

  filterByTitleFunc = (e) => {
    this.props.statusAll();
    let title = (e.target.value);
    this.props.filterByTitle(title);
    this.props.titleElize(this.props.data.filterBrand, title);
  };

  filterByBrandAttachedFunc = (e) => {
    this.props.statusAll();
    let brand = (e.target.value);
    this.props.filterByBrandAttached(brand);
    this.props.brandsElizeAttached(brand);
  };

  filterByTitleAttachedFunc = (e) => {
    this.props.statusAll();
    let title = (e.target.value);
    this.props.filterByTitleAttached(title);
    this.props.titleElizeAttached(this.props.data.filterBrandAttached, title);
  };

  searchElizeOnEnter = (e) => {
    this.props.statusAll();
    if (e.keyCode === 13) {
      this.searchElize();
    }
  };

  searchElize = () => {
    this.props.statusAll();
    this.props.compareElize((this.props.data.filterBrand),
      (this.props.data.filterTitle),
      this.props.data.compareSortBy,
      this.props.data.compareSortDir,
      this.currentPageCompare.value - 1,
      this.props.data.itemsInEachPageCompare,
      this.props.data.filterSource);
      this.currentPageCompare.value = 1;
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
    this.props.data.compareSortBy,
    this.props.data.compareSortDir,
    this.currentPageAttached.value - 1,
    this.props.data.itemsInEachPageAttached);
    this.currentPageAttached.value = 1;
  };
  setSortBy = (sortCol) => {
    this.props.statusAll();
    if (this.props.data.compareSortDir === "asc") {
      this.props.changeSortDir("desc");
      this.props.compareElize((this.props.data.filterBrand),
        (this.props.data.filterTitle),
        sortCol,
        "desc",
        this.currentPageCompare.value - 1,
        this.props.data.itemsInEachPageCompare,
        this.props.data.filterSource);
    } else {
      this.props.changeSortDir("asc");
      this.props.compareElize((this.props.data.filterBrand),
        (this.props.data.filterTitle),
        sortCol,
        "asc",
        this.currentPageCompare.value - 1,
        this.props.data.itemsInEachPageCompare,
        this.props.data.filterSource);
    }

  };
  setSortByAttached = (sortCol) => {
    this.props.statusAll();
    if (this.props.data.compareSortDir === "asc") {
      this.props.changeSortDir("desc");
      this.props.attachedElize((this.props.data.filterBrandAttached),
        (this.props.data.attachedTitleElize),
        sortCol,
        "desc",
        this.currentPageAttached.value - 1,
        this.props.data.itemsInEachPageAttached);
    } else {
      this.props.changeSortDir("asc");
      this.props.attachedElize((this.props.data.filterBrandAttached),
        (this.props.data.attachedTitleElize),
        sortCol,
        "asc",
        this.currentPageAttached.value - 1,
        this.props.data.itemsInEachPageAttached);
    }

  };

  componentDidMount() {
    // this.props.statusAll();
    this.props.compareElize((this.props.data.filterBrand),
      (this.props.data.filterTitle),
      this.props.data.compareSortBy,
      this.props.data.compareSortDir,
      this.currentPageCompare.value - 1,
      this.props.data.itemsInEachPageCompare,
      this.props.data.filterSource);
    this.props.attachedElize((this.props.data.filterBrandAttached),
      (this.props.data.attachedTitleElize),
      this.props.data.attachedSortBy,
      this.props.data.attachedSortDir,
      this.currentPageAttached.value - 1,
      this.props.data.itemsInEachPageAttached);
  }
  filterBySourceElizeFunc = (e) => {
    this.props.statusAll();
    let source = (e.target.value);
    this.props.filterBySourceElize(source);
    this.props.sourceElize();
  };
 
  render() {
    return (
      <div className="main-content">
        <div className="table-title">Сопоставление Продукты</div>
        <div className="search-container">
          <input
            type="text" 
            list="brands"
            placeholder="Filter by brand" 
            value={this.props.data.filterBrand}
            onChange={(e) => this.filterByBrandFunc(e)} 
            onKeyUp={(e) => this.searchElizeOnEnter(e)}
            onClick={(e) => this.filterByBrandFunc(e)}
          />
          <datalist id="brands" className={this.props.data.filterBrandData.length > 0 ? "dropdown-filter" : ""}>
            {this.props.data.filterBrandData &&
            this.props.data.filterBrandData.map((item, index) => {
              return (<option key={index} value={item}> {item} </option>);
            })
            }
          </datalist>
        </div>
        <div className="search-container">
          <input 
            type="text"
            list="titles" 
            placeholder="Filter by title" 
            value={this.props.data.filterTitle}
            onChange={(e) => this.filterByTitleFunc(e)}
            onKeyUp={(e) => this.searchElizeOnEnter(e)}
          />
          <datalist id="titles" className={this.props.data.filterTitleData.length > 0 ? "dropdown-filter" : ""}>
            {this.props.data.filterTitleData &&
            this.props.data.filterTitleData.map((item, index) => {
              return (<option key={index} value={item}> {item} </option>);
            })
            }
          </datalist>
        </div>
        <div className="search-container">
          <input type="text" list="sources" placeholder="Filter by source"
                 value={this.props.data.filterSource}
                 onChange={(e) => this.filterBySourceElizeFunc(e)}
                 onClick={(e) => this.filterBySourceElizeFunc(e)}
                 onKeyUp={(e) => this.searchElizeOnEnter(e)}/>
          <datalist id="sources"
                    className={this.props.data.filterSourceData.length > 0 ? "dropdown-filter" : ""}>
            {this.props.data.filterSourceData &&
            this.props.data.filterSourceData.map((item, index) => {
              return (<option key={index} value={item}> {item} </option>);
            })
            }
          </datalist>
        </div>
        <div className=" search-button">
          <button className="btn btn-primary " type="button" onClick={this.searchElize}><i
            className="fa fa-search"></i></button>
        </div>

        {/*<button className="btn  btn-primary export-to-excel" type="button" onClick={this.exportData}>Export</button>*/}
        {this.props.dataFiltered &&
        <div className="table-body">
          <table className="table">
            <thead className="thead-inverse">
            <tr>
              <th></th>
              <th onClick={() => this.setSortBy("brand")}>Бренд-Elize</th>
              <th onClick={() => this.setSortBy("fullTitle")}>Название-Elize</th>
              <th>Фото-Elize</th>
              <th>Фото</th>
              <th onClick={() => this.setSortBy("fullTitle")}>Название</th>
              <th onClick={() => this.setSortBy("brand")}>Бренд</th>
              <th></th>
            </tr>
            </thead>
            <tbody>
            {
              this.props.dataFiltered.map((item) => {
                return (

                  <tr key={item.idElize + " " + item.id}>

                    <td>
                      {item.idElize && item.id &&
                      <button className={(this.props.second.statusAll === 'IDLE') ? "btn " : "btn disabled-btn"}
                              onClick={() => this.unsimilar({elizeId: item.idElize, productId: item.id})}>
                        Открепить
                      </button>}
                      <div className="lightbox-target" id="image">
                        <img src={this.props.second.imageZoom}/>
                        <a className="lightbox-close" href="#"></a>
                      </div>

                    </td>
                    <td title={item.brandElize}>{item.brandElize}</td>
                    <td title={item.fullTitleElize} className="wraped-tbl ">
                      <a href={item.urlElize} target="_blank">
                        {item.fullTitleElize}</a>
                    </td>
                    <td><a className="image-size lightbox" href="#image">
                      <img className="image-size" onMouseOver={(e) => this.changeImageZoom(e)} src={item.imageElize}/>
                    </a>
                    </td>
                    <td><a className="image-size lightbox" href="#image">
                      <img className="image-size" onMouseOver={(e) => this.changeImageZoom(e)} src={item.image}/>
                    </a>
                    </td>

                    <td className="wraped-tbl ">
                      <a href={item.url} target="_blank">
                        <div className="image-hover"></div>
                        {item.fullTitle}</a>
                    </td>
                    <td title={item.brand}>{item.brand}</td>

                    <td>
                      {item.idElize && item.id &&
                      <button type="button"
                              className={(this.props.second.statusAll === 'IDLE') ? "btn btn-success" : "btn btn-success disabled-btn"}
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
        <div className="pagination-block-all">
          <div className="products-count-first-page">
            <span className="desc-text">Продукты: </span>
            <span className="count-val">{this.props.data.countCompare}</span>
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
            {Math.ceil(this.props.data.countCompare / this.props.data.itemsInEachPageCompare) > 1 &&
            <Pagination 
              maxPageCount={Math.ceil(this.props.data.countCompare / this.props.data.itemsInEachPageCompare)}
              currentPage={this.currentPageCompare}
              clickFunction={this.clickFunctionCompare}
              isProduct={false}
            />}
          </div>
        </div>
        <div className="table-title">Прикрепление Продукты</div>
        {/*<div className="search-container">*/}
        {/*<input type="text" placeholder="Search by name" value={this.props.data.searchTextAttached}*/}
        {/*onChange={(e) => this.props.changeSearchTextAttached(e.target.value)}/>*/}
        {/*</div>*/}
        <div className="search-container">
          <input type="text" list="brandsAttached" placeholder="Filter by brand"
                 value={this.props.data.filterBrandAttached}
                 onChange={(e) => this.filterByBrandAttachedFunc(e)}
                 onKeyUp={(e) => this.searchElizeAttachedOnEnter(e)}/>
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
                    </button>}
                  </td>
                  <td title={item.brandElize}>{item.brandElize}</td>
                  <td title={item.fullTitleElize}>
                    <a href={item.urlElize} target="_blank">{item.fullTitleElize}</a>
                  </td>
                  <td>
                    <a className="image-size lightbox" href="#image">
                      <img className="image-size" onMouseOver={(e) => this.changeImageZoom(e)} src={item.imageElize}/>
                    </a>
                  </td>
                  <td>
                    <a className="image-size lightbox" href="#image">
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
    data: state.general,
    second: state.secondPage,
    dataFiltered: selectDataCompare(state),
    dataFilteredAttached: selectDataCompareAttached(state)
  }),
  {...generalActions, ...secondPageActions}
)(Home);