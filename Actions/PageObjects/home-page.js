var AbstractPage = require('../Commons/abstract-page');
var MobilePage = require('../PageObjects/mobile-page');

var abstractPage = new AbstractPage();

var HomePage = function () {
    this.clickOnMobileMenu = function () {
        abstractPage.waitForControlVisible('//nav[@id="nav"]//a[text() = "Mobile"]');
        abstractPage.clickToElement('//nav[@id="nav"]//a[text() = "Mobile"]');
        return new MobilePage();
    };
};

module.exports = HomePage;