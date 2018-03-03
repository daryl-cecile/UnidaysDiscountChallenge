const {UnidaysDiscountChallenge,defaultPricingRule} = require("./../UnidaysDiscountChallenge");
const assert = require('assert');

describe('Items', function () {

    describe('None', function () {
        let udc = new UnidaysDiscountChallenge( defaultPricingRule );
        let result = udc.CalculateTotalPrice();

        it('should return 0 as total', function () {
            assert.equal(result.Total, 0);
        });

        it('should return 0 as delivery charge', function () {
            assert.equal(result.DeliveryCharge, 0);
        });
    });

    describe('A', function () {
        let udc = new UnidaysDiscountChallenge( defaultPricingRule );

        udc.AddToBasket('A');

        let result = udc.CalculateTotalPrice();

        it('should return 8 as total', function () {
            assert.equal(result.Total, 8);
        });

        it('should return 7 as delivery charge', function () {
            assert.equal(result.DeliveryCharge, 7);
        });
    });

    describe('B', function () {
        let udc = new UnidaysDiscountChallenge( defaultPricingRule );

        udc.AddToBasket('B');

        let result = udc.CalculateTotalPrice();

        it('should return 12 as total', function () {
            assert.equal(result.Total, 12);
        });

        it('should return 7 as delivery charge', function () {
            assert.equal(result.DeliveryCharge, 7);
        });
    });

    describe('C', function () {
        let udc = new UnidaysDiscountChallenge( defaultPricingRule );

        udc.AddToBasket('C');

        let result = udc.CalculateTotalPrice();

        it('should return 4 as total', function () {
            assert.equal(result.Total, 4);
        });

        it('should return 7 as delivery charge', function () {
            assert.equal(result.DeliveryCharge, 7);
        });
    });

    describe('D', function () {
        let udc = new UnidaysDiscountChallenge( defaultPricingRule );

        udc.AddToBasket('D');

        let result = udc.CalculateTotalPrice();

        it('should return 7 as total', function () {
            assert.equal(result.Total, 7);
        });

        it('should return 7 as delivery charge', function () {
            assert.equal(result.DeliveryCharge, 7);
        });
    });

    describe('E', function () {
        let udc = new UnidaysDiscountChallenge( defaultPricingRule );

        udc.AddToBasket('E');

        let result = udc.CalculateTotalPrice();

        it('should return 5 as total', function () {
            assert.equal(result.Total, 5);
        });

        it('should return 7 as delivery charge', function () {
            assert.equal(result.DeliveryCharge, 7);
        });
    });

    describe('BB', function () {
        let udc = new UnidaysDiscountChallenge( defaultPricingRule );

        udc.AddToBasket('B');
        udc.AddToBasket('B');

        let result = udc.CalculateTotalPrice();

        it('should return 20 as total', function () {
            assert.equal(result.Total, 20);
        });

        it('should return 7 as delivery charge', function () {
            assert.equal(result.DeliveryCharge, 7);
        });
    });

    describe('BBB', function () {
        let udc = new UnidaysDiscountChallenge( defaultPricingRule );

        udc.AddToBasket('B');
        udc.AddToBasket('B');
        udc.AddToBasket('B');

        let result = udc.CalculateTotalPrice();

        it('should return 32 as total', function () {
            assert.equal(result.Total, 32);
        });

        it('should return 7 as delivery charge', function () {
            assert.equal(result.DeliveryCharge, 7);
        });
    });

    describe('BBBB', function () {
        let udc = new UnidaysDiscountChallenge( defaultPricingRule );

        udc.AddToBasket('B');
        udc.AddToBasket('B');
        udc.AddToBasket('B');
        udc.AddToBasket('B');

        let result = udc.CalculateTotalPrice();

        it('should return 40 as total', function () {
            assert.equal(result.Total, 40);
        });

        it('should return 7 as delivery charge', function () {
            assert.equal(result.DeliveryCharge, 7);
        });
    });

    describe('CCC', function () {
        let udc = new UnidaysDiscountChallenge( defaultPricingRule );

        udc.AddToBasket('C');
        udc.AddToBasket('C');
        udc.AddToBasket('C');

        let result = udc.CalculateTotalPrice();

        it('should return 10 as total', function () {
            assert.equal(result.Total, 10);
        });

        it('should return 7 as delivery charge', function () {
            assert.equal(result.DeliveryCharge, 7);
        });
    });

    describe('CCCC', function () {
        let udc = new UnidaysDiscountChallenge( defaultPricingRule );

        udc.AddToBasket('C');
        udc.AddToBasket('C');
        udc.AddToBasket('C');
        udc.AddToBasket('C');

        let result = udc.CalculateTotalPrice();

        it('should return 14 as total', function () {
            assert.equal(result.Total, 14);
        });

        it('should return 7 as delivery charge', function () {
            assert.equal(result.DeliveryCharge, 7);
        });
    });

    describe('DD', function () {
        let udc = new UnidaysDiscountChallenge( defaultPricingRule );

        udc.AddToBasket('D');
        udc.AddToBasket('D');

        let result = udc.CalculateTotalPrice();

        it('should return 7 as total', function () {
            assert.equal(result.Total, 7);
        });

        it('should return 7 as delivery charge', function () {
            assert.equal(result.DeliveryCharge, 7);
        });
    });

    describe('DDD', function () {
        let udc = new UnidaysDiscountChallenge( defaultPricingRule );

        udc.AddToBasket('D');
        udc.AddToBasket('D');
        udc.AddToBasket('D');

        let result = udc.CalculateTotalPrice();

        it('should return 14 as total', function () {
            assert.equal(result.Total, 14);
        });

        it('should return 7 as delivery charge', function () {
            assert.equal(result.DeliveryCharge, 7);
        });
    });

    describe('EE', function () {
        let udc = new UnidaysDiscountChallenge( defaultPricingRule );

        udc.AddToBasket('E');
        udc.AddToBasket('E');

        let result = udc.CalculateTotalPrice();

        it('should return 10 as total', function () {
            assert.equal(result.Total, 10);
        });

        it('should return 7 as delivery charge', function () {
            assert.equal(result.DeliveryCharge, 7);
        });
    });

    describe('EEE', function () {
        let udc = new UnidaysDiscountChallenge( defaultPricingRule );

        udc.AddToBasket('E');
        udc.AddToBasket('E');
        udc.AddToBasket('E');

        let result = udc.CalculateTotalPrice();

        it('should return 10 as total', function () {
            assert.equal(result.Total, 10);
        });

        it('should return 7 as delivery charge', function () {
            assert.equal(result.DeliveryCharge, 7);
        });
    });

    describe('EEEE', function () {
        let udc = new UnidaysDiscountChallenge( defaultPricingRule );

        udc.AddToBasket('E');
        udc.AddToBasket('E');
        udc.AddToBasket('E');
        udc.AddToBasket('E');

        let result = udc.CalculateTotalPrice();

        it('should return 15 as total', function () {
            assert.equal(result.Total, 15);
        });

        it('should return 7 as delivery charge', function () {
            assert.equal(result.DeliveryCharge, 7);
        });
    });

    describe('DDDDDDDDDDDDDD', function () {
        let udc = new UnidaysDiscountChallenge( defaultPricingRule );

        udc.AddToBasket('D');
        udc.AddToBasket('D');
        udc.AddToBasket('D');
        udc.AddToBasket('D');
        udc.AddToBasket('D');
        udc.AddToBasket('D');
        udc.AddToBasket('D');
        udc.AddToBasket('D');
        udc.AddToBasket('D');
        udc.AddToBasket('D');
        udc.AddToBasket('D');
        udc.AddToBasket('D');
        udc.AddToBasket('D');
        udc.AddToBasket('D');

        let result = udc.CalculateTotalPrice();

        it('should return 49 as total', function () {
            assert.equal(result.Total, 49);
        });

        it('should return 7 as delivery charge', function () {
            assert.equal(result.DeliveryCharge, 7);
        });
    });

    describe('BBBBCCC', function () {
        let udc = new UnidaysDiscountChallenge( defaultPricingRule );

        udc.AddToBasket('B');
        udc.AddToBasket('B');
        udc.AddToBasket('B');
        udc.AddToBasket('B');
        udc.AddToBasket('C');
        udc.AddToBasket('C');
        udc.AddToBasket('C');

        let result = udc.CalculateTotalPrice();

        it('should return 50 as total', function () {
            assert.equal(result.Total, 50);
        });

        it('should return 0 as delivery charge', function () {
            assert.equal(result.DeliveryCharge, 0);
        });
    });

    describe('ABBCCCDDEE', function () {
        let udc = new UnidaysDiscountChallenge( defaultPricingRule );

        udc.AddToBasket('A');
        udc.AddToBasket('B');
        udc.AddToBasket('B');
        udc.AddToBasket('C');
        udc.AddToBasket('C');
        udc.AddToBasket('C');
        udc.AddToBasket('D');
        udc.AddToBasket('D');
        udc.AddToBasket('E');
        udc.AddToBasket('E');

        let result = udc.CalculateTotalPrice();

        it('should return 55 as total', function () {
            assert.equal(result.Total, 55);
        });

        it('should return 0 as delivery charge', function () {
            assert.equal(result.DeliveryCharge, 0);
        });
    });

    describe('EDCBAEDCBC', function () {
        let udc = new UnidaysDiscountChallenge( defaultPricingRule );

        udc.AddToBasket('E');
        udc.AddToBasket('D');
        udc.AddToBasket('C');
        udc.AddToBasket('B');
        udc.AddToBasket('A');
        udc.AddToBasket('E');
        udc.AddToBasket('D');
        udc.AddToBasket('C');
        udc.AddToBasket('B');
        udc.AddToBasket('C');

        let result = udc.CalculateTotalPrice();

        it('should return 55 as total', function () {
            assert.equal(result.Total, 55);
        });

        it('should return 0 as delivery charge', function () {
            assert.equal(result.DeliveryCharge, 0);
        });
    });


});