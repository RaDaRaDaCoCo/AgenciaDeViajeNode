import { Testimonial } from "../models/Testimoniales.js";

const guardarTestimoniales = async(req, res) => {
    console.log(req.body);
    //validar formulario
    const{ nombre, correo, mensaje} = req.body;

    const errores = [];

    if(nombre.trim() === '') {
        errores.push({'mensaje': 'Agrega tu Nombre'})
    }
    if(correo.trim() === '') {
        errores.push({'mensaje': 'Tu Correo es Obligatorio'})
    }
    if(mensaje.trim() === '') {
        errores.push({'mensaje': 'Un Testimonial no puede ir vacio'})
    }
    if (errores.length > 0) {
        //Consultar Testimonios existentes
        const testimoniales = await Testimonial.findAll();

        //Mostrar la vista con errores
        res.render('testimoniales', {
            pagina: 'Testimoniales',
            errores,
            nombre,
            correo,
            mensaje,
            testimoniales
        })
    }else{
        //almacenar en la base de datos
        try {
            await Testimonial.create({
                nombre,
                correo,
                mensaje
            });
            res.redirect('/testimoniales');
        } catch (error) {
            console.log(error);
        }
    }
}

export{
    guardarTestimoniales
}