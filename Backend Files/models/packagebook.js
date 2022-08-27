const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookpackageschema = new Schema({

    PackageID: {
        type: String
    },
    PackageName: {
        type: String
    },
    BookedDate: {
        type: String
    },
    personCount: {
        type: String
    },
    Startingdate: {
        type: String
    },
    Total: {
        type: String
    }
})

const packagebook = mongoose.model("PackageBooking", bookpackageschema);

module.exports = packagebook;