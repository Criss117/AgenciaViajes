import Sequelize from "sequelize";
import db from "../config/db.js";

export const Testimonial = db.define('testimoniales',{
    testimonial_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
    },
    nombre: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    mensaje: {
        type: Sequelize.STRING
    }
});