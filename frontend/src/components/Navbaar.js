import React from 'react'
import { NavLink } from 'react-router-dom'


const Navbaar = () => {
    return (
        <header>
            <nav  data-testid= "navbaarid" className="navbar navbar-expand-lg navbar-light bg-light">
                <div data-testid= "navbaarcontainerid"  className="container-fluid">
                    <a className='navbar-brand' href='#'>PMS</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                            <NavLink to="/">
                         <a className="nav-link active" aria-current="page" >Home</a>
                         </NavLink >

                         <NavLink to="/register">
                            <a className="nav-link active" aria-current="page" href="#">Add criminal record</a>
                            </NavLink>
                             {/* <NavLink to="/edit">
                            <a className="nav-link active" aria-current="page" href="#">Edit criminal record</a>
                            </NavLink> */}

                           </li>
                          
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className ="btn btn-outline-success" type ="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbaar;
