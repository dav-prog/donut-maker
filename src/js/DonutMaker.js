class DonutMaker {

    constructor(){
        this._donutCount = 0;
        this._autoClicker = 0;
        this._autoClickerCost = 100;
    }

    get donutCount() {
        return this._donutCount;
    }

    get autoClicker() {
        return this._autoClicker;
    }
    get autoClickerCost(){
        return this._autoClickerCost;
    }

    recordClick() {
        this._donutCount ++;
    }

    addAutoClicker() {
        if(this._autoClicker >= 1) {
        Math.round(this._autoClickerCost *= 1.1)
        }
        if (this._donutCount >= this._autoClickerCost) {
            this._autoClicker += 1;
        }
        this._autoClicker ++;
        this._donutCount -= this._autoClickerCost;

    }
    

}