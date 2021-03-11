const express= require('express');
var wiki = require('./routers/wiki.js');
//const PORT=parseInt(process.argv[2], 10);
const PORT=process.env.PORT;
const CONTEXT=process.env.CONTEXT;
const PID=process.pid;
const app=express();

app.use(CONTEXT, wiki);

/*app.get('/',function(req,res){
    var response=`<h1>Instancia de Node ejecutando </h1>`;
    response+=`<h2>Puerto: ${PORT} </h2> `;
    response+=`<h2>ProcessId: ${PID} </h2> `;
    res.end(response);
});*/

app.listen(PORT,function(){
    console.log(`Sistema escuchando en el puerto ${PORT}`);
});


