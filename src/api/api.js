import axios from "axios";
import store from "store";
let api;


if (window && !window.api) {
  window.api = api;
}
api = axios.create({
  baseURL: "http://63.142.251.65:8888",
  Accept: "*/*"
});

const compareElize = (page, limit) => {
  return api.get("/compare-elize?page=" + page +  "&limit=" + limit);
};

const attachedElize = (page, limit) => {
  return api.get("/attached-elize?page=" + page +  "&limit=" + limit);
};

const attachSingle = (obj) => {
  return api.post("/attach-single", obj);
};

const detachSingle = (obj) => {
  return api.post("/detach-single", obj);
};

const nonCompareElize = (page, limit) => {
  return api.get("/non-compare-elize?page=" + page +  "&limit=" + limit);
};

const nonCompareProducts = (page, limit) => {
  return api.get("/non-compare-products?page=" + page +  "&limit=" + limit);
};

const attachMultiple = (obj) => {
  return api.post("/attach-multiple", obj);
};

export default {
  compareElize, attachedElize, attachSingle, detachSingle, nonCompareElize, nonCompareProducts, attachMultiple
};

