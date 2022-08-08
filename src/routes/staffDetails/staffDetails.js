const express =require('express')
const staffRoute=express.Router();

staffRoute.post('/admindetails',(req,res)=>{
    res.json({
        msg:"hello from staff Route",
        
    })
})
staffRoute.post('/members',(req,res)=>{
    res.json({
        msg:"hello from  staff members",
        totalMembers:"4",
        membersName:"Anjali , Priya, Shubhika, Teena"
    })
})
staffRoute.post('/contact',(req,res)=>{
    res.json({
        msg:"hello from  staff contact info.",
        contactNo1:"7894561237",
        contactNo2:"7894578947",

    })
})

module.exports={staffRoute}