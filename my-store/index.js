const express = require('express');
const routerApi = require('./routes');

const { logErrors, errorHandler } = require('./middlewares/error.handler')

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hola, mi server en express');
});

app.get('/nueva-ruta', (req, res) => {
  res.send('Hola, soy una nueva ruta');
});

routerApi(app);

app.use(logErrors); // Debe ir primero porque tiene el next.
app.use(errorHandler); // Como no tiene next, no se ejecutará nada después.

app.listen(port, () => {
  console.log('Mi port ' + port);
});

