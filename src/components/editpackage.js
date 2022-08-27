import React from 'react';
import { useState, useEffect } from "react";
import { useForm } from 'react-hook-form';
import axios from "axios";

function Editpackage(props) {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const id = (props.match.params.id)
    const [CountryID, setCountry] = useState("");
    const [PackageName, setPname] = useState("");
    const [No_of_dates, setNo_of_dates] = useState("");
    const [Description, setDescription] = useState("");
    const [PricePerPerson, setPricePerPerson] = useState("");
    const [HotelType, setHotelType] = useState("");

    const [countrylist, setcountrylist] = useState([]);

    function sendUpdate(e) {
        e.preventDefault();

        const newPackage = {
            CountryID,
            PackageName,
            HotelType,
            No_of_dates,
            Description,
            PricePerPerson,

        }

        axios.put(`http://localhost:8070/tourpackage/update/${id}`, { newPackage })
            .then(() => {
                alert("Update Successfully");
            }).catch((err) => {
                alert(err)
                console.log(err);
            })
        //window.location.href = "/all";
    }

    useEffect(() => {
        axios.get(`http://localhost:8070/tourpackage/get/${id}`).then(res => {

            setPname(res.data.package.PackageName);
            setCountry(res.data.package.CountryID);
            setNo_of_dates(res.data.package.No_of_dates);
            setDescription(res.data.package.Description);
            setPricePerPerson(res.data.package.PricePerPerson);
            setHotelType(res.data.package.HotelType);

            console.log(res.data);
        }).catch((err) => {
            alert(err.message)
        })

        axios.get("http://localhost:8070/country/all").then((res) => {
            console.log(res.data);
            setcountrylist(res.data);
        }).catch((err) => {
            alert(err.message)
        })
    }, [])

    return (
        <form onSubmit={sendUpdate}>
            <h2> <center>Update Package</center> </h2>
            <center>
                <div class="form-group">
                    <label for="CountryID">Select Country</label>
                    <select class="form-control" id="CountryID" style={{ width: "70%" }} onChange={(e) => { setCountry(e.target.value) }} value={CountryID} required>
                        {countrylist && countrylist.map((country, key) => (
                            <option key={key}>{country.CountryName}</option>
                        ))}
                    </select>
                </div>

                <div class="form-group">
                    <label for="exampleFormControlInput1">Package Name</label>
                    <input type="text" value={PackageName} class="form-control" id="PackageName" placeholder={"Enter Package Name"} style={{ width: "70%" }}
                        onChange={(e) => { setPname(e.target.value) }} required /><br></br>
                </div>

                <div class="form-group">
                    <label for="HoyelType">Select Hotel Type</label>
                    <select class="form-control" id="HotelType" style={{ width: "70%" }} onChange={(e) => { setHotelType(e.target.value) }} value={HotelType} required>
                        <option value="Select">Select</option>
                        <option value="Luxury">Luxury</option>
                        <option value="Beach Side">Beach Side</option>
                        <option value="5 Star">5 Star</option>
                        <option value="Bungalows">Bungalows</option>
                    </select>
                </div>

                <div class="form-group">
                    <label for="exampleFormControlInput1">Number of dates</label>
                    <input type="number" class="form-control" id="No_of_dates" placeholder="Enter Duration" {...register("Number Of Dates",
                        { required: true, min: 0, maxLength: 3, oninput: "this.value = Math.abs(this.value)" })}
                        style={{ width: "70%" }} onChange={(e) => { setNo_of_dates(e.target.value) }} value={No_of_dates} required /><br></br>
                </div>

                {/*<label for="myfile">Select images: </label>
                    <input type="file" id="myfile" name="myfile" multiple /> <br></br><br></br> */}

                <div class="form-group">
                    <label for="exampleFormControlTextarea1">Description</label>
                    <textarea class="form-control" id="Description" rows="3" style={{ width: "70%" }}
                        onChange={(e) => { setDescription(e.target.value) }} value={Description} required></textarea>
                </div>

                <div class="form-group">
                    <label for="exampleFormControlInput1">Price per person</label>
                    <input type="number" class="form-control" id="Price-per-person" placeholder="Enter price per person" {...register("Number Of Person", { required: true, min: 1, maxLength: 3 })}
                        style={{ width: "70%" }} onChange={(e) => { setPricePerPerson(e.target.value) }} value={PricePerPerson} required /><br></br>
                </div>

                <button type="submit" class="btn btn-primary" style={{ marginRight: "50px", marginBottom: "15px" }} >Update Package</button>
                <span><button><a href="/all/"> View Exsisting Package</a></button></span>
            </center>
        </form>
    );
}

export default Editpackage
