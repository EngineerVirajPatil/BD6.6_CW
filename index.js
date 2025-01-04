const cors=require("cors");
const express = require('express');
const { resolve } = require('path');
const app = express();
const {getEmployees,getEmployeeById}=require("./controllers/index.js");

app.use(cors());
app.use(express.json());

app.get("/employees",async(req, res)=>{
const employees=await getEmployees();
res.status(200).json({employees});
})

app.get("/employees/details/:id",async(req, res)=>{
const id=parseInt(req.params.id);
const employee=await getEmployeeById(id);
res.status(200).json({employee});
})

module.exports={app}


