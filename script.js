function onClickHandler(num){
    var output = document.getElementById("display").value;
    document.getElementById("display").value = output + num;
     
}
function clearScreen(){
    document.getElementById("display").value = "";
}
function equalsto(){
    var data =  document.getElementById("display").value;
    var result = eval(data);
    document.getElementById("display").value = result ;
}
