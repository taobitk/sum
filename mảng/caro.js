const arr = [];
let isX = true;
for (let i = 0; i < 5; i++) {
    arr[i] = []
    for (let j = 0; j < 5; j++) {
        arr[i][j] = "";
    }
}

let board = "<table>"
for (let i = 0; i < 5; i++) {
    board += "<tr>"
    for (let j = 0; j < 5; j++) {
        board += `<td onclick="changeValue(${i},${j})">${arr[i][j]}</td>`
    }
    board += "</tr>"
}
board += '</table>'
document.write(board);

function changeValue(i,j){
    if ( arr[i][j] === ""){
        if (isX){
            arr[i][j] = "X";
            isX = false;
        }   } else {
        arr[i][j] = "O";
        isX = true

    }
}