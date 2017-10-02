'use strict';

var express = require('express');
var router = express.Router();
var chalk = require('chalk')

module.exports = router;

router.get('/',(req, res, next)=>{
    console.log(chalk('You are here!'))
    res.send('YOU GOT ME!   '+ Date())
})

router.get('/:name/tasks', function (req, res, next) {
    if (!todos.list(req.params.name)) {
        res.sendStatus(404)
    }
    if (!req.query.status) {
        res.json(todos.list(req.params.name))
    }
    else {
        if (req.query.status === 'active') {
            res.json(todos.active(req.params.name))
        }
        if (req.query.status === 'complete') {
            res.json(todos.done(req.params.name))
        }
    }
}) //end Specific user's tasks

// Add tasks for a specific user
router.post('/:name/tasks', function (req, res, next) {
    let keys = Object.keys(req.body)
    for (var key in keys) {
        if (keys[key] !== 'content' && keys[key] !== 'complete') {
            res.sendStatus(400)
            return
        }
    }
    todos.add(req.params.name, req.body)
    res.status(201).json(todos.list(req.params.name)[0])
}) //end add users tasks