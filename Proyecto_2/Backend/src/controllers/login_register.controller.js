const { signUpCognito, signInCognito } = require("../middleware/cognito");

const { uploadFile } = require("../middleware/bucket");

const register = async (req, res) => {
    const { usuario, password } = req.body;
    console.log('Datos recibidos', usuario, password)
    
    //-----
    // aqui hacer la validacion de que no se encuentre el usuario en la estructura de datos
    //-----

    await signUpCognito(req,res);
    //subir una foto
    await uploadFile(req,res);

    return res.json({
        status: true,
        msg: "Usuario registrado",
        usuario,
        password
    });
}

//login
const login = async (req, res) => {
    const { usuario, password } = req.body;
    console.log('Datos recibidos', usuario);
    //-----
    // aqui hacer la validacion de que se encuentre el usuario en la estructura de datos
    //-----
    //Mandar a traer de cognito
    await signInCognito(req,res);
}

module.exports = {
    register,
    login
}