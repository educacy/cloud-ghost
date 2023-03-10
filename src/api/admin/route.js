const express = require('express');
const router = express.Router();
const Admin = require('./index.js');
const { verifySession } = require("supertokens-node/recipe/session/framework/express");
const rbac = require("../_auth/rbac.js");

router.get('/status', verifySession(), rbac.auth("admin") ,(req, res) => res.send('Welcome to Admin API'));


router.post('/role/create', verifySession(), rbac.auth("admin"),  Admin.controller.createRole);
router.post('/role/get-all', verifySession(), rbac.auth("admin"), Admin.controller.getAllRoles);
router.post('/role/assign', verifySession(), rbac.auth("admin"), Admin.controller.assignRole);

router.post('/role/get-all-users', verifySession(), rbac.auth("admin"), Admin.controller.getAllUsersThatHaveRole);



module.exports = router;
