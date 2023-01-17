const express = require("express");
const app = express();
const {Pool} = require("pg");

app.listen(3000, () => console.log("Server is up and running"))


const pool = new Pool({
    user: 'amanda',
    host: 'localhost',
    database: 'cyf_ecommerce',
    password: '',
    port: 5432
})

app.get("/customers", function(req, res){
    pool.query('SELECT * FROM customers', (error, result)=> {
        res.json(result.rows);
    });
});

app.get("/suppliers", function(req, res){
    pool.query('SELECT * FROM suppliers', (error, result)=> {
        res.json(result.rows);
    });
});

app.get("/products", function(req, res){
    pool.query('SELECT * FROM products', (error, result)=> {
        res.json(result.rows);
    });
});