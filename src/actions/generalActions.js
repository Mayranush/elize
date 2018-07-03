import {createAction} from "redux-actions";
import ActionTypes from "../constants/actionTypes";
import store from "store";
import {tools} from "../resources";
import api from "../api/api";
import {changePopup} from "./popupActions"; 

export const cleanData = createAction(ActionTypes.cleanData);
export const changeItemsInEachPageCompareFunc = createAction(ActionTypes.changeItemsInEachPageCompareFunc);
export const changeItemsInEachPageAttachedFunc = createAction(ActionTypes.changeItemsInEachPageAttachedFunc);

export const changeSearchText = createAction(ActionTypes.changeSearchText);
export const changeSearchTextAttached = createAction(ActionTypes.changeSearchTextAttached);

export function errorHandler(error) {
  return (dispatch) => {
    // if (error.length != 0) {
    //   text = error.response.data.message;
    // } else {
    //   text = "Error has occurred. Please try again!";
    // }
    // return dispatch(changePopup(text, show, resetPassword, passwordErrorText));
  };
}

/////////////////////////////////////////////     compare elize            ////////////////////////////////////////////////

const getDataRequestCompareElize = createAction(ActionTypes.getDataRequestCompareElize);

const responseResponseCompareElize = createAction(ActionTypes.getDataResponseCompareElize);

export function getDataResponseCompareElize(result) {
  return (dispatch) => {

    let data = [];
    let item = [];
    for(let i=0;i<result.data.length;i++) {


      if(result.data[i].foundProducts.length > 0) {

        for(let j=0;j<result.data[i].foundProducts.length;j++) {
          item.uid = result.data[i].uid;
          item.idElize = result.data[i].id;
          item.titleElize = result.data[i].title;
          item.fullTitleElize = result.data[i].fullTitle;
          item.brandElize = result.data[i].brand;
          item.priceElize = result.data[i].price;
          item.urlElize = result.data[i].url;
          item.url = result.data[i].foundProducts[j].url;
          item.id = result.data[i].foundProducts[j].id;
          item.price = result.data[i].foundProducts[j].price;
          item.title = result.data[i].foundProducts[j].title;
          item.fullTitle = result.data[i].foundProducts[j].fullTitle;
          item.brand = result.data[i].foundProducts[j].brand;
          item.category = result.data[i].foundProducts[j].category;
          item.subCategory = result.data[i].foundProducts[j].subCategory;
          item.url = result.data[i].foundProducts[j].url;
          item.country = result.data[i].foundProducts[j].country;
          item.article = result.data[i].foundProducts[j].article;
          item.description = result.data[i].foundProducts[j].description;
          item.source = result.data[i].foundProducts[j].source;
          item.createdAt = result.data[i].foundProducts[j].createdAt;
          item.updatedAt = result.data[i].foundProducts[j].updatedAt;
          item.inStock = result.data[i].foundProducts[j].inStock;
          data.push(item);
          item = [];
        }
      } else {
        item.uid = result.data[i].uid;
        item.idElize = result.data[i].id;
        item.titleElize = result.data[i].title;
        item.fullTitleElize = result.data[i].fullTitle;
        item.brandElize = result.data[i].brand;
        item.priceElize = result.data[i].price;
        item.urlElize = result.data[i].url;
        data.push(item);
        item = [];
      }
      //TODO change to destructuring------id: idElize, title: titleElize, fullTitle: fullTitleElize, brand: brandElize, price: priceElize, foundProducts, url, article} of result.data[i]) {
    }
    let count = result.count;
    return dispatch(responseResponseCompareElize({data, count}));
  };
}

export function compareElize(page, limit) {
  return (dispatch) => {
    dispatch(getDataRequestCompareElize());
    return api.compareElize(page, limit)
      .then(data => dispatch(getDataResponseCompareElize(data.data)))
      .catch(error => dispatch(errorHandler(error)));
  };
}

