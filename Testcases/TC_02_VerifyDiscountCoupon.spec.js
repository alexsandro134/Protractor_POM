var HomePage = require('../Actions/PageObjects/home-page');

var homePage = new HomePage();
var mobilePage;
var checkoutPage;

var couponText = 'GURU50';

describe('Verify coupon can apply to product', function () {
    it('Add product to cart and apply coupon', function () {
        browser.get('http://live.guru99.com/');
        mobilePage = homePage.clickOnMobileMenu();
        checkoutPage = mobilePage.addToCart();
        checkoutPage.applyCouponCode(couponText);
    });
});