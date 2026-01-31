import React from "react";
import "./Register.css";

const Register = () => {
  return (
    <>
      <div className="form-container">
        <h1 className="form-title">Register</h1>
        <form>
          {/* Name fEILD*/}
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input type="text"
                   id ="name"
                   name="name"
                   placeholder="Enter Your full Name" 
            />
          </div>

          {/*Email feild */}
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input 
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email" 
            />
          </div>

          {/*Phon Number field */}
          <div className="form-group">
            <label htmlFor="phone">Phon Number</label>
            <input
             type="tel"
             id="phone"
             name="phone"
             placeholder="Enter Your Phon Number"
             />
          </div>

          {/* Password Feild */}
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input 
            type="password"
            id="password"
            name="password"
            placeholder="Create a Password" />
          </div>

          {/* Submit Button*/}
          <button type="submit" className="btn-primary">
            Register
          </button>
        </form>
      </div>
    </>
  );
};

export default Register;
