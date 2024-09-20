let dis = '';

function a(){
    alert(dis)
}
function nub0(){
    dis += '0';
    document.getElementById('disp').value = dis;
}
function nub1(){
    dis += '1';
    document.getElementById('disp').value = dis;
}

function nub2(){
    dis += '2';
    document.getElementById('disp').value = dis;
}
function nub3(){
    dis += '3';
    document.getElementById('disp').value = dis;
}
function nub4(){
    dis += '4';
    document.getElementById('disp').value = dis;
}
function nub5(){
    dis += '5';
    document.getElementById('disp').value = dis;
}
function nub6(){
    dis += '6';
    document.getElementById('disp').value = dis;
}
function nub7(){
    dis += '7';
    document.getElementById('disp').value = dis;
}
function nub8(){
    dis += '8';
    document.getElementById('disp').value = dis;
}
function nub9(){
    dis += '9';
    document.getElementById('disp').value = dis;
}
function ac(){
    dis ='';
    document.getElementById('disp').value = dis;
}
function cong(){
    dis +='+';
    document.getElementById('disp').value = dis;
}
function tru(){
    dis +='-';
    document.getElementById('disp').value = dis;
}
function nhan(){
    dis +='*';
    document.getElementById('disp').value = dis;
}
function chia(){
    dis +='/';
    document.getElementById('disp').value = dis;
}
function bang(){
    dis = eval(dis);
    document.getElementById('disp').value = dis;
}