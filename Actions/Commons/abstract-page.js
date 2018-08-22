var EC = protractor.ExpectedConditions;

var AbstractPage = function() {
    this.waitForControlVisible = function(xpath) {
        let mobileVisibility = EC.presenceOf(element(by.xpath(xpath)));
        browser.wait(mobileVisibility, 10000);
    };

    this.clickToElement = function(xpath) {
        element(by.xpath(xpath)).click();
    };

    this.getTextElement = function(xpath) {
        let elementXpath = element(by.xpath(xpath));
        return elementXpath.getText();
    };
};

module.exports = AbstractPage;