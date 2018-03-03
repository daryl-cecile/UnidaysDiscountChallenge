"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UnidaysDiscountChallenge {
    constructor(pricingRules) {
        this.basket = [];
        this.pricingRules = pricingRules;
    }
    AddToBasket(itemName) {
        // add an object representation of the item by name
        this.basket.push({
            name: itemName,
            price: this.pricingRules[itemName]
        });
    }
    CalculateTotalPrice() {
        let total = 0;
        let delivery = 0;
        let itemCounts = {};
        // count up the quantity of each item
        this.basket.forEach(item => {
            if (!itemCounts[item.name])
                itemCounts[item.name] = 0;
            itemCounts[item.name]++;
        });
        Object.keys(itemCounts).forEach(itemName => {
            let itemPrice = this.pricingRules[itemName].itemPrice;
            let itemQuantity = itemCounts[itemName];
            // use the discount rule to calculate price
            total += this.pricingRules[itemName].discountCalculator(itemQuantity, itemPrice);
        });
        // only apply delivery charge if total is less than £50.00
        if (total > 0 && total < 50)
            delivery = 7.00;
        return {
            Total: total,
            DeliveryCharge: delivery
        };
    }
}
exports.UnidaysDiscountChallenge = UnidaysDiscountChallenge;
exports.defaultPricingRule = {
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
//# sourceMappingURL=UnidaysDiscountChallenge.js.map