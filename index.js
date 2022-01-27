let cells = document.getElementById ("teal_cell_1");
let cells2 = document.getElementById ("navy_cell_1");
let cells3 = document.getElementById ("white_cell_1");
let cells4 = document.getElementById ("purple_cell_1");
let cells5 = document.getElementById ("olive_cell_1");
let cells6 = document.getElementById ("black_cell_2");
let cells7 = document.getElementById ("gray_cell_2");
let titlecell = document.getElementById ("title_cell");
let lastcell = document.getElementById ("last_cell");




titlecell.addEventListener ("click", ()=>{
    titlecell.style.backgroundColor = "transparent";
    titlecell.innerText = "❤";
})
   
lastcell.addEventListener ("click", ()=>{
    lastcell.style.backgroundColor = "transparent";
    lastcell.innerText = "❆❆❆❆❆";
})



cells.addEventListener ("click", ()=>{
    cells.style.backgroundColor = "transparent";
})
cells2.addEventListener ("click", ()=>{
    cells2.style.backgroundColor = "transparent";
})

cells3.addEventListener ("click", ()=>{
    cells3.style.backgroundColor = "transparent";
})

cells4.addEventListener ("click", ()=>{
    cells4.style.backgroundColor = "transparent";
})

cells5.addEventListener ("click", ()=>{
    cells5.style.backgroundColor = "transparent";
})

cells6.addEventListener ("click", ()=>{
    cells6.style.backgroundColor = "transparent";
})

cells7.addEventListener ("click", ()=>{
   cells7.style.backgroundColor = "transparent";
})




let changef1 = document.getElementById("blue_cell_1");
let changef2 = document.getElementById("green_cell_1");
let changef3 = document.getElementById("red_cell_1");
let changef4 = document.getElementById("yellow_cell_1");
let changef5 = document.getElementById("black_cell_1");
let changef6 = document.getElementById("gray_cell_1");
let changef7 = document.getElementById("olive_cell_2");
let changef8 = document.getElementById("fuchsia_cell_1");




let f1 = document.createElement('img'); 
f1.src = '/img/f1.jpg'; 
f1.style.height = '0px';
f1.style.margin = '0px';
document.getElementById('blue_cell_1').appendChild(f1);

let f2 = document.createElement('img'); 
f2.src = '/img/f2.jpg'; 
f2.style.height = '0px';
f2.style.margin = '0px';
document.getElementById('green_cell_1').appendChild(f2);

let f3 = document.createElement("img"); 
f3.src = "/img/f3.jpg"; 
f3.style.height = '0px';
f3.style.margin = '0px';
document.getElementById("red_cell_1").appendChild(f3);

let f4 = document.createElement('img'); 
f4.src = '/img/f4.jpg'; 
f4.style.height = '0px';
f4.style.margin = '0px';
document.getElementById('yellow_cell_1').appendChild(f4);

let f5 = document.createElement('img'); 
f5.src = '/img/f5.jpg'; 
f5.style.height = '0px';
f5.style.margin = '0px';
document.getElementById('black_cell_1').appendChild(f5);

let f6 = document.createElement('img'); 
f6.src = '/img/f6.jpg'; 
f6.style.height = '0px';
f6.style.margin = '0px';
document.getElementById('gray_cell_1').appendChild(f6);

let f7 = document.createElement('img'); 
f7.src = '/img/f7.jpg'; 
f7.style.height = '0px';
f7.style.margin = '0px';
document.getElementById('olive_cell_2').appendChild(f7);

let f8 = document.createElement('img'); 
f8.src = '/img/f8.jpg'; 
f8.style.height = '0px';
f8.style.margin = '0px';
document.getElementById('fuchsia_cell_1').appendChild(f8);




changef1.addEventListener ("click", ()=>{
    if(f1.style.height = "0px"){
        changef1.style.backgroundColor = "transparent";
        changef1.style.fontSize = "0px";
        f1.style.height = "75px";
        f1.style.width = "147px";
    }
    else{
        changef1.style.backgroundColor = "transparent";
        f1.style.height = "0px";
        f1.style.width = "0px";
    }
})

changef2.addEventListener ("click", ()=>{
    if(f2.style.height = "0px"){
        changef2.style.backgroundColor = "transparent";
        changef2.style.fontSize = "0px";
        f2.style.height = "75px";
        f2.style.width = "147px";
    }
    else{
        changef2.style.backgroundColor = "transparent";
        f2.style.height = "0px";
    }
})

changef3.addEventListener ("click", ()=>{
    if(f3.style.height = "0px"){
        changef3.style.backgroundColor = "transparent";
        changef3.style.fontSize = "0px";
        f3.style.height = "75px";
        f3.style.width = "147px";
    }
    else{
        changef3.style.backgroundColor = "transparent";
        f3.style.height = "0px";
    }
})

changef4.addEventListener ("click", ()=>{
    if(f4.style.height = "0px"){
        changef4.style.backgroundColor = "transparent";
        changef4.style.fontSize = "0px";
        f4.style.height = "75px";
        f4.style.width = "147px";
    }
    else{
        changef4.style.backgroundColor = "transparent";
        f4.style.height = "0px";
    }
})

changef5.addEventListener ("click", ()=>{
    if(f5.style.height = "0px"){
        changef5.style.backgroundColor = "transparent";
        changef5.style.fontSize = "0px";
        f5.style.height = "75px";
        f5.style.width = "147px";
    }
    else{
        changef5.style.backgroundColor = "transparent";
        f5.style.height = "0px";
    }
})

changef6.addEventListener ("click", ()=>{
    if(f6.style.height = "0px"){
        changef6.style.backgroundColor = "transparent";
        changef6.style.fontSize = "0px";
        f6.style.height = "75px";
        f6.style.width = "147px";
    }
    else{
        changef6.style.backgroundColor = "transparent";
        f6.style.height = "0px";
    }
})

changef7.addEventListener ("click", ()=>{
    if(f7.style.height = "0px"){
        changef7.style.backgroundColor = "transparent";
        changef7.style.fontSize = "0px";
        f7.style.height = "75px";
        f7.style.width = "147px";
    }
    else{
        changef7.style.backgroundColor = "transparent";
        f7.style.height = "0px";
    }
})

changef8.addEventListener ("click", ()=>{
    if(f8.style.height = "0px"){
        changef8.style.backgroundColor = "transparent";
        changef8.style.fontSize = "0px";
        f8.style.height = "75px";
        f8.style.width = "147px";
    }
    else{
        changef8.style.backgroundColor = "transparent";
        f8.style.height = "0px";
    }
})




let content = document.getElementById("more_colors");
content.style.display = "none";
let button = document.getElementById("Show_more");


button.addEventListener ("click", ()=>{
    if(content.style.display === "none"){
        content.style.display = "block";
        button.innerHTML = "SHOW LESS";
    }
    else{
        content.style.display = "none";
        button.innerHTML = "SHOW MORE";
    }
})



function renderList() {
    addList();
    addColors ();
}

function addColors(){
    let colorsListElement = document.getElementById("colors")
}

colors.forEach(function(color, index) {
    setTimeout (() =>{
        colorsListElement.innerHTMK += <li>${color}</li>
        })
})