import {createAction} from "redux-actions";
import ActionTypes from "../constants/actionTypes";
import store from "store";
import {tools} from "../resources";
import api from "../api/api";
import {changePopup} from "./popupActions";
import {statusAll} from "./secondPageActions";

export const cleanData = createAction(ActionTypes.cleanData);
export const changeItemsInEachPageCompareFunc = createAction(ActionTypes.changeItemsInEachPageCompareFunc);
export const changeItemsInEachPageAttachedFunc = createAction(ActionTypes.changeItemsInEachPageAttachedFunc);

export const filterByBrand = createAction(ActionTypes.filterByBrand);
export const changeSortDir = createAction(ActionTypes.changeSortDir);


export const changeSearchText = createAction(ActionTypes.changeSearchText);
export const filterByTitle = createAction(ActionTypes.filterByTitle);
export const filterByBrandAttached = createAction(ActionTypes.filterByBrandAttached);
export const filterByTitleAttached = createAction(ActionTypes.filterByTitleAttached);
export const changeSearchTextAttached = createAction(ActionTypes.changeSearchTextAttached);
export const filterBySourceElize = createAction(ActionTypes.filterBySourceElize);

export const emailChange = createAction(ActionTypes.emailChange);
export const passwordChange = createAction(ActionTypes.passwordChange);

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
    for (let i = 0; i < result.data.length; i++) {


      if (result.data[i].foundProducts.length > 0) {

        for (let j = 0; j < result.data[i].foundProducts.length; j++) {
          item.uid = result.data[i].uid;
          item.idElize = result.data[i].id;
          item.titleElize = result.data[i].title;
          item.fullTitleElize = result.data[i].fullTitle;
          item.brandElize = result.data[i].brand;
          item.imageElize = result.data[i].image;
          item.priceElize = result.data[i].price;
          item.urlElize = result.data[i].url;
          item.url = result.data[i].foundProducts[j].url;
          item.id = result.data[i].foundProducts[j].id;
          item.price = result.data[i].foundProducts[j].price;
          item.title = result.data[i].foundProducts[j].title;
          item.fullTitle = result.data[i].foundProducts[j].fullTitle;
          item.brand = result.data[i].foundProducts[j].brand;
          item.image = result.data[i].foundProducts[j].image;
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
        item.imageElize = result.data[i].image;
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

export function compareElize(brand, title, sortBy, sortDir, page, limit,src) {
  return (dispatch) => {
    dispatch(getDataRequestCompareElize());
    return api.compareElize(brand, title, sortBy, sortDir, page, limit,src)
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
    for (let i = 0; i < result.data.length; i++) {


      if (result.data[i].foundProducts.length > 0) {

        for (let j = 0; j < result.data[i].foundProducts.length; j++) {
          item.uid = result.data[i].uid;
          item.idElize = result.data[i].id;
          item.titleElize = result.data[i].title;
          item.fullTitleElize = result.data[i].fullTitle;
          item.brandElize = result.data[i].brand;
          item.imageElize = result.data[i].image;
          item.priceElize = result.data[i].price;
          item.urlElize = result.data[i].url;
          item.url = result.data[i].foundProducts[j].url;
          item.id = result.data[i].foundProducts[j].id;
          item.price = result.data[i].foundProducts[j].price;
          item.title = result.data[i].foundProducts[j].title;
          item.fullTitle = result.data[i].foundProducts[j].fullTitle;
          item.brand = result.data[i].foundProducts[j].brand;
          item.image = result.data[i].foundProducts[j].image;
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
        item.imageElize = result.data[i].image;
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

export function attachedElize(brand, title, sortBy, sortDir, page, limit) {
  return (dispatch) => {
    dispatch(getDataRequestAttachedElize());
    return api.attachedElize(brand, title, sortBy, sortDir, page, limit)
      .then(data => dispatch(getDataResponseAttachedElize(data.data)))
      .catch(error => dispatch(errorHandler(error)));
  };
}

/////////////////////////////////////////////     brand elize            ////////////////////////////////////////////////

const getDataRequestBrandElize = createAction(ActionTypes.getDataRequestBrandElize);

const responseResponseBrandElize = createAction(ActionTypes.getDataResponseBrandElize);

export function getDataResponseBrandElize(data) {
  return (dispatch) => {
    return dispatch(responseResponseBrandElize({data}));
  };
}

export function brandsElize(brand) {
  return (dispatch) => {
    dispatch(getDataRequestBrandElize());
    return api.brandsElize(brand)
      .then(data => dispatch(getDataResponseBrandElize(data.data)))
      .catch(error => dispatch(errorHandler(error)));
  };
}

/////////////////////////////////////////////     titles elize            ////////////////////////////////////////////////

const getDataRequestBrandElizeTitle = createAction(ActionTypes.getDataRequestBrandElizeTitle);

const responseResponseBrandElizeTitle = createAction(ActionTypes.getDataResponseBrandElizeTitle);

export function getDataResponseBrandElizeTitle(data) {
  return (dispatch) => {
    return dispatch(responseResponseBrandElizeTitle({data}));
  };
}

export function titleElize(brand, title) {
  return (dispatch) => {
    dispatch(getDataRequestBrandElize());
    return api.titleElize(brand, title)
      .then(data => dispatch(getDataResponseBrandElizeTitle(data.data)))
      .catch(error => dispatch(errorHandler(error)));
  };
}


/////////////////////////////////////////////     brand elize            ////////////////////////////////////////////////

const getDataRequestBrandElizeAttached = createAction(ActionTypes.getDataRequestBrandElizeAttached);

const responseResponseBrandElizeAttached = createAction(ActionTypes.getDataResponseBrandElizeAttached);

export function getDataResponseBrandElizeAttached(data) {
  return (dispatch) => {
    return dispatch(responseResponseBrandElizeAttached({data}));
  };
}

export function brandsElizeAttached(brand) {
  return (dispatch) => {
    dispatch(getDataRequestBrandElizeAttached());
    return api.brandsElizeAttached(brand)
      .then(data => dispatch(getDataResponseBrandElizeAttached(data.data)))
      .catch(error => dispatch(errorHandler(error)));
  };
}

/////////////////////////////////////////////     titles elize      Attached      ////////////////////////////////////////////////

const getDataRequestBrandElizeTitleAttached = createAction(ActionTypes.getDataRequestBrandElizeTitleAttached);

const responseResponseBrandElizeTitleAttached = createAction(ActionTypes.getDataResponseBrandElizeTitleAttached);

export function getDataResponseBrandElizeTitleAttached(data) {
  return (dispatch) => {
    return dispatch(responseResponseBrandElizeTitleAttached({data}));
  };
}

export function titleElizeAttached(brand, title) {
  return (dispatch) => {
    dispatch(getDataRequestBrandElizeAttached());
    return api.titleElizeAttached(brand, title)
      .then(data => dispatch(getDataResponseBrandElizeTitleAttached(data.data)))
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


/////////////////////////////////////////////     Source elize       ////////////////////////////////////////////////

const getDataRequestElizeSource = createAction(ActionTypes.getDataRequestElizeSource);

const responseResponseElizeSource = createAction(ActionTypes.getDataResponseElizeSource);

export function getDataResponseElizeSource(data) {
  return (dispatch) => {
    return dispatch(responseResponseElizeSource({data}));
  };
}

export function sourceElize() {
  return (dispatch) => {
    dispatch(getDataRequestElizeSource());
    return api.sourceElize()
      .then(data => dispatch(getDataResponseElizeSource(data.data)))
      .catch(error => dispatch(errorHandler(error)));
  };
}