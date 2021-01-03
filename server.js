const express=require('express')
const socketio=require('socket.io')
const http=require('http');




app=express()

app.use(express.urlencoded({extended: false}))


const server=http.createServer(app);

const io=socketio(server);

io.on("connection",socket=>{
    console.log("connection established");


});

io.on("message",message=>{
    console.log(message);
});


app.get('/',(req,res)=>{
    res.render('index');
})


server.listen(5000);