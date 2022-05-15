
// Color palette arrays
const twoColPalettes = [
    ["#02343F", "#F0EDCC", "#222222", "#222222", "#222222"],
    ["#331B3F", "#ACC7B4", "#222222", "#222222", "#222222"],
    ["#1E4174", "#DDA94B", "#222222", "#222222", "#222222"]
]

const threeColPalettes = [
    ["#FFF1BC", "#7DC383", "#699C78", "white", "white"],
    ["#586FDD", "#7CA2CC", "#F0F0F0", "white", "white"],
    [" #FEF2C5", "#C38A8B", "#B0747B", "white", "white"]
]

const fourColPalettes = [
    ["#222831", "#393E46", "#00ADB5", "#EEEEEE", "white"],
    ["F9F7F7", "#DBE2EF", "#3F72AF", "#112D4E", "white"],
    ["#07689F", "#A2D5F2", "#FAFAFA", "#FF7E67", "white"]
]

const fiveColPalettes = [
    ["#012C4B", "#005395", "#C711A4", "#8A3D7B", "#5D0247"],
    ["#1A2A5A", "#6D83B8", "#8EA1CA", "#D1D562", "#689240"],
    ["#809a41", "#a30001", "#fe4c4a", "#40130d", "#6c6f74"]
]

const palettesArray = [twoColPalettes, threeColPalettes, fourColPalettes, fiveColPalettes]

// show number of selected palettes
let count = 0;

let paletteCount = document.createElement("p");
paletteCount.innerText = count;

const addCount = () => {
    count += 1;
    paletteCount.innerText = count;
}

// for displaying the liked palettes
let favPalettesDiv = document.createElement("div");
favPalettesDiv.id = "fav-palettes-div";

let colSelect = document.createElement("div"); // For like, dislike and displaying colour palettes
colSelect.id = "col-select";

// buttons
let likeBtn = document.createElement("button");
likeBtn.id = "like-btn";
likeBtn.innerText = "Like";
likeBtn.addEventListener('click', likePalette);
let dislikeBtn = document.createElement("button");
dislikeBtn.id = "dislike-btn";
dislikeBtn.innerText = "Dislike";
dislikeBtn.addEventListener('click', dislikePalette);
let finishDiv = document.createElement("div"); // To make centering of the button easier
finishDiv.id = "finish-div";
let finishBtn = document.createElement("button");
finishBtn.innerText = "Done";
finishBtn.id = "finish-btn";

// number of colours
let colNumber = document.createElement("div");
colNumber.id = "col-number";
let colInt = 2; // default is two colours
let selectedColInfo = document.createElement("p");
let colInfo = document.createElement("h2");
selectedColInfo.innerText = `Showing palette with ${colInt} colours`;

let twoBtn = document.createElement("button");
twoBtn.addEventListener('click', function(){selectNumber(0)});
twoBtn.innerText = "Two colours"

let threeBtn = document.createElement("button");
threeBtn.addEventListener('click', function(){selectNumber(1)});
threeBtn.innerText = "Three colours"

let fourBtn = document.createElement("button");
fourBtn.addEventListener('click', function(){selectNumber(2)});
fourBtn.innerText = "Four colours"

let fiveBtn = document.createElement("button");
fiveBtn.addEventListener('click', function(){selectNumber(3)});
fiveBtn.innerText = "Five colours"


const updateColInt = (newInt) => {
    colInt = newInt + 2;
    selectedColInfo.innerText = `Showing palette with ${colInt} colours`;
};


colSelect.appendChild(dislikeBtn);
colSelect.appendChild(likeBtn);


// display palettes

// function to create table cells with blank space and white background
function tableCell(table) {
    this.row = document.createElement("tr");
    this.cell = document.createElement("td");
    this.span = document.createElement("span");
    this.span.className = "cell_colour";
    this.span.innerHTML = "&nbsp";
    this.cell.className = "table_cell";
    this.cell.innerHTML = "&nbsp";
    this.cell.style.backgroundColor = "#222222";
    this.cell.appendChild(this.span);
    this.row.appendChild(this.cell);
    this.cell.addEventListener('mouseover', function() {
        if (this.style.backgroundColor != "rgb(34, 34, 34)")
            this.innerHTML = this.style.backgroundColor;
    });
    this.cell.addEventListener('mouseout', function() {
        this.innerHTML = "&nbsp";
    });
    table.appendChild(this.row)
    colSelect.appendChild(table);

}

// function to make table with colored rows
function newTable(colArray) {
    this.table = document.createElement("table");
    this.table.id = "col-table";
    let rowList = [];
    for (let i = 0; i < colArray.length; i++){
        rowList.push(new tableCell(this.table));
        rowList[i].cell.style.backgroundColor = colArray[i];
    }
}

function favTableCell(table) {
    this.row = document.createElement("tr");
    this.cell = document.createElement("td");
    this.cell.innerHTML = "&nbsp";
    this.cell.style.backgroundColor = "#222222";
    this.row.appendChild(this.cell);
    table.appendChild(this.row)
    favPalettesDiv.appendChild(table);
}


function saveFavPalettes(colArray) {
    this.favPalettes = document.createElement("table");
    this.favPalettes.className = "fav-col-table";
    let rowList = [];
    for (let i = 0; i < colArray.length; i++){
        rowList.push(new favTableCell(this.favPalettes));
        rowList[i].cell.style.backgroundColor = colArray[i];
    }
}

let n = Math.floor(Math.random() * 3)
let paletteTable = new newTable(twoColPalettes[n]);

function likePalette() {
    this.table = document.getElementById("col-table");
    this.table.remove();
    addCount();
    let favPaletteTable = new saveFavPalettes(twoColPalettes[n]);
    n = Math.floor(Math.random() * 3)
    paletteTable = new newTable(twoColPalettes[n]);
}

function dislikePalette() {
    this.table = document.getElementById("col-table");
    this.table.remove();
    n = Math.floor(Math.random() * 3)
    paletteTable = new newTable(twoColPalettes[n]);
}

let selectedNumber = 2;

// function for selected number of colours in palette
function selectNumber(inputNum) {
    selectedNumber = inputNum;
    updateColInt(selectedNumber);
    paletteChoice = palettesArray[selectedNumber];
    return paletteChoice;
}



document.body.appendChild(colSelect);
document.body.appendChild(selectedColInfo);

colNumber.appendChild(twoBtn);
colNumber.appendChild(threeBtn);
colNumber.appendChild(fourBtn);
colNumber.appendChild(fiveBtn);
document.body.appendChild(colNumber);

document.body.appendChild(paletteCount);
finishDiv.appendChild(finishBtn);
document.body.appendChild(finishDiv);
document.body.appendChild(favPalettesDiv);



