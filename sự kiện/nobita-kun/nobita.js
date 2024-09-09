function up(){
    let obj = document.getElementById('nobita');
    obj.style.top = parseInt(obj.style.top)- 10+'px';
}
function dow(){
    let obj = document.getElementById('nobita');
    obj.style.top = parseInt(obj.style.top)+ 10+'px';
}
function lef(){
    let obj = document.getElementById('nobita');
    obj.style.left = parseInt(obj.style.left)- 10+'px';
}
function rig(){
    let obj = document.getElementById('nobita');
    obj.style.left = parseInt(obj.style.left)+ 10+'px';
}

function move(mov){
    switch(mov.key.toLowerCase()){
        case 'w':up();break;
        case 's':dow();break;
        case 'a':lef();break;
        case 'd':rig();break;
        default:break;
    }
}
function load(){
    window.addEventListener("keyup", move);
}
