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
  return api.get("/parser/compare-elize?page=" + page +  "&limit=" + limit);
};

const attachedElize = (page, limit) => {
  return api.get("/parser/attached-elize?page=" + page +  "&limit=" + limit);
};

const attachSingle = (obj) => {
  return api.post("/parser/attach-single", obj);
};

const nonCompareElize = (page, limit) => {
  return api.get("/parser/non-compare-elize?page=" + page +  "&limit=" + limit);
};

const nonCompareProducts = (page, limit) => {
  return api.get("/parser/non-compare-products?page=" + page +  "&limit=" + limit);
};

const attachMultiple = (obj) => {
  return api.post("/parser/attach-multiple", obj);
};


export default {
  compareElize, attachedElize, attachSingle, nonCompareElize, nonCompareProducts, attachMultiple
};

