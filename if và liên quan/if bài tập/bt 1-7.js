function bai1(){
    let a =+document.getElementById('n1').value;
    let b =+document.getElementById('n12').value;
    if (a%b==0){document.getElementById('kq1').innerHTML ='chia hết';}
    else{document.getElementById('kq1').innerHTML =' ko chia hết';}}

function bai2(){
    let a = parseInt( document.getElementById('n2').value);
    if (a > 15){document.getElementById('kq2').innerHTML =' đủ tuổi';}
    else if(a<15&&a>0) {document.getElementById('kq2').innerHTML =' ko đủ tuổi';}
    else {document.getElementById('kq2').innerHTML ='ko hợp lệ';}}

function bai3(){
    let a = parseInt( document.getElementById('n3').value);
    if (a>0){document.getElementById('kq3').innerHTML =' lớn hơn 0';}
    else if (a===0){document.getElementById('kq3').innerHTML =' bằng 0';}
    else {document.getElementById('kq3').innerHTML =' nhỏ hơn 0';}}

function bai4(){
    let a1 = parseInt( document.getElementById('n4').value);
    let b1 = parseInt( document.getElementById('n42').value);
    let c1 = parseInt( document.getElementById('n43').value);
if      (a1>b1&&a1>c1) {document.getElementById('kq4').innerHTML ='a max';}
else if (b1>c1&&b1>a1) {document.getElementById('kq4').innerHTML ='b max';}
else if (c1>a1&&c1>b1)  {document.getElementById('kq4').innerHTML ='c max';}
else  { {document.getElementById('kq4').innerHTML ='a b c bằng nhau';}}}

function bai5(){
    let a5 = parseInt( document.getElementById('n5').value);
    let b5 = parseInt( document.getElementById('n52').value);
    let c5 = parseInt( document.getElementById('n53').value);
    if (a5<0 || b5 < 0 || c5<0 || a5 <= 10 || b5 <= 10 ||c5 <= 10){
        if (((a5*1+b5*2+c5*3)/3)>5){document.getElementById('kq5').innerHTML ='pass';}
        else {document.getElementById('kq5').innerHTML ='you is a loser';}}
        else {document.getElementById('kq5').innerHTML ='check your number again';}}

function bai6(){
    let a6 = parseInt( document.getElementById('n6').value);
    if (a6>300){document.getElementById('kq6').innerHTML ='đủ chỉ tiêu';}
    else if (a6 <0){document.getElementById('kq6').innerHTML= 'm đùa t à'}
    else if (a6 <300){document.getElementById('kq6').innerHTML= 'tháng này ko có thưởng nha e'}
    else {document.getElementById('kq6').innerHTML = 'ko hợp lệ'}}

function bai7(){
    document.getElementById('kq7').innerHTML = 'yêu cầu ko hợp lệ';
}