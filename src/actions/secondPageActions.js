import {createAction} from "redux-actions";
import ActionTypes from "../constants/actionTypes";
import store from "store";
import {tools} from "../resources";
import api from "../api/api";
import {changePopup} from "./popupActions";


export const changeItemsInEachPageNonCompareFunc = createAction(ActionTypes.changeItemsInEachPageNonCompareFunc);
export const changeItemsInEachPageNonCompareProductsFunc = createAction(ActionTypes.changeItemsInEachPageNonCompareProductsFunc);
export const changeItemsInEachPageCompareFuncSec = createAction(ActionTypes.changeItemsInEachPageCompareFuncSec);

export const changeSearchTextNonCompare = createAction(ActionTypes.changeSearchTextNonCompare);
export const changeSearchTextNonCompareProducts = createAction(ActionTypes.changeSearchTextNonCompareProducts);
export const changeSearchTextAttachedSec = createAction(ActionTypes.changeSearchTextAttachedSec);

export const filterByBrandConElize = createAction(ActionTypes.filterByBrandConElize);
export const filterByTitleConElize = createAction(ActionTypes.filterByTitleConElize);

export const filterByBrandCon = createAction(ActionTypes.filterByBrandCon);
export const filterByTitleCon = createAction(ActionTypes.filterByTitleCon);

export const filterByBrandConAttached = createAction(ActionTypes.filterByBrandConAttached);
export const filterByTitleConAttached = createAction(ActionTypes.filterByTitleConAttached);

export const changeSortDirConElize = createAction(ActionTypes.changeSortDirConElize);
export const changeSortDirCon = createAction(ActionTypes.changeSortDirCon);
export const changeSortDirConAttached = createAction(ActionTypes.changeSortDirConAttached);

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

const updateInputValueFunc = createAction(ActionTypes.updateInputValue);

export function updateInputValue(event, index, array) {
  return (dispatch) => {
    let value = event.target.value;
    array[index] = value;
    return dispatch(updateInputValueFunc(array));
  }
}

/////////////////////////////////////////////   non  compare elize            ////////////////////////////////////////////////

const getDataRequestNonCompareElize = createAction(ActionTypes.getDataRequestNonCompareElize);

const responseResponseNonCompareElize = createAction(ActionTypes.getDataResponseNonCompareElize);

