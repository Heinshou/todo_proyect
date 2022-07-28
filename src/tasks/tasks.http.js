const { createTask, getAllTasks, getTaksByID, deleteTask, updateTask } = require('./tasks.controllers')


//? Creamos la validacion para llamar a todas las tareas
const getAll = (req, res) => {
    const data = getAllTasks()
    res.status(200).json(data)
}


//? Creamos la validacion para llamar una tarea en especifico (un poco más complejo ya que se necesita un parametro(id))

const getByID = (req, res) => {
    const id = Number(req.params.id) //usamos number porque todos los "params" vienen como strings

    if (id) {
        const data = getTaksByID(id)
        if (data.id) {
            res.status(200).json(data)
        } else {
            res.status(400).json({ message: 'Invalid ID' })
        }
        res.status(200).json(data)
    } else {
        res.status(400).json({ message: 'ID is not a number' })
    }
}

//? Creamos las validaciones para eliminar una tarea 

const deleteByID = (req, res) => {
    const id = Number(req.params.id)
    if (typeof id === 'number') {
        const deleted = deleteTask(id)
        if (deleted) {
            res.status(204).json()
        } else {
            res.status(400).json({ message: 'Try with another ID' })
        }
    } else {
        res.status(400).json({ message: 'Invalid ID' })
    }
}

//? Creamos las validaciones para crear una nueva tarea para esto necesitamos el body del request

const create = (req, res) => {
    const data = req.body
    if (data.taskName && data.description && data.date && data.done) {
        const response = createTask(data)
        res.status(201).json(response)
    } else {
        res.status(400).json({ message: 'Invalid Arguments' })
    }
}

//? Creamos las validaciones para actualizar una tarea para esto necesitamos el ID y el body del request

const update = (req, res) => {
    const id = Number(req.params.id)
    const data = req.body
    if (data.taskName && data.description && data.date && data.done) {
        const response = updateTask(data, id)
        res.status(201).json(response)
    }
    else {
        res.status(400).json({ message: 'Invalid Arguments' })
    }
}


module.exports = {
    getAll,
    getByID,
    deleteByID,
    create,
    update
}