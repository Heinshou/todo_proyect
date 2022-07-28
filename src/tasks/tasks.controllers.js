//? Creamos el modelo base para la data que vamos a utilizar 
const taskDB = [
    {
        id: 1,
        taskName: 'practice',
        description: 'go to de soccer practice',
        date: '16/01/2022',
        done: true,
    }
]

//? Controlador para tareas en general

const getAllTasks = () => {
    return taskDB;
};

//? Controlador para una tarea en especifico (Filtrado por su id)
const getTaksByID = (id) => {
    const filteredDB = taskDB.filter((user) => user.id === id)
    return filteredDB[0]
};

//? Controlador para crear una nueva tarea (En caso de no tener tareas le asigna el id 1 de otra manera asigna el id de la ultima posicion )

const createTask = (taskObj) => {
    if(taskDB.length === 0){
        const newTask = {
            id:1,
            taskName: taskObj.taskname,
            description: taskObj.description,
            date: taskObj.date,
            done: taskObj.done
        };
        taskDB.push(newTask);
        return newTask
    }

    const newTask = {
        id:taskDB[taskDB.length -1].id + 1,
        taskName: taskObj.taskName,
        description: taskObj.description,
        date: taskObj.date,
        done: taskObj.done
    }
    taskDB.push(newTask)
    return newTask
};

//? Controllador para eliminar una tarea (busca el id que se le pasa al controlador entre las tareas existentes)

const deleteTask =  (id) => {
    const index = taskDB.findIndex((task) => task.id === id)
    if(index !== -1){
        taskDB.splice(index,1)
    }
    return taskDB
};

//? Controlador para actualizar una tarea (busca la tarea a actualizar por el id que se le pasa a la funcion y la actuliza con la data que se le da)

const updateTask = (data, id) => {
    const index = taskDB.findIndex(task => task.id === id)
    if(data.taskName && data.description && data.date && data.done){
        taskDB[index] = {
            id,
            taskName: data.taskName,
            description: data.description,
            date: data.date,
            done: data.done
        }
    }
    return taskDB[index]

};

//? Exportamos nuestros controladores para usarlos en nuestras validaciones

module.exports = {
    getAllTasks,
    getTaksByID,
    createTask,
    deleteTask,
    updateTask
}