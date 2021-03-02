var display = document.querySelector('div.display');
function pressbtn(num){
    display.innerText.length>15?null:(display.innerText+=num);
}
function clean(){
    display.innerText='';
}
function calculate(){
    var result=eval(display.innerText);
    result==null? display.innerText ="Erro! Digite algo para calcular.":display.innerText=result;
}