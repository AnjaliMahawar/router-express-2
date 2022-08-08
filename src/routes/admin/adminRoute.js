const express =require('express')
const adminRoute=express.Router();

adminRoute.post('/admindetails',(req,res)=>{
    res.json({
        msg:"hello from admin Route",
        adminName:"Anjali Mahawar"
    })
})
adminRoute.post('/contact',(req,res)=>{
    res.json({
        msg:"hello from admin contact",
        contact:'8269204407',
        tele:"78946123"
    })
})
module.exports={adminRoute}