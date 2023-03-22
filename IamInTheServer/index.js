require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const app = express();

const appRouter = require('./router/appRouter')

const PORT = process.env.PORT

app.use(cors());
app.use(bodyParser.urlencoded({
    extended: false
}))

app.use(bodyParser.json())
app.use(cookieParser());

app.use('/', appRouter)

app.use((err, req, res, next) => {
    console.log(err.stack);
    console.log(err.name);
    console.log(err.code);

    res.status(500).json({
        message: "Ups! Somthing went wrong 🥺"
    });
});

app.listen(PORT, () => {
    console.log(`‖ΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞ‖`);
    console.log(`‖                            ‖`);
    console.log(`‖                            ‖`);
    console.log(`‖      LET'S EXPLOIT IT      ‖`);
    console.log(`‖                            ‖`);
    console.log(`‖                            ‖`);
    console.log(`‖ΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞ‖`);
})