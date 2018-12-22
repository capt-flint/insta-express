const express = require('express');
const path = require('path');
const router = express.Router();

// Get route for page upload
router.get('/', (req, res) =>{
    res.render('upload', {title : 'Upload page'});
});

router.post('/', (req, res) =>{
    if (Object.keys(req.files).length == 0) {
        return res.status(400).send('No files were uploaded.');
    }
    let newImg = req.files.newImg;
    let type = path.extname(newImg.name)
    let fieName = req.body.fileName + type;
    newImg.mv('./storage/img/'+fieName, function(err) {
      if (err)
        return res.status(500).send(err);

      res.send('File uploaded!');
    });

})

module.exports = router;
