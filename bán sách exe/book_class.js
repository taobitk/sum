class Book_class{
    price;
    bookName;
    id;
    inventory;
    publisher;
    describe;
    constructor(price,bookName,id,inventory,publisher,describe ){
     this.bookName = bookName;
     this.id = id;
     this.price = price;
     this.inventory = inventory;
     this.publisher = publisher;
     this.describe = describe;
    }
}
let ds = [];
ds.push(new Book_class(999, 'doraemon', '13B', '99', 'kim đồng', 'siêu nhiên'));
ds.push(new Book_class(999, 'doraemon', '13B', '99', 'kim đồng', 'siêu nhiên'));
ds.push(new Book_class(500, 'conan', '12A', '50', 'nhân dân', 'trinh thám'));
ds.push(new Book_class(300, 'harry potter', '01A', '200', 'trẻ', 'phiêu lưu'));
ds.push(new Book_class(450, 'lord of the rings', '02B', '150', 'kim đồng', 'huyền ảo'));
ds.push(new Book_class(250, 'alice in wonderland', '03C', '100', 'trẻ', 'cổ tích'));
ds.push(new Book_class(600, 'the hunger games', '04D', '180', 'first news', 'viễn tưởng'));
ds.push(new Book_class(350, 'pride and prejudice', '05E', '120', 'kim đồng', 'lãng mạn'));
ds.push(new Book_class(400, 'the little prince', '06F', '130', 'trẻ', 'triết lý'));
ds.push(new Book_class(550, 'to kill a mockingbird', '07G', '160', 'nhân dân', 'xã hội'));
ds.push(new Book_class(200, 'the alchemist', '08H', '90', 'trẻ', 'tự truyện'));
function display(){
    let h = '';
    h += "<table style='width: 1000px;margin: 0 auto;border: 1px solid black;'>";
    h += '<tr>'+
        '<td style="width: 30px"></td>'+
        '<td>'+'id'+'</td>'+
        '<td>'+'bookName'+'</td>'+
        '<td>'+'price'+'</td>'+
        '<td>'+'inventory'+'</td>'+
        '<td>'+'publisher'+'</td>'+
        '<td>'+'describe'+'</td>'+
        '<td></td>'+'<td></td>'+
        '</tr>'+ "</table>";
    for (let i = 0; i < ds.length; i++)
    {
        h += "<table style='width: 1000px;margin: 0 auto;border: 1px solid black;'>";
        h += '<tr>'+
            '<td style="width: 30px"></td>'+
            `<td> ${ds[i].id}</td>`+
            `<td>${ds[i].bookName}</td>`+
            `<td>${ds[i].price}</td>`+
            `<td>${ds[i].inventory}</td>`+
            `<td>${ds[i].publisher}</td>`+
            `<td>${ds[i].describe}</td>`+
            `<td><button type='button' onClick='delBook(${i})'>delete</button></td>`+
            `<td><button type='button' onClick='editBook(${i})'>edit</button></td>`+
            '</tr>'+
            "</table>";
    }

document.getElementById('view').innerHTML = h;
}

function delBook(a){
    let areYouSure = confirm(`bạn có chắc chắn muốn xóa sách có ID là: ${ds[a].id} `)
    if (areYouSure){
        ds.splice(a, 1);
        display();
    }
}

function findById(){
    let find = document.getElementById("findById").value;
    let h = '';
    h += "<table style='width: 1000px;margin: 0 auto;border: 1px solid black;'>";
    h += '<tr>'+
        '<td>'+'id'+'</td>'+
        '<td>'+'bookName'+'</td>'+
        '<td>'+'price'+'</td>'+
        '<td>'+'inventory'+'</td>'+
        '<td>'+'publisher'+'</td>'+
        '<td>'+'describe'+'</td>'+
        '<td></td>'+'<td></td>'+
        '</tr>'+ "</table>";
    for (let i = 0; i < ds.length; i++){
        if (ds[i].id === find){
            h += "<table style='width: 1000px;margin: 0 auto;border: 1px solid black;'>"
            + '<tr>'
            + `<td>${ds[i].id}</td>`
            + `<td>${ds[i].bookName}</td>`
            + `<td>${ds[i].price}</td>`
            + `<td>${ds[i].inventory}</td>`
            + `<td>${ds[i].publisher}</td>`
            + `<td>${ds[i].describe}</td>`
            +  `<td><button type='button' onClick='delBook(${i})'>delete</button></td>`
            + `<td><button type='button' onClick='editBook(${i})'>edit</button></td>`
            + '</tr>'
            + "</table>";
            break;
        }

    }
    document.getElementById('view').innerHTML = h;
    document.getElementById("findById").value = '';
}

