var nome = prompt('Nome:');
var altura = prompt('Altura cm: ');
var peso = prompt('Peso: ');
var imc;
var indice;

altura = parseFloat(altura);
peso = parseFloat(peso);

altura = altura / 100;

imc = peso/ (altura*altura);

if(imc < 16){
indice = 'Baixo peso muito grave ';
}else if(imc >= 16 && imc <= 16.99){
indice = 'Baixo peso grave ';
}else if(imc >= 17 && imc <= 18.49){
indice = 'Baixo peso';
}else if(imc >= 18.50 && imc <= 24.99){
indice = 'Normal ';
}else if(imc >= 25 && imc <= 29.99){
indice = 'Sobrepeso ';
}else if(imc >= 30 && imc <= 34.99){
indice = 'Obesidade grau 1 ';
}else if(imc >= 35 && imc <= 39.99){
indice = 'Obesidade grau 2 ';
}else if(imc >= 40){
indice = 'obesidade grau III ';
}

document.write(nome + 'possui índice de massa corporal igual a '+ imc + ', sendo classificado como: '+indice);








