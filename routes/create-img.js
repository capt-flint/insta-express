const express = require('express');
const router = express.Router();
const fs = require('fs');

router.get('/', (req, res) =>{
    res.render('create-img');
});

router.post('/', (req, res) =>{
    if (Object.keys(req.files).length == 0) {
        return res.status(400).send('No files were uploaded.');
    }
    let newTxt = req.files.newTxtFile;
    newTxt.mv('./storage/txt/'+newTxt.name, function(err) {
      if (err)
        return res.status(500).send(err);
      res.send('File uploaded!');
    });

    console.log(newTxt.data.toString('utf8'));
});

module.exports = router;
