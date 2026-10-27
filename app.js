
require("dotenv").config()
// const cors = require("cors");
const express = require("express")
const app = express()

app.use(express.json());
// app.use(cors());
app.use("/api/uploads", express.static("uploads"));
app.use(express.urlencoded({ extended: true }));

const chalk = require("chalk");

const database = require("./app/config/db")
require("./app/model/index")

const router = require("./app/router/index")
app.use("/api",router)

const port = process.env.PORT

app.listen(port,()=>{
    console.log(chalk.green(`🚀 Server Running At ${port}`))
})