import { Viaje } from "../models/Viaje.js";
import { Testimonial } from "../models/Testimonial.js";

const guardarTestimonial = async (req,res)=>{
    //validar
    const{nombre,email,mensaje} = req.body;
    
    const errores = []
    
    if(nombre.trim() === ''){
        errores.push({mensaje:'el nombre esta vacio'}); 
    }

    if(email.trim() === ''){
        errores.push({mensaje:'el corre esta vacio'}); 
    }

    if(mensaje.trim() === ''){
        errores.push({mensaje:'el mensaje esta vacio'}); 
    }

    if(errores.length > 0){
        const testimoniales = await Testimonial.findAll();
        //mostrar erroes
        res.render('testimoniales',{
            pagina: 'Testimoniales',
            errores,
            nombre,
            email,
            mensaje,
            testimoniales
        });
    }else{
        //almacener en db
        try {
            await Testimonial.create({
                nombre,
                email,
                mensaje
            });
            res.redirect('/testimoniales');
        } catch (error) {
            console.log(error);
        }
    }
}

export{guardarTestimonial}