const express = require('express');
const router = express.Router();
const authController = require('../auth/authController');
const submitController = require('../patient-details/patientController');
const doctorDataController = require('../doctor-details/doctorController')

router.post('/login', authController.loginAuthControllerFn);
router.post('/register', authController.createAuthControllerFn);

router.get('/data', authController.getAllUsersControllerFn);
router.delete('/data/:id', authController.deleteUserByIdControllerFn);


router.post('/details/submit',submitController.createSubmitControllerFn);
router.get('/details/retrieve',submitController.getSubmitControllerFn);
router.patch('/details/update/:id',submitController.updateSubmitControllerFn)
router.delete('/details/delete/:id',submitController.deleteSubmitControllerFn)

router.post('/data/submit',doctorDataController.createSubmitControllerFn);
router.get('/data/retrieve',doctorDataController.getSubmitControllerFn);
router.patch('/data/update/:id',doctorDataController.updateSubmitControllerFn)
router.delete('/data/delete/:id',doctorDataController.deleteSubmitControllerFn)

module.exports = router;