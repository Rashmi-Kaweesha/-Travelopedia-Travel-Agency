const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CountrySchema = new Schema({

    CountryName: {
        type: String
    },

    // image: {
    //     type: String
    // }
})

const Country = mongoose.model("country",CountrySchema);

module.exports = Country;