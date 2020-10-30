describe('FEATURE : Have a way to count donuts.', () => {
    describe('Can add to donut count:', () => {
        let underTest;

        beforeEach(() => {
            underTest = new DonutMaker;
        });

        it('Should start with a click count of 0.', () => {

            expect(underTest.donutCount).toBe(0);
        });
        it('Should add one click to the click count when clicked upon.', () => {

            underTest.recordClick();
            expect(underTest.donutCount).toBe(1);
        })
        it('Should have a click count of 2 when it records 2 clicks.', () => {

            underTest.recordClick();
            underTest.recordClick();
            expect(underTest.donutCount).toBe(2);
        });
    });
});
describe('FEATURE : Be able to purchase the first Auto Clicker with 100 donuts from your donut count.', () => {
    let underTest;

    beforeEach(() => {
        underTest = new DonutMaker;
    });

    it('Can retrieve an Auto Clicker count.', () => {
        expect(underTest.autoClickerCount).toBe(0);
    });

    it('Can add to the Auto Clicker count', () => {
        underTest.addAutoClicker();
        expect(underTest.autoClickerCount).toBe(1);
    });
    it('When you add two Auto Clickers should return two Auto Clickers', () => {
        underTest.addAutoClicker();
        underTest.addAutoClicker();
        expect(underTest.autoClickerCount).toBe(2);
    });

    it('Subtract the Auto Clicker cost from your donut count.', () => {
        underTest.addAutoClicker();
        expect(underTest.donutCount).toBe(-100);
    });
});
describe('FEATURE : The cost of each Auto Clicker will go up with each purchase.', () => {
    let underTest;

    beforeEach(() => {
        underTest = new DonutMaker;
    });

    it('Increase the cost of the second Auto Clicker by an additional ten percent.', () => {
        underTest.addAutoClicker();
        underTest.addAutoClicker();
        expect(underTest.donutCount).toBe(-210);
    });

    it('Increase the cost of every additional Auto Clicker by an additional ten percent.', () => {
        underTest.addAutoClicker();
        underTest.addAutoClicker();
        underTest.addAutoClicker();
        expect(underTest.donutCount).toBe(-331);
    });
});
describe('FEATURE : Ensure that there are enough clicks to buy a Auto Clicker.', () => {
    let underTest;

    beforeEach(() => {
        underTest = new DonutMaker;
    });
    it('Prevent the Auto Clicker count from going up if there are not enough clicks to purchase a Auto Clicker.', () => {

        // expect(underTest.donutCount).toBe(underTest.autoClickerCount);

    });
});
describe('FEATURE : The amount of Auto Clickers affect the amount of donuts added when an "Activate Auto Clickers" event is called.', () => {
    let underTest;

    beforeEach(() => {
        underTest = new DonutMaker;
        underTest._donutCount = 100;
    });
    it('When the "activate Auto Clickers" event is executed, increase the donut total by the amount of Auto Clickers owned.', () => {
        underTest.addAutoClicker();
        underTest.activateAutoClickers();
        expect(underTest.donutCount).toBe(underTest.autoClickerCount);
    });
});
describe('FEATURE 1 : Be able to purchase the first Donut Multiplier with 10 clicks from your click count.', () => {
    let underTest;

    beforeEach(() => {
        underTest = new DonutMaker;
    });

    it('Can retrieve a Donut Multiplier count.', () => {
        expect(underTest.donutMultiplierCount).toBe(0);
    });

    it('Can add to the Donut Multiplier count.', () => {
        underTest.addDonutMultiplier();
        expect(underTest.donutMultiplierCount).toBe(1);
    });

    it('Subtract the amount of the Donut Multiplier cost from the donut count.', () => {
        underTest.addDonutMultiplier();
        expect(underTest.donutCount).toBe(-10);
    });
});
describe('FEATURE 2 : The cost of each Donut Multiplier will go up with each purchase.', () => {
    let underTest;
    beforeEach(() => {
        underTest = new DonutMaker;
    });

    it('Increase the cost of the second Donut Multiplier by an additional ten percent.', () => {
        underTest.addDonutMultiplier();
        underTest.addDonutMultiplier();
        expect(underTest.donutCount).toBe(-21)
    });

    it('Increase the cost of every additional Donut Multiplier by an additional ten percent.', () => {
        underTest.addDonutMultiplier();
        underTest.addDonutMultiplier();
        underTest.addDonutMultiplier();
        expect(underTest.donutCount).toBe(-33.1)
    });
});
describe('FEATURE 3 : Ensure that there are enough donuts to buy a Donut Multiplier.', () => {
    let underTest;
    beforeEach(() => {
        underTest = new DonutMaker;
    });
    it('Prevent the Donut Multiplier count from going up if there are not enough donuts to purchase a Donut Multiplier.', () => {

    });

});
describe('FEATURE 4 : The first Donut Multiplier should increase the value of a click 1.2x.', () => {
    let underTest;
    beforeEach(() => {
        underTest = new DonutMaker;
    });
    it('Increase the amount of donuts added to the donut count by multiplying by 1.2 after the first Donut Multiplier is purchased.', () => {
        underTest.addDonutMultiplier();
        underTest.donutMultiplier();
        expect(underTest.donutCount).toBe(-8.8);
    });


});
