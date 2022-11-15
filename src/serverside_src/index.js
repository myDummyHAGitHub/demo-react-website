const express = require("express");
const cors = require("cors"); // very important
const con = require("./config");

const app =  express();

let corsOptions = { // very important
    //origin: 'http://localhost:5000'
    //origin: 'http://127.0.0.1:5000'
    //origin: 'https://55db-113-252-246-168.ap.ngrok.io'
    origin: ['http://localhost:5000','http://127.0.0.1:5000','immiks-mac-mini.local:5000']
}
app.use(cors(corsOptions));

app.get("/", cors(), (req, resp) => { // the cors() here very important
    //resp.send("cool done!");
    //resp.header("Access-Control-Allow-Origin", "http://localhost:5500");
    con.query("SELECT skill_name, level_type FROM person_skills.vpersonskills;", (err, result) => {
        if(err){
            resp.send("error in api")
        }else{
            resp.send(result)
        }
    })

});

app.listen("5000")
