var AbstractPage = require('../Commons/abstract-page');

var abstractPage = new AbstractPage();

var DetailPage = function() {
    this.getProductPrice = function() {
        abstractPage.waitForControlVisible('//span[contains(@id,"product-price")]');
        return abstractPage.getTextElement('//span[contains(@id,"product-price")]');
    };

    this.getProductName = function() {
        abstractPage.waitForControlVisible('//div[@class="product-name"]/span');
        return abstractPage.getTextElement('//div[@class="product-name"]/span');
    };
};
module.exports = DetailPage;