var AbstractPage = require('../Commons/abstract-page');
var ComparePageUI = require('../../Interface/compare-page-ui')

var abstractPage = new AbstractPage();
var comparePageUI = new ComparePageUI();

var ComparePage = function () {

    this.getCompareTitle = function () {
        return abstractPage.getTextElement(comparePageUI.TITLE);
    };

    this.getNumberOfCompare = function () {
        return abstractPage.getSizeElement(comparePageUI.LIST_PROD_NAME);
    };

    this.isSonyComparedDisplayed = function () {
        return abstractPage.isControlDisplayed(comparePageUI.SONY_COMPARE);
    };

    this.isIPhoneComparedDisplayed = function () {
        return abstractPage.isControlDisplayed(comparePageUI.IPHONE_COMPARE);
    };

    this.closeComparePage = function () {
        browser.close();
    };
};

module.exports = ComparePage;