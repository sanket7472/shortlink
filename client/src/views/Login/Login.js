import React, { useState } from 'react'
import loginUser from './user.png'
import { Link } from 'react-router-dom'
import toast, {Toaster} from 'react-hot-toast'
import axios from 'axios'
import './../Register/Register.css'
import Navbar from '../../components/Navbar/Navbar.js'
import Footer from '../../components/Footer/Footer.js'



function Login() {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const loginNow = async () => {
    const response = await axios.post(`${process.env.REACT_APP_API_URL}/login`, {
      email : email,
      password : password
    })
    if(response.data.success){
      toast.success(response.data.message)
      localStorage.setItem('currentUser',JSON.stringify(response.data.data))
      toast.loading('Redirecting to Dashboard...')

      setTimeout(()=>{
        window.location.href = '/'
      }, 3000)
    }
    else{
      toast.error(response.data.message)
    }
  }
  return (
    <div>
      <Navbar/>
        <form className='register-form text-style'>
                <div className='register-name-container'>
                    <h2>Login Here</h2>
                    <img src={loginUser} alt='register-img' className='register-img' />
                </div>
                <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control register-input" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your details with anyone else.</small>
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control register-input" id="exampleInputPassword1" placeholder="Password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <button type="button" className="register-btn" onClick={loginNow}>Login</button>
                <Link to='/register' className='register-pg-link'>Don't have account? <span className='pg-link-nm'>Join Now</span></Link>
        </form>
        <Footer/>
        <Toaster/>
    </div>
  )
}

export default Login