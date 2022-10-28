import React, { useEffect,useState } from "react";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { NavLink } from 'react-router-dom'


const Home = () => {

    const [getcriminaldata, setcriminaldata] = useState([]);
    console.log(getcriminaldata);


    const getcriminalrecords  = async () => {

        const res = await fetch("/getcriminaldata", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await res.json();
        console.log(data);

        if (res.status === 422 || !data) {
            console.log("Nothing found ");

        } else {
            setcriminaldata(data)
            console.log("Get criminal data");
        }
    }

    useEffect(() => {
        getcriminalrecords();
    }, [])

    return (


        <div className="mt-5">
            <div className="container">
                <div className="add_btn mt-2 mb-2">
                </div>

                <table class="table">
                    <thead>
                        <tr className="table-dark">
                        <th scope="col">ID</th>
                        <th scope="col">Pisoner ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Previous Convictions</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                
                        {
                                getcriminaldata.map((element, id) => {
                                    return (
                                        <>
                                            <tr>
                                                <th scope="row">{id + 1}</th>
                                                <td>{element.inmateid}</td>
                                                <td>{element.name}</td>
                                                <td>{element.previousconviction}</td>
                                                <td className="d-flex justify-content-between">
                                                    <NavLink to={`view/${element._id}`}> <button className="btn btn-success"><RemoveRedEyeIcon /></button></NavLink>
                                                    {/* <NavLink to={`edit/${element._id}`}>  <button className="btn btn-primary"><CreateIcon /></button></NavLink>
                                                    <button className="btn btn-danger" ><DeleteOutlineIcon /></button> */}
                                                </td>
                                            </tr>
                                        </>
                                    )
                                })
                            }
                    </tbody>
                </table>


            </div>
        </div>
        // </>
    )
}

export default Home

















