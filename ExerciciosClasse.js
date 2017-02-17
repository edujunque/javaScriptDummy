class Conta {
	constructor(saldo){
  	this.saldo = saldo;
  }

	saque(){
  	document.write('+saque');
  }
  
  deposito(deposito){
  	this.saldo = this.saldo + deposito; 
  }
  
  saque(saque){
  	this.saldo = this.saldo - saque; 
  }
  
  getSaldo(){
  	document.write('Saldo: ' + this.saldo);
  }
}

var conta = new Conta(500);
conta.deposito(100);
conta.saque(50);
conta.getSaldo();


class Calculadora{
 //Metodo static não precisa instanciar pra chama-lo
	static somar(num1,num2){
  	return num1 + num2;
  }
}

document.write('<br > 2: ' + Calculadora.somar(5,5));











