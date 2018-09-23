import axios from "axios";
import store from "store";

let api;


if (window && !window.api) {
  window.api = api;
}

let addHeaders = (token) => {
  const tokenFromStore = "Token " + (store.getState().general.token || window.sessionStorage.getItem("token"));

  if (token) {

    api = axios.create({
      baseURL: "http://63.142.251.65:8888", //63.142.251.65
      headers: {"Authorization": tokenFromStore}
    });
  } else {
    api = axios.create({
      baseURL: "http://63.142.251.65:8888"
    });
  }

  return api;
};

const compareElize = (brand, title, sortBy, sortDir, page, limit, src) => {
  addHeaders(true);
  return api.get("/api/compare-elize?brand=" + encodeURIComponent(brand) + "&title=" + encodeURIComponent(title) + "&sortBy=" + sortBy + "&sortDir=" + sortDir + "&page=" + page + "&limit=" + limit + "&src=" + src);
};

const attachedElize = (brand, title, src, sortBy, sortDir, page, limit) => {
  addHeaders(true);
  let a ="brand=" + encodeURIComponent(brand) + "&title=" + encodeURIComponent(title) + "&src=" + encodeURIComponent(src) + "&sortBy=" + sortBy + "&sortDir=" + sortDir + "&page=" + page + "&limit=" + limit;
  return api.get("/api/attached-elize?brand=" + encodeURIComponent(brand) + "&title=" + encodeURIComponent(title) + "&src=" + encodeURIComponent(src) + "&sortBy=" + sortBy + "&sortDir=" + sortDir + "&page=" + page + "&limit=" + limit);
};
const brandsElize = (brand, src) => {
  addHeaders(true);
  return api.get("/api/compare-elize/brands?brand=" + encodeURIComponent(brand) + "&src=" + encodeURIComponent(src));
};
const brandsElizeAttached = (brand, src) => {
  addHeaders(true);
  return api.get("/api/attached-elize/brands?brand=" + encodeURIComponent(brand) + "&src=" + encodeURIComponent(src));
};
const brandsElizeConElize = (brand, src) => {
  addHeaders(true);
  return api.get("/api/non-compare-elize/brands?brand=" + encodeURIComponent(brand) + "&src=" + src);
};
const brandsElizeCon = (brand, src) => {
  addHeaders(true);
  return api.get("/api/non-compare-products/brands?brand=" + encodeURIComponent(brand) + "&src=" + src);
};
const brandsElizeConAttached = (brand, src) => {
  addHeaders(true);
  return api.get("/api/attached-elize/brands?brand=" + encodeURIComponent(brand) + "&src=" + encodeURIComponent(src));
};
const srcElizeConAttached = (src, brand) => {
  addHeaders(true);
  return api.get("/api/attached-elize/src?brand=" + encodeURIComponent(brand) + "&src=" + encodeURIComponent(src));
};
const titleElize = (brand, title) => {
  addHeaders(true);
  return api.get("/api/compare-elize/titles?brand=" + encodeURIComponent(brand) + "&title=" + encodeURIComponent(title));
};
const titleElizeAttached = (brand, title) => {
  addHeaders(true);
  return api.get("/api/attached-elize/titles?brand=" + encodeURIComponent(brand) + "&title=" + encodeURIComponent(title));
};
const srcElizeAttached = (brand, src) => {
  addHeaders(true);
  return api.get("/api/attached-elize/src?brand=" + encodeURIComponent(brand) + "&src=" + encodeURIComponent(src));
};
const titleElizeConElize = (brand, title) => {
  addHeaders(true);
  return api.get("/api/non-compare-elize/titles?brand=" + encodeURIComponent(brand) + "&title=" + encodeURIComponent(title));
};
const titleElizeCon = (brand, title) => {
  addHeaders(true);
  return api.get("/api/non-compare-products/titles?brand=" + encodeURIComponent(brand) + "&title=" + encodeURIComponent(title));
};
const titleElizeConAttached = (brand, title) => {
  addHeaders(true);
  return api.get("/api/attached-elize/titles?brand=" + encodeURIComponent(brand) + "&title=" + encodeURIComponent(title));
};
const brandsProducts = (brand) => {
  addHeaders(true);
  return api.get("/api/brands-products?brand=" + brand);
};
const attachSingle = (obj) => {
  addHeaders(true);
  return api.post("/api/attach-single", obj);
};

const detachSingle = (obj) => {
  addHeaders(true);
  return api.post("/api/detach-single", obj);
};

const nonCompareElize = (brand, title, src, sortBy, sortDir, page, limit) => {
  addHeaders(true);
  return api.get("/api/non-compare-elize?brand=" + encodeURIComponent(brand) + "&title=" + encodeURIComponent(title) + "&src=" + src + "&sortBy=" + sortBy + "&sortDir=" + sortDir + "&page=" + page + "&limit=" + limit);
};

const nonCompareProducts = (brand, title, src, sortBy, sortDir, page, limit) => {
  addHeaders(true);
  return api.get("/api/non-compare-products?brand=" + encodeURIComponent(brand) + "&title=" + encodeURIComponent(title) + "&src=" + src + "&sortBy=" + sortBy + "&sortDir=" + sortDir + "&page=" + page + "&limit=" + limit);
};

const attachMultiple = (obj) => {
  addHeaders(true);
  return api.post("/api/attach-multiple", obj);
};

const unsimilar = (obj) => {
  addHeaders(true);
  return api.post("/api/unsimilar", obj);
};
const signIn = (user) => {
  addHeaders(false);
  return api.post("/sign-in", user);
};

const sourceElizeCon = (brand,src) => {
  addHeaders(true);
  return api.get("/api/non-compare-products/src?brand="+encodeURIComponent(brand)+"&src="+encodeURIComponent(src));
};
const sourceElizeConElize = (brand, src) => {
  addHeaders(true);
  return api.get("/api/non-compare-elize/src?brand=" + encodeURIComponent(brand) + "&src=" + src);
};
const sourceElize = (brand, src) => {
  addHeaders(true);
  return api.get("/api/compare-elize/src?brand=" + encodeURIComponent(brand) + "&src=" + src);
};
const statusMe = () => {
  addHeaders(false);
  return api.get("/status");
};
const statusAll = () => {
  addHeaders(false);
  return api.get("/status-all");
};
const compareElizeStart = (percent) => {
  addHeaders(false);
  return api.post("/compare?perc=" + percent);
};
const calculate = (title1, title2) => {
  addHeaders(false);
  return api.get("/calc?title1=" + title1+"&title2="+title2);
};
const stopCompareElize = () => {
  addHeaders(false);
  return api.get("/compare-stop");
};
const startElize = () => {
  addHeaders(false);
  return api.post("/start");
};
const stopElize = () => {
  addHeaders(false);
  return api.get("/stop");
};

export default {
  calculate,
  compareElizeStart,
  stopCompareElize,
  startElize,
  stopElize,
  statusMe,
  statusAll,
  sourceElizeCon,
  sourceElizeConElize,
  sourceElize,
  signIn,
  compareElize,
  attachedElize,
  brandsElize,
  titleElize,
  brandsElizeAttached,
  titleElizeAttached,
  srcElizeAttached,
  brandsElizeConElize,
  titleElizeConElize,
  brandsElizeCon,
  titleElizeCon,
  brandsElizeConAttached,
  srcElizeConAttached,
  titleElizeConAttached,
  brandsProducts,
  attachSingle,
  detachSingle,
  nonCompareElize,
  nonCompareProducts,
  attachMultiple,
  unsimilar
};

