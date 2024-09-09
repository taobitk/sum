function a(){
   let a = parseInt( prompt('nhập a'));
   let b = parseInt(prompt('nhập b'))
    let c = a+b<4 ? 'Below':'Over';
   alert(c);
}
function b(){
    let login = prompt("Enter:");
    let message = (login == 'Employee') ?
        'Hello' :
        (login == 'Director') ?
            'Greetings' :
            (login == '') ?
                'No login' :
                '';
    alert(message);
}
function c(){

}