function finByName(){
    let find = document.getElementById("findByName").value;
    let h = '';
    h += "<table style='width: 1000px;margin: 0 auto;border: 1px solid black;'>";
    h += '<tr>'+
        '<td>'+'id'+'</td>'+
        '<td>'+'bookName'+'</td>'+
        '<td>'+'price'+'</td>'+
        '<td>'+'inventory'+'</td>'+
        '<td>'+'publisher'+'</td>'+
        '<td>'+'describe'+'</td>'+
        '<td></td>'+'<td></td>'+
        '</tr>'+ "</table>";
    for (let i = 0; i < ds.length; i++){
        if (ds[i].bookName === find){
            h  += "<table style='width: 1000px;margin: 0 auto;border: 1px solid black;'>"
                + '<tr>'
                + `<td>${ds[i].id}</td>`
                + `<td>${ds[i].bookName}</td>`
                + `<td>${ds[i].price}</td>`
                + `<td>${ds[i].inventory}</td>`
                + `<td>${ds[i].publisher}</td>`
                + `<td>${ds[i].describe}</td>`
                +  `<td><button type='button' onClick='delBook(${i})'>delete</button></td>`
                + `<td><button type='button' onClick='editBook(${i})'>edit</button></td>`
                + '</tr>'
                + "</table>";
        }
    }
    document.getElementById("findByName").value = '';
    document.getElementById('view').innerHTML = h;
}

function findByIdName(){
    let findName = document.getElementById("findByName").value;
    let findId = document.getElementById("findById").value;
    let h = '';
    h += "<table style='width: 1000px;margin: 0 auto;border: 1px solid black;'>";
    h += '<tr>'+
        '<td>'+'id'+'</td>'+
        '<td>'+'bookName'+'</td>'+
        '<td>'+'price'+'</td>'+
        '<td>'+'inventory'+'</td>'+
        '<td>'+'publisher'+'</td>'+
        '<td>'+'describe'+'</td>'+
        '<td></td>'+'<td></td>'+
        '</tr>'+ "</table>";
    for (let i = 0; i < ds.length; i++){
        if (ds[i].bookName === findName && ds[i].id === findId ){
            h  += "<table style='width: 1000px;margin: 0 auto;border: 1px solid black;'>"
                + '<tr>'
                + `<td>${ds[i].id}</td>`
                + `<td>${ds[i].bookName}</td>`
                + `<td>${ds[i].price}</td>`
                + `<td>${ds[i].inventory}</td>`
                + `<td>${ds[i].publisher}</td>`
                + `<td>${ds[i].describe}</td>`
                +  `<td><button type='button' onClick='delBook(${i})'>delete</button></td>`
                + `<td><button type='button' onClick='editBook(${i})'>edit</button></td>`
                + '</tr>'
                + "</table>";
        }
    }
    document.getElementById("findByName").value = '';
    document.getElementById("findById").value = '';
    document.getElementById('view').innerHTML = h;

}

function find(){
    let findName = document.getElementById("findByName").value;
    let findId = document.getElementById("findById").value;
    if (findName === ""){
        if (findId === ""){
            alert(' mời bạn nhập thông tin vào ');
        }
        else if (findId !== ''){
            let h = '';
            findById();
        }
    } else{
        if (findId === ""){
            let h = '';
            finByName();
        }
         else if(findId !== ''){
            findByIdName()
        }
    }

}
let editIndex = -1; // Khai báo biến để lưu index của cuốn sách đang được chỉnh sửa
function editBook(a) {
    editIndex = a; // Lưu lại index của sách cần chỉnh sửa
    // Hiển thị thông tin sách trong các input
    document.getElementById("bookName").value = ds[a].bookName;
    document.getElementById("id").value = ds[a].id;
    document.getElementById("price").value = ds[a].price;
    document.getElementById("inventory").value = ds[a].inventory;
    document.getElementById("publisher").value = ds[a].publisher;
    document.getElementById("describe").value = ds[a].describe;
}
function addBook() {
    let price = document.getElementById("price").value;
    let bookName = document.getElementById("bookName").value;
    let id = document.getElementById("id").value;
    let inventory = document.getElementById("inventory").value;
    let publisher = document.getElementById("publisher").value;
    let describe = document.getElementById("describe").value;

    if (editIndex === -1) { // Nếu không phải đang chỉnh sửa
        ds.push(new Book_class(price, bookName, id, inventory, publisher, describe));
    } else {
        ds[editIndex].price = price;
        ds[editIndex].bookName = bookName;
        ds[editIndex].id = id;
        ds[editIndex].bookName = bookName;
        ds[editIndex].inventory = inventory;
        ds[editIndex].publisher = publisher;
        editIndex = -1;
    }

    // Xóa trắng các ô input sau khi thêm hoặc chỉnh sửa
    document.getElementById("price").value = '';
    document.getElementById("bookName").value = '';
    document.getElementById("id").value = '';
    document.getElementById("inventory").value = '';
    document.getElementById("publisher").value = '';
    document.getElementById("describe").value = '';
    display();
}
// hiển thị khi bắt đầu
window.onload = function(){
    display();
}
