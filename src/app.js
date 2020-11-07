import { DonutMaker } from "/src/js/DonutMaker.js";

const donutMaker = new DonutMaker();

const updateDonutCount = function(){
    const donuts = document.querySelector('.donut_count');
    donuts.innerText = Math.round(donutMaker.donutCount * 100)/100;
    checkAutoClickerButton();
}
//donut Maker
const clicks = document.querySelector('.add__donut');
clicks.addEventListener('click', ()=> {
    donutMaker.recordClick();
    updateDonutCount();
    
})

//autoclickers
const updateAutoClickerCount = function(){
    const autoClickerCount = document.querySelector('.auto_clicker_count');
    autoClickerCount.innerText = donutMaker.autoClickerCount;
}

const autoClickers = document.querySelector('.purchase__auto_clickers');
autoClickers.addEventListener('click', ()=> {
    donutMaker.addAutoClicker();
    updateAutoClickerCount();
    updateDonutCount();
    checkAutoClickerButton();
})

function checkAutoClickerButton() {
    if (donutMaker.donutCount >= donutMaker.autoClickerCost) {
        autoClickers.disabled = false;
    } else {
        autoClickers.disabled = true;
    }
}



//donut multipliers
const updateMultiplierCount = function() {
    const multiplierCount = document.querySelector('donut_multiplier_count');
    multiplierCount.innerText = donutMaker.donutMultiplier;
}





