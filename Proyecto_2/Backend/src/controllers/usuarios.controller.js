// crear una constante de tipo json con 10 claves y nombres de usuarios
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


const getUser = async (req, res) => {
    const { id } = req.body;
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
}

module.exports = {
    getUser
}