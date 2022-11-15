import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Prisonermanagement from './Prisonermanagement'

export default class Login extends Component {
  
  render() {
   
    return (
      <form  data-testid= "loginid" className='center_view container mt-5 max-width margin:auto'>
        <h3>Log In</h3>

        <div className="mb-3">
          <label>ID</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>

        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>

        <div className="d-grid">
        <NavLink to="/login">
        <button  type="submit"  className="btn btn-primary">
            Submit
          </button>
         </NavLink >
          
        </div>
        <p className="forgot-password text-right">
          Forgot <a href="#">password?</a>
        </p>
      </form>
    )
  }
}