import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function AllPackages() {

    const [countries, setcountries] = useState([]);

    useEffect(() => {
        function getCountries() {
            axios.get("http://localhost:8070/country/all").then((res) => {
                console.log(res.data);
                setcountries(res.data);
            }).catch((err) => {
                alert(err.message)
            })
        }
        getCountries();
    }, [])
    const divstyles = {
        width: '100%',
        height: 80,
        border: "Solid",
        borderRadius: 10,
        BorderWidth: 5,
        borderColor: "red",
        backgroundColor: "lightblue",
        textAlign: "center"
    }
    return (
        <div>
            <center><h1>Select A Country</h1>
                <table style={{ width: '70%' }}>
                    {countries && countries.map((country, key) => (
                        <tr key={key}>
                            <td><div style={divstyles}> <h2>{country.CountryName}</h2></div></td>
                        </tr>
                    ))}
                </table>
                <button><a href="/add/">Admin Side</a></button></center>
        </div>
    )
}