export function getDataResponseNonCompareElize(result) {
  return (dispatch) => {

    let data = [];
    let item = [];
    for (let i = 0; i < result.data.length; i++) {
      if (result.data[i].foundProducts.length > 0) {

        for (let j = 0; j < result.data[i].foundProducts.length; j++) {
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
    return dispatch(responseResponseNonCompareElize({data, count}));
  };
}

export function nonCompareElize(brand, title, sortBy, sortDir, page, limit) {
  return (dispatch) => {
    dispatch(getDataRequestNonCompareElize());
    return api.nonCompareElize(brand, title, sortBy, sortDir, page, limit)
      .then(data => dispatch(getDataResponseNonCompareElize(data.data)))
      .catch(error => dispatch(errorHandler(error)));
  };
}

/////////////////////////////////////////////     non Compare Products            ////////////////////////////////////////////////

const getDataRequestNonCompareProducts = createAction(ActionTypes.getDataRequestNonCompareProducts);

const responseResponseNonCompareProducts = createAction(ActionTypes.getDataResponseNonCompareProducts);

export function getDataResponseNonCompareProducts(result) {
  return (dispatch) => {

    let data = [];
    let item = [];
    for (let i = 0; i < result.data.length; i++) {
      item.id = result.data[i].id;
      item.price = result.data[i].price;
      item.title = result.data[i].title;
      item.fullTitle = result.data[i].fullTitle;
      item.brand = result.data[i].brand;
      item.category = result.data[i].category;
      item.subCategory = result.data[i].subCategory;
      item.url = result.data[i].url;
      item.country = result.data[i].country;
      item.article = result.data[i].article;
      item.description = result.data[i].description;
      item.source = result.data[i].source;
      item.createdAt = result.data[i].createdAt;
      item.updatedAt = result.data[i].updatedAt;
      item.inStock = result.data[i].inStock;
      item.url = result.data[i].url;
      data.push(item);
      item = [];
      //TODO change to destructuring------id: idElize, title: titleElize, fullTitle: fullTitleElize, brand: brandElize, price: priceElize, foundProducts, url, article} of result.data[i]) {
    }
    let count = result.count;
    return dispatch(responseResponseNonCompareProducts({data, count}));
  };
}

export function nonCompareProducts(brand, title, sortBy, sortDir, page, limit) {
  return (dispatch) => {
    dispatch(getDataRequestNonCompareProducts());
    return api.nonCompareProducts(brand, title, sortBy, sortDir, page, limit)
      .then(data => dispatch(getDataResponseNonCompareProducts(data.data)))
      .catch(error => dispatch(errorHandler(error)));
  };
}


/////////////////////////////////////////////     attached elize            ////////////////////////////////////////////////


const getDataRequestAttachedElizeSec = createAction(ActionTypes.getDataRequestAttachedElizeSec);

const responseResponseAttachedElize = createAction(ActionTypes.getDataResponseAttachedElizeSec);

export function getDataResponseAttachedElizeSec(result) {
  return (dispatch) => {

    let data = [];
    let item = [];
    for (let i = 0; i < result.data.length; i++) {


      if (result.data[i].foundProducts.length > 0) {

        for (let j = 0; j < result.data[i].foundProducts.length; j++) {
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

export function attachedElize(brand, title, sortBy, sortDir,page, limit) {
  return (dispatch) => {
    dispatch(getDataRequestAttachedElizeSec());
    return api.attachedElize(brand, title, sortBy, sortDir,page, limit)
      .then(data => dispatch(getDataResponseAttachedElizeSec(data.data)))
      .catch(error => dispatch(errorHandler(error)));
  };
}

// /////////////////////////////////////////////     attache multiple            ////////////////////////////////////////////////
export function getDataResponseAttachMultiple(result) {
}

export function attachMultiple(obj) {
  return (dispatch) => {
    return api.attachMultiple(obj)
      .then(data => dispatch(getDataResponseAttachMultiple(data.data)))
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

/////////////////////////////////////////////     brand products            ////////////////////////////////////////////////

const getDataRequestBrandProducts = createAction(ActionTypes.getDataRequestBrandProducts);

const responseResponseBrandProducts = createAction(ActionTypes.getDataResponseBrandProducts);

export function getDataResponseBrandProducts(data) {
  return (dispatch) => {
    return dispatch(responseResponseBrandProducts({data}));
  };
}

export function brandsProducts(brand) {
  return (dispatch) => {
    dispatch(getDataRequestBrandElize());
    return api.brandsProducts(brand)
      .then(data => dispatch(getDataResponseBrandProducts(data.data )))
      .catch(error => dispatch(errorHandler(error)));
  };
}
////////////////////////////////////////////     brand elize      Con      ////////////////////////////////////////////////

const getDataRequestBrandElizeConElize = createAction(ActionTypes.getDataRequestBrandElizeConElize);

const responseResponseBrandElizeConElize = createAction(ActionTypes.getDataResponseBrandElizeConElize);

export function getDataResponseBrandElizeConElize(data) {
  return (dispatch) => {
    return dispatch(responseResponseBrandElizeConElize({data}));
  };
}

export function brandsElizeConElize(brand) {
  return (dispatch) => {
    dispatch(getDataRequestBrandElizeConElize());
    return api.brandsElizeConElize(brand)
      .then(data => dispatch(getDataResponseBrandElizeConElize(data.data )))
      .catch(error => dispatch(errorHandler(error)));
  };
}

/////////////////////////////////////////////     titles elize      Con     Elize ////////////////////////////////////////////////

const getDataRequestBrandElizeTitleConElize= createAction(ActionTypes.getDataRequestBrandElizeTitleConElize);

const responseResponseBrandElizeTitleConElize = createAction(ActionTypes.getDataResponseBrandElizeTitleConElize);

export function getDataResponseBrandElizeTitleConElize(data) {
  return (dispatch) => {
    return dispatch(responseResponseBrandElizeTitleConElize({data}));
  };
}

export function titleElizeConElize(brand,title) {
  return (dispatch) => {
    dispatch(getDataRequestBrandElizeConElize());
    return api.titleElizeConElize(brand,title)
      .then(data => dispatch(getDataResponseBrandElizeTitleConElize(data.data )))
      .catch(error => dispatch(errorHandler(error)));
  };
}
/////////////////////////////////////////////     brand elize      Con      ////////////////////////////////////////////////

const getDataRequestBrandElizeCon = createAction(ActionTypes.getDataRequestBrandElizeCon);

const responseResponseBrandElizeCon = createAction(ActionTypes.getDataResponseBrandElizeCon);

export function getDataResponseBrandElizeCon(data) {
  return (dispatch) => {
    return dispatch(responseResponseBrandElizeCon({data}));
  };
}

export function brandsElizeCon(brand) {
  return (dispatch) => {
    dispatch(getDataRequestBrandElizeCon());
    return api.brandsElizeCon(brand)
      .then(data => dispatch(getDataResponseBrandElizeCon(data.data )))
      .catch(error => dispatch(errorHandler(error)));
  };
}

/////////////////////////////////////////////     titles elize      Con      ////////////////////////////////////////////////

const getDataRequestBrandElizeTitleCon= createAction(ActionTypes.getDataRequestBrandElizeTitleCon);

const responseResponseBrandElizeTitleCon = createAction(ActionTypes.getDataResponseBrandElizeTitleCon);

export function getDataResponseBrandElizeTitleCon(data) {
  return (dispatch) => {
    return dispatch(responseResponseBrandElizeTitleCon({data}));
  };
}

export function titleElizeCon(brand,title) {
  return (dispatch) => {
    dispatch(getDataRequestBrandElizeCon());
    return api.titleElizeCon(brand,title)
      .then(data => dispatch(getDataResponseBrandElizeTitleCon(data.data )))
      .catch(error => dispatch(errorHandler(error)));
  };
}

/////////////////////////////////////////////     brand elize      Attached      ////////////////////////////////////////////////

const getDataRequestBrandElizeConAttached = createAction(ActionTypes.getDataRequestBrandElizeConAttached);

const responseResponseBrandElizeConAttached = createAction(ActionTypes.getDataResponseBrandElizeConAttached);

export function getDataResponseBrandElizeConAttached(data) {
  return (dispatch) => {
    return dispatch(responseResponseBrandElizeConAttached({data}));
  };
}

export function brandsElizeConAttached(brand) {
  return (dispatch) => {
    dispatch(getDataRequestBrandElizeConAttached());
    return api.brandsElizeConAttached(brand)
      .then(data => dispatch(getDataResponseBrandElizeConAttached(data.data )))
      .catch(error => dispatch(errorHandler(error)));
  };
}

/////////////////////////////////////////////     titles elize      Con  Attached    ////////////////////////////////////////////////

const getDataRequestBrandElizeTitleConAttached= createAction(ActionTypes.getDataRequestBrandElizeTitleConAttached);

const responseResponseBrandElizeTitleConAttached = createAction(ActionTypes.getDataResponseBrandElizeTitleConAttached);

export function getDataResponseBrandElizeTitleConAttached(data) {
  return (dispatch) => {
    return dispatch(responseResponseBrandElizeTitleConAttached({data}));
  };
}

export function titleElizeConAttached(brand,title) {
  return (dispatch) => {
    dispatch(getDataRequestBrandElizeConAttached());
    return api.titleElizeConAttached(brand,title)
      .then(data => dispatch(getDataResponseBrandElizeTitleConAttached(data.data )))
      .catch(error => dispatch(errorHandler(error)));
  };
}