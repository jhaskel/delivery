const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const logger = require('morgan');
const cors = require('cors');


const usersRoutes= require('./routes/userRoutes');



const port = process.env.PORT || 3000;
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
    extended:true
}));
app.use(cors());
app.disable('x-powered-by');

app.set('port',port);

usersRoutes(app);

server.listen(3000,'192.168.100.230'|| 'localhost',function(){
    console.log('Aplication de NodeJs ' +process.pid+' iniciada')
});

app.get('/',(req,res)=>{
    res.send('Ruta raiz del backend2');
});

app.get('/compras',(req,res)=>{
    res.send('Rota de compras');
})
//error handler

app.use((err,req,res,next)=>{
    console.log(err);
    res.status(err.status || 500).send(err.stack)
})