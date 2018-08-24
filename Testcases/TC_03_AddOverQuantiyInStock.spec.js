var HomePage = require('../Actions/PageObjects/home-page');

var homePage = new HomePage();
var mobilePage, checkoutPage, emptyCartPage;

var quantityNumber = '1000';
var quantityErrorMsg = "* The maximum quantity allowed for purchase is 500.";
var emptyMsg = 'SHOPPING CART IS EMPTY';

describe('Add Over quantity in stock', function () {
    it('Web should display error message when add over quantity', function () {
        browser.get('http://live.guru99.com/');
        mobilePage = homePage.clickOnMobileMenu();
        checkoutPage = mobilePage.addToCart();
        checkoutPage.updateQuantity(quantityNumber);
        expect(checkoutPage.verifyErrorMsgDisplayed()).toBe(true);
        expect(checkoutPage.getErrorMessage()).toEqual(quantityErrorMsg);

        emptyCartPage = checkoutPage.clickToEmptyCart();
        expect(emptyCartPage.verifyEmptyMsgDisplayed()).toBe(true);
        expect(emptyCartPage.getEmptyMsg()).toEqual(emptyMsg);
    });
});