# Orden

1. Definir las rutas
2. Definir los verbos de cada ruta

3.1. /tasks
3.1.1  - GET (obtener todas las tareas)
3.1.2  - POST (crear tareas)
3.2. /tasks/:id
3.2.1  - GET (obtener tarea en especifico en especifico)
3.2.2  - PUT (editar tarea)
3.2.3  - DELETE (eliminar tarea)

4. Crear los controladores
```javascript
    const getAllTasks = () => {
        return taskDB
    }
    
```

5. Crear los servicios (validaciones)
6. Crear las rutas     (Divididas por peticiones)