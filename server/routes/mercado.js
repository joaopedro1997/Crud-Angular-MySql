const express = require('express');

const mercadoController = require('../controllers/mercado')


const router = express.Router();

router.get('/', mercadoController.getAllMercado)
router.post('/', mercadoController.postProduto);
router.put('/', mercadoController.putProduto);
router.delete('/:id', mercadoController.deleteProduto);


module.exports = router