import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast'

import './Register.css'
import registerlogo from './register.png'
import Navbar from './../../components/Navbar/Navbar.js'
import Footer from '../../components/Footer/Footer.js'



function Register() {
    const [user, setUser] = useState({
        fullName: '',
        email: '',
        password: '',
        dob: '',
        profession: ''
    })

    const register = async () => {
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/signup`, {
            fullName: user.fullName,
            email: user.email,
            password: user.password,
            dob: user.dob,
            profession: user.profession
        })
        if (response.data.success) {
            toast.success(response.data.message)
            setUser({
                fullName: '',
                email: '',
                password: '',
                dob: '',
                profession: ''
            })
        }
        else {
            toast.error(response.data.message)
        }

    }
    return (
        <div>
            <Navbar/>
            <form className='register-form text-style'>
                <div className='register-name-container'>
                    <h2>Register Here</h2>
                    <img src={registerlogo} alt='register-img' className='register-img' />
                </div>
                <div className="form-group">
                    <label for="exampleInputEmail1">Full Name</label>
                    <input type="text" className="form-control register-input" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Fullname"
                        value={user.fullName}
                        onChange={(e) => { setUser({ ...user, fullName: e.target.value }) }} />
                </div>
                <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control register-input" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"
                        value={user.email}
                        onChange={(e) => { setUser({ ...user, email: e.target.value }) }} />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control register-input" id="exampleInputPassword1" placeholder="Password"
                        value={user.password}
                        onChange={(e) => { setUser({ ...user, password: e.target.value }) }} />
                </div>
                <div className="form-group">
                    <label for="exampleInputEmail1">Profession</label>
                    <select class="form-control register-input" id="exampleFormControlSelect1"
                        value={user.profession}
                        onChange={(e) => { setUser({ ...user, profession: e.target.value }) }}>
                        <option>select Profession</option>
                        <option>Business</option>
                        <option>Student</option>
                        <option>Other</option>
                    </select>
                </div>
                <div className="form-group">
                    <label for="exampleInputEmail1">DOB </label>
                    <input type="date" className="form-control register-input" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your Fullname"
                        value={user.dob}
                        onChange={(e) => { setUser({ ...user, dob: e.target.value }) }} />
                </div>

                <button type="button" className="register-btn" onClick={register}>Register</button>
                <Link to='/login' className='register-pg-link'>Already have account? <span className='pg-link-nm'>Login</span></Link>
                <Toaster />
            </form>
            <Footer/>
        </div>
    )
}

export default Register