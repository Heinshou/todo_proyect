const router = require('express').Router()
const httpTask = require('./tasks.http')

router.route('/tasks')
        .get(httpTask.getAll)
        .post(httpTask.create)

router.route('/tasks/:id')
        .get(httpTask.getByID)
        .delete(httpTask.deleteByID)
        .put(httpTask.update)


module.exports = {
    router
}