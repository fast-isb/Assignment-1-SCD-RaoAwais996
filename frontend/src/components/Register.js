import React, { useContext, useState } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
// import {createRoot} from 'react-dom/client';

const Register = () => {

    // const { udata, setUdata } = useContext(adddata);

    // const history = useHistory();

    const [inpval, setINP] = useState({
        name: "", 
        inmateid:"",
        adress: "",
        age: "",
        mobile: "",
        datearrested: "",
        daterelease: "",
        previousconviction: "",
        crimedescription: ""
    })

    const setdata = (e) => {
        console.log(e.target.value);
        const { name, value } = e.target;
        setINP((preval) => {
            return {
                ...preval,
                [name]: value
            }
        })
    }
    
    
    const addinputdata = async (e) => {
        e.preventDefault();

        const { name,inmateid,adress,age,mobile,datearrested,daterelease,previousconviction,crimedescription } = inpval;

        const res = await fetch("/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name,inmateid,adress,age,mobile,datearrested,daterelease,previousconviction,crimedescription
            })
        });
 
        const data = await res.json();
        console.log(data);

        if (res.status === 404 || !data) {
            console.log("error ");
            alert("error");

        } else {
            alert("Record added");
            console.log("data added");

        }
    }

    return (
        <div className="container"> 
            <NavLink to="/">
            <button type="submit"  className="btn btn-primary" >Home</button>

            </NavLink>
            <form className="mt-4">
                <div className="row">
                <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                        <input type="text"  value={inpval.name} onChange={setdata} name="name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                     <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label htmlFor="exampleInputEmail1" className="form-label">Inmate number</label>
                        <input type="number"  value={inpval.inmateid} onChange={setdata} name="inmateid" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label htmlFor="exampleInputPassword1" className="form-label">Adress</label>
                        <input type="text"   value={inpval.adress} onChange={setdata} name="adress" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label htmlFor="exampleInputPassword1" className="form-label">Age</label>
                        <input type="text"  value={inpval.age} onChange={setdata} name="age" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label htmlFor="exampleInputPassword1" className="form-label">Mobile</label>
                        <input type="number"   value={inpval.mobile} onChange={setdata} name="mobile" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label htmlFor="exampleInputPassword1" className="form-label">Arrest date</label>
                        <input type="date"   value={inpval.datearrested} onChange={setdata} name="datearrested" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label htmlFor="exampleInputPassword1" className="form-label">Release date</label>
                        <input type="date"   value={inpval.daterelease} onChange={setdata} name="daterelease" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label htmlFor="exampleInputPassword1" className="form-label">Previous convictions</label>
                        <input type="number"   value={inpval.previousconviction} onChange={setdata} name="previousconviction" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3 col-lg-12 col-md-12 col-12">
                        <label htmlFor="exampleInputPassword1" className="form-label">Crime description</label>
                        <textarea name="crimedescription"   value={inpval.crimedescription} onChange={setdata} className="form-control" id="crimedes" cols="30" rows="5"></textarea>
                    </div>

                    <button type="submit" onClick={addinputdata}  className="btn btn-primary">Lodge</button>
                </div>
            </form>
        </div>
    )
}
export default Register
