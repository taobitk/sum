let ds = ['sony Xperia', 'samsung gala a',
                'nokia 6', 'mifxao note 4', 'itaos 6s',
                    'mi 5s plus', 'itao 8 plus']
let ht;

function htdspp() {
    ht = '';
    for (let i = 0; i < ds.length; i++) {
        if (i%2 === 0){
            ht += '   <table style="background: rgb(242, 242, 242)">\n'
        }else{
            ht += '   <table style="background: rgb(255, 255, 255)">\n'
        }
        ht += '        <tr>';
        ht += '        <td>' + ds[i] + '</td>';
        ht += '        <td>' + '</td>';
        ht += ' <td colspan="2"><button type="button" name="edit" onclick="edit('+i+')" >edit </button></td>\n' +
            '            <td><button type="button" name="del" onclick="del('+i+')" >delete </button></td>';

    ht += ' </tr>\n' +
        '    </table>\n' +
        '</div>'
}
document.getElementById('dsp').innerHTML = ht;

}

function addsp(newsp){
    newsp = document.getElementById("product").value;
    if (newsp === ''){}
    else {
        ds.push(newsp);
        htdspp();
    }

}
function edit(ied) {
    let edt = prompt('Nhập sản phẩm mới để thay thế:', ds[ied]);  // Hiển thị sản phẩm hiện tại trong prompt
    if (edt !== null && edt.trim() !== "") {  // Kiểm tra nếu người dùng nhập giá trị hợp lệ
        ds.splice(ied, 1, edt);  // Thay thế sản phẩm tại vị trí 'ied' bằng giá trị mới

        htdspp();  // Cập nhật danh sách sản phẩm hiển thị
    }
}

function del(ide) {
    const confirmation = confirm("bạn có chắc chắn là bạn muốn xóa sản phẩm này ko?");
    if (confirmation) {
        ds.splice(ide, 1);  // Xóa sản phẩm khỏi mảng
        htdspp();
    }
}
window.onload = function(){
    htdspp();
}
