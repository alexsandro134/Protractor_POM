var EC = protractor.ExpectedConditions;

var AbstractPage = function () {

    this.waitForControlVisible = function (xpath) {
        let mobileVisibility = EC.presenceOf(element(by.xpath(xpath)));
        browser.wait(mobileVisibility, 10000);
    };

    this.clickToElement = function (xpath) {
        element(by.xpath(xpath)).click();
    };

    this.getTextElement = function (xpath) {
        let elementXpath = element(by.xpath(xpath));
        return elementXpath.getText();
    };

    this.sendKeyToElement = function (xpath, text) {
        let elementXpath = element(by.xpath(xpath));
        elementXpath.clear();
        elementXpath.sendKeys(text);
    };

    this.isControlDisplayed = function (xpath) {
        let elementXpath = element(by.xpath(xpath));
        return elementXpath.isDisplayed();
    };

    this.getSizeElement = function (xpath) {
        return element.all(by.xpath(xpath)).count();
    }

    this.switchWindowByTitle = function (title) {
        browser.getAllWindowHandles().then(function (handles) {
            handles.forEach(function (handle) {
                var windowHandle = handle;
                browser.switchTo().window(windowHandle).then(function () {
                    if (browser.getTitle() == title) {
                        return true;
                    }
                });
            });
        });
    };
};

module.exports = AbstractPage;