var ShoppingCarts = function () {
	this.list = [];
	this.total = [];
	this.productsNumber = [];
	
};

var Item = function (name, price){
	this.name = name;
	this.price = price;
}

var shoppingcart = new ShoppingCarts,
var apple = new Item ("apple",10),
var orange = new Item ("orange",5),
var grapes = new Item ("grapes",15),
var banana = new Item ("banana", 20),
var watermelon = new Item ("watermelon",50),

},

ShoppingCarts.prototype.additem = function (name){
	this.list.push(name.name);
	this.price.push(name.price);
	this.mensaje = function(){
		return "Adding" + this.name + "to the cart at a price of" + this.price;
	}

ShoppingCart.prototype.getTotal = function (){
    var total = 0;
    var elementsNumber = 0;
    for(var i = 0; i < this.list.length; i++){
    	total += this.list[i].price * this.list[i].quantity;
    	elementsNumber += this.list[i].quantity;
    }
    this.totalCost = total;
    this.productsNumber = elementsNumber;
};


ShoppingCart.prototype.getFiveProductsDiscount = function (){
	if(this.productsNumber > 5){
		this.totalCost = this.totalCost * 0.9;
	}
};


ShoppingCart.prototype.getOrangesDiscount = function (){
	

ShoppingCart.prototype.removeItem = function (item){
	this.list = this.list.filter(function(element){
		return element.product !== item.product;
	});
}
}