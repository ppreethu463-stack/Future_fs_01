const express = require("express")
const app = express()

app.use(express.static("public"))

const projects = [
{
id:1,
name:"Portfolio Website",
description:"Personal portfolio built using HTML, CSS"
},

{
id:2,
name:"NeuroScan",
description:"Alzheimer disease detection using MRI and Deep Learning"
},

{
id:3,
name:"Kisan to Kitchen",
description:"Platform connecting farmers directly to customers"
}
]

app.get("/projects",(req,res)=>{
res.json(projects)
})

app.listen(5000,()=>{
console.log("Server running on port 5000")
})