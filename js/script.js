
var operadores = ['/', '+', '-', '*']
let permitePonto = 0;


function insert(num)
{
    if(document.getElementById('resultado').innerHTML=="0"){
    document.getElementById('resultado').innerHTML = num;
    }else{
    var numero = document.getElementById('resultado').innerText;
    // if (numero.includes('*') && numero.includes('/')) {
    //     alert('operação impossivel')
    // }
    let ultimoCaractere = numero.substring(numero.length-1, numero.length);

    if(num=="."){
        if(permitePonto==0){
            permitePonto=1;
        }else{
            num='';
        }
        
    }

    if((ultimoCaractere == "*" || ultimoCaractere == "/" 
    || ultimoCaractere == "+" || ultimoCaractere == "-")
        ){
            permitePonto=0;
    }

   
    if((ultimoCaractere == "*" || ultimoCaractere == "/" 
    || ultimoCaractere == "+" || ultimoCaractere == "-")
    && (num == "*" || num =="/" || num=="+" ||num=="-" )){
        document.getElementById('resultado').innerHTML = numero.substring(0, numero.length-1) + num;
    }else{
        if(ultimoCaractere=="." && num =="."){

        }else{
    document.getElementById('resultado').innerHTML = numero + num;
        }
    }

}
}
function clean()
{
    document.getElementById('resultado').innerHTML = "0";
    permitePonto=0;
}
function back()
{
    var resultado = document.getElementById('resultado').innerHTML;
    
    if(resultado.length>1){
        if(resultado.substring(resultado.substring(resultado.length-1, resultado.length))=="."){
            permitePonto=0;
        }
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
    }else{
        document.getElementById('resultado').innerHTML = "0";
    }
    
}
function calcular()
{
    var resultado = document.getElementById('resultado').innerHTML;
    
    if(resultado)
    {
        arrayNum = Array.from(resultado)
         for(var i = 0; i <= arrayNum.length; i += 1){
        if (arrayNum[i] == '/' && arrayNum[i+1] == 0 ) {
            alert('Não é possível efetuar a divisão por zero')
            document.getElementById('resultado').innerHTML = "0"
            return ''
         }
        }
        document.getElementById('resultado').innerHTML = eval(resultado);

        if(eval(resultado) == "Infinity"||
        document.getElementById('resultado')=="NaN"){
            document.getElementById('resultado').innerHTML = "0"
        window.alert("Por favor insira uma equação válida.")
        }
    
    }
    else
    {
        document.getElementById('resultado').innerHTML = "0"
        window.alert("Por favor insira uma equação válida.")
    }
}