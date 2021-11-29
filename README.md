<h1 align="center">Express Example</h1>

<p align="center">
  <img src="docs/avatar.jpg" alt="foto" width="25%" height="25%"/>
</p>

### Variables de Entorno

<table style="width:100%">
  <tr>
    <th>Variable</th>
    <th>Descripción</th>
    <th>Ejemplo</th>
  </tr>
  <tr>
    <td>PORT</td>
    <td>Puerto donde se va a servir la aplicación</td>
    <td>3000</td>
  </tr>
  <tr>
    <td>CONTEXT</td>
    <td>Prefijo global de las rutas de la aplicación</td>
    <td>/App</td>
  </tr>
</table>

### Despliegue

```bash
cd app
npm install 
export PORT=3000
export CONTEXT=/App
node index.js 
```
