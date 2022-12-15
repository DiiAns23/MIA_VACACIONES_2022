const { Router } = require('express');
const { check } = require('express-validator');
const validateAtibutes = require('../middleware/validateAtibutes');
require('dotenv').config(); // Recibe las variables de entorno

const router = Router();
const usuariosController = require('../controllers/usuarios.controller');
const { route } = require('../app');

// Ruta principal
router.get('/', (req, res) => {
    res.json({
        status: "1",
        msg: "Estamos en la api de usuarios"
    });
});


// Ruta para obtener todos los usuarios
router.get('/getUsers', (req,res)=>{
    res.json({
        status: "1",
        msg: "Lista de usuarios",
        usuarios
    });
});

router.post('/getUser',[
    check('id', 'El id es obligatorio').not().isEmpty(),
    validateAtibutes
    ],
    usuariosController.getUser
)

const usuarios = {
    1: "usuario1",
    2: "usuario2",
    3: "usuario3",
    4: "usuario4",
    5: "Diego Obin",
    6: "usuario6",
    7: "usuario7",
    8: "usuario8",
    9: "usuario9",
    10: "usuario10"
}

router.get('/getUser2/:id', (req, res) => {
    const { id } = req.params;
    const user = usuarios[id];
    if (user) {
        res.json({
            status: true,
            msg: "Usuario encontrado",
            user
        });
    }else{
        res.json({
            status: false,
            msg: "Usuario no encontrado",
            user
        });
    }
})


module.exports = router;