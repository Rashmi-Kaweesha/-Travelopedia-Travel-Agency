const router = require("express").Router();
let Country = require("../models/Country");
//const upload = require("../middleware/uploads");

router.route('/add').post((req,res)=>{
    const CountryName = req.body.CountryName;

    const newCountry = new Country({
        CountryName
    })
    // if(req.file){
    //     newCountry.image = req.file.path;
    // }

    newCountry.save().then(()=>{
        res.json("Country Added")
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/all").get((req,res)=>{
    Country.find().then((countries)=>{
        res.json(countries)
    }).catch((err)=>{
        console.log(err);
    })
})

module.exports = router;