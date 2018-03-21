class Fecha {
	constructor(anio,mes,dia) {
		this.anio=anio;
		this.dia=dia;
		this.mes=mes;
	}

	obtenerMes(){
		return this.mes;
	}

	obtenerDia(){
		return this.dia;
	}

	obtenerAnio(){
		return this.anio;
	}

	anioBisiesto(){


	  var anyo;

	  anyo=prompt('Ingrese el Año:','');

	  anyo=parseInt(anyo)

 	if ((((anyo%100)!=0)&&((anyo%4)==0))||((anyo%400)==0)){

	
	 		 document.write('El año es bisiesto: ');

	 	}

		 else{document.write('El año no es bisiesto: ');}

	}

	anioBisiestoImprimir(anio){


 	if ((((anio%100)!=0)&&((anio%4)==0))||((anio%400)==0)){

	
	 		return 'El año es bisiesto';

	 	}

		 else{ return 'El año no es bisiesto';}

	}


	anioBisiesto(anio){


 	if ((((anio%100)!=0)&&((anio%4)==0))||((anio%400)==0)){

	
	 		return true;

	 	}

		 else{ return false;}

	}
	



	validarFecha(){
		var wea = new Array("continuara")
		if((this.mes>0 || this.mes < 13)){
			if(anioBisiesto(this.anio)){

			}
		}

	}

	adquirirFecha(){
		return this.dia + "/" + this.mes +"/" + this.anio + "   y: " + anioBisiestoImprimir(this.anio);
	}

	imprimirGringo(){
		alert ( this.mes + "/" + this.dia +"/" + this.anio);

	}

	imprimirLatino(){
		alert ( this.dia + "/" + this.mes +"/" + this.anio);

	}

}

