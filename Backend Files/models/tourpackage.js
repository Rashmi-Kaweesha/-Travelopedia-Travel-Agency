const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const packageschema = new Schema({

    PackageName: {
        type: String
    },
    // image: {
    //     type: String
    // },
    HotelType: {
        type: String
    },
    Description: {
        type: String
    },
    No_of_dates: {
        type: String
    },
    CountryID: {
        type: String
    },
    PricePerPerson: {
        type: String
    }

})

const tourpackage = mongoose.model("tourpackage", packageschema);

module.exports = tourpackage;