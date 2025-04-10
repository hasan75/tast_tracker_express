const { v4: uuidv4 } = require('uuid');

let tasks = [
    { id: uuidv4(), title: 'Explore React with Nuxt', completed: false },
    { id: uuidv4(), title: 'Build a Task Tracker Application with Node & Express', completed: false },
    { id: uuidv4(), title: 'Build Frontend with Nuxt js', completed: false },
    { id: uuidv4(), title: 'Maintain Versioning with Git', completed: false },
    { id: uuidv4(), title: 'Deploy to Production', completed: false }
];

const getAllTasks = () => tasks;

const createTask = (title) => {
    const newTask = {
        id: uuidv4(),
        title,
        completed: false
    };
    tasks.push(newTask);
    return newTask;
};

const toggleTaskCompletion = (id) => {
    const task = tasks.find(t => t.id === id);
    if (task) {
        task.completed = !task.completed;
        return task;
    }
    return null;
};

const deleteTask = (id) => {
    const taskIndex = tasks.findIndex(t => t.id === id);
    if (taskIndex !== -1) {
        tasks.splice(taskIndex, 1);
        return true;
    }
    return false;
};

module.exports = {
    getAllTasks,
    createTask,
    toggleTaskCompletion,
    deleteTask
};