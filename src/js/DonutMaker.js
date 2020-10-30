class DonutMaker {

    constructor() {
        this._donutCount = 0;
        this._autoClickerCount = 0;
        this._autoClickerCost = 100;
        this._donutMultiplierCount = 0;
        this._donutMultiplierCost = 10;

    }

    get donutCount() {
        return this._donutCount;
    }

    get autoClickerCount() {
        return this._autoClickerCount;
    }
    get autoClickerCost() {
        return this._autoClickerCost;
    }

    get donutMultiplierCount() {
        return this._donutMultiplierCount;
    }

    get donutMultiplierCost() {
        return this._donutMultiplierCost;
    }

    recordClick() {
        this._donutCount++;
    }

    addAutoClicker() {
        if (this._donutCount <= this._autoClickerCost) {
            this._autoClickerCount;
        }
        this._autoClickerCount++;

        if (this._autoClickerCount >= 2) {
            this._autoClickerCost = Math.round((this._autoClickerCost * 1.1))
        }

        this._donutCount -= this._autoClickerCost;

    }
    activateAutoClickers() {
        this.recordClick() * this._autoClickerCount;
    }

    addDonutMultiplier() {
        if (this._donutCount <= this._donutMultiplierCost) {
            this._donutMultiplierCount;
        }
        this._donutMultiplierCount++;

        if (this._donutMultiplierCount >= 2) {
            this._donutMultiplierCost = (this._donutMultiplierCost * 1.1);
        }

        this._donutCount -= this._donutMultiplierCost;

    }
    donutMultiplier() {
        Math.pow(1.2, this._donutMultiplierCount) * this.recordClick();
    }


}