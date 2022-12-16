const { Router } = require('express');
const { check } = require('express-validator');
const validateAtibutes = require('../middleware/validateAtibutes');
require('dotenv').config(); // Recibe las variables de entorno

const router = Router();
const usuariosController = require('../controllers/usuarios.controller');

// Ruta principal
router.get('/', (req, res) => {
    res.json({
        status: "1",
        msg: "Estamos en la api de usuarios"
    });
});

// Registro de Usuario Turista
router.post('/register', [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('usuario', 'El usuario es obligatorio').not().isEmpty(),
    check('email', 'El email es obligatorio').not().isEmpty(),
    check('foto', 'La foto es obligatoria').not().isEmpty(),
    check('password', 'El password es obligatorio').not().isEmpty(),
    validateAtibutes],
    usuariosController.register
);