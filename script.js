
// show number of selected palettes
let count = 0;

let paletteCount = document.createElement("p");
paletteCount.innerText = count;

const addCount = () => {
    count += 1;
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

// number of colours
let colInt = 2; // default is two colours
let selectedColInfo = document.createElement("p");
let colInfo = document.createElement("h2");
selectedColInfo.innerText = `Showing palette with ${colInt} colours`;

let twoBtn = document.createElement("button");
twoBtn.addEventListener('click', function(){updateColInt(2)});
twoBtn.innerText = "Two colours"

let threeBtn = document.createElement("button");
threeBtn.addEventListener('click', function(){updateColInt(3)});
threeBtn.innerText = "Three colours"

let fourBtn = document.createElement("button");
fourBtn.addEventListener('click', function(){updateColInt(4)});
fourBtn.innerText = "Four colours"

let fiveBtn = document.createElement("button");
fiveBtn.addEventListener('click', function(){updateColInt(5)});
fiveBtn.innerText = "Five colours"


const updateColInt = (newInt) => {
    colInt = newInt;
    selectedColInfo.innerText = `Showing palette with ${colInt} colours`;
};


// display palettes

// function to create table cells with blank space and white background
function tableCell(table) {
    this.row = document.createElement("tr");
    this.cell = document.createElement("td");
    this.cell.innerHTML = "&nbsp";
    this.cell.style.backgroundColor = "white";
    this.row.appendChild(this.cell);
    table.appendChild(this.row)
    document.body.appendChild(table);

}

// function to make table with colored rows
function newTable(color1, color2, color3, color4, color5) {
    this.table = document.createElement("table");
    let rowList = [];
    for (let i = 0; i < arguments.length; i++){
        rowList.push(new tableCell(this.table));
        rowList[i].cell.style.backgroundColor = arguments[i];
    }
}

let paletteTable = new newTable("red", "blue", "white", "white", "white");



document.body.appendChild(twoBtn);
document.body.appendChild(threeBtn);
document.body.appendChild(fourBtn);
document.body.appendChild(fiveBtn);
document.body.appendChild(selectedColInfo);


document.body.appendChild(dislikeBtn);
document.body.appendChild(likeBtn);
document.body.appendChild(paletteCount);
document.body.appendChild(finishBtn);



