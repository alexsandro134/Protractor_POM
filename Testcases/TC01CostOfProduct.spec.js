var HomePage = require('../Actions/PageObjects/home-page');
var MobilePage = require('../Actions/PageObjects/mobile-page');
var DetailPage = require('../Actions/PageObjects/detail-page');

var homePage = new HomePage();
var mobilePage = new MobilePage();
var detailPage = new DetailPage();

var mobilePrice, productPrice;
describe('Compare cost of product',function() {
    it('Should compare cost',async function() {
        browser.get('http://live.guru99.com/');
        homePage.clickOnMobileMenu();
        await mobilePage.getCostOfMobile().then(function(price) {
            mobilePrice = price;
        });
        console.log(mobilePrice);
    });

    it('Check Price in product page',async function() {
        mobilePage.clickToDetailPage();
        await detailPage.getProductPrice().then(function(price){
            productPrice = price;
        });
        expect(mobilePrice).toEqual(productPrice);
    });
});