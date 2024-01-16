// Cypress.on("uncaught:exception", (err, runnable) => {
//   return false
// })
// import 'babel-polyfill'
import "cypress-xpath";
import { links, cartSelect, imformation, payment } from "./testData";
import "cypress-real-events/support";

describe("cashierStage", () => {
  beforeEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
    // Visit product page
    cy.visit(links.minPageLinks);
  });
  it("instantTrading", () => {
    // Multi product
    cy.get(cartSelect.miltiItem).click();
    cy.get(cartSelect.colorBlack).click();
    cy.get(cartSelect.addCart).click();
    cy.get(cartSelect.closeCaetBtn).click();
    cy.get(cartSelect.backHomepage).click();
    // Single product
    cy.get(cartSelect.singleItem).click();
    cy.get(cartSelect.addQuantity).click();
    cy.get(cartSelect.addCart).click();
    cy.get(cartSelect.checkout).click();
    // Subscriber Information
    cy.wait(1500);
    cy.xpath(imformation.nextStep).click();
    cy.get(imformation.shippingMethods).click();
    cy.get(imformation.recipientNameField).type(imformation.recipientName);
    cy.get(imformation.recipientPhoneField).type(imformation.recipientPhone);
    cy.get(imformation.recipientMailField).type(imformation.recipientMail);
    cy.get(imformation.countryField).select(imformation.country);
    // Postal address
    cy.get(imformation.districtField).select(imformation.district);
    cy.get(imformation.addressField).type(imformation.address);
    // choose the payment method + Green member
    cy.get(payment.methodCreditCard).click();
    cy.get(payment.invoice).click();
    cy.get(payment.carrier).click();
    cy.get(payment.confirmBtn).click();
    // creditCard pay off
    cy.get(payment.creditCardNumField_1).type(payment.creditCardNum_1);
    cy.get(payment.creditCardNumField_2).type(payment.creditCardNum_2);
    cy.get(payment.creditCardNumField_3).type(payment.creditCardNum_3);
    cy.get(payment.creditCardNumField_4).type(payment.creditCardNum_4);
    // DL + security code
    cy.get(payment.creditmmField).type(payment.creditmmNum);
    cy.get(payment.credityyField).type(payment.credityyNum);
    cy.get(payment.securityCodeField).type(payment.securityCodeNum);
    // Customer information
    cy.get(payment.cardholderField).type(payment.cardholderName);
    cy.get(payment.cardholderPhoneField).type(payment.cardholderPhoneNum);
    cy.get(payment.paynowBtn).click();
    cy.get(payment.checkBtnClose).click();
    cy.get(payment.paySubmit).click();
    cy.get(payment.btnConfirm).click();
    // confirmation message
    cy.xpath(payment.orderCheck).should("include.text", payment.checkText);
    cy.get(payment.thxBuy).should("include.text", payment.thxBuyText);
  });
  it("nonInstantTrading", () => {
    cy.get(cartSelect.selectItem).click();
    cy.get(cartSelect.colorWhite).click();
    cy.get(payment.confirmBtn).click({ force: true });
    cy.wait(2000);
    cy.xpath(imformation.nextStep).click();
    cy.get(imformation.shippingMethods, { timeout: 3000 }).click();
    cy.get(imformation.overSea).click();
    cy.get(imformation.recipientNameField).type(imformation.recipientName);
    cy.get(imformation.recipientPhoneField).type(imformation.recipientPhone);
    cy.get(imformation.recipientMailField).type(imformation.recipientMail);
    cy.get(imformation.ordereNotRecipientBTN).click();
    cy.get(imformation.orderNameField).type(imformation.orderNeme);
    cy.get(imformation.orderPhoneField).type(imformation.orderPhone);
    cy.get(imformation.orderMailField).type(imformation.orderMail);
    cy.get(imformation.addressField).click().type(imformation.address);
    cy.get(payment.methodATM).click();
    cy.get(payment.invoice).click();
    cy.get(payment.carrier).click();
    cy.get(payment.confirmBtn).click();
    cy.get(payment.chooseBank).select(payment.selectBank);
    cy.get(payment.atmSubmit).click();
    cy.get(payment.paymentMethod).should("include.text",payment.paymentMethodTitle);
    cy.get(payment.paymentMethodField).should("include.text",payment.paymentMethodContent);
    cy.xpath(payment.accountTitle).should("include.text",payment.accountContent);
  });
});
