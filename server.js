const express = require('express');
const cors = require('cors');
const tasks = require('./tasks');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/tasks', (req, res) => {
    res.json(tasks.getAllTasks());
});

app.post('/tasks', (req, res) => {
    const { title } = req.body;
    if (!title) {
        return res.status(400).json({ error: 'Title is required' });
    }
    const newTask = tasks.createTask(title);
    res.status(201).json(newTask);
});

app.put('/tasks/:id/complete', (req, res) => {
    const { id } = req.params;
    const updatedTask = tasks.toggleTaskCompletion(id);
    if (updatedTask) {
        res.json(updatedTask);
    } else {
        res.status(404).json({ error: 'Task not found' });
    }
});

app.delete('/tasks/:id', (req, res) => {
    const { id } = req.params;
    const isDeleted = tasks.deleteTask(id);
    if (isDeleted) {
        res.status(204).end();
    } else {
        res.status(404).json({ error: 'Task not found' });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});