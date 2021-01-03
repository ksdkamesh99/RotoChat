const express=require('express')
const http=require('http')

app=express()

const server=http.createServer(app)


server.listen(5000,()=>{
    console.log("Server running");
});