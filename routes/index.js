import express from "express";
import { paginaDetalleViajes, paginaInicio, paginaNosotros, paginaTestimonial, paginaViajes } from "../controllers/paginasController.js";
import { guardarTestimoniales } from "../controllers/testimonilaes.controller.js";

const router = express.Router();

router.get('/', paginaInicio);

router.get('/nosotros', paginaNosotros);

router.get('/viajes', paginaViajes);

router.get('/viajes/:slug', paginaDetalleViajes);

router.get('/testimoniales', paginaTestimonial);

router.post('/testimoniales', guardarTestimoniales);



export default router; 