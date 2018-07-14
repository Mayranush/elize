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
      baseURL: "http://63.142.251.65:8888",
      headers: {"Authorization": tokenFromStore}
    });
  } else {
    api = axios.create({
      baseURL: "http://63.142.251.65:8888"
    });
  }

  return api;
};

const compareElize = (brand, title, sortBy, sortDir, page, limit) => {
  addHeaders(true);
  return api.get("/api/compare-elize?brand=" + encodeURIComponent(brand) + "&title=" + encodeURIComponent(title) + "&sortBy=" + sortBy + "&sortDir=" + sortDir + "&page=" + page + "&limit=" + limit);
};

const attachedElize = (brand, title, sortBy, sortDir, page, limit) => {
  addHeaders(true);
  return api.get("/api/attached-elize?brand=" + encodeURIComponent(brand) + "&title=" + encodeURIComponent(title) + "&sortBy=" + sortBy + "&sortDir=" + sortDir + "&page=" + page + "&limit=" + limit);
};
const brandsElize = (brand) => {
  addHeaders(true);
  return api.get("/api/compare-elize/brands?brand=" + encodeURIComponent(brand));
};
const brandsElizeAttached = (brand) => {
  addHeaders(true);
  return api.get("/api/attached-elize/brands?brand=" + encodeURIComponent(brand));
};
const brandsElizeConElize = (brand) => {
  addHeaders(true);
  return api.get("/api/non-compare-elize/brands?brand=" + encodeURIComponent(brand));
};
const brandsElizeCon = (brand) => {
  addHeaders(true);
  return api.get("/api/non-compare-products/brands?brand=" + encodeURIComponent(brand));
};
const brandsElizeConAttached = (brand) => {
  addHeaders(true);
  return api.get("/api/attached-elize/brands?brand=" + encodeURIComponent(brand));
};
const titleElize = (brand, title) => {
  addHeaders(true);
  return api.get("/api/compare-elize/titles?brand=" + encodeURIComponent(brand) + "&title=" + encodeURIComponent(title));
};
const titleElizeAttached = (brand, title) => {
  addHeaders(true);
  return api.get("/api/attached-elize/titles?brand=" + encodeURIComponent(brand) + "&title=" + encodeURIComponent(title));
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
  return api.get("/api/attached-elize/titles?brand=" +encodeURIComponent(brand) + "&title=" + encodeURIComponent(title));
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

const nonCompareElize = (brand, title, sortBy, sortDir, page, limit) => {
  addHeaders(true);
  return api.get("/api/non-compare-elize?brand=" +encodeURIComponent(brand) + "&title=" + encodeURIComponent(title)+ "&sortBy=" + sortBy + "&sortDir=" + sortDir + "&page=" + page + "&limit=" + limit);
};

const nonCompareProducts = (brand, title, sortBy, sortDir, page, limit) => {
  addHeaders(true);
  return api.get("/api/non-compare-products?brand=" + encodeURIComponent(brand) + "&title=" + encodeURIComponent(title) + "&sortBy=" + sortBy + "&sortDir=" + sortDir + "&page=" + page + "&limit=" + limit);
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




export default {

  signIn,
  compareElize,
  attachedElize,
  brandsElize,
  titleElize,
  brandsElizeAttached,
  titleElizeAttached,
  brandsElizeConElize,
  titleElizeConElize,
  brandsElizeCon,
  titleElizeCon,
  brandsElizeConAttached,
  titleElizeConAttached,
  brandsProducts,
  attachSingle,
  detachSingle,
  nonCompareElize,
  nonCompareProducts,
  attachMultiple,
  unsimilar
};

