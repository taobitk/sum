function a(){
   let a;
   a = "<table border='1' style='text-align:left' cellPadding='5' cellSpacing='5'>"
 for (let i=1;i<=10;i++){
    a += "<tr>"
     for (let j=1;j<=10;j++){
         a+= "<td>"+j+"*"+1+"="+(i*j)+"</td>"
     }
     a += "</tr>"
 }
    a += "</table>"
    document.getElementById('a').innerHTML = a;
}
