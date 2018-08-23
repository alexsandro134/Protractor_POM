var HomePage = require('../Actions/PageObjects/home-page');
var MobilePage = require('../Actions/PageObjects/mobile-page');
var DetailPage = require('../Actions/PageObjects/detail-page');

var homePage = new HomePage();
var mobilePage;
var detailPage;

var mobilePrice, productPrice, productName;
describe('Compare cost of product and name', function () {
    it('Should same price and product name', async function () {
        browser.get('http://live.guru99.com/');
        mobilePage = homePage.clickOnMobileMenu();
        await mobilePage.getCostOfMobile().then(function (price) {
            mobilePrice = price;
        });
        detailPage = mobilePage.clickToDetailPage();
        await detailPage.getProductName().then(function (name) {
            productName = name;
        });
        await detailPage.getProductPrice().then(function (price) {
            productPrice = price;
        });
        expect(productName).toEqual('SONY XPERIA');
        expect(mobilePrice).toEqual(productPrice);
    });
});