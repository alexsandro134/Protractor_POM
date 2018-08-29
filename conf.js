exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['../PROTRACTOR_POM/Testcases/TC_04_CompareProducts.spec.js'],
    browserName: 'chrome',
    // directConnect: true,

    onPrepare: function () {
        browser.ignoreSynchronization = true;
        browser.driver.manage().window().maximize();
    },

    jasmineNodeOpts: {
        defaultTimeoutInterval: 45000
    }
}