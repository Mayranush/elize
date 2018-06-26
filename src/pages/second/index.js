import React from 'react';
import { connect } from "react-redux";
import { generalActions, secondPageActions } from "../../actions";
import {Pagination} from "../../components/pagination/pagination";
import "./second.scss";
import general from "../../reducers/generalReducer";

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

  componentDidMount() {
    this.allCalls();
  }

  allCalls = () => {
    this.props.nonCompareElize(this.currentPageNonCompare.value - 1, this.props.data.itemsInEachPageNonCompare);
    this.props.nonCompareProducts(this.currentPageNonCompareProducts.value - 1, this.props.data.itemsInEachPageNonCompareProducts);
    this.props.attachedElize(this.currentPageAttached.value - 1, this.props.data.itemsInEachPageCompare);
  };

  render() {
    return (
      <div className="main-content" >
        <div className="table-title"> Не Сопоставление Продукты</div>
        {this.props.data.dataNonCompare &&
        <div className="table-body">
          <table className="table">
            <thead className="thead-inverse">
            <tr>
              <th>Id-Elize</th>
              <th>Полное Название-Elize</th>
              <th>Бренд-Elize</th>
              <th>Цена-Elize</th>
              <th>Цена</th>
              <th>Название</th>
              <th>Полное Название</th>
              <th>Бренд</th>
              <th>Категория</th>
              <th>Подкатегория</th>
              <th>Картинка</th>
              <th>Страна</th>
              <th>Артикул</th>
              <th>Описание</th>
              <th>Источник</th>
              <th>Создан</th>
              <th>Обновлен</th>
              <th>В наличии</th>
              <th>Id</th>
            </tr>
            </thead>
            <tbody>
              {
                this.props.data.dataNonCompare.map((item) => {
                  return ( <tr key={item.idElize + " " +item.id}>
                    <th scope="row">{item.idElize}</th>
                    <td title={item.fullTitleElize}>
                      <a href={item.urlElize} target="_blank">{item.fullTitleElize}</a>
                    </td>
                    <td title={item.brandElize}>{item.brandElize}</td>
                    <td title={item.priceElize}>{item.priceElize}</td>
                    <td title={item.price}>{item.price}</td>
                    <td title={item.title}>
                      <a href={item.url} target="_blank">{item.title}</a>
                    </td>
                    <td title={item.fullTitle}>{item.fullTitle}</td>
                    <td title={item.brand}>{item.brand}</td>
                    <td title={item.category}>{item.category}</td>
                    <td title={item.subCategory}>{item.subCategory}</td>
                    <td title={item.url}>{item.url}</td>
                    <td title={item.country}>{item.country}</td>
                    <td title={item.article}>{item.article}</td>
                    <td title={item.description}>{item.description}</td>
                    <td title={item.source}>{item.source}</td>
                    <td title={item.createdAt}>{item.createdAt}</td>
                    <td title={item.updatedAt}>{item.updatedAt}</td>
                    <td>{item.inStock && <i className="fa fa-plus green"/>}
                      {!item.inStock && <i className="fa fa-minus red"/>}</td>
                    <td title={item.id}>{item.id}</td>
                  </tr>);
                })
              }
            </tbody>
          </table>
        </div>}
        <div>
          <span className="desc-text">Не Сопоставление Продукты: </span>
          <span className="count-val">{this.props.data.countNonCompare}</span>
        </div>
        <div>
          <span className="desc-text">Б каждом странице: </span>
          <input type="number" className="count-input" defaultValue={this.props.data.itemsInEachPageNonCompare} onChange={this.changeItemsInEachPageNonCompare}/>
        </div>
        <div className="pagination-block">
          {this.props.data.countNonCompare > 1 &&
          <Pagination maxPageCount={Math.ceil(this.props.data.countNonCompare / this.props.data.itemsInEachPageNonCompare)}
                      currentPage={this.currentPageNonCompare} clickFunction={this.clickFunctionNonCompare}/>}
        </div>

        <div className="table-title"> Не Прикрепление Продукты </div>
        {this.props.data.dataNonCompareProducts &&
        <div className="table-body">
          <table className="table">
            <thead className="thead-inverse">
            <tr>
              <th>Id-Elize</th>
              <th>Id</th>
              <th>Название</th>
              <th>Полное Название</th>
              <th>Цена</th>
              <th>Бренд</th>
              <th>Категория</th>
              <th>Подкатегория</th>
              <th>Картинка</th>
              <th>Страна</th>
              <th>Артикул</th>
              <th>Описание</th>
              <th>Источник</th>
              <th>Создан</th>
              <th>Обновлен</th>
              <th>В наличии</th>
            </tr>
            </thead>
            <tbody>
            {
              this.props.data.dataNonCompareProducts.map((item, index) => {
                return ( <tr key={item.id}>
                    <td>
                      <input type="number" className="form-control" onChange={e => this.props.updateInputValue(e, index, this.props.data.inputValue)} />
                    </td>
                    <th scope="row">{item.id}</th>
                    <td title={item.title}>
                      <a href={item.url} target="_blank">{item.title}</a>
                    </td>
                    <td title={item.fullTitle}>
                      <a href={item.urlElize} target="_blank">{item.fullTitleElize}</a>
                    </td>
                    <td title={item.price}>{item.price}</td>
                    <td title={item.brand}>{item.brand}</td>
                    <td title={item.category}>{item.category}</td>
                    <td title={item.subCategory}>{item.subCategory}</td>
                    <td title={item.url}>{item.url}</td>
                    <td title={item.country}>{item.country}</td>
                    <td title={item.article}>{item.article}</td>
                    <td title={item.description}>{item.description}</td>
                    <td title={item.source}>{item.source}</td>
                    <td title={item.createdAt}>{item.createdAt}</td>
                    <td title={item.updatedAt}>{item.updatedAt}</td>
                    <td>{item.inStock && <i className="fa fa-plus green"/>}
                      {!item.inStock && <i className="fa fa-minus red"/>}</td>
                 </tr>);
              })
            }
            </tbody>
          </table>
        </div>}
        <button type="button" className="btn btn-success attach-btn" onClick={() => this.attachMultiple()}>Прикрепить все</button>

        <div>
          <span className="desc-text">Не Прикрепление Продукты: </span>
          <span className="count-val">{this.props.data.countNonCompareProducts}</span>
        </div>
        <div>
          <span className="desc-text">Б каждом странице: </span>
          <input type="number" className="count-input" defaultValue={this.props.data.itemsInEachPageNonCompareProducts} onChange={this.changeItemsInEachPageNonCompareProducts}/>
        </div>
        <div className="pagination-block">
          {this.props.data.countNonCompareProducts > 1 &&
          <Pagination maxPageCount={Math.ceil(this.props.data.countNonCompareProducts / this.props.data.itemsInEachPageNonCompareProducts)}
                      currentPage={this.currentPageNonCompareProducts} clickFunction={this.clickFunctionNonCompareProducts}/>}
        </div>

        <div className="table-title">Прикрепление Продукты</div>
        {this.props.data.dataAttached &&
        <div className="table-body">
          <table className="table">
            <thead className="thead-inverse">
            <tr>
              <th></th>
              <th>Id-Elize</th>
              <th>Полное Название-Elize</th>
              <th>Бренд-Elize</th>
              <th>Цена-Elize</th>
              <th>Цена</th>
              <th>Название</th>
              <th>Полное Название</th>
              <th>Бренд</th>
              <th>Категория</th>
              <th>Подкатегория</th>
              <th>Картинка</th>
              <th>Страна</th>
              <th>Артикул</th>
              <th>Описание</th>
              <th>Источник</th>
              <th>Создан</th>
              <th>Обновлен</th>
              <th>В наличии</th>
              <th>Id</th>
            </tr>
            </thead>
            <tbody>
            {
              this.props.data.dataAttached.map((item) => {
                return ( <tr key={item.idElize + " " +item.id}>
                  <td>
                    {item.idElize && item.id && <button className="btn">
                      Открепить
                    </button>}
                  </td>
                  <th scope="row">{item.idElize}</th>
                  <td title={item.fullTitleElize}>
                    <a href={item.urlElize} target="_blank">{item.fullTitleElize}</a>
                  </td>
                  <td title={item.brandElize}>{item.brandElize}</td>
                  <td title={item.priceElize}>{item.priceElize}</td>
                  <td title={item.price}>{item.price}</td>
                  <td title={item.title}>
                    <a href={item.url} target="_blank">{item.title}</a>
                  </td>
                  <td title={item.fullTitle}>{item.fullTitle}</td>
                  <td title={item.brand}>{item.brand}</td>
                  <td title={item.category}>{item.category}</td>
                  <td title={item.subCategory}>{item.subCategory}</td>
                  <td title={item.url}>{item.url}</td>
                  <td title={item.country}>{item.country}</td>
                  <td title={item.article}>{item.article}</td>
                  <td title={item.description}>{item.description}</td>
                  <td title={item.source}>{item.source}</td>
                  <td title={item.createdAt}>{item.createdAt}</td>
                  <td title={item.updatedAt}>{item.updatedAt}</td>
                  <td>{item.inStock && <i className="fa fa-plus green"/>}
                    {!item.inStock && <i className="fa fa-minus red"/>}</td>
                  <td title={item.id}>{item.id}</td>
                </tr>);
              })
            }
            </tbody>
          </table>
        </div>}
        <div>
          <span className="desc-text">Прикрепление Продукты: </span>
          <span className="count-val">{this.props.data.countAttached}</span>
        </div>
        <div>
          <span className="desc-text">Б каждом странице: </span>
          <input type="number" className="count-input" defaultValue={this.props.data.itemsInEachPageCompare} onChange={this.changeItemsInEachPageCompare}/>
        </div>
        <div className="pagination-block">
          {this.props.data.countAttached > 1 &&
          <Pagination maxPageCount={Math.ceil(this.props.data.countAttached / this.props.data.itemsInEachPageCompare)}
                      currentPage={this.currentPageAttached} clickFunction={this.clickFunctionCompare}/>}
        </div>
      </div>
    )
  }
}

export default connect(
  state => ({ data:  state.secondPage}),
  { ...secondPageActions }
)(About);