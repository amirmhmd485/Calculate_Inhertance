const select = document.querySelector("select");
const inputSons = document.querySelector("[ name = 'numsofsons']");
const inputDaughters = document.querySelector("[ name = 'numsofdaughters']");
const MoneyOfFather = document.getElementById("father");
const btn = document.querySelector("button");
const dMom = document.querySelector("#d1");
const ddaughter = document.querySelector("#d2");
const dSon = document.querySelector("#d3");

btn.addEventListener("click" , function(){
    let sons = Number(inputSons.value);
    let daughters = Number(inputDaughters.value);
    let fatherMoney = Number(MoneyOfFather.value);
    let partMom, partSon , partDaughter;
    if(select.value === "true"){
        partMom = fatherMoney / 8;
        fatherMoney -= partMom;
        partDaughter = fatherMoney / (2 * sons + daughters);
        partSon = (partDaughter * 2);
        dMom.innerHTML = partMom.toFixed(2);
        dSon.innerHTML = partSon.toFixed(2);
        ddaughter.innerHTML = partDaughter.toFixed(2);
    }
    else{
        partMom = fatherMoney * 0;
        partDaughter = fatherMoney / (2 * sons + daughters);
        partSon = partDaughter * 2;
        dMom.innerHTML = partMom;
        dSon.innerHTML = partSon.toFixed(2);
        ddaughter.innerHTML = partDaughter.toFixed(2);
    }
    setSession();
});

let allinputs = document.querySelectorAll("input");
let allSpan = document.querySelectorAll("span");
function setSession (){
    window.sessionStorage.setItem(select.name , select.value);
    select.value = "";
    allinputs.forEach(function(inp){
        window.sessionStorage.setItem(inp.name , inp.value);
        inp.value = "";
    });
    allSpan.forEach(function(e){
        window.sessionStorage.setItem(e.id , e.innerHTML);
    });
}
window.addEventListener("load" , function(){
    select.value = this.window.sessionStorage.getItem(select.name);
    allinputs.forEach(function(inp){
        inp.value = window.sessionStorage.getItem(inp.name);
    });
    allSpan.forEach(function(ele){
        ele.innerHTML = window.sessionStorage.getItem(ele.id);
    });
});
allinputs.forEach(function(e){
    e.addEventListener("keydown" , function(el){
        let elRgPattern = /\d+/ig;
        let isvalidate = elRgPattern.test(el.key);
        if(isvalidate === true ||el.key === "Backspace" || el.key === "ArrowLeft" || el.key === "ArrowRight" || el.key === "Tab" || el.key === "Shift" ){
            return el.key;
        }
        else{
            el.preventDefault();
        }
    });
});