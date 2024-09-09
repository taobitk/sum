function a(){
    let nub1 = parseInt(document.getElementById('nub1').value);
    let nub2 = parseInt(document.getElementById('nub2').value);
    document.getElementById('nub3').innerHTML = "kq"+ (nub1 + nub2);
}
function b(){
    let nub1 = parseInt(document.getElementById('nub1').value);
    let nub2 = parseInt(document.getElementById('nub2').value);
    document.getElementById('nub3').innerHTML = "kq"+ (nub1 - nub2);
}
function c(){
    let nub1 = parseInt(document.getElementById('nub1').value);
    let nub2 = parseInt(document.getElementById('nub2').value);
    document.getElementById('nub3').innerHTML = "kq"+ (nub1 * nub2);
}
function d(){
    let nub1 = parseInt(document.getElementById('nub1').value);
    let nub2 = parseInt(document.getElementById('nub2').value);
    document.getElementById('nub3').innerHTML = "kq"+ (nub1 / nub2);
}