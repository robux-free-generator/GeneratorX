function confirm(){

	var robux = document.getElementById("robuxAmount").value
	var availible = robux <= 100000 && robux >= 1
    document.getElementById("error").setAttribute("class", "visually-hidden"); 


	if(!availible){

		document.getElementById("error").setAttribute("class", ""); 

	}
	else{

		window.close();

	}
}