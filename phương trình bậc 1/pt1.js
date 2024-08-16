function pt1(){
    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;
    if (a == 0){
        document.getElementById("kq").innerHTML = 'phương trình vô nghiệm';
    }else {
        document.getElementById("kq").innerHTML = 'kết quả = '+ -b/a;
    }
}