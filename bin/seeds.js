const mongoose = require("mongoose");
const dbName = 'Iron Data'
mongoose.connect(`mongodb://localhost/${dbName}`)

const IronMan = require('../models/dataIronMan.model')
IronMan.collection.drop()

const ironMans =[


]
    

    IronMan.create(ironMans)
    .then(allIronMans => {
        console.log(`Created ${allIronMans.length} the Iron Man Data`)
        mongoose.connection.close();
    })
    .catch(err => console.log('There was an error creating the Iron Man Data', err))
  