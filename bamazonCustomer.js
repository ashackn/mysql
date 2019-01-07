var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  port: 3306,
  user: "root",
  password: "root",
  database: "bamazonDB"
});

connection.connect(function(err) {
  if (err) throw err;
  printProducts();
  
});

function printProducts(){
   
  connection.query("SELECT * FROM products", function(err, res) {
    console.log("\n")
    for (var i = 0; i < res.length; i++) {
      console.log("Item ID: " + res[i].item_id + " || Product Name: " + res[i].product_name + " || Department Name: " + res[i].department_name + " || Price: " + res[i].price + " || Stock Quantity: " + res[i].stock_quantity);
    }
    pickSearch();
  });

}

function pickSearch() {
  inquirer
    .prompt({
      name: "item_id",
      type: "input",
      message: "What is the ID of the product you want to buy"
    })
    .then(function(answer) {
    console.log(answer);
        idSearch(answer);
   
      }
);
}

function idSearch(answer) {
  inquirer
    .prompt({
      name: "count",
      type: "input",
      message: "How many units of the product would you like to buy?"
    })
    .then(function(num) {
      console.log(answer);
      console.log(num);
      var query = " SELECT item_id, product_name, department_name, price, stock_quantity FROM products WHERE ?";
      connection.query(query, { item_id: answer.item_id}, function(err, res) {
        for (var i = 0; i < res.length; i++) {
          console.log("Stock Quantity: " + res[i].stock_quantity);
          // console.log("Price: " + res[i].price);
          //var test = parseInt(res[i].stock_quantity);
          console.log("Item ID: " + res[i].item_id + " || Product Name: " + res[i].product_name + " || Department Name: " + res[i].department_name + " || Stock Quantity: " + res[i].stock_quantity);
          if(parseInt(res[i].stock_quantity) >= num.count){
            quantityUpdate(res[i].item_id, res[i].product_name, num.count);
            var myprice = res[i].price * num.count;
            console.log("Price: " + myprice);
          }else{
            console.log ("Insufficient quantity!")
          }
        }
      });
    });
}

function quantityUpdate(id, name, count) {
  connection.query(
    "UPDATE products SET stock_quantity = stock_quantity - ? WHERE item_id = ?",
    [parseInt(count), id],
    function(err, res) {
      console.log("\nThank you for your purchase of " + count + " " + name + "'s");
      
    }
  );
  }
