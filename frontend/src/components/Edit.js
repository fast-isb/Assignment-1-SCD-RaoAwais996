import React, { useContext, useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import Navbaar from "./Navbaar";


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


const { id } = useParams("");
console.log(id);

const getdata = async () => {
    const res = await fetch(`/getindividualcriminal/${id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });
    const data = await res.json();
    console.log(data);
    if (res.status === 422 || !data) {
        console.log("error ");
    } else {
        setINP(data)
        console.log("Get data");
    }
}
useEffect(() => {
    getdata();
}, []);



const updatecriminal = async(e)=>{
    e.preventDefault();
    const {name,inmateid,adress,age,mobile,datearrested,daterelease,previousconviction,crimedescription} = inpval;

    const res2 = await fetch(`/updateuser/${id}`,{
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body:JSON.stringify({
            name,inmateid,adress,age,mobile,datearrested,daterelease,previousconviction,crimedescription
        })
    });
    const data2 = await res2.json();
    console.log(data2);
    if(res2.status === 422 || !data2){
        alert("Fill the whole data in the form");
    }else{
        alert("Data updated");
    }

}

    return (
        

        <div data-testid= "editid" className="container"> 
            <NavLink to="/">
            <button type="submit"  class="btn btn-primary" >Home</button>
            </NavLink>
            <form  data-testid= "formid" className="mt-4">
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

                    <button type="submit" onClick={updatecriminal} class="btn btn-primary">Update</button>
                </div>
            </form>
        </div>
    )
}

export default Edit;





