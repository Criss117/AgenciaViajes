import express from 'express';
import router  from './routes/index.js';
import db from './config/db.js';
import dotenv from 'dotenv/config';

const app = express();

//conectar bd
db.authenticate()
    .then(()=>{
        console.log('conectado');
    })
    .catch(error => console.log(error));

//definir puerto
const port = process.env.PORT || 4000;

//habilitara pug
app.set('view engine','pug');

//obtener año
app.use((req,res,next)=>{
    const year = new Date();
    res.locals.actualYear = year.getFullYear(); 
    res.locals.nombreSitio = "Agencia de Viajes"; 
    next();
});

//agregar body parser pra leer form
app.use(express.urlencoded({extended:true}));

//definir public
app.use(express.static('public'));

//agregar router
app.use('/',router);

app.listen(port, () =>{
    console.log(`El servidor esta funcionandoe en el puerto: ${port}`);
});