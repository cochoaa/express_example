const express= require('express');
var wiki = require('./routers/wiki.js');
const PORT_ARG=parseInt(process.argv[2], 10);
const PORT=process.env.PORT||PORT_ARG;
const CONTEXT=process.env.CONTEXT||'/';
const PID=process.pid;
const app=express();

app.use(CONTEXT, wiki);

app.listen(PORT,function(){
    console.log(`Sistema escuchando en el puerto ${PORT}`);
});


