import { DonutMaker } from "/src/js/DonutMaker.js";

const donutMaker = new DonutMaker();

const updateDonutCount = function () {
    const donuts = document.querySelector('.donut_count');
    donuts.innerText = Math.round(donutMaker.donutCount * 100) / 100;
    checkAutoClickerButton();
    checkDonutMultiplierButton();
}
//donut Maker
const clicks = document.querySelector('.add__donut');
clicks.addEventListener('click', () => {
    donutMaker.recordClick();
    updateDonutCount();

})

//autoclickers
const updateAutoClickerCount = function () {
    const autoClickerCount = document.querySelector('.auto_clicker_count');
    autoClickerCount.innerText = donutMaker.autoClickerCount;
}

const autoClickers = document.querySelector('.purchase__auto_clickers');
autoClickers.addEventListener('click', () => {
    donutMaker.addAutoClicker();
    updateAutoClickerCount();
    updateDonutCount();
    checkAutoClickerButton();
    checkDonutMultiplierButton();
})

function checkAutoClickerButton() {
    if (donutMaker.donutCount >= donutMaker.autoClickerCost) {
        autoClickers.disabled = false;
    } else {
        autoClickers.disabled = true;
    }
}



//donut multipliers
const updateMultiplierCount = function () {
    const multiplierCount = document.querySelector('.donut_multiplier_count');
    multiplierCount.innerText = donutMaker.donutMultiplier;
}

const donutMultiplier = document.querySelector('.purchase_donut_mulitipliers');
donutMultiplier.addEventListener('click', () => {
    donutMaker.addDonutMultiplier();
    updateMultiplierCount();
    updateDonutCount();
    checkAutoClickerButton();
    checkDonutMultiplierButton();
})
function checkDonutMultiplierButton() {
    if (donutMaker.donutCount >= donutMaker.donutMultiplierCost) {
        donutMultiplier.disabled = false;
    } else {
        donutMultiplier.disabled = true;
    }
}

