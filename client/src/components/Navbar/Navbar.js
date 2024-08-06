import React from 'react'
import toast,{Toaster} from 'react-hot-toast'
import './Navbar.css'
import logo from './link.png'

function Navbar() {
    const logoutbt = async ()=>{
        localStorage.clear()
        toast.success('Logged out Successfully')
     setTimeout(()=>{
        window.location.href = '/login'
     }, 3000)
        
    }
  return (
    <div>
         <nav className="navbar navbar-expand-lg shadow p-3 mb-5 bg-white rounded">
            <img src={logo} alt='logo' className='logo'/>
                <a className="navbar-brand web-nm" href="#"><b>Shortlink</b></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav nav-sec">
                        <li className="nav-item">
                            <a className="nav-link web-direc nav-btn" href="/main">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link web-direc nav-btn" href="/login">Login</a>
                        </li>
                        <li className="nav-item">
                        <span className='nav-link logot web-direc nav-btn' onClick={logoutbt}>
                            Logout
                        </span>
                        </li>
                       
                    </ul>
                </div>
            </nav>
        <Toaster/>
    </div>
  )
}

export default Navbar