import React from 'react'
import toast, { Toaster } from 'react-hot-toast'
import './Footer.css'
import logo from './link.png'

function Navbar() {
    const logoutbt = async () => {
        localStorage.clear()
        toast.success('Logged out Successfully')
        setTimeout(() => {
            window.location.href = '/login'
        }, 3000)

    }
    return (
        <div className='footer'>
            <nav className="navbar navbar-expand-lg shadow p-3 mb-5 bg-white rounded">


                <footer>

                    <div className='footer-div'>
                        <div>
                            <img src={logo} alt='logo' className='logo' />
                            <a className="navbar-brand web-nm" href="#"><b>Shortlink</b></a>
                        </div>
                        <div className='footer-div'>
                            <ul className='footer-ul list-unstyled'>
                                <li><a href="terms-of-service" className='text-decoration-none'>Terms of Service</a></li>
                                <li><a href="privacy-policy" className='text-decoration-none'>Privacy Policy</a></li>
                                <li><a href="faqs" className='text-decoration-none'>FAQs</a></li>
                                <li><a href="contact-us" className='text-decoration-none'>Contact Us</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4>Follow Us</h4>
                            <ul className='list-unstyled'>
                                <li><a href="https://facebook.com/ourlinkshortener" target="_blank" className='text-decoration-none'><i class="fab fa-facebook"></i></a></li>
                                <li><a href="https://twitter.com/ourlinkshortener" target="_blank" className='text-decoration-none'><i class="fab fa-twitter"></i></a></li>
                                <li><a href="https://linkedin.com/company/ourlinkshortener" target="_blank" className='text-decoration-none'><i class="fab fa-linkedin"></i></a></li>
                            </ul>
                        </div>
                        <div>
                            <h4>About Us</h4>
                            <p>Our company mission<br /> is to provide a<br /> simple and effective<br /> link shortening solution.</p>

                        </div>
                        <div>
                            <h4>Legal</h4>
                            <ul className='list-unstyled '>
                                <li><a href="copyright" className='text-decoration-none'>Copyright Information</a></li>
                                <li><a href="trademark" className='text-decoration-none'>Trademark Information</a></li>
                                <li><a href="disclaimer" className='text-decoration-none'>Disclaimer Statement</a></li>
                            </ul>
                        </div>
                    </div>
                </footer>
            </nav>
            <Toaster />
        </div>
    )
}

export default Navbar