const { Router } = require('express');
const { check } = require('express-validator');
const validateAtibutes = require('../middleware/validateAtibutes');
require('dotenv').config(); // Recibe las variables de entorno

const router = Router();
const loginController = require('../controllers/login_register.controller');

// Registro de Usuario Turista
router.post('/register', [
    check('usuario', 'El usuario es obligatorio').not().isEmpty(),
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'El password es obligatorio').not().isEmpty(),
    validateAtibutes],
    loginController.register
);

// Login de Usuario Turista
router.post('/login', [
    check('usuario', 'El usuario es obligatorio').not().isEmpty(),
    check('password', 'El password es obligatorio').not().isEmpty(),
    validateAtibutes],
    loginController.login
);

module.exports = router;