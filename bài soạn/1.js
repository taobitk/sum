function kiemTraDiem() {
    let diem = parseFloat(prompt("Nhập điểm của học viên:"));

    if (diem >= 75) {
        alert('qua môn nha e');
    } else {
       alert('ko qua môn nha e');
    }
}

function kiemTraNgayTrongTuan() {
    let soNgay = parseInt(prompt("Nhập số ngày:"));

    switch (soNgay) {
        case 1:
            alert('chủ nhật');
            break;
        case 2:
            alert('thứ 2');
            break;
        case 3:
            alert('thứ 3');
            break;
        case 4:
            alert('thư 4');
            break;
        case 5:
            alert('thú 5');
            break;
        case 6:
            alert('thứ 6');
            break;
        case 7:
            alert('thứ 7');
            break;
        default:
            alert('đây còn ko phải ngày trong tuần')
    }
}


