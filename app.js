const express = require('express');
const app = express();
const port = 3300;
const listViewRouter = require('./list-view-router');
const listEditRouter = require('./list-edit-router');


// Middleware para gestionar métodos HTTP válidos
const methodHandler = (req, res, next) => {
  if (req.method === 'GET' || req.method === 'POST' || req.method === 'PUT' || req.method === 'DELETE') {
    next();
  } else {
    res.status(400).send('Método HTTP no válido');
  }
};

app.use(methodHandler);
app.use(listViewRouter);
app.use(listEditRouter);

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});

//Este proyecto corresponde a Task List Server, modificado para Review-1. Resalto que el Repositorio se llama "expressServer" y no "Task List Server", esto debido a que es un proyecto distinto al último realizado en NodeJs, al no ser continuidad presenta un nombre distinto, sin embargo incluyo en este proyecto todo lo que se me ha solicitado en plataforma.
