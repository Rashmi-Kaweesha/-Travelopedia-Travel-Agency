import React, { useState, useEffect } from "react";
import axios from "axios";

export default function AllPackages() {

    const [packages, setpackages] = useState([]);

    useEffect(() => {
        function getPackages() {
            axios.get("http://localhost:8070/tourpackage/all").then((res) => {
                console.log(res.data);
                setpackages(res.data);
            }).catch((err) => {
                alert(err.message)
            })
        }
        getPackages();
    }, [])

    async function deletepackage(id) {
        await fetch(`http://localhost:8070/tourpackage/delete/${id}`, {
            method: "DELETE",
        });

        const newpackages = packages.filter((el) => el._id !== id);
        setpackages(newpackages);
    }

    return (
        <div><center>
            <h1>All Packages</h1>
            <table style={{width:'80%'}}>
                <tr>
                    <th>Package Name</th>
                    <th>Hotel Type</th>
                    <th>Description</th>
                    <th>No Of Dates</th>
                    <th>Country</th>
                    <th>Price Per Person</th>
                    <th colspan={2}>Actions</th>
                </tr>
                {packages && packages.map((packages, key) => (
                    <tr key={key}>
                        <td>{packages.PackageName}</td>
                        <td style={{paddingLeft: '10px'}}>{packages.HotelType}</td>
                        <td>{packages.Description}</td>
                        <td>{packages.No_of_dates}</td>
                        <td>{packages.CountryID}</td>
                        <td>{packages.PricePerPerson}</td>
                        <td><button><a href={'/packageedit/' + packages._id}>Edit</a></button></td>
                        <td><button className="dlt_btn" onClick={() => { deletepackage(packages._id); }}>Delete</button></td>
                        <br/><br/><br/><br/>
                    </tr>
                ))}
            </table>
            </center>
        </div>
    )
}