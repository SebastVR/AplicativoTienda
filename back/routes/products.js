const express = require('express')
const router = express.Router();

const {getProducts, newProduct, getProductById, updateProduct, deleteProduct} = require('../controllers/productsController');    //Traemos la respuesta json desde el controlador

router.route("/productos").get(getProducts)    //Establecemos desde que ruta queremos ver el getProducts
router.route("/producto/nuevo").post(newProduct)    //Establecemos la ruta
router.route("/producto/:id").get(getProductById)    //Establecemos la ruta id los : quiere decir hace parte de los parámetros del objeto
router.route("/producto/:id").put(updateProduct)    //Ruta para actualizar 
router.route('/producto/:id').delete(deleteProduct);    //Ruta para actualizar 



module.exports = router;