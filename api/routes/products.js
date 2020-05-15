const express = require('express');
const router = express.Router();

router.get('/', (req, res, next)=>{
  res.status(200).json({
    message: 'You are in the product get section'
  });
});

router.post('/', (req, res, next)=>{
  res.status(200).json({
    message: 'You are in the product post section'
  });
});

router.patch('/', (req, res, next)=>{
  res.status(200).json({
    message: 'You are in the product patch section'
  });
});

router.get('/:productID', (req, res, next)=>{
  id = req.params.productID;
  if(id === 'special'){
    res.status(200).json({
      message: 'This is a special produce',
      id: id
    });
  }else{
    res.status(200).json({
      message: 'You are in the ordinary product section',
      id: id
    });
  }
});

module.exports = router;
