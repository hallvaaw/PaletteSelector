
// show number of selected palettes
let count = 0;

let paletteCount = document.createElement("p");
paletteCount.innerText = count;

const addCount = () => {
    count += 1;
    paletteCount.innerText = count;
}


let colSelect = document.createElement("div"); // For like, dislike and displaying colour palettes
colSelect.id = "col-select";

// buttons
let likeBtn = document.createElement("button");
likeBtn.id = "like-btn";
console.log(likeBtn.id);
likeBtn.innerText = "Like";
likeBtn.addEventListener('click', addCount);
let dislikeBtn = document.createElement("button");
dislikeBtn.id = "dislike-btn";
dislikeBtn.innerText = "Dislike";
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


colSelect.appendChild(dislikeBtn);
colSelect.appendChild(likeBtn);
// display palettes

// function to create table cells with blank space and white background
function tableCell(table) {
    this.row = document.createElement("tr");
    this.cell = document.createElement("td");
    this.cell.innerHTML = "&nbsp";
    this.cell.style.backgroundColor = "#222222";
    this.row.appendChild(this.cell);
    table.appendChild(this.row)
    colSelect.appendChild(table);

}

// function to make table with colored rows
function newTable(colArray) {
    this.table = document.createElement("table");
    let rowList = [];
    for (let i = 0; i < colArray.length; i++){
        rowList.push(new tableCell(this.table));
        rowList[i].cell.style.backgroundColor = colArray[i];
    }
}

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



let n = Math.floor(Math.random() * 3)
let paletteTable = new newTable(twoColPalettes[n]);




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



