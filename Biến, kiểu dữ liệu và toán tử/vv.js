function a1(){
    let nuba = parseInt( document.getElementById('nubA').value);
    let nubb = parseInt( document.getElementById('nubB').value);
    let nubc = document.getElementById('nubC').value*1;
    document.getElementById('nubD').innerHTML = 'trung bình cộng: '+(nuba+nubb+nubc)/3;
}
function b1(){
    let doC = parseInt( document.getElementById('do_c').value);
    document.getElementById('do_f').innerHTML = 'độ F: '+ doC*9/5+32;
}
function b2(){
    let bk = parseInt( document.getElementById('bk').value);
    document.getElementById('dientich').innerHTML = 'diện tích: '+ 3.14*(bk^2);
}
function b3(){
    let bk = parseInt( document.getElementById('bk2').value);
    document.getElementById('chuvi').innerHTML = 'chu vi: '+ 3.14*(bk^2);
}