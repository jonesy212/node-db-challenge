//centralize router by setting router up in here
//but placing defautls inside of index.js(main BE file)

const primaryRouter = require('express').Router()
primaryRouter.use(logger)

//Primary
// const primaryServer = require('express')
//ROUTER IMPORTS
const projectsRouter = require('./projects/project-router')
const resourcesRouter = require('./resources/resources-router')
const tasksRouter = require('./tasks/tasks-router')
//ROUTES
primaryRouter.use('/projects', projectsRouter)
primaryRouter.use('/resources', resourcesRouter)
primaryRouter.use('/tasks', tasksRouter)




function logger(req, res, next) {
    const method = req.method;
    const url = req.url;
    const time = new Date().toISOString();
    console.log(`a ${method} request to ${url} was made at ${time} o'clock.`)
    next()
  };

module.exports = primaryRouter