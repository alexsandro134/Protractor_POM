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

    this.sendKeyToElement = function(xpath, text) {
        let elementXpath = element(by.xpath(xpath));
        elementXpath.clear();
        elementXpath.sendKeys(text);
    };

    this.isControlDisplayed = function(xpath) {
        let elementXpath = element(by.xpath(xpath));
        return elementXpath.isDisplayed();
    };

    this.getSizeElement = function(xpath) {
        let listElements = element.all(by.xpath(xpath));
        return listElements.count;
    }

    this.switchWindowByTitle = function(title) {
        var handles = browser.getAllWindowHandles();
        handles.then(function(handle) {
            browser.switchTo.window(handle);
            if(expect(browser.getTitle()).toEqual(title)){
                return;
            }
        })
    };
};

module.exports = AbstractPage;