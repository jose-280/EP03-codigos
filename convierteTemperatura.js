function C_Farenheit(centigrados){
	//centigrados - farenheit
	var farenheit=(centigrados*(9/5))+32;
	console.log(farenheit);	
}C_Farenheit(30);


function C_Kelvin(centigrados){
	//centigrados - kelvin
	var kelvin=centigrados+273.15;
	console.log(kelvin);		
}C_Kelvin(30);


function F_Centigrados(farenheit){
	//Farenheit - centigrados
	var centigrados=(farenheit-32)*0.55;	
	console.log(centigrados);
}F_Centigrados(30);


function K_Centigrados(kelvin){
	//kelvin - centigrados
	var centigrados=kelvin-273.15;
	console.log(centigrados);
}K_Centigrados(30);
