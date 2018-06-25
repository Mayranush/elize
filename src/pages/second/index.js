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
    this.itemsInEachPageNonCompare = 5;
    this.currentPageNonCompareProducts = {
      value: 1
    };
    this.itemsInEachPageNonCompareProducts = 4;
    this.currentPageCompare = {
      value: 1
    };
    this.itemsInEachPageCompare = 5;
    this.textInput = [];
  }

  clickFunctionNonCompare = (item) => {
    this.props.nonCompareElize(item - 1, this.itemsInEachPageNonCompare);
  };

  clickFunctionNonCompareProducts = (item) => {
    this.props.nonCompareProducts(item - 1, this.itemsInEachPageNonCompareProducts);
  };

  clickFunctionCompare = (item) => {
    this.props.compareElize(item - 1, this.itemsInEachPageCompare);
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
      .then(
        this.props.nonCompareElize(this.currentPageNonCompare.value - 1, this.itemsInEachPageNonCompare),
        this.props.nonCompareProducts(this.currentPageNonCompareProducts.value - 1, this.itemsInEachPageNonCompareProducts),
        this.props.compareElize(this.currentPageCompare.value - 1, this.itemsInEachPageCompare)
    );
  };

  componentDidMount() {
    this.props.nonCompareElize(this.currentPageNonCompare.value - 1, this.itemsInEachPageNonCompare);
    this.props.nonCompareProducts(this.currentPageNonCompareProducts.value - 1, this.itemsInEachPageNonCompareProducts);
    this.props.compareElize(this.currentPageCompare.value - 1, this.itemsInEachPageCompare);
  }

  render() {
    console.log(this.props,"props in second--------------");
    return (
      <div className="main-content" >
        <div className="table-title"> Не Сопоставление Продукты</div>
        {this.props.data.dataNonCompare &&
        <div className="table-body">
          <table className="table">
            <thead className="thead-inverse">
            <tr>
              <th>Id-Elize</th>
              <th>Uid</th>
              <th>Название-Elize</th>
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
                    <td title={item.uid}>{item.uid}</td>
                    <td title={item.titleElize}>{item.titleElize}</td>
                    <td title={item.fullTitleElize}>{item.fullTitleElize}</td>
                    <td title={item.brandElize}>{item.brandElize}</td>
                    <td title={item.priceElize}>{item.priceElize}</td>
                    <td title={item.price}>{item.price}</td>
                    <td title={item.title}>{item.title}</td>
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
        <div className="pagination-block">
          {this.props.data.countNonCompare > 1 &&
          <Pagination maxPageCount={Math.ceil(this.props.data.countNonCompare / this.itemsInEachPageNonCompare)}
                      currentPage={this.currentPageNonCompare} clickFunction={this.clickFunctionNonCompare}/>}
        </div>

        <div className="table-title"> Не Прикрепление Продукты </div>
        {this.props.data.dataNonCompareProducts &&
        <div className="table-body">
          <table className="table">
            <thead className="thead-inverse">
            <tr>
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
              <th>Id-Elize</th>
            </tr>
            </thead>
            <tbody>
            {
              this.props.data.dataNonCompareProducts.map((item, index) => {
                return ( <tr key={item.id}>
                    <th scope="row">{item.id}</th>
                    <td title={item.title}>{item.title}</td>
                    <td title={item.fullTitle}>{item.fullTitle}</td>
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
                    <td>
                      <input type="number" className="form-control" onChange={e => this.props.updateInputValue(e, index, this.props.data.inputValue)} />
                    </td>
                 </tr>);
              })
            }
            </tbody>
          </table>
        </div>}
        <button type="button" className="btn btn-success" onClick={() => this.attachMultiple()}>Прикрепить все</button>
        <div className="pagination-block">
          {this.props.data.countNonCompareProducts > 1 &&
          <Pagination maxPageCount={Math.ceil(this.props.data.countNonCompareProducts / this.itemsInEachPageNonCompareProducts)}
                      currentPage={this.currentPageNonCompareProducts} clickFunction={this.clickFunctionNonCompareProducts}/>}
        </div>

        <div className="table-title">Прикрепление Продукты</div>
        {this.props.data.dataCompare &&
        <div className="table-body">
          <table className="table">
            <thead className="thead-inverse">
            <tr>
              <th>Id-Elize</th>
              <th>Uid</th>
              <th>Название-Elize</th>
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
              <th></th>
            </tr>
            </thead>
            <tbody>
            {
              this.props.data.dataCompare.map((item) => {
                return ( <tr key={item.idElize + " " +item.id}>
                  <th scope="row">{item.idElize}</th>
                  <td title={item.uid}>{item.uid}</td>
                  <td title={item.titleElize}>{item.titleElize}</td>
                  <td title={item.fullTitleElize}>{item.fullTitleElize}</td>
                  <td title={item.brandElize}>{item.brandElize}</td>
                  <td title={item.priceElize}>{item.priceElize}</td>
                  <td title={item.price}>{item.price}</td>
                  <td title={item.title}>{item.title}</td>
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
                  <td>
                    {item.idElize && item.id && <button className="btn">
                      Открепить
                    </button>}
                  </td>
                </tr>);
              })
            }
            </tbody>
          </table>
        </div>}
        <div className="pagination-block">
          {this.props.data.countCompare > 1 &&
          <Pagination maxPageCount={Math.ceil(this.props.data.countCompare / this.itemsInEachPageCompare)}
                      currentPage={this.currentPageCompare} clickFunction={this.clickFunctionCompare}/>}
        </div>
      </div>
    )
  }
}

export default connect(
  state => ({ data:  state.secondPage}),
  { ...secondPageActions }
)(About);