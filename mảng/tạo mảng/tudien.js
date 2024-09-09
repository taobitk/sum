let arr_eng = ["banana", "apple", "orange", "pen", "pencil", "book"];
let arr_vie = ["chuối", "táo", "cam", "bút", "bút chì", "sách"];
function danhnhau() {
    let string = document.getElementById('text').value;
    let found = false; // Biến để theo dõi xem từ đã được tìm thấy hay chưa

    for (let i = 0; i < arr_eng.length; i++) { // Sửa điều kiện vòng lặp
        if (arr_eng[i] === string) {
            a = arr_vie[i]; 
            document.getElementById('res').innerHTML = a;
            found = true; // Đánh dấu là đã tìm thấy
            break; // Thoát khỏi vòng lặp khi tìm thấy
        }
    }

    // Nếu không tìm thấy từ sau khi duyệt hết mảng
    if (!found) {
        document.getElementById('res').innerHTML = 'chưa cập nhập';
    }
}