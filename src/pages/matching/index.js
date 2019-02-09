import React from 'react';
import {connect} from "react-redux";
import {matchingActions, nonMatchingActions} from "../../actions";
import {Pagination} from "../../components/pagination/pagination";
import {selectDataCompare} from "../../selectors/matching";
import "./index.scss";

//hr_el_!!_**-&&    password
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.currentPageCompare = {
      value: 1
    };
    this.selectedCheckboxes = [];
    this.isFirst = true;
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
    this.selectedCheckboxes = [];
    this.props.changeMatchingCheckboxesAction(this.props.dataFiltered, false);
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

  filterByBrandFunc = (e) => {
    this.props.statusAll();
    let brand = (e.target.value);
    this.props.filterByBrand(brand);
    this.props.brandsElize(brand, this.props.data.filterSource);
  };

  filterByTitleFunc = (e) => {
    this.props.statusAll();
    let title = (e.target.value);
    this.props.filterByTitle(title);
    this.props.titleElize(this.props.data.filterBrand, title);
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

  componentDidUpdate() {
    if (this.props.dataFiltered.length && this.isFirst) {
      this.props.changeMatchingCheckboxesAction(this.props.dataFiltered, false);
      this.isFirst = false;
    }
  }

  componentDidMount() {
    // this.props.statusAll();
    this.props.compareElize((this.props.data.filterBrand),
      (this.props.data.filterTitle),
      this.props.data.compareSortBy,
      this.props.data.compareSortDir,
      this.currentPageCompare.value - 1,
      this.props.data.itemsInEachPageCompare,
      this.props.data.filterSource);
  }

  filterBySourceElizeFunc = (e) => {
    this.props.statusAll();
    let source = (e.target.value);
    this.props.filterBySourceElize(source);
    this.props.sourceElize(this.props.data.filterBrand, source);
  };
  changeImageZoomHome(e) {
    this.props.changeImageZoomHome(e.target.src);
  }

  getSelectedCheckboxes() {
    if (this.props.data.matchingCheckbox['all']) {
      this.props.dataFiltered.map((item) => {
        this.selectedCheckboxes.push({elizeId: item.idElize, productId: item.id});
      })
    } else {
      for (var key in this.props.data.matchingCheckbox) {
        if (this.props.data.matchingCheckbox[key]) {
          const obj = this.props.dataFiltered.filter(item => item.id === Number(key));
          this.selectedCheckboxes.push({elizeId: obj[0].idElize, productId: obj[0].id});
        }
      }
    }
  }

  attachSingleBulk() {
    this.getSelectedCheckboxes();
    this.props.attachSingleBulk(this.selectedCheckboxes)
      .then(() => {
        this.props.compareElize((this.props.data.filterBrand),
          (this.props.data.filterTitle),
          this.props.data.compareSortBy,
          this.props.data.compareSortDir,
          this.currentPageCompare.value - 1,
          this.props.data.itemsInEachPageCompare,
          this.props.data.filterSource);
      });
    this.selectedCheckboxes = [];
    this.props.changeMatchingCheckboxesAction(this.props.dataFiltered, false);
  }

  unsimilarBulk() {
    this.getSelectedCheckboxes();
    this.props.unsimilarBulk(this.selectedCheckboxes)
      .then(() => {
        this.props.compareElize((this.props.data.filterBrand),
          (this.props.data.filterTitle),
          this.props.data.compareSortBy,
          this.props.data.compareSortDir,
          this.currentPageCompare.value - 1,
          this.props.data.itemsInEachPageCompare,
          this.props.data.filterSource);
      });
    this.selectedCheckboxes = [];
    this.props.changeMatchingCheckboxesAction(this.props.dataFiltered, false);
  }

  render() {
    return (
      <div className="main-content">
        <div className="table-title">Сопоставление Продукты</div>
        <div className="lightbox-target" id="image">
          <img src={this.props.data.imageZoom}/>
          <a className="lightbox-close" href="#"></a>
        </div>
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
        <div className="search-button">
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
              <th>
                { this.props.dataFiltered.length > 0 &&
                <div>
                  <input                                                           ////////////////////////////////////
                    type="checkbox"
                    checked={this.props.data.matchingCheckbox['all']}
                    onChange={() => this.props.changeMatchingCheckboxesAction(this.props.dataFiltered, !this.props.data.matchingCheckbox['all'])}
                  /> All
                </div>
                }
              </th>
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
                      <input                                                                 ////////////////////////////////////////////////
                        type="checkbox"
                        checked={this.props.data.matchingCheckbox[item.id] ? this.props.data.matchingCheckbox[item.id] : false}
                        onChange={() => this.props.toggleCheckboxAction(item.id)}
                        key={item.id}
                      />
                    </td>
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
                      <img className="image-size" onMouseOver={(e) => this.changeImageZoomHome(e)} src={item.imageElize}/>
                    </a>
                    </td>
                    <td><a className="image-size lightbox" href="#image">
                      <img className="image-size" onMouseOver={(e) => this.changeImageZoomHome(e)} src={item.image}/>
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
            <button type="button"
              className={(this.props.second.statusAll === 'IDLE') ? "btn detach-btn-all" : "btn detach-btn-all disabled-btn"}
              onClick={() => this.unsimilarBulk()}>Открепить все
            </button>
            <button type="button"
              className={(this.props.second.statusAll === 'IDLE') ?
                "btn btn-success attach-btn-all" : "btn btn-success attach-btn-all disabled-btn"}
              onClick={() => this.attachSingleBulk()}>Прикрепить все
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(
  state => ({
    data: state.matchingReducer,
    second: state.nonMatchingReducer,
    dataFiltered: selectDataCompare(state),
  }),
  {...matchingActions, ...nonMatchingActions}
)(Home);