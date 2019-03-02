var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
host: "localhost",
port: 3306,
user: "root",
password: "Learn2code$",
database: "bamazon_DB"
})
function displayTable(){
    connection.query("SELECT * FROM products", function(err, data){
        if (err){
            console.log(err)
        }
        console.log('\n')
         console.table(data)
    })
};

connection.connect(function(err){
    
    console.log("connected as id: "+connection.threadId);
    
    start();
})

var start = function (){
    inquirer.prompt([{
        name: "item_id",
        type: "input",
        message: "What is the item id of the product you would like to purchase?",
    },{
            name: "quantity",
            type: "input",
            message: "How many products you would like to purchase?",
    }]).then(function(answer){  
        
        console.log(answer)
        //connection.query("SELECT * FROM products WHERE item_id = ?", [answer.item_id], function(err, data){
        //     if (err){
        //         console.log(err)
        //     }
        //     console.log(data)
        // } )
        // // if(answer.postOrBid.toUpperCase()=="Post"){
        //     //postAution();
        // } else {
        //     //bidAution();
        // }
        connection.query("SELECT * FROM products WHERE item_id = ?", [answer.item_id], function(err, data){
            if (err){
                console.log(err)
            }
            console.log(data)
            
            
        } )
        
    })
    
}
start();
displayTable();
