//Bienvenida

let userName = prompt('Ingrese su nombre');
alert('¡Hola ' + userName + '! Bienvenido a nuestro simulador de compra.');
alert('A continuación, vamos a simular una compra de repuestos para lavarropas');

//Simulador de Compra

let subtotalProduct = 0;
let subtotalCart = 0;

function addToCart(product, price, stock){
	let amount = parseInt(prompt('Ingrese cantidad de ' + product + ' a comprar. Stock disponible: ' + stock, 1));
	subtotalProduct = price * amount;
	const checkAmount = validateCart(amount)
	if (checkAmount === 'agregar'){
		if(amount > stock){
		subtotalProduct = price * stock;
		console.log('Existencias insuficientes de ' + product + '. Se agregó el stock disponible al carrito = $' + price + ' x' + stock);
		alert('No tenemos suficientes ' + product + '. Se agregaron ' + stock + ' al carrito: $' + subtotalProduct)
		} else {
		console.log('Se agregó ' + product + ' al carrito = $' + price + ' x' + amount);
		alert('Agregó ' + product + ' x' + amount + ' al carrito: $' + subtotalProduct);
		}
	} else {
		console.log('No se agregó ' + product + ' al carrito');
		alert('No agregó ' + product + ' al carrito')
	}
	subtotalCart = subtotalCart + subtotalProduct
};

function validateCart(amount){
	if (amount != 0){
		return 'agregar'
	} else {
		return 'no agregar'
	}
}



addToCart('Soporte Drean 03 04', 4570, 6);
addToCart('Retén 25', 400, 2);
addToCart('Ruleman SFK 6203', 630, 12);
addToCart('Ruleman SFK 6204', 970, 5);

console.log('Total = $' + subtotalCart);
alert('Su total es: $' + subtotalCart)