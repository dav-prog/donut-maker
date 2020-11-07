import { DonutMaker } from "/src/js/DonutMaker.js";

const donutMaker = new DonutMaker();

const updateDonutCount = function(){
    const donuts = document.querySelector('.donut_count');
    donuts.innerText = donutMaker.donutCount;
}

const clicks = document.querySelector('.add__donut');
clicks.addEventListener('click', ()=> {
    donutMaker.recordClick();
    updateDonutCount();
})



