import React, { useState } from "react";
import axios from "axios";

export default function AddCountry() {

    const [CountryName, setCountryName] = useState("");

    function SendData(e) {
        e.preventDefault();

        let newCountry = {
            CountryName
        }

        console.log(newCountry);

        axios.post('http://localhost:8070/country/add', newCountry).then(() => {
            alert("Country added");
            setCountryName("");
        }).catch((err) => {
            alert(err)
        })
    }

    return (

        <div className="form-group">
            <br /><br />
            <form onSubmit={SendData}>
                <h2> <center>Add Country</center> </h2>
                <div className="form-group">
                    <center>
                        <input type="text" className="form-control" id="CountryName" aria-describedby="country" placeholder="Enter Country" 
                        name="CountryName" 
                            style={{ width: "70%" }} onChange={(e) => {
                                setCountryName(e.target.value)
                            }} required />
                       
                        <br />

                        <button type="submit" className="btn btn-primary">Add Country</button>
                    </center>
                </div>
            </form>
        </div>
    )
}
