import React from "react";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import CreateIcon from '@mui/icons-material/Create';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';



const Home = () => {


    return (


        <div className="mt-5">
            <div className="container">
                <div className="add_btn mt-2 mb-2">
                </div>

                <table class="table">
                    <thead>
                        <tr className="table-dark">
                            <th scope="col">Pisoner ID</th>
                            <th scope="col">Name</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>420</td>
                            <td>Mark</td>
                            <td className="d-flex justify-content-between">
                                <button ><RemoveRedEyeIcon /></button>
                                <button><CreateIcon/></button>
                                <button ><DeleteOutlineIcon/></button>
                            </td>
                        </tr><tr>
                            <td>421</td>
                            <td>Constantine</td>
                            <td className="d-flex justify-content-between">
                                <button ><i class="fas fa-eye"></i></button>
                                <button><i class="fas fa-pen"></i></button>
                                <button ><i class="fas fa-trash"></i></button>
                            </td>
                        </tr>
                        {/* {
                                getuserdata.map((element, id) => {
                                    return (
                                        <>
                                            <tr>
                                                <th scope="row">{id + 1}</th>
                                                <td>{element.name}</td>
                                                <td>{element.email}</td>
                                                <td>{element.work}</td>
                                                <td>{element.mobile}</td>
                                                <td className="d-flex justify-content-between">
                                                    <NavLink to={`view/${element._id}`}> <button className="btn btn-success"><RemoveRedEyeIcon /></button></NavLink>
                                                    <NavLink to={`edit/${element._id}`}>  <button className="btn btn-primary"><CreateIcon /></button></NavLink>
                                                    <button className="btn btn-danger" onClick={() => deleteuser(element._id)}><DeleteOutlineIcon /></button>
                                                </td>
                                            </tr>
                                        </>
                                    )
                                })
                            } */}
                    </tbody>
                </table>


            </div>
        </div>
        // </>
    )
}

export default Home

















