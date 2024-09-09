 function bai1(){
for (let i=1;i<=100;i++){
    document.write(' '+i+' ');
    if (i==99){
        alert('kết thúc')
        break
    }
}
}
function bai2(){
let a = document.getElementById('nd').value;
if (a>100){
    alert('giảm nhiệt độ');
} else if (a<20){
    alert('tăng nhiệt độ')
}else {
    alert('mọi thứ đều ổn')
}
}
function bai3(){
    let a='';
for (i=0;i<=19;i++){
    for (j=1;j<=20;j++){
        a = i+j;
        document.write(' '+a+' ');
    }
}
}