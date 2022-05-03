
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

let paletteTable2 = new newTable("red", "blue", "white", "white", "white");


document.body.appendChild(dislikeBtn);
document.body.appendChild(likeBtn);
document.body.appendChild(paletteCount);
document.body.appendChild(finishBtn);



