const producto = require('../models/productos');
const fetch =(url)=>import('node-fetch').then(({default:fetch})=>fetch(url)); //Usurpación del require

// Ver la lista de productos
exports.getProducts = async (req, res, next) => {
  const productos = await producto.find();
  if(!productos){
    return res.status(404).json({
      success:false,
      error:true
    })
  }
  res.status(200).json({
    success: true,
    count: productos.length,
    productos,
    // message: "En esta ruta ud va a poder ver todos los productos"
  });
};

// Ver un producto por id
exports.getProductById = async (req, res, next) => {
  const product = await producto.findById(req.params.id);
  if (!product) {
    return res.status(404).json({
      success: false,
      message: 'No encontramos ese producto',
    });
  }
  res.status(200).json({
    success: true,
    message: 'Aquí debajo encuentras información sobre tu producto:',
    product,
  });
};

// Update un producto
exports.updateProduct = async (req, res, next) => {
  let product = await producto.findById(req.params.id);
  if (!product) {
    return res.status(404).json({
      success: false,
      message: 'No encontramos ese producto',
    });
  }
  // Si el objeto si existe, entonces si ejecuta la actualización
  product = await producto.findByIdAndUpdate(req.params.id, req.body, {
    new: true, // Valido solo los atributos nuevos o actualizados
    runValidators: true,
  });
  // Responde OK si el producto si se actualizó
  res.status(200).json({
    success: true,
    message: 'Producto actualizado correctamente',
    product,
  });
};

// Eliminar un producto
exports.deleteProduct = async (req, res, next) => {
  const product = await producto.findById(req.params.id);
  if (!product) {
    return res.status(404).json({    // si el objeto no existe, return termina el método
      success: false,
      message: 'No encontramos ese producto',
    });
  }
  await product.remove();    // Eliminar  el proceso 
  res.status(200).json({
    success: true,
    message: 'Producto eliminado correctamente',
  });
};

// Crear nuevo producto /api/productos
exports.newProduct = async (req, res, next) => {
  const product = await producto.create(req.body);
  res.status(201).json({
    success: true,
    product,
  });
};


// Hablamos de fetch

// Ver todos los productos
function verProductos(){
  fetch('http://localhost:4000/api/productos')
    .then((res) => res.json())
    .then((res) => console.log(res))
    .catch(err => console.error(err))
}

// ver por id
function verProductoPorID(id){
  fetch('http://localhost:4000/api/producto/' + id)
    .then((res) => res.json())
    .then((res) => console.log(res))
    .catch((err) => console.error(err));

}

verProductoPorID("6355a63ad3bf2b077f66329c");