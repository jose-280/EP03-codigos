function cuentaVocal(texto){
	var cuenta = 0;
	for (var i = 0; i < texto.length; i++) {
		switch(texto.charAt(i)){
			case 'a': cuenta++; break;
			case 'e': cuenta++; break;
			case 'i': cuenta++; break;
			case 'o': cuenta++; break;
			case 'u': cuenta++; break;
		}
	}
	console.log(cuenta);
}cuentaVocal("electiva profesional tres");