class Funcionario {
	constructor(salario){
  	this.salario = salario;
    this.total = 0;
  }

	calcularSalario(){
  	this.total = this.salario + 100;
  }
  
  exibirSalario(){
  	document.write('Salario: ' + this.total);
  }
}

class Programador extends Funcionario {
  calcularSalario(){
  	super.calcularSalario();
    this.total = this.total + 300;
  }
}

var prog = new Programador(100);

prog.calcularSalario();
prog.exibirSalario();












