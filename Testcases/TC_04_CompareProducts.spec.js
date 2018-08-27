var HomePage = require('../Actions/PageObjects/home-page');

var homePage = new HomePage();
var mobilePage, totalPhoneCompare, comparePage;

var comparePageTitle = 'COMPARE PRODUCTS';

describe('Compare products', function() {
    it('Compare product should display correctly',function() {
        browser.get('http://live.guru99.com/');
        mobilePage = homePage.clickOnMobileMenu();
        mobilePage.addSonyToCompare();
        mobilePage.addIPhoneToCompare();
        totalPhoneCompare = mobilePage.getTotalNumberCompare();
        comparePage = mobilePage.clickToCompare();

        expect(comparePage.getCompareTitle()).toEqual(comparePageTitle);
        expect(comparePage.getNumberOfCompare()).toEqual(totalPhoneCompare);
        expect(comparePage.isSonyComparedDisplayed()).toBe(true);
        expect(comparePage.isIPhoneComparedDisplayed()).toBe(true);
        comparePage.closeComparePage();
    });
});