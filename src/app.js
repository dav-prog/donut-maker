import { DonutMaker } from "/src/js/DonutMaker.js";

const donutMaker = new DonutMaker();

const updateDonutCount = function () {
    const donuts = document.querySelector('.donut_count');
    donuts.innerText = Math.round(donutMaker.donutCount * 100) / 100;
    checkAutoClickerButton();
    checkDonutMultiplierButton();
}
//click button
const clicks = document.querySelector('.add__donut');

clicks.addEventListener('click', () => {
    updateClickButtonDisplay();
    donutMaker.recordClick();
    updateDonutCount();
   
})
function updateClickButtonDisplay() {
    clicks.innerText = `Click for ${Math.round(multiplierValue() * 100) / 100} Donuts!`;
}

//autoclickers
const updateAutoClickerCount = function () {
    const autoClickerCount = document.querySelector('.auto_clicker_count');
    autoClickerCount.innerText = donutMaker.autoClickerCount;
}

const autoClickers = document.querySelector('.purchase__auto_clickers');
autoClickers.addEventListener('click', () => {
    autoClickers.innerText = `Purchase Auto Clickers for ${Math.round(donutMaker.autoClickerCost * 100)/100} Donuts!`
    donutMaker.addAutoClicker();
    updateAutoClickerCount();
    updateDonutCount();
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
    updateClickButtonDisplay();
})
function checkDonutMultiplierButton() {
    if (donutMaker.donutCount >= donutMaker.donutMultiplierCost) {
        donutMultiplier.disabled = false;
    } else {
        donutMultiplier.disabled = true;
    }
}
function multiplierValue() {
    return Math.pow(1.2, donutMaker.donutMultiplier);
}

