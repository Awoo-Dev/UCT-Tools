const express = require('express');
const mysql = require('mysql');
const cors = require('cors'); // Agregar esta línea
const app = express();
const port = 5000;
app.use(cors()); 
// Configuración de la base de datos
const databaseConfig = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'ucttools',
};

const connection = mysql.createConnection(databaseConfig);

// Ruta para obtener los datos de la base de datos
app.get('/api/data', (req, res) => {
  const query = 'SELECT * FROM micros'; // Reemplaza "tu_tabla" con el nombre de tu tabla en la base de datos

  connection.query(query, (error, results) => {
    if (error) {
      console.error('Error al obtener los datos de la base de datos: ', error);
      res.status(500).json({ error: 'Error al obtener los datos de la base de datos' });
    } else {
      res.json(results);
    }
  });
});
app.get('/api/salas', (req, res) => {
  const query = 'SELECT * FROM salas'; // Reemplaza "tu_tabla" con el nombre de tu tabla en la base de datos

  connection.query(query, (error, results) => {
    if (error) {
      console.error('Error al obtener los datos de la base de datos: ', error);
      res.status(500).json({ error: 'Error al obtener los datos de la base de datos' });
    } else {
      res.json(results);
    }
  });
});


app.listen(port, () => {
  console.log(`Servidor Node.js en funcionamiento en el puerto ${port}`);
});
