import React, { useEffect, useState } from 'react'
import CreateIcon from '@mui/icons-material/Create';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import DescriptionIcon from '@mui/icons-material/Description';
import WorkIcon from '@mui/icons-material/Work';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FunctionsIcon from '@mui/icons-material/Functions';


const Details = () => {

    return (
        <div className=" center_view container mt-5 max-width margin:auto">
        <h1 style={{ fontWeight: 400 }}>Rao Awais</h1>
       <Card sx={{ maxWidth: 600 }}>
           <CardContent>
                <div className="row">
                    <div className="left_view col-1g-6 col-md-6 col-12">
                        <img src="/profile.png" style={{ width: 50 }} alt="profile" />
                        <h3 className= "mt-3">Name: <span >Rao Awais</span></h3>
                        <h3 className= "mt-3">Age: <span >19</span></h3>
                        <p className= "mt-3"><LocationOnIcon />Address: <span>P block Burewala</span></p>
                        <p className= "mt-3"><PhoneAndroidIcon />Mobile: <span>+92 3231234869</span></p>
                        <p className= "mt-3"><FunctionsIcon />Previous convictions: <span>2</span></p>
                       <p className= "mt-3"><DescriptionIcon />Description: <span>Parliment member who tried to bribe people with fried chickenParliment member who tried to bribe people with fried chickenParliment member who tried to bribe people with fried chickenParliment member who tried to bribe people with fried chickenParliment member who tried to bribe people with fried chickenParliment member who tried to bribe people with fried chickenParliment member who tried to bribe people with fried chickenParliment member who tried to bribe people with fried chickenParliment member who tried to bribe people with fried chickenParliment member who tried to bribe people with fried chickenParliment member who tried to bribe people with fried chickenParliment member who tried to bribe people with fried chickenParliment member who tried to bribe people with fried chickenParliment member who tried to bribe people with fried chickenParliment member who tried to bribe people with fried chickenParliment member who tried to bribe people with fried chickenParliment member who tried to bribe people with fried chickenParliment member who tried to bribe people with fried chickenParliment member who tried to bribe people with fried chicken.</span></p>
                   </div>
                </div>
           </CardContent>
        </Card>
   </div>
    )
}

export default Details
