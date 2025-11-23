const select = document.querySelector("select");
const inputSons = document.querySelector("[ name = 'numsofsons']");
const inputDaughters = document.querySelector("[ name = 'numsofdaughters']");
const MoneyOfFather = document.getElementById("father");
const btn = document.querySelector("button");
const sMom = document.querySelector("#p1 span");
const sdaughter = document.querySelector("#p2 span");
const sSon = document.querySelector("#p3 span");

btn.addEventListener("click" , function(){
    let sons = Number(inputSons.value);
    let daughters = Number(inputDaughters.value);
    let fatherMoney = Number(MoneyOfFather.value);
    let partMom, partSon , partDaughter;
    if(select.value === "true"){
        partMom = fatherMoney / 8;
        fatherMoney -=partMom;        
        partDaughter = fatherMoney / ((2 * sons) + daughters);
        sMom.innerHTML = partMom.toFixed(2);
        sdaughter.innerHTML =  partDaughter.toFixed(2);
        sSon.innerHTML = (partDaughter * 2).toFixed(2);
    }
    else{
        partDaughter = fatherMoney / ((2 * sons) + daughters);
        sMom.innerHTML = fatherMoney * 0;
        sdaughter.innerHTML =  partDaughter.toFixed(2);
        sSon.innerHTML = (partDaughter * 2).toFixed(2);
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
        if(el.key === "Backspace" || el.key === "ArrowLeft" || el.key === "ArrowRight" || el.key === "Tab" || el.key === "Shift" || !isNaN(el.key)){
            return el;
        }
        else{
            el.preventDefault();
        }
    });
});