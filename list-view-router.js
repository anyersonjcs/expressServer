const express = require('express');
const router = express.Router();

const tasks = [
  {
    id: "12",
    isCompleted: false,
    description: "Pasear al perro"
  },
  {
    id: "13",
    isCompleted: true,
    description: "Comprar víveres"
  }
];

// Ruta: tareas completas
router.get('/completed-tasks', (req, res) => {
  const completedTasks = tasks.filter(task => task.isCompleted);
  res.json(completedTasks);
});

// Ruta: tareas incompletas
router.get('/incomplete-tasks', (req, res) => {
  const incompleteTasks = tasks.filter(task => !task.isCompleted);
  res.json(incompleteTasks);
});



// Middleware para gestionar parámetros correctos
const paramHandler = (req, res, next) => {
  if (req.params.id && !isNaN(req.params.id)) {
    next();
  } else {
    res.status(400).send('Parámetros incorrectos');
  }
};

router.get('/tasks/:id', paramHandler, (req, res) => {
  const taskId = req.params.id;
  res.send(`Mostrando detalles de la tarea con ID ${taskId}`);
});

module.exports = router;

