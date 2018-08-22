var AbstractPage = require('../Commons/abstract-page');

var abstractPage = new AbstractPage();

var MobilePage = function() {
    this.getCostOfMobile = function() {
        abstractPage.waitForControlVisible('//h2[a[text()="Sony Xperia"]]/following-sibling::div//span[contains(@id,"product-price")]');
        return abstractPage.getTextElement('//h2[a[text()="Sony Xperia"]]/following-sibling::div//span[contains(@id,"product-price")]');
    };

    this.clickToDetailPage = function() {
        abstractPage.waitForControlVisible('//a[text()="Sony Xperia"]');
        abstractPage.clickToElement('//a[text()="Sony Xperia"]');
    }
};

module.exports = MobilePage;