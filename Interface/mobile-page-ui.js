var MobilePageUI = function() {
    this.MOBILE_PRICE = '//h2[a[text()="Sony Xperia"]]/following-sibling::div//span[contains(@id,"product-price")]';
    this.DYNAMIC_MOBILE_LINK = '//a[text()="Sony Xperia"]';
    this.ADD_CART_BUTTON = '//h2[a[text()="Sony Xperia"]]/following-sibling::div[@class="actions"]/button';
    this.SONY_COMPARE_BUTTON = '//h2[a[text()="Sony Xperia"]]/following-sibling::div[@class="actions"]//a[@class="link-compare"]';
    this.IPHONE_COMPARE_BUTTON = '//h2[a[text()="IPhone"]]/following-sibling::div[@class="actions"]//a[@class="link-compare"]';
    this.COMPARE_BUTTON = '//button[@title="Compare"]';
};

module.exports = MobilePageUI;

// class MobilePageUI {
//     static ADD_CART_BUTTON = '//h2[a[text()="Sony Xperia"]]/following-sibling::div[@class="actions"]/button';
// }

// module.exports = MobilePageUI;