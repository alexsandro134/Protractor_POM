var AbstractPage = require('../Commons/abstract-page');

var abstractPage = new AbstractPage();

var CheckoutPage = function() {
    this.applyCouponCode = function(couponText) {
        abstractPage.sendKeyToElement('//input[@id="coupon_code"]', couponText);
        abstractPage.clickToElement('//button[@value="Apply"]');
    };
};

module.exports = CheckoutPage;