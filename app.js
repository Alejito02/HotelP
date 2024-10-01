const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();


mongoose.connect('mongodb://localhost:27017/miBaseDeDatos', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
}).then(() => console.log('Conectado a MongoDB'))
  .catch(err => console.error(err));

app.use(bodyParser.json());


const holderRoutes = require('./routes/holder');
const laptopRoutes = require('./routes/laptop');
const entryRoutes = require('./routes/entry');

app.use('/api/holder', holderRoutes);
app.use('/api/laptop', laptopRoutes);
app.use('/api/entry', entryRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
