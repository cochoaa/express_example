// wiki.js - Wiki route module.

var express = require('express');
var router = express.Router();

// Home page route.
router.get('/', function (req, res) {
    const PORT=process.env.PORT;
    const PID=process.pid;
    let response=`<h1>Aplicacion de Prueba Wiki ejecutando </h1>`;
    response+=`<h2>Puerto: ${PORT} </h2> `;
    response+=`<h2>ProcessId: ${PID} </h2> `;
    response+="Primer commit";
    res.send(response);
})

// About page route.
router.get('/about', function (req, res) {
  res.send('About this wiki');
})

module.exports = router;