/////////////////////////////////////////////     attached elize            ////////////////////////////////////////////////

const getDataRequestAttachedElize = createAction(ActionTypes.getDataRequestAttachedElize);

const responseResponseAttachedElize = createAction(ActionTypes.getDataResponseAttachedElize);

export function getDataResponseAttachedElize(result) {
  return (dispatch) => {

    let data = [];
    let item = [];
    for(let i=0;i<result.data.length;i++) {


      if(result.data[i].foundProducts.length > 0) {

        for(let j=0;j<result.data[i].foundProducts.length;j++) {
          item.uid = result.data[i].uid;
          item.idElize = result.data[i].id;
          item.titleElize = result.data[i].title;
          item.fullTitleElize = result.data[i].fullTitle;
          item.brandElize = result.data[i].brand;
          item.priceElize = result.data[i].price;
          item.urlElize = result.data[i].url;
          item.url = result.data[i].foundProducts[j].url;
          item.id = result.data[i].foundProducts[j].id;
          item.price = result.data[i].foundProducts[j].price;
          item.title = result.data[i].foundProducts[j].title;
          item.fullTitle = result.data[i].foundProducts[j].fullTitle;
          item.brand = result.data[i].foundProducts[j].brand;
          item.category = result.data[i].foundProducts[j].category;
          item.subCategory = result.data[i].foundProducts[j].subCategory;
          item.url = result.data[i].foundProducts[j].url;
          item.country = result.data[i].foundProducts[j].country;
          item.article = result.data[i].foundProducts[j].article;
          item.description = result.data[i].foundProducts[j].description;
          item.source = result.data[i].foundProducts[j].source;
          item.createdAt = result.data[i].foundProducts[j].createdAt;
          item.updatedAt = result.data[i].foundProducts[j].updatedAt;
          item.inStock = result.data[i].foundProducts[j].inStock;
          data.push(item);
          item = [];
        }
      } else {
        item.uid = result.data[i].uid;
        item.idElize = result.data[i].id;
        item.titleElize = result.data[i].title;
        item.fullTitleElize = result.data[i].fullTitle;
        item.brandElize = result.data[i].brand;
        item.priceElize = result.data[i].price;
        item.urlElize = result.data[i].url;
        data.push(item);
        item = [];
      }
      //TODO change to destructuring------id: idElize, title: titleElize, fullTitle: fullTitleElize, brand: brandElize, price: priceElize, foundProducts, url, article} of result.data[i]) {

    }
    let count = result.count;
    return dispatch(responseResponseAttachedElize({data, count}));
  };
}

export function attachedElize(page, limit) {
  return (dispatch) => {
    dispatch(getDataRequestAttachedElize());
    return api.attachedElize(page, limit)
      .then(data => dispatch(getDataResponseAttachedElize(data.data)))
      .catch(error => dispatch(errorHandler(error)));
  };
}


/////////////////////////////////////////////     attached single            ////////////////////////////////////////////////
export function getDataResponseAttachSingle(result) {

}

export function attachSingle(obj) {
  return (dispatch) => {
    return api.attachSingle(obj)
      .then(data => dispatch(getDataResponseAttachSingle(data.data)))
      .catch(error => dispatch(errorHandler(error)));
  };
}

/////////////////////////////////////////////     detached single            ////////////////////////////////////////////////
export function getDataResponseDetachSingle(result) {

}

export function detachSingle(obj) {
  return (dispatch) => {
    return api.detachSingle(obj)
      .then(data => dispatch(getDataResponseDetachSingle(data.data)))
      .catch(error => dispatch(errorHandler(error)));
  };
}

/////////////////////////////////////////////     detached single            ////////////////////////////////////////////////
export function getDataResponseUnsimilar(result) {

}

export function unsimilar(obj) {
  return (dispatch) => {
    return api.unsimilar(obj)
      .then(data => dispatch(getDataResponseUnsimilar(data.data)))
      .catch(error => dispatch(errorHandler(error)));
  };
}



