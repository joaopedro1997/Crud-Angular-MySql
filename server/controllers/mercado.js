const Mercado = require('../models/mercado');
const bodyParser = require('body-parser');

exports.getAllMercado = async ( req, res, next ) =>{
  try{
    const [allProdutos] = await Mercado.fetchAll();
    res.status(200).json(allProdutos)
    
  } catch(err){
      if (!err.statusCode){
        err.statusCode = 500
    }
    next(err);
  }
};

exports.postProduto = async ( req, res, next ) =>{
  try{
    const postResponse = await Mercado.post(req.body.item);
    res.status(201).json(postResponse)
    
  } catch(err){
      if (!err.statusCode){
        err.statusCode = 500
    }
    next(err);
  }
};
exports.putProduto = async ( req, res, next ) =>{
  try{
    const putResponse = await Mercado.update(req.body.id, req.body.item);
    res.status(201).json(putResponse)
    
  } catch(err){
      if (!err.statusCode){
        err.statusCode = 500
    }
    next(err);
  }
};
exports.deleteProduto = async ( req, res, next ) =>{
  try{
    const deleteResponse = await Mercado.delete(req.params.id);
    res.status(201).json(deleteResponse)
    
  } catch(err){
      if (!err.statusCode){
        err.statusCode = 500
    }
    next(err);
  }
};

