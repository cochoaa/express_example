const express= require('express');
const PORT=parseInt(process.argv[2], 10);
const PID=process.pid;
const app=express();


app.get('/',function(req,res){
    var response=`<h1>Instancia de Node ejecutando </h1>`;
    response+=`<h2>Puerto: ${PORT} </h2> `;
    response+=`<h2>ProcessId: ${PID} </h2> `;
    res.end(response);
});

app.listen(PORT,function(){
    console.log(`Sistema escuchando en el puerto ${PORT}`);
});


