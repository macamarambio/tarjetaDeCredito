# Tarjeta de Crédito

+ **Programa:** 
	- *Verifica si una tarjeta de crédito es válida*
+ **Entrada:** 
	- *El número de la tarjeta de crédito*
+ **Salida:** 
	- *Tarjeta válida o invalida*




```javascript

Pseudocódigo 
Función Tarjeta de Crédito
    
    Por medio de un prompt() pedirle al usuario que ingrese su número de tarjeta
        Si ingresa un campo vacío 
           Mostrar alerta 'Ingresa una opción válida'

        Pasar los numeros ingresador por el usuario a un array
                Dar vuelta la posición de los numeros del array
            	Separar en distintas variables numeros en posiciones pares e impares 
            		Si los números se encuentran en posición impar 
            			guardar la suma de los numeros para usarlos posteriormente 
            		Si los números se encuentran en posición par 
            			multiplicar el número por 2
            				Si el resultado es menorer a 10
								guardar la suma de los numeros para usarlos posteriormente 
							Si los números son mayores o iguales a 10 
								convertir estos numeros a string para poder separarlos y sumar sus digitos
									Mediante un for convertir en numeros y realizar la suma digito por digito 
					Sumar cada una de estas variables los numeros impares mas los numeros pares menores a 10 
					y el resultado de la suma de los digitos en el caso de numeros pares mayores a 10 
						Realizar el módulo de este resultado y 10
							Si este resultado es === a 0 
								mostrar alerta 'Tarjeta Válida'
							Si no es distinto a 0 
								mostrar alerta 'Tarjeta Inválida'
	
							

						
```



#### Este código es la versión `0.0.1` 