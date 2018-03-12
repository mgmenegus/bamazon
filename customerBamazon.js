var inquirer = require('inquirer');
var mysql = require('mysql');

var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,

	user: "root",
	password: "root",
	database: "bamazon"
});

connection.connect(function(err) {
	console.log("connected to " + connection.threadId);
	openStore();
});

function openStore(){
	connection.query('SELECT * FROM products', function(err, res){
		//console.log(res);
		console.log("-----ITEMS FOR SALE-----");
		for (var i = 0; i < res.length; i++){
			console.log("\nID: " + res[i].item_id + "\n" + "Product: " + res[i].product_name + " | " + "Department: " + res[i].department_name + " | " + "Price: $" + res[i].price + " | " + "QTY: " + res[i].stock_quantity);
		console.log("=====================================================================");
		//customerEX();
		}
		customerEX();
		});

inquirer.prompt([{
		name: "id",
		type: "input",
		message: "Select the ID of the item you would like to purchase.",
			validate: function(value) {
				if (isNaN(value) === false) {
					return true;
				} else {
					return false;
				}
			}
		}, 
		{
			name: "quantity",
			type:"input",
			message: "Choose the quantity of the item you would like to purchase.",
				validate: function(value) {
					//console.log(value);
					if (isNaN(value) === false){
						return true;
					} else {
						return false;
					}
				}
			}

	]).then(function(answer) {
    var chosenID = answer.itemId - 1
    var chosenProduct = res[chosedID]
    var chosenQuantity = answer.quantity
    //after taking in amount, verify if we have enough quantity
    if (chosenQuantity < res[chosenID].stock_quantity) {
      //If i have i should update MySQL
      connection.query("UPDATE products SET ? WHERE ?", [{
        //mysql shows final over_head_costs
        stock_quantity: res[chosenID].stock_quantity - chosenQuantity
      }, {
        item_id: res[chosenID].item_id
      }], function(err, res) {
        openStore();
      });
    } else {
      console.log("Insufficient quantity for the item")
     
    }
  });
	openStore();
	endconnection();
  }

//openStore();
	/*then(function(answers){
		var pick = answers.id;
		var amount = answers.quantity;
		purchasing(answer.id, answer.quantity);
		console.log(answers);
	});
}

function purchasing(id, amount){
	connection.query("SELECT * FROM products WHERE item_id = " + id, function(err, res){
		if (err){
			console.log(err);
		}
		if (amount <= res[0].stock_quantity){
			var finalCost = res[0].price * amount;
			console.log("Total: $");
		} else{
			console.log("Not enough inventory!");
		};
	})
}
*/