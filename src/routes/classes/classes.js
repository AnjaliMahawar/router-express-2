const express =require('express')
const classesRoute=express.Router();

classesRoute.post('/totalclasses',(req,res)=>{
    res.json({
        msg:"hello from classes Route",
        totalClasses:"12 classes"
    })
})

module.exports={classesRoute}