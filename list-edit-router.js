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

module.exports = router;
