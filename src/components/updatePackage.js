import React, { useState ,useEffect} from "react";
import axios from "axios";
import { useForm } from 'react-hook-form';

export default function UpdatePackage(id) {

    const [packages,setpackages] = useState([]);

    useEffect(() => {
        function getPackages(){
            axios.get(`http://localhost:8070/tourpackage/get/${id}`).then((res) => {
                console.log(res.data);
                setpackages(res.data);
            }).catch((err)=>{
                alert(err.message)
            })
        }
        getPackages();
    },[])

    const { register, handleSubmit, formState: { errors } } = useForm();

    const [CountryID, setCountry] = useState("");
    const [PackageName, setPname] = useState("");
    const [No_of_dates, setNo_of_dates] = useState("");
    const [Description, setDescription] = useState("");
    const [PricePerPerson, setPricePerPerson] = useState("");
    const [HotelType, setHotelType]  = useState("");

    function SendData(e) {
        e.preventDefault();
        
        const newPackage = {
            CountryID,
            PackageName,
            HotelType,
            No_of_dates,
            Description,
            PricePerPerson,
        }

        console.log(newPackage);

        axios.post(`http://localhost:8070/tourpackage/update/${id}`, newPackage).then(() => {
            alert("Package updated");
        }).catch((err) => {
            alert(err)
        })
    }

    return (
                <form onSubmit={SendData}>
                <h2> <center>Add Package</center> </h2>
                <center>
                    <div class="form-group">
                        <label for="country">Select Country</label>
                        <select class="form-control" id="CountryID" style={{ width: "70%" }} onChange={(e) => {setCountry(e.target.value) }} value={packages.CountryID} required>
                            <option>Select</option>
                            <option>Japan</option>
                            <option>China</option>
                            <option>Sri Lanka</option>
                            <option>Bali</option>
                            <option>India</option>
                            <option>Malasia</option>
                            <option>Maldives</option>
                            <option>France</option>
                        </select>
                    </div>
    
                    <div class="form-group">
                        <label for="exampleFormControlInput1">Package Name</label>
                        <input type="text" value={packages.PackageName} class="form-control" id="PackageName" placeholder={"Enter Package Name"} style={{ width: "70%" }} 
                        onChange={(e) => {setPname(e.target.value) }} required/><br></br>
                    </div>
    
                    <div class="form-group">
                        <label for="HoyelType">Select Hotel Type</label>
                        <select class="form-control" id="HotelType" style={{ width: "70%" }} onChange={(e) => {setHotelType(e.target.value) }} value={packages.HotelType} required>
                            <option>Select</option>
                            <option>Luxury</option>
                            <option>Beach Side</option>
                            <option>5 Star</option>
                            <option>Bungalows</option>
                        </select>
                    </div>
    
                    <div class="form-group">
                        <label for="exampleFormControlInput1">Number of dates</label>
                        <input type="number" class="form-control" id="No_of_dates" placeholder="Enter Duration" {...register("Number Of Dates",
                        {required: true, min: 0 , maxLength: 3, oninput: "this.value = Math.abs(this.value)"})} 
                        style={{ width: "70%" }} onChange={(e) => {setNo_of_dates(e.target.value) }} value={packages.No_of_dates} required/><br></br>
                    </div>
    
                    {/*<label for="myfile">Select images: </label>
                    <input type="file" id="myfile" name="myfile" multiple /> <br></br><br></br> */}
    
                    <div class="form-group">
                        <label for="exampleFormControlTextarea1">Description</label>
                        <textarea class="form-control" id="Description" rows="3" style={{ width: "70%" }} 
                        onChange={(e) => {setDescription(e.target.value) }} value={packages.Description} required></textarea>
                    </div>
    
                    <div class="form-group">
                        <label for="exampleFormControlInput1">Price per person</label>
                        <input type="number" class="form-control" id="Price-per-person" placeholder="Enter price per person" {...register("Number Of Person", {required: true, min: 1, maxLength: 3})}  
                        style={{ width: "70%" }} onChange={(e) => {setPricePerPerson(e.target.value) }} value={packages.PricePerPerson} required/><br></br>
                    </div>
    
                    <button type="submit" class="btn btn-primary" style={{ marginRight: "50px", marginBottom: "15px" }} >Update Package</button>
                    <span><button><a href="all"> View Exsisting Package</a></button></span>
                </center>
                </form>
    )
}