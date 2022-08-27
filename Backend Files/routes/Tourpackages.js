const router = require("express").Router();
let Package = require("../models/tourpackage");

router.route("/add").post((req,res)=>{

    const PackageName = req.body.PackageName;
    const HotelType = req.body.HotelType;
    const Description = req.body.Description;
    const No_of_dates = req.body.No_of_dates;
    const CountryID = req.body.CountryID;
    const PricePerPerson = req.body.PricePerPerson;

    const newPackage = new Package({
        PackageName,
        HotelType,
        Description,
        No_of_dates,
        CountryID,
        PricePerPerson
    })
    // if(req.file){
    //     newPackage.image = req.file.path;
    // }

    newPackage.save().then(()=>{
        res.json("Package Added")
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/all").get((req,res)=>{
    Package.find().then((packages)=>{
        res.json(packages)
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/update/:id").put(async(req, res) =>{
    let packageId = req.params.id;
    console.log(packageId)
    const PackageName= req.body.newPackage.PackageName;
    const HotelType=req.body.newPackage.HotelType; 
    const Description=req.body.newPackage.Description; 
    const No_of_dates=req.body.newPackage.No_of_dates;
    const CountryID=req.body.newPackage.CountryID;
    const PricePerPerson=req.body.newPackage.PricePerPerson;
    //const image = req.file.image;

    const updatePackage = {
        PackageName,
        //image,
        HotelType,
        Description,
        No_of_dates,
        CountryID,
        PricePerPerson
    }
    console.log(PackageName);
    const update = await Package.findByIdAndUpdate(packageId, updatePackage)
    .then(() =>{
        res.status(200).send({status: "Package updated",})
    }).catch((err) => {
        console.log(err);
    res.status(500).send({status: "Error with upading data", error: err.message});
})   
}) 


router.route("/delete/:id").delete(async(req,res) =>{
    let packageId = req.params.id;

    await Package.findByIdAndDelete(packageId)
    .then(() => {
        res.status(200).send({status: "Package deleted"});
    }).catch((err)=> {
        console.log(err.message);
        res.status(500).send({status: "Error with delete package", error: err.message});
    })
})

router.route("/get/:id").get(async(req,res) =>{
    let packageId = req.params.id;
    const package = await Package.findById(packageId)
    .then((package) => {
        res.status(200).send({status: "Package fetched", package});
    }).catch((err) =>{
        console.log(err.message);
        res.status(500).send({status: "Error with get package", error: err.message});
    })
})

module.exports = router;