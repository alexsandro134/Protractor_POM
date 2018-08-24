var AbstractPage = require('../Commons/abstract-page');
var EmptyCartPageUI = require('../../Interface/empty-cart-page-ui');

var abstractPage = new AbstractPage();
var emptyCartPageUI = new EmptyCartPageUI();

var EmptyCartPage = function() {
    this.verifyEmptyMsgDisplayed = function () {
        return abstractPage.isControlDisplayed(emptyCartPageUI.EMPTY_MSG);
    };

    this.getEmptyMsg = function () {
        return abstractPage.getTextElement(emptyCartPageUI.EMPTY_MSG);
    };
};

module.exports = EmptyCartPage;