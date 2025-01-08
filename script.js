//Agregar a la pantalla
function addToScreen(valor){
    document.getElementById('pantalla').value += valor;
}

//Calcular
function calculate(){ 
    try{
        document.getElementById('pantalla').value = eval(document.getElementById('pantalla').value);
    }catch(e){
        document.getElementById('pantalla').value = 'Error';
    }
}

//Limpiar
function cleanScreen(){
    document.getElementById('pantalla').value = '';
}