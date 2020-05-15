const express = require('express');
const router = express.Router();

router.get('/', (req, res, next)=>{
  res.status(200).json({
    message: 'You are in the order section'
  });
});

router.post('/', (req, res, next)=>{
  res.status(200).json({
    message: 'You are in the order section'
  });
});

router.get('/:orderID', (req, res, next)=>{
  id = req.params.orderID;
  res.status(200).json({
    message: 'You are in the order section',
    id: id
  });
});

module.exports = router;
