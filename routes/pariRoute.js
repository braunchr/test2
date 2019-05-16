const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const models = require('../models/dbModels');

// this handles all the routing of this specific route 
// so no more filtering is required

var bodyParser = require("body-parser");
router.use(bodyParser.json({ extended: true })); // for parsing application/json
router.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded


router.post('/', function (req, res) {

    var betA = new models.betA(req.body);

    betA
        .save()
        .then(result => {
            res.status(201).json({
                message: 'Saved correctly',
                //status: result
            });

        })
        .catch(err => {
            res.status(500).json({
                message: "Error saving to the database",
                code: err
            });
        });
});




router.delete('/', function (req, res) {

    var betA = models.betA;

    betA
    .remove()
    .then(result => {
        res.status(201).json({
            message: 'All records deleted from the database',
            //status: result
        });

    })
    .catch(err => {
        res.status(500).json({
            message: "Error deleting from the database",
            code: err
        });
    });
});

router.get('/', (req, res, next) => {
  
    var betA = models.betA;

    betA.find()
        .exec()
        .then(doc => {
            console.log('All docs fron database', doc);
            if (doc===null)
                res.status(404).json({ message: 'nothing found in database', value: id })
            else
                res.status(200).json({message: 'all objects found in database', value: doc});
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ message: 'error finding stuff in db', error: err });
        });

});



router.get('/:rowId', (req, res, next) => {

    var id = req.params.rowId;
    var betA = models.betA;

    betA.findById(id)
        .exec()
        .then(doc => {
            console.log('query fron database', doc);
            if (doc===null)
                res.status(404).json({ message: 'no object found with this id', value: id })
            else
                res.status(200).json({message: 'object found in database', value: doc});
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ message: 'error finding by Id', error: err });
        });

});



module.exports = router; //required to send back to the main application