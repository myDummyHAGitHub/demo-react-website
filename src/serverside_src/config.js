/*
commonJS style
*/
const mysql = require("mysql2");

//import { createConnection } from "mysql2";

//local macos MySQL server
const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'immikhan',
    database: 'person_skills'
});

con.connect((err)=>{
    if(err){
        console.warn("error in connection")
    }
})

module.exports = con;

