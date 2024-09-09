function yes() {
    alert('yes');
}
function no() {
    let a = Math.round(Math.random() * window.innerWidth);
    let b = Math.round(Math.random() * window.innerHeight);
    let c = document.getElementById("no");
    c.style.left = a + "px";
    c.style.top = b + "px";
}