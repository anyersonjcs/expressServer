const express = require('express');
const router = express.Router();

// Ruta: crear una tarea
router.post('/create-task', (req, res) => {
  // Lógica para crear una nueva tarea
  res.send('Tarea creada exitosamente');
});

// Ruta: eliminar una tarea
router.delete('/delete-task/:taskId', (req, res) => {
  const taskId = req.params.taskId;
  res.send(`Tarea con ID ${taskId} eliminada exitosamente`);
});

// Ruta: actualizar una tarea
router.put('/update-task/:taskId', (req, res) => {
  const taskId = req.params.taskId;
  res.send(`Tarea con ID ${taskId} actualizada exitosamente`);
});


// Middleware para manejar errores en solicitudes POST y PUT
const errorHandler = (err, req, res, next) => {
  if (err) {
    res.status(400).send('Error en la solicitud');
  } else {
    next();
  }
};


module.exports = router;
