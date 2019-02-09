import {createAction} from "redux-actions";
import ActionTypes from "../constants/actionTypes";
import store from "store";
import {tools} from "../resources";
import api from "../api/api";

export const changeItemsInEachPageDetachedFunc = createAction(ActionTypes.changeItemsInEachPageDetachedFunc);
export const filterByBrandDetached = createAction(ActionTypes.filterByBrandDetached);
export const filterByTitleDetached = createAction(ActionTypes.filterByTitleDetached);
export const filterBySrcDetached = createAction(ActionTypes.filterBySrcDetached);
export const changeSearchTextDetached = createAction(ActionTypes.changeSearchTextDetached);
export const changeImageZoomHome = createAction(ActionTypes.changeImageZoomHome);

export function errorHandler(error) {
  return (dispatch) => {
  };
}

/////////////////////////////////////////////     detached elize            ////////////////////////////////////////////////

const getDataRequestDetachedElize = createAction(ActionTypes.getDataRequestDetachedElize);

const responseResponseDetachedElize = createAction(ActionTypes.getDataResponseDetachedElize);

export function getDataResponseDetachedElize(result) {
  return (dispatch) => {
    let data = [];
    let item = [];
    for (let i = 0; i < result.data.length; i++) {


      if (result.data[i].foundProducts.length > 0) {

        for (let j = 0; j < result.data[i].foundProducts.length; j++) {
          item.uid = result.data[i].uid;
          item.idElize = result.data[i].id;
          item.detId = result.data[i].detId;
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
        item.detId = result.data[i].detId;
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
    return dispatch(responseResponseDetachedElize({data, count}));
  };
}

export function detachedElize(brand, title, src, sortBy, sortDir, page, limit) {
  return (dispatch) => {
    dispatch(getDataRequestDetachedElize());
    let a = " brand=" + encodeURIComponent(brand) + "&title=" + encodeURIComponent(title) + "&src=" + encodeURIComponent(src) + "&sortBy=" + sortBy + "&sortDir=" + sortDir + "&page=" + page + "&limit=" + limit;
    return api.detachedElize(brand, title, src, sortBy, sortDir, page, limit)
      .then(data => dispatch(getDataResponseDetachedElize(data.data)))
      .catch(error => dispatch(errorHandler(error)));
  };
}

/////////////////////////////////////////////     brand elize            ////////////////////////////////////////////////

const getDataRequestBrandElizeDetached = createAction(ActionTypes.getDataRequestBrandElizeDetached);

const responseResponseBrandElizeDetached = createAction(ActionTypes.getDataResponseBrandElizeDetached);

export function getDataResponseBrandElizeDetached(data) {
  return (dispatch) => {
    return dispatch(responseResponseBrandElizeDetached({data}));
  };
}

export function brandsElizeDetached(brand, src, title) {
  return (dispatch) => {
    dispatch(getDataRequestBrandElizeDetached());
    return api.brandsElizeDetached(brand, src, title)
      .then(data => dispatch(getDataResponseBrandElizeDetached(data.data)))
      .catch(error => dispatch(errorHandler(error)));
  };
}

/////////////////////////////////////////////     titles elize      detached      ////////////////////////////////////////////////

const getDataRequestBrandElizeTitleDetached = createAction(ActionTypes.getDataRequestBrandElizeTitleDetached);

const responseResponseBrandElizeTitleDetached = createAction(ActionTypes.getDataResponseBrandElizeTitleDetached);

export function getDataResponseBrandElizeTitleDetached(data) {
  return (dispatch) => {
    return dispatch(responseResponseBrandElizeTitleDetached({data}));
  };
}

export function titleElizeDetached(brand, src, title) {
  return (dispatch) => {
    dispatch(getDataRequestBrandElizeDetached());
    return api.titleElizeDetached(brand, src, title)
      .then(data => dispatch(getDataResponseBrandElizeTitleDetached(data.data)))
      .catch(error => dispatch(errorHandler(error)));
  };
}


/////////////////////////////////////////////     src elize      detached      ////////////////////////////////////////////////

const getDataRequestElizeSrcDetached = createAction(ActionTypes.getDataRequestElizeSrcDetached);

const responseResponseElizeSrcDetached = createAction(ActionTypes.getDataResponseElizeSrcDetached);

export function getDataResponseElizeSrcDetached(data) {
  return (dispatch) => {
    return dispatch(responseResponseElizeSrcDetached({data}));
  };
}

export function srcElizeDetached(brand, src, title) {
  return (dispatch) => {
    dispatch(getDataRequestElizeSrcDetached());
    return api.srcElizeDetached(brand, src, title)
      .then(data => dispatch(getDataResponseElizeSrcDetached(data.data)))
      .catch(error => dispatch(errorHandler(error)));
  };
}

/////////////////////////////////////////////     attached single            ////////////////////////////////////////////////
export function getDataResponseDetachedDelete(result) {

}

export function detachedDelete(obj) {
  return (dispatch) => {
    return api.detachedDelete(obj)
      .then(data => dispatch(getDataResponseDetachedDelete(data.data)))
      .catch(error => dispatch(errorHandler(error)));
  };
}

