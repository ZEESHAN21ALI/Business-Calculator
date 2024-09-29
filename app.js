let result = document.getElementById("result");

function cclt(num){
 result.value += num;   
}

function cancel(){
    result.value = "";
}

function sum(){
    let output = eval(result.value);
    result.value = output;
}