function pt1(){
    let a = parseInt(document.getElementById("a").value) ;
    let b = parseInt( document.getElementById("b").value);
    
    if (a === 0){
        if (b === 0){
            document.getElementById("kq").innerHTML = 'phương trình vô số nghiệm';
        }else {
            document.getElementById("kq").innerHTML = 'phương trình vô nghiệm';
        }
    }else {
        document.getElementById("kq").innerHTML = 'kết quả = '+ -b/a;
    }
}