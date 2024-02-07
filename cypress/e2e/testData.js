export const links = {
  // minPage
  minPageLinks: "https://autoteststore.cashier-stage.ecpay.com.tw/",
};
export const cartSelect = {
  miltiItem: ".slc-list > ul > :nth-child(1)", // add multiple product
  colorBlack: ":nth-child(1) > .radio", // 選擇顏色
  addCart: ".btn-addcart", // 加入購物車
  closeCaetBtn: ".fct-close", // 關閉購物車
  backHomepage: ".slb-txt", // 回到主頁
  singleItem: ".slc-list > ul > :nth-child(2)", // 選擇單一規格商品
  addQuantity: ".scln-plus", // 新增數量
  checkout: ".stb-btn-box > .btn", // 結帳
  selectItem: ".slc-list > ul > :nth-child(1)",
  colorWhite: ":nth-child(2) > .radio",
};
export const imformation = {
  nextStep: '//*[@id="checkout-root"]/div/div/div[2]/div/a', // cilck to checkout
  shippingMethods:
    ":nth-child(2) > .sdtb-box > .sdtb-radio-list > :nth-child(5) > .radio", // shipping Methods
  recipientNameField: ".sfb-w1 > dd > .sfb-inp",
  recipientPhoneField: ".sfb-w2 > dd > .sfb-inp",
  recipientMailField: ".sfb-w3 > dl > dd > .sfb-inp",
  recipientName: "陳小美",
  recipientPhone: "0988166166",
  recipientMail: "aabcc321@ecpay.com.tw",
  countryField: "select",
  country: "TPE",
  districtField: ".sfb-w2 > span > .def-select > select",
  district: "NGG",
  addressField: ".sdtb-form-box > .sfb-addr > .sfb-w4 > span > .sfb-inp",
  address: "三重路19-2號6樓",
  overSea: ".sdtb-box > :nth-child(2) > .radio",
  // 非即時交易
  ordereNotRecipientBTN: ".checkbox",
  orderNameField:
    ".sdtb-form-box:nth-child(3) > span > .sfb-w1 > dd > .sfb-inp",
  orderPhoneField:
    ".sdtb-form-box:nth-child(3) > span > .sfb-w2 > dd > .sfb-inp",
  orderMailField: ".sdtb-form-box:nth-child(3) > .sfb-w3 > dl > dd > .sfb-inp",
  orderNeme: "陳小美",
  orderPhone: "0988166166",
  orderMail: "aabcc321@ecpay.com.tw",
};
export const payment = {
  methodCreditCard:
    ":nth-child(6) > .sdtb-box > .sdtb-radio-list > :nth-child(1) > .radio", //creditCard
  methodATM: ":nth-child(9) > .radio",
  invoice:
    ":nth-child(7) > .sdtb-box > .sdtb-radio-list > :nth-child(1) > .radio",
  carrier: ":nth-child(3) > .sdtb-radio-list > :nth-child(1) > .radio",
  confirmBtn: ".btn-main",
  creditCardNumField_1: "#CCpart1",
  creditCardNum_1: "4311",
  creditCardNumField_2: "#CCpart2",
  creditCardNum_2: "9522",
  creditCardNumField_3: "#CCpart3",
  creditCardNum_3: "2222",
  creditCardNumField_4: "#CCpart4",
  creditCardNum_4: "2222",
  creditmmField:
    ".pay-tab-form > .pay-card-date > :nth-child(2) > div > #creditMM",
  creditmmNum: "12",
  credityyField:
    ".pay-tab-form > .pay-card-date > :nth-child(2) > div > #creditYY",
  credityyNum: "28",
  securityCodeField:
    ".pay-tab-form > .pay-card-date > .pay-card-ccvb > dl > dd > #CreditBackThree",
  securityCodeNum: "222",
  cardholderField: ":nth-child(6) > dd > #CCHolderTemp",
  cardholderName: "王小明",
  cardholderPhoneField: ".pay-tab-form > .ptf-dfe-phone > dd > #CellPhoneCheck",
  cardholderPhoneNum: "0988188188",
  paynowBtn: "#CreditPaySubmit",
  checkBtnClose:
    "#Credit > .simplert > .simplert__content > .simplert__footer > #btnClose",
  paySubmit: "#CreditPaySubmit",
  btnConfirm: "#btnConfirm",
  orderCheck: "/html/body/div[2]/div/div/div/div/div[2]",
  checkText: "訂購完成！",
  thxBuy: ".cst-txt",
  thxBuyText: "謝謝您的購買，我們會盡快處理您的訂單。",
  // 非即時交易
  chooseBank: ".pay-tab-form > dl > dd > .pay-tab-select > #selATMBank",
  selectBank: "10002@11@ATM_LAND",
  atmSubmit: "#ATMPaySubmit",
  paymentMethod: ".csb-title",
  paymentMethodTitle: "交易待付款",
  paymentMethodField: ":nth-child(1) > b",
  paymentMethodContent: "訂單編號：",
  accountTitle: "/html/body/div[2]/div/div/div/div/div[3]/ul/li[2]/b/text()",
  accountContent: "訂單金額：",
};
