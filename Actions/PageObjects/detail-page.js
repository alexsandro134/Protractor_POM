var AbstractPage = require('../Commons/abstract-page');

var abstractPage = new AbstractPage();

var DetailPage = function() {
    this.getProductPrice = function() {
        abstractPage.waitForControlVisible('//span[contains(@id,"product-price")]');
        return abstractPage.getTextElement('//span[contains(@id,"product-price")]');
    };
};
module.exports = DetailPage;