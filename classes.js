class Animal {
	constructor(corAtributo, pesoAtributo){
  	this.cor = corAtributo;
    this.peso = pesoAtributo;
  }

	dormir(){
  	document.write('+Dormir');
  }
}

class Cao extends Animal{
	constructor(corAtributo, pesoAtributo, racaAtributo){
  	super(corAtributo, pesoAtributo);
    this.raca = racaAtributo;
  }

	getInformacoes(){
  	document.write('+cor' + this.cor + '+Peso' + this.peso + '+Raca' + this.raca);
  }

	latir(){
  	document.write('Latir +');
  }
  dormir(){
  	super.dormir();
  	document.write(' como um cão');
  }
}

var cao = new Cao('Preto','30kg','Labrador');




