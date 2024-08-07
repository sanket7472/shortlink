
import './Footer.css'
import logo from './link.png'

function Footer() {
    return (
        <div className='footer'>
                <footer>

                    <div className='footer-div'>
                        <div>
                            <img src={logo} alt='logo' className='logo' />
                            <a className=" web-nm" href="#"><b>Shortlink</b></a>
                        </div>
                        <div className='footer-ul'>
                            <ul className='footer-ul list-unstyled'>
                                <li><a href="terms-of-service" className='text-decoration-none'>Terms of Service</a></li>
                                <li><a href="privacy-policy" className='text-decoration-none'>Privacy Policy</a></li>
                                <li><a href="faqs" className='text-decoration-none'>FAQs</a></li>
                                <li><a href="contact-us" className='text-decoration-none'>Contact Us</a></li>
                            </ul>
                        </div>
                        <div className='footer-ul'>
                            <h4>Follow Us</h4>
                            <ul className='list-unstyled '>
                                <li><a href="https://facebook.com/ourlinkshortener" target="_blank" className='text-decoration-none'><i class="fab fa-facebook"></i></a></li>
                                <li><a href="https://twitter.com/ourlinkshortener" target="_blank" className='text-decoration-none'><i class="fab fa-twitter"></i></a></li>
                                <li><a href="https://linkedin.com/company/ourlinkshortener" target="_blank" className='text-decoration-none'><i class="fab fa-linkedin"></i></a></li>
                            </ul>
                        </div>
                        <div className='footer-ul'>
                            <h4>About Us</h4>
                            <p>Our company mission<br /> is to provide a<br /> simple and effective<br /> link shortening solution.</p>

                        </div>
                        <div className='footer-ul legal-ul'>
                            <h4>Legal</h4>
                            <ul className='list-unstyled '>
                                <li><a href="copyright" className='text-decoration-none'>Copyright Information</a></li>
                                <li><a href="trademark" className='text-decoration-none'>Trademark Information</a></li>
                                <li><a href="disclaimer" className='text-decoration-none'>Disclaimer Statement</a></li>
                            </ul>
                        </div>
                    </div>
                </footer>
        </div>
    )
}

export default Footer