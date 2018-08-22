var AbstractPage = require('../Commons/abstract-page');

var abstractPage = new AbstractPage();

var HomePage = function() {
    this.clickOnMobileMenu = function() {
        abstractPage.waitForControlVisible('//nav[@id="nav"]//a[text() = "Mobile"]');
        abstractPage.clickToElement('//nav[@id="nav"]//a[text() = "Mobile"]');
    };
};

module.exports = HomePage;