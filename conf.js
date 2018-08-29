exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['../PROTRACTOR_POM/Testcases/*.spec.js'],
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