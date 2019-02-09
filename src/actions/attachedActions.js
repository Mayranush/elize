import {createAction} from "redux-actions";
import ActionTypes from "../constants/actionTypes";
import store from "store";
import {tools} from "../resources";
import api from "../api/api";

export const changeItemsInEachPageAttachedFunc = createAction(ActionTypes.changeItemsInEachPageAttachedFunc);
export const filterByBrandAttached = createAction(ActionTypes.filterByBrandAttached);
export const filterByTitleAttached = createAction(ActionTypes.filterByTitleAttached);
export const filterBySrcAttached = createAction(ActionTypes.filterBySrcAttached);
export const changeSearchTextAttached = createAction(ActionTypes.changeSearchTextAttached);
export const changeImageZoomHome = createAction(ActionTypes.changeImageZoomHome);

export function errorHandler(error) {
  return (dispatch) => {
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
          item.imageElize = result.data[i].image;
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

export function attachedElize(brand, title, src, sortBy, sortDir, page, limit) {
  return (dispatch) => {
    dispatch(getDataRequestAttachedElize());
    let a = " brand=" + encodeURIComponent(brand) + "&title=" + encodeURIComponent(title) + "&src=" + encodeURIComponent(src) + "&sortBy=" + sortBy + "&sortDir=" + sortDir + "&page=" + page + "&limit=" + limit;
    return api.attachedElize(brand, title, src, sortBy, sortDir, page, limit)
      .then(data => dispatch(getDataResponseAttachedElize(data.data)))
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

export function brandsElizeAttached(brand, src) {
  return (dispatch) => {
    dispatch(getDataRequestBrandElizeAttached());
    return api.brandsElizeAttached(brand, src)
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


/////////////////////////////////////////////     src elize      Attached      ////////////////////////////////////////////////

const getDataRequestElizeSrcAttached = createAction(ActionTypes.getDataRequestElizeSrcAttached);

const responseResponseElizeSrcAttached = createAction(ActionTypes.getDataResponseElizeSrcAttached);

export function getDataResponseElizeSrcAttached(data) {
  return (dispatch) => {
    return dispatch(responseResponseElizeSrcAttached({data}));
  };
}

export function srcElizeAttached(brand, src) {
  return (dispatch) => {
    dispatch(getDataRequestElizeSrcAttached());
    return api.srcElizeAttached(brand, src)
      .then(data => dispatch(getDataResponseElizeSrcAttached(data.data)))
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

