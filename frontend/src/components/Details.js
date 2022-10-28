import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import DescriptionIcon from '@mui/icons-material/Description';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FunctionsIcon from '@mui/icons-material/Functions';
import { useParams } from 'react-router-dom';



const Details = () => {

    const [getcriminaldata, setcriminaldata] = useState([]);
    console.log(setcriminaldata);

    const { id } = useParams("");
    console.log(id);

    const getindivdata = async () => {
        const res = await fetch(`/getindividualcriminal/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
        const data = await res.json();
        console.log(data);
        if (res.status === 422 || !data) {
            console.log("Record wasnt found ");

        } else {
            setcriminaldata(data)
            console.log("Get data");
        }
    }

    useEffect(() => {
        getindivdata();
    }, [])

    return (
        <div className=" center_view container mt-5 max-width margin:auto">
        <h1 style={{ fontWeight: 400 }}>{getcriminaldata.name}</h1>
       <Card sx={{ maxWidth: 600 }}>
           <CardContent>
                <div className="row">
                    <div className="left_view col-1g-6 col-md-6 col-12">
                        <img src="/profile.svg" style={{ width: 50 }} alt="profile" />
                        <h3 className= "mt-3">Name: <span >{getcriminaldata.name}</span></h3>
                        <h3 className= "mt-3">Inmate ID: <span >{getcriminaldata.inmateid}</span></h3>
                        <h3 className= "mt-3">Age: <span >{getcriminaldata.age}</span></h3>
                        <p className= "mt-3">Date arrested: <span >{getcriminaldata.datearrested}</span></p>
                        <p className= "mt-3">Release date: <span >{getcriminaldata.daterelease}</span></p>
                        <p className= "mt-3"><LocationOnIcon />Address: <span>{getcriminaldata.adress}</span></p>
                        <p className= "mt-3"><PhoneAndroidIcon />Mobile: <span>{getcriminaldata.mobile}</span></p>
                        <p className= "mt-3"><FunctionsIcon />Previous convictions: <span>{getcriminaldata.previousconviction}</span></p>
                       <p className= "mt-3"><DescriptionIcon />Description: <span>{getcriminaldata.crimedescription}</span></p>
                   </div>
                </div>
           </CardContent>
        </Card>
   </div>
    )
}

export default Details
