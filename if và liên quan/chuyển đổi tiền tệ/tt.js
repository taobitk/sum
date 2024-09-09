function h(){
    let a = document.getElementById('cd1').value;
    let b = document.getElementById('cd2').value;
    let c = parseInt( document.getElementById('nub1').value);
    if (a == b){
        document.getElementById('g').innerHTML = 'kết quả = '+c+' '+a;
    }
    if (a == "usd"&& b == "vnd"){
        document.getElementById('g').innerHTML = 'kết quả: '+c +' '+a+ ' = '+c*25000+' '+b;;
    }
    else {
        document.getElementById('g').innerHTML = 'kết quả: '+c +' '+a+ ' = '+c/25000+' '+b;
    }
}