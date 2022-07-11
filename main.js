let subtotalProduct = 0;
let subtotalCart = 0;

function addToCart(product, amount, price){
	subtotalProduct = price * amount;
	console.log('Se agregó ' + product + ' al carrito = $' + price + ' x' + amount);
	alert('Agregaste ' + product + ' x' + amount + ' al carrito = $' + subtotalProduct);
	subtotalCart = subtotalCart + subtotalProduct
};

addToCart('Ruleman SFK 6203', 2, 600);
addToCart('Ruleman SFK 6204', 1, 750);
addToCart('Ruleman SFK 608', 3, 450);

console.log('Total = ' + subtotalCart);
alert('Su total es: $' + subtotalCart)