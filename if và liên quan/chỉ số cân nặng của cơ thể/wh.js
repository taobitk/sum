function a(){
    let w =parseInt( document.getElementById('w').value);
    let h = parseInt( document.getElementById('h').value);
    document.getElementById('aa').innerHTML = 'số BMI= '+ (w/(h**2));
}