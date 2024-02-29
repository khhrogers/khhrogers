// this is component-service-api-server.js-routes-controller 

const express = require("express");
const router =express.Router();
const usersCtrl = require('../../controllers/api/users')

//pose/api/users

router.post('/', usersCtrl.create)

router.post('/login', usersCtrl.logIn)

module.exports = router
