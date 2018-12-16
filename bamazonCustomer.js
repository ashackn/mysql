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
  pickSearch();
});

function pickSearch() {
  inquirer
    .prompt({
      name: "action",
      type: "input",
      message: "What is the ID of the product you want to buy"
    })
    .then(function(answer) {
    //  switch (answer.action) {
    //  case "What is the ID of the product you want to buy":
        idSearch(answer);
    //    break;

    //   case "How many units of the product would you like to buy":
    //     unitSearch();
    //     break;
      }
);
}

function idSearch(answer) {
  inquirer
    .prompt({
      name: "item_id",
      type: "input",
      message: "How many units of the product would you like to buy?"
    })
    .then(function(answer) {
      var query = " SELECT item_id, product_name, department_name FROM products WHERE ?";
      connection.query(query, { item_id: answer.item_id }, function(err, res) {
        for (var i = 0; i < res.length; i++) {
          console.log("Item ID: " + res[i].item_id + " || Product Name: " + res[i].product_name + " || Department Name: " + res[i].department_name);
        }
      });
    });
}
    