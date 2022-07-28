# Orden

A. Definir las rutas
B. Definir los verbos de cada ruta

B.1. /tasks
B.1.1  - GET (obtener todas las tareas)
B.1.2  - POST (crear tareas)
B.2. /tasks/:id
B.2.1  - GET (obtener tarea en especifico en especifico)
B.2.2  - PUT (editar tarea)
B.2.3  - DELETE (eliminar tarea)

C. Crear los controladores
```javascript
    const getAllTasks = () => {
        return taskDB
    }
    
```

D. Crear los servicios (validaciones)
E. Crear las rutas     (Divididas por peticiones)