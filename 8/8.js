var a = document.querySelector(".interface").cloneNode(true);
const add = () => {
 var g = a.cloneNode(true);
    b = document.querySelector("#extra");
    b.appendChild(g);
    g.querySelector('#input1').value="";
    g.querySelector('#input2').value="";
  };

const save = () => {
    gg = [];
    for (var i = 0; i < document.querySelectorAll("#input1").length; i++) {gg.push(document.querySelectorAll("#input1")[i].value + ":" + document.querySelectorAll("#input2")[i].value);}  
    document.querySelector("#out").innerHTML = '{' + JSON.stringify(gg).slice(1, JSON.stringify(gg).length - 1) +'}';};

const up = (gg) => {if (gg.parentElement.previousElementSibling) gg.parentElement.after(gg.parentElement.previousElementSibling);};
const down = (gg) => {if (gg.parentElement.nextElementSibling) gg.parentElement.before(gg.parentElement.nextElementSibling);};
const remove = (arg) => {arg.parentElement.remove()};
