const express=require('express')


app=express()

app.use(express.urlencoded({extended: false}))



app.get('/',(req,res)=>{
    console.log("hi");
    res.sendStatus(200);
})


app.listen(5000);