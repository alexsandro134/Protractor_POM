exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['../POM_PROTRACTOR/Testcases/*.spec.js'],
    browserName: 'chrome',

    onPrepare: function () {
        browser.ignoreSynchronization = true;
        browser.driver.manage().window().maximize();
    },

    jasmineNodeOpts: {
        defaultTimeoutInterval: 45000
    }
}