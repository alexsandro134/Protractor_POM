var AbstractPage = require('../Commons/abstract-page');
var CheckoutPageUI = require('../../Interface/checkout-page-ui');
var EmptyCartPage = require('../PageObjects/empty-cart-page');

var abstractPage = new AbstractPage();
var checkoutPageUI = new CheckoutPageUI();

var CheckoutPage = function () {
    this.applyCouponCode = function (couponText) {
        abstractPage.sendKeyToElement(checkoutPageUI.COUPON_CODE, couponText);
        abstractPage.clickToElement(checkoutPageUI.APPLY_BTN);
    };

    this.discountGenerated = function () {
        return abstractPage.isControlDisplayed(checkoutPageUI.DISCOUNT_GENERATED);
    };

    this.updateQuantity = function (number) {
        abstractPage.clickToElement(checkoutPageUI.QUANTITY_TXT);
        abstractPage.sendKeyToElement(checkoutPageUI.QUANTITY_TXT, number);
        abstractPage.clickToElement(checkoutPageUI.UPDATE_BTN)
    };

    this.verifyErrorMsgDisplayed = function () {
        return abstractPage.isControlDisplayed(checkoutPageUI.ERROR_MSG_QUANTITY);
    };

    this.getErrorMessage = function () {
        return abstractPage.getTextElement(checkoutPageUI.ERROR_MSG_QUANTITY);
    };

    this.clickToEmptyCart = function () {
        abstractPage.clickToElement(checkoutPageUI.EMPTY_CART_BTN);
        return new EmptyCartPage();

    };
};

module.exports = CheckoutPage;