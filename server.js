const express = require("express")
const app = express()
const cors = require("cors");
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 8080
var user = require('./user');
var whitelist = ['*.*']
var corsOptions = {
    origin: (origin, callback) => {
        if (whitelist.indexOf(origin) !== -1 || !origin) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    }
}
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/user', user);
app.get("/", (req, res)=>{
    res.json({result: "ok", data:[1,2,3,4,5]})
})

app.listen(PORT, ()=>{
    console.log(`Serer is running. ${PORT}`)
})