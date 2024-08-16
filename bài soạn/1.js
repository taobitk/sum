function kiemTraDiem() {
    let diem = parseFloat(prompt("Nhập điểm của học viên:"));

    if (diem >= 75) {
        alert('qua môn nha e');
    } else {
       alert('ko qua môn nha e');
    }
}

function kiemTraNgayTrongTuan() {
    let soNgay = parseInt(prompt("Nhập một số:"));

    if (soNgay == 1) {
       alert('chủ nhật')
    } else if (soNgay == 2) {
        alert('thứ 2')
    } else if (soNgay == 3) {
        alert('thứ 3')
    } else if (soNgay == 4) {
        alert('thứ 4')
    } else if (soNgay == 5) {
        alert('thứ 5')
    } else if (soNgay == 6) {
        alert('thứ 6')
    } else if (soNgay == 7) {
        alert('thứ 7')
    } else {
        alert('đây còn ko phải ngày trong tuần')
    }
}


