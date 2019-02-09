const ActionTypes = {
	cleanData: "CLEAN_DATA",
	changePopup: "CHANGE_POPUP",
  updateInputValue: "UPDATE_INPUT_VALUE",
  changeItemsInEachPageCompareFunc: "CHANGE_ITEMS_IN_EACH_PAGE_COMPARE_FUNC",
  changeItemsInEachPageAttachedFunc: "CHANGE_ITEMS_IN_EACH_PAGE_ATTACHED_FUNC",
  changeItemsInEachPageDetachedFunc: "CHANGE_ITEMS_IN_EACH_PAGE_DETACHED_FUNC",

  changeSearchText: "CHANGE_SEARCH_TEXT",
  changeSearchTextAttached: "CHANGE_SEARCH_TEXT_ATTACHED",
  changeSearchTextDetached: "CHANGE_SEARCH_TEXT_DETACHED",

  filterByBrand:"FILTER_BY_BRAND",
  filterByBrandFunc:"FILTER_BY_BRAND_FUNC",
  filterByTitle:"FILTER_BY_TITLE",

  filterByBrandAttached:"FILTER_BY_BRAND_ATTACHED",
  filterByBrandAttachedFunc:"FILTER_BY_BRAND_ATTACHED_FUNC",
  filterByTitleAttached:"FILTER_BY_TITLE_ATTACHED",
  filterBySrcAttached:"FILTER_BY_SRC_ATTACHED",

  filterByBrandDetached:"FILTER_BY_BRAND_DETACHED",
  filterByBrandDetachedFunc:"FILTER_BY_BRAND_DETACHED_FUNC",
  filterByTitleDetached:"FILTER_BY_TITLE_DETACHED",
  filterBySrcDetached:"FILTER_BY_SRC_DETACHED",

  changeSortDir:"CHANGE_SORT_DIR",
  changeSortDirConElize:"CHANGE_SORT_DIR_CON_ELIZE",
  changeSortDirCon:"CHANGE_SORT_DIR_CON",
  changeSortDirConAttached:"CHANGE_SORT_DIR_CON_ATTACHED",
  changeSortDirConDetached:"CHANGE_SORT_DIR_CON_DETACHED",

  changeImageZoom:"CHANGE_IMAGE_ZOOM",
  changeImageZoomHome:"CHANGE_IMAGE_ZOOM_HOME",

  changeSearchTextNonCompare: "CHANGE_SEARCH_TEXT_NON_COMPARE",
  changeSearchTextNonCompareProducts: "CHANGE_SEARCH_TEXT_NON_COMPARE_PRODUCTS",
  changeSearchTextAttachedSec: "CHANGE_SEARCH_TEXT_ATTACHED_SEC",

  changeItemsInEachPageNonCompareFunc: "CHANGE_ITEMS_IN_EACH_PAGE_NON_COMPARE_FUNC",
  changeItemsInEachPageNonCompareProductsFunc: "CHANGE_ITEMS_IN_EACH_PAGE_NON_COMPARE_PRODUCTS_FUNC",
  changeItemsInEachPageCompareFuncSec: "CHANGE_ITEMS_IN_EACH_PAGE_COMPARE_FUNC_SEC",

  getDataRequestCompareElize: "GET_DATA_REQUEST_COMPARE_ELIZE",
  getDataResponseCompareElize: "GET_DATA_RESPONSE_COMPARE_ELIZE",

  getDataRequestAttachedElize: "GET_DATA_REQUEST_ATTACHED_ELIZE",
  getDataResponseAttachedElize: "GET_DATA_RESPONSE_ATTACHED_ELIZE",

  getDataRequestDetachedElize: "GET_DATA_REQUEST_DETACHED_ELIZE",
  getDataResponseDetachedElize: "GET_DATA_RESPONSE_DETACHED_ELIZE",


  getDataRequestBrandElize: "GET_DATA_REQUEST_BRAND_ELIZE",
  getDataResponseBrandElize: "GET_DATA_RESPONSE_BRAND_ELIZE",

  getDataRequestBrandElizeTitle: "GET_DATA_REQUEST_BRAND_ELIZE_TITLE",
  getDataResponseBrandElizeTitle: "GET_DATA_RESPONSE_BRAND_ELIZE_TITLE",

  getDataRequestBrandElizeAttached: "GET_DATA_REQUEST_BRAND_ELIZE_ATTACHED",
  getDataResponseBrandElizeAttached: "GET_DATA_RESPONSE_BRAND_ELIZE_ATTACHED",

  getDataRequestBrandElizeTitleAttached: "GET_DATA_REQUEST_BRAND_ELIZE_TITLE_ATTACHED",
  getDataResponseBrandElizeTitleAttached: "GET_DATA_RESPONSE_BRAND_ELIZE_TITLE_ATTACHED",

  getDataRequestElizeSrcAttached: "GET_DATA_REQUEST_ELIZE_SRC_ATTACHED",
  getDataResponseElizeSrcAttached: "GET_DATA_RESPONSE_ELIZE_SRC_ATTACHED",

  getDataRequestBrandElizeDetached: "GET_DATA_REQUEST_BRAND_ELIZE_DETACHED",
  getDataResponseBrandElizeDetached: "GET_DATA_RESPONSE_BRAND_ELIZE_DETACHED",

  getDataRequestBrandElizeTitleDetached: "GET_DATA_REQUEST_BRAND_ELIZE_TITLE_DETACHED",
  getDataResponseBrandElizeTitleDetached: "GET_DATA_RESPONSE_BRAND_ELIZE_TITLE_DETACHED",

  getDataRequestElizeSrcDetached: "GET_DATA_REQUEST_ELIZE_SRC_DETACHED",
  getDataResponseElizeSrcDetached: "GET_DATA_RESPONSE_ELIZE_SRC_DETACHED",

  filterByBrandConElize:"FILTER_BY_BRAND_CON_ELIZE",
  filterByTitleConElize:"FILTER_BY_TITLE_CON_ELIZE",
  filterBySourceConElize:"FILTER_BY_SOURCE_CON_ELIZE",
  filterBySourceElize:"FILTER_BY_SOURCE_ELIZE",

  filterByBrandCon:"FILTER_BY_BRAND_CON",
  filterByTitleCon:"FILTER_BY_TITLE_CON",
  filterBySourceCon:"FILTER_BY_SOURCE_CON",

  filterByBrandConAttached:"FILTER_BY_BRAND_CON_ATTACHED",
  filterByTitleConAttached:"FILTER_BY_TITLE_CON_ATTACHED",
  filterBySrcConAttached:"FILTER_BY_SRC_CON_ATTACHED",

  filterByBrandConDetached:"FILTER_BY_BRAND_CON_DETACHED",
  filterByTitleConDetached:"FILTER_BY_TITLE_CON_DETACHED",
  filterBySrcConDetached:"FILTER_BY_SRC_CON_DETACHED",

  getDataRequestBrandElizeConElize: "GET_DATA_REQUEST_BRAND_ELIZE_CON_ELIZE",
  getDataResponseBrandElizeConElize: "GET_DATA_RESPONSE_BRAND_ELIZE_CON_ELIZE",

  getDataRequestBrandElizeTitleConElize: "GET_DATA_REQUEST_BRAND_ELIZE_TITLE_CON_ELIZE",
  getDataResponseBrandElizeTitleConElize: "GET_DATA_RESPONSE_BRAND_ELIZE_TITLE_CON_ELIZE",

  getDataRequestBrandElizeCon: "GET_DATA_REQUEST_BRAND_ELIZE_CON",
  getDataResponseBrandElizeCon: "GET_DATA_RESPONSE_BRAND_ELIZE_CON",

  getDataRequestBrandElizeTitleCon: "GET_DATA_REQUEST_BRAND_ELIZE_TITLE_CON",
  getDataResponseBrandElizeTitleCon: "GET_DATA_RESPONSE_BRAND_ELIZE_TITLE_CON",

  getDataRequestElizeSourceCon: "GET_DATA_REQUEST_ELIZE_SOURCE_CON",
  getDataResponseElizeSourceCon: "GET_DATA_RESPONSE_ELIZE_SOURCE_CON",

  getDataRequestElizeSourceConElize: "GET_DATA_REQUEST_ELIZE_SOURCE_CON_ELIZE",
  getDataResponseElizeSourceConElize: "GET_DATA_RESPONSE_ELIZE_SOURCE_CON_ELIZE",

  getDataRequestElizeSource: "GET_DATA_REQUEST_ELIZE_SOURCE",
  getDataResponseElizeSource: "GET_DATA_RESPONSE_ELIZE_SOURCE",

  getDataRequestBrandElizeConAttached: "GET_DATA_REQUEST_BRAND_ELIZE_CON_ATTACHED",
  getDataResponseBrandElizeConAttached: "GET_DATA_RESPONSE_BRAND_ELIZE_CON_ATTACHED",

  getDataRequestBrandElizeTitleConAttached: "GET_DATA_REQUEST_BRAND_ELIZE_TITLE_CON_ATTACHED",
  getDataResponseBrandElizeTitleConAttached: "GET_DATA_RESPONSE_BRAND_ELIZE_TITLE_CON_ATTACHED",

  getDataRequestSrcElizeConAttached: "GET_DATA_REQUEST_SRC_ELIZE_CON_ATTACHED",
  getDataResponseSrcElizeConAttached: "GET_DATA_RESPONSE_SRC_ELIZE_CON_ATTACHED",

  getDataRequestBrandElizeConDetached: "GET_DATA_REQUEST_BRAND_ELIZE_CON_DETACHED",
  getDataResponseBrandElizeConDetached: "GET_DATA_RESPONSE_BRAND_ELIZE_CON_DETACHED",

  getDataRequestBrandElizeTitleConDetached: "GET_DATA_REQUEST_BRAND_ELIZE_TITLE_CON_DETACHED",
  getDataResponseBrandElizeTitleConDetached: "GET_DATA_RESPONSE_BRAND_ELIZE_TITLE_CON_DETACHED",

  getDataRequestSrcElizeConDetached: "GET_DATA_REQUEST_SRC_ELIZE_CON_DETACHED",
  getDataResponseSrcElizeConDetached: "GET_DATA_RESPONSE_SRC_ELIZE_CON_DETACHED",


  getDataRequestBrandProducts: "GET_DATA_REQUEST_BRAND_PRODUCTS",
  getDataResponseBrandProducts: "GET_DATA_RESPONSE_BRAND_PRODUCTS",

  getDataResponseAttachSingle: "GET_DATA_RESPONSE_ATTACH_SINGLE",

  getDataRequestNonCompareElize: "GET_DATA_REQUEST_NON_COMPARE_ELIZE",
  getDataResponseNonCompareElize: "GET_DATA_RESPONSE_NON_COMPARE_ELIZE",

  getDataRequestNonCompareProducts: "GET_DATA_REQUEST_NON_COMPARE_PRODUCTS",
  getDataResponseNonCompareProducts: "GET_DATA_RESPONSE_NON_COMPARE_PRODUCTSS",

 /* getDataRequestAttachedElizeSec: "GET_DATA_REQUEST_ATTACHED_ELIZE_SEC",
  getDataResponseAttachedElizeSec: "GET_DATA_RESPONSE_ATTACHED_ELIZE_SEC",
*/
  getDataRequestChangePassword: "GET_DATA_REQUEST_CHANGE_PASSWORD",
  getDataResponseChangePassword: "GET_DATA_RESPONSE_CHANGE_PASSWORD",
  getDataResponseErrorChangePassword: "GET_DATA_RESPONSE_ERROR_CHANGE_PASSWORD",

  getDataRequestSignIn: "GET_DATA_REQUEST_SIGN_IN",
  getDataResponseSignIn: "GET_DATA_RESPONSE_SIGN_IN",
  emailChange: "EMAIL_CHANGE",
  passwordChange: "PASSWORD_CHANGE",


  exportType:"EXPORT_TYPE",
  getDataRequestStatus: "GET_DATA_REQUEST_STATUS",
  getDataResponseStatus: "GET_DATA_RESPONSE_STATUS",
  getDataRequestStatusAll: "GET_DATA_REQUEST_STATUS_ALL",
  getDataResponseStatusAll: "GET_DATA_RESPONSE_STATUS_ALL",

  getDataRequestCompare: "GET_DATA_REQUEST_COMPARE",
  getDataResponseCompare: "GET_DATA_RESPONSE_COMPARE",
  getDataRequestCalculate: "GET_DATA_REQUEST_CALCULATE",
  getDataResponseCalculate: "GET_DATA_RESPONSE_CALCULATE",
  getDataRequestStopCompareElize: "GET_DATA_REQUEST_STOP_COMPARE_ELIZE",
  getDataResponseStopCompareElize: "GET_DATA_RESPONSE_STOP_COMPARE_ELIZE",
  getDataRequestStartElize: "GET_DATA_REQUEST_START_ELIZE",
  getDataResponseStartElize: "GET_DATA_RESPONSE_START_ELIZE",
  getDataRequestStopElize: "GET_DATA_REQUEST_STOP_ELIZE",
  getDataResponseStopElize: "GET_DATA_RESPONSE_STOP_ELIZE",

  clearInputValue: "CLEAR_INPUT_VALUE",

  toggleCheckbox: "TOOGLE_CHECKBOX_ACTION",
  changeMatchingCheckboxes: "CHANGE_MATCHING_CHECKBOXES",
};

export default ActionTypes;