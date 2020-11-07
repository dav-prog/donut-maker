export 

class DonutMaker {

    constructor() {
        this._donutCount = 0;
        this._autoClickerCount = 0;
        this._autoClickerCost = 100;
        this._donutMultiplier = 0;
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

    get donutMultiplier() {
        return this._donutMultiplier;
    }

    get donutMultiplierCost() {
        return this._donutMultiplierCost;
    }

    recordClick() {
        this._donutCount += Math.pow(1.2, this._donutMultiplier);
    }

    addAutoClicker() {
        if (this._donutCount >= this._autoClickerCost) {
            this._donutCount -= this._autoClickerCost;
            this._autoClickerCount++;

            this._autoClickerCost = Math.round((this._autoClickerCost * 1.1));
        }
        if (this._autoClickerCount <= 1) {
            this.activateAutoClickers();
        }
    }
    activateAutoClickers() {

        this._donutCount += this._autoClickerCount * (Math.pow(1.2, this._donutMultiplier));
    }

    addDonutMultiplier() {
        if (this._donutCount >= this._donutMultiplierCost) {
            this._donutCount -= this._donutMultiplierCost;
            this._donutMultiplier++;

            this._donutMultiplierCost = this._donutMultiplierCost * 1.1;
        }
    }
}