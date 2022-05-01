
// select colour palettes
// like or dislike

// show number of selected palettes
let count = 0;

let paletteCount = document.createElement("p");
paletteCount.id = "palette-count";
paletteCount.innerText = count;

const addCount = () => {
    count += 1;
    console.log(count);
    paletteCount.innerText = count;
}


// buttons
let likeBtn = document.createElement("button");
likeBtn.innerText = "Like";
likeBtn.addEventListener('click', addCount);
let dislikeBtn = document.createElement("button");
dislikeBtn.innerText = "Dislike";
let finishBtn = document.createElement("button");
finishBtn.innerText = "Done";


// display palettes

let paletteTable = document.createElement("table");
let tableRow1 = document.createElement("tr");
let tableCell1 = document.createElement("td");
let tableRow2 = document.createElement("tr");
let tableCell2 = document.createElement("td");
let tableRow3 = document.createElement("tr");
let tableCell3 = document.createElement("td");
let tableRow4 = document.createElement("tr");
let tableCell4 = document.createElement("td");
let tableRow5 = document.createElement("tr");
let tableCell5 = document.createElement("td");

let pal1 = document.createElement("p");
pal1.innerText = "x";
pal1.style.backgroundColor = "red";
let pal2 = document.createElement("p");
pal2.innerText = "x";
pal2.style.backgroundColor = "blue";

tableCell1.innerHTML = "&nbsp";
tableCell2.innerHTML = "&nbsp";
tableCell3.innerHTML = "&nbsp";
tableCell4.innerHTML = "&nbsp";
tableCell5.innerHTML = "&nbsp";

tableCell1.style.backgroundColor = "red";
tableCell2.style.backgroundColor = "blue";
tableCell3.style.backgroundColor = "white";
tableCell4.style.backgroundColor = "white";
tableCell5.style.backgroundColor = "white";


tableRow1.appendChild(tableCell1);
tableRow2.appendChild(tableCell2);
tableRow3.appendChild(tableCell3);
tableRow4.appendChild(tableCell4);
tableRow5.appendChild(tableCell5);

document.body.appendChild(tableRow1);
document.body.appendChild(tableRow2);
document.body.appendChild(tableRow3);
document.body.appendChild(tableRow4);
document.body.appendChild(tableRow5);


document.body.appendChild(dislikeBtn);
document.body.appendChild(likeBtn);
document.body.appendChild(paletteCount);
document.body.appendChild(finishBtn);



// You have added X amount of palettes
