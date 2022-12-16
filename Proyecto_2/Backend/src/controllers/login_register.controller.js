const register = async (req, res) => {
    const { nombre, usuario, email, foto, password } = req.body;
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