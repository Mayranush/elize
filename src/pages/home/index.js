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
    this.itemsInEachPageCompare = 5;
    this.currentPageAttached = {
      value: 1
    };
    this.itemsInEachPageAttached = 5;
  }

  clickFunctionCompare = (item) => {
    this.props.compareElize(item - 1, this.itemsInEachPageCompare);
  };

  clickFunctionAttached = (item) => {
    this.props.compareElize(item - 1, this.itemsInEachPageAttached);
  };

  attachSingle = (idElize, id) => {
    this.props.attachSingle(idElize, id)
      .then(
        this.props.compareElize(this.currentPageCompare.value - 1, this.itemsInEachPageCompare),
        this.props.attachedElize(this.currentPageAttached.value - 1, this.itemsInEachPageAttached)
      );
  };

  componentDidMount() {
    this.props.compareElize(this.currentPageCompare.value - 1, this.itemsInEachPageCompare);
    this.props.attachedElize(this.currentPageAttached.value - 1, this.itemsInEachPageAttached);
  }

  render() {
    console.log(this.props,"props in home-------------");
    return (
      <div className="main-content" >

        {this.props.data.dataCompare &&
        <div className="table-body">
          <table className="table">
            <thead className="thead-inverse">
            <tr>
              <th>Elize-Id</th>
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
                  <td>{item.inStock && <i className="fa fa-plus"/>}
                    {!item.inStock && <i className="fa fa-minus"/>}</td>
                  <td title={item.id}>{item.id}</td>
                  <td>
                    {item.idElize && item.id && <button onClick={() => this.attachSingle({elizeId: item.idElize, productId: item.id})}>
                      Прикрепить
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

        {this.props.data.dataAttached &&
        <div className="table-body">
          <table className="table">
            <thead className="thead-inverse">
            <tr>
              <th>Elize-Id</th>
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
              this.props.data.dataAttached.map((item) => {
                return ( <tr key={item.idElize + " " +item.id}>
                  <th scope="row">{item.idElize}</th>
                  <td>{item.uid}</td>
                  <td>{item.titleElize}</td>
                  <td>{item.fullTitleElize}</td>
                  <td>{item.brandElize}</td>
                  <td>{item.priceElize}</td>
                  <td>{item.price}</td>
                  <td>{item.title}</td>
                  <td>{item.fullTitle}</td>
                  <td>{item.brand}</td>
                  <td>{item.category}</td>
                  <td>{item.subCategory}</td>
                  <td>{item.url}</td>
                  <td>{item.country}</td>
                  <td>{item.article}</td>
                  <td>{item.description}</td>
                  <td>{item.source}</td>
                  <td>{item.createdAt}</td>
                  <td>{item.updatedAt}</td>
                  <td>
                    {item.inStock && <i className="fa fa-plus"/>}
                    {!item.inStock && <i className="fa fa-minus"/>}
                  </td>
                  <td>{item.id}</td>
                  <td>
                    {item.idElize && item.id && <button>
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
          {this.props.data.countAttached > 1 &&
          <Pagination maxPageCount={Math.ceil(this.props.data.countAttached / this.itemsInEachPageAttached)}
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