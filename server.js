const express=require('express')
const socketio=require('socket.io')
const http=require('http');
const path=require('path')




app=express()

app.use(express.urlencoded({extended: false}))

app.set('view engine','ejs');

app.use(express.static(path.join(__dirname,'public')))

const server=http.createServer(app);

const io=socketio(server);

io.on("connection",socket=>{
    console.log("connection established");
    // console.log(socket.id)



    
    socket.on("disconnect",()=>{
        console.log("connection lost");
    })


});



app.get('/',(req,res)=>{
    res.render('index');
})


server.listen(5000);