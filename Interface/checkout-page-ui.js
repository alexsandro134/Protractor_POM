var CheckoutPageUI = function() {
    this.DISCOUNT_GENERATED = '//td[contains(text(),"GURU50")]/following-sibling::td/span';
    this.UPDATE_BTN = '//button[span[span[text()="Update"]]]';
    this.QUANTITY_TXT = '//input[@title="Qty"]';
    this.COUPON_CODE = '//input[@id="coupon_code"]';
    this.APPLY_BTN = '//button[@value="Apply"]';
    this.ERROR_MSG_QUANTITY = '//p[@class="item-msg error"]';
    this.EMPTY_CART_BTN = '//button[span[span[text()="Empty Cart"]]]';
};

module.exports = CheckoutPageUI;