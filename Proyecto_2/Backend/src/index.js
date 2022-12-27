const app = require('./app');
require('dotenv').config(); // Recibe las variables de entorno

const PORT = process.env.PORT || 3200;

const USER= process.env.USER;
const PASSWORD= process.env.PASSWORD;
const EMAIL = process.env.EMAIL;

console.log('Aqui pueden hacer el log del usuario administrador');

console.log('Aqui pueden vaciar su archivos js')


app.listen(PORT, () => {
    console.log(`Servidor en el puerto ${PORT}`);
});