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
            expect(underTest.autoClicker).toBe(0);
        });

        it('Can add to the Auto Clicker count', () => {
            underTest.addAutoClicker();
            expect(underTest.autoClicker).toBe(1);
        });
        it('When you add two Auto Clickers should return two Auto Clickers', () => {
            underTest.addAutoClicker();
            underTest.addAutoClicker();
            expect(underTest.autoClicker).toBe(2);
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
        underTest._donutCount = 100;
    });
    it('Prevent the Auto Clicker count from going up if there are not enough clicks to purchase a Auto Clicker.', () => {
        
        expect(underTest.donutCount).not.toBeLessThan(underTest.autoClickerCost);

    });
});