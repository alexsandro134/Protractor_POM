var HomePage = require('../Actions/PageObjects/home-page');

var homePage = new HomePage();
var mobilePage, totalPhoneCompare, comparePage;

var comparePageTitle = 'COMPARE PRODUCTS';
var title, numberOfCompare;

describe('Compare products', function () {
    it('Compare product should display correctly', async function () {
        browser.get('http://live.guru99.com/');
        mobilePage = homePage.clickOnMobileMenu();
        mobilePage.addSonyToCompare();
        mobilePage.addIPhoneToCompare();
        
        await mobilePage.getTotalNumberCompare().then(function(size) {
            totalPhoneCompare = size;
        });

        comparePage = mobilePage.clickToCompare();

        await comparePage.getCompareTitle().then(function(text) {
           title = text;
        });
        
        await comparePage.getNumberOfCompare().then(function(count) {
            numberOfCompare = count;
        });
        
        expect(title).toEqual(comparePageTitle);
        expect(numberOfCompare).toEqual(totalPhoneCompare);
        expect(comparePage.isSonyComparedDisplayed()).toBe(true);
        expect(comparePage.isIPhoneComparedDisplayed()).toBe(true);
        comparePage.closeComparePage();
    });
});