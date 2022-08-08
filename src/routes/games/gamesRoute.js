const express =require('express')
const gamesRoute=express.Router();

gamesRoute.post('/gamesforplaygroup',(req,res)=>{
    res.json({
        msg:"hello from games Route",
        games:"Ludo, snake and ladders,football"
    })
})
gamesRoute.post('/gamesforprimary',(req,res)=>{
    res.json({
        msg:"hello from games Route",
        games:"Cricket, Basketball, Football, Reading, Writing, Painting and Solving Puzzles"
    })
})

module.exports={gamesRoute}