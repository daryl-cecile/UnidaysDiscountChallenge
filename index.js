"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UnidaysDiscountChallenge_1 = require("./UnidaysDiscountChallenge");
let pricingRules = {
    'A': {
        itemPrice: 8.00,
        discountCalculator: (quantity, price) => {
            //no discounts
            return (quantity * price);
        }
    },
    'B': {
        itemPrice: 12.00,
        discountCalculator: (quantity, price) => {
            // 2 for 20
            if (quantity % 2 === 0) {
                return (price * quantity) - (2 * quantity);
            }
            else {
                return (price * (quantity - 1)) - (2 * (quantity - 1)) + price;
            }
        }
    },
    'C': {
        itemPrice: 4.00,
        discountCalculator: (quantity, price) => {
            // 3 for 10
            return (price * quantity) - (2 * (Math.floor(quantity / 3)));
        }
    },
    'D': {
        itemPrice: 7.00,
        discountCalculator: (quantity, price) => {
            if (quantity % 2 === 0) {
                return price * (Math.floor(quantity / 2));
            }
            else {
                return (price * (Math.floor(quantity / 2))) + price;
            }
        }
    },
    'E': {
        itemPrice: 5.00,
        discountCalculator: (quantity, price) => {
            return price * (quantity - (Math.floor(quantity / 3)));
        }
    }
};
// BEGIN
let udc = new UnidaysDiscountChallenge_1.UnidaysDiscountChallenge(pricingRules);
// add items to basket
udc.AddToBasket('A');
udc.AddToBasket('B');
// calculate price
let result = udc.CalculateTotalPrice();
let totalPrice = result.Total;
let deliveryCharge = result.DeliveryCharge;
let grandTotal = totalPrice + deliveryCharge;
// output
console.log(totalPrice, deliveryCharge, grandTotal);
//# sourceMappingURL=index.js.map