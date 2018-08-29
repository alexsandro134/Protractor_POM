var AbstractPage = require('../Commons/abstract-page');
var DetailPage = require('../PageObjects/detail-page');
var CheckoutPage = require('../PageObjects/checkout-page');
var MobilePageUI = require('../../Interface/mobile-page-ui');
var ComparePage = require('../PageObjects/compare-page');

var abstractPage = new AbstractPage();
var mobilePageUI = new MobilePageUI();

var MobilePage = function () {
    this.getCostOfMobile = function () {
        abstractPage.waitForControlVisible('//h2[a[text()="Sony Xperia"]]/following-sibling::div//span[contains(@id,"product-price")]');
        return abstractPage.getTextElement('//h2[a[text()="Sony Xperia"]]/following-sibling::div//span[contains(@id,"product-price")]');
    };

    this.clickToDetailPage = function () {
        abstractPage.waitForControlVisible(mobilePageUI.DYNAMIC_MOBILE_LINK);
        abstractPage.clickToElement(mobilePageUI.DYNAMIC_MOBILE_LINK);
        return new DetailPage();
    }

    this.addToCart = function () {
        abstractPage.waitForControlVisible(mobilePageUI.ADD_CART_BUTTON);
        abstractPage.clickToElement(mobilePageUI.ADD_CART_BUTTON);
        return new CheckoutPage();
    };

    this.addSonyToCompare = function () {
        abstractPage.clickToElement(mobilePageUI.SONY_COMPARE_BUTTON);
    };

    this.addIPhoneToCompare = function () {
        abstractPage.clickToElement(mobilePageUI.IPHONE_COMPARE_BUTTON);
    }

    this.getTotalNumberCompare = function () {
        return abstractPage.getSizeElement(mobilePageUI.LIST_COMPARE);
    }

    this.clickToCompare = function () {
        abstractPage.clickToElement(mobilePageUI.COMPARE_BUTTON);
        abstractPage.switchWindowByTitle('Products Comparison List - Magento Commerce');
        return new ComparePage();
    };
};

module.exports = MobilePage;