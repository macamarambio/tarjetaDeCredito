// Función para validar una tárjeta de crédito

function isValidCard(){
	do {
			var numberCar = prompt('Ingresa tu número de tarjeta');  //Pedirle al usuario que ingrese su número de tarjeta

			if(numberCar == null){	//Si no ingresa nada, pedirle que ingrese una opción válida
				alert('Ingresa una opción válida');
			}else{
				var arr = []; //Pasar los numeros ingresador por el usuario a un array 
				for (var i = 0; i < numberCar.length; i++) { 	
					arr.push(numberCar[i]);
				}for (var k = 0; k < arr.length; k++) {  //Dar vuelta la posición de los numeros del array
					var item = arr.pop();
					arr.splice(k, 0, item);
					var num = [];
				}for (var x = 0; x < arr.length; x++){ //Separar en distintas variables numeros en posiciones pares e impares
						num.push(parseInt(arr[x]));	
					var pairPosition = [];
					var impairPosition = 0;	
					var result;	// esta variable contendrá la suma final de todos los numeros 
				}for (var p = 0; p <num.length; p++){ // condición que separa los numeros en posiciones pares 
					if([p+1] % 2 == 0){
						pairPosition.push((num[p])*2); // multiplicar estos numeros por 2 
					}else if([p+1] % 2 !== 0){ // guardar la suma de los numeros que se encuentran en posiciones impares  
						impairPosition +=(num[p]);
						var pairPositionLess = 0;
						var pairPositionHigth = [];
					}for (var s = 0; s < pairPosition.length; s++) { // Dividir los numeros pares en 2 grupos
						if(pairPosition[s] < 10){ // numeros pares menores que 10
							pairPositionLess += (pairPosition[s]); // guardar la suma de los numeros pares menores que 10
						}else{
							pairPositionHigth.push(pairPosition[s]); // Numeros pares mayor o igual que 10
							var pairString = pairPositionHigth.join(''); // convertir estos numeros en string
							var sum = 0;							// para poder separar sus digitos
							for (var y = 0; y < pairString.length; y++) {  
							sum += parseInt(pairString[y]);	 // convertir en numero y realizar la suma digito por digito 
							}
						}
					}
				} result = sum + impairPosition + pairPositionLess; // sumar los num impares, pares menores que 10 y el resultado de los pares mayores que 10
				if(result % 10 === 0){ // si el modulo del resultado y 10 da 0 la tarjeta es válida
					alert('Tarjeta Válida');
				}else{
					alert('Tarjeta Inválida');
				}
			} 
	} while(numberCar == null);
}

isValidCard();
	



// numero de tarjeta para validar 4083952015263
