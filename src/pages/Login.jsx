import { Link } from 'react-router-dom';
//import './Login.css';

const Login = () => {
  return (
   <div className="form-container">
    <h1 className="form-title">Welcome back</h1>
     
     {/* LogIn form*/}
    <form >
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
            Login
          </button>
    </form>
   </div>
  )
}

export default Login;
