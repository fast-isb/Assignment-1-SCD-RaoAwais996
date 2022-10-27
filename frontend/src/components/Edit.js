import React, { useContext, useEffect, useState } from 'react'
import { NavLink, useParams,useHistory } from 'react-router-dom'


const Edit = () => {


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


    return (
        <div className="container"> 
            <NavLink to="/">
            <button type="submit"  class="btn btn-primary" >Home</button>
            </NavLink>
            <form className="mt-4">
                <div className="row">
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputEmail1" class="form-label">Name</label>
                        <input type="text"  value={inpval.name} onChange={setdata} name="name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputEmail1" class="form-label">Inmate number</label>
                        <input type="number"  value={inpval.inmateid} onChange={setdata} name="name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">Adress</label>
                        <input type="text"   value={inpval.adress} onChange={setdata} name="adress" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">Age</label>
                        <input type="text"  value={inpval.age} onChange={setdata} name="age" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">Mobile</label>
                        <input type="number"   value={inpval.mobile} onChange={setdata} name="mobile" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">Arrest date</label>
                        <input type="date"   value={inpval.datearrested} onChange={setdata} name="datearrested" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">Release date</label>
                        <input type="date"   value={inpval.daterelease} onChange={setdata} name="daterelease" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">Previous convictions</label>
                        <input type="number"   value={inpval.previousconviction} onChange={setdata} name="previousconviction" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3 col-lg-12 col-md-12 col-12">
                        <label for="exampleInputPassword1" class="form-label">Crime description</label>
                        <textarea name="crimedescription"   value={inpval.crimedescription} onChange={setdata} className="form-control" id="" cols="30" rows="5"></textarea>
                    </div>

                    <button type="submit"  class="btn btn-primary">Lodge</button>
                </div>
            </form>
        </div>
    )
}

export default Edit;





