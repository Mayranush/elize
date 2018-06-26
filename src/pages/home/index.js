import React from 'react';
import { connect } from "react-redux";
import { generalActions } from "../../actions";
import {Pagination} from "../../components/pagination/pagination";
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

  render() {
    return (
      <div className="main-content" >
        <div className="table-title">Сопоставление Продукты</div>
        <div className="form-group pull-right">
          <input type="text" className="search form-control" placeholder="What you looking for?" />
        </div>
        {this.props.data.dataCompare &&
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
              this.props.data.dataCompare.map((item) => {
                return ( <tr key={item.idElize + " " +item.id}>
                  <td>
                    {item.idElize && item.id && <button type="button" className="btn btn-success" onClick={() => this.attachSingle({elizeId: item.idElize, productId: item.id})}>
                      Прикрепить
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
          <span className="desc-text">Сопоставление Продукты: </span>
          <span className="count-val">{this.props.data.countCompare}</span>
        </div>
        <div>
          <span className="desc-text">Б каждом странице: </span>
          <input type="number" className="count-input" defaultValue={this.props.data.itemsInEachPageCompare} onChange={this.changeItemsInEachPageCompare}/>
        </div>
        <div className="pagination-block">
          {this.props.data.countCompare > 1 &&
          <Pagination maxPageCount={Math.ceil(this.props.data.countCompare / this.props.data.itemsInEachPageCompare)}
                      currentPage={this.currentPageCompare} clickFunction={this.clickFunctionCompare}/>}
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
          <input type="number" className="count-input" defaultValue={this.props.data.itemsInEachPageAttached} onChange={this.changeItemsInEachPageAttached}/>
        </div>
        <div className="pagination-block">
          {this.props.data.countAttached > 1 &&
          <Pagination maxPageCount={Math.ceil(this.props.data.countAttached / this.props.data.itemsInEachPageAttached)}
                      currentPage={this.currentPageAttached} clickFunction={this.clickFunctionAttached}/>}
        </div>
      </div>
    )
  }
}

export default connect(
  state => ({ data:  state.general }),
  { ...generalActions }
)(Home);