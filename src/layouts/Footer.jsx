// react icons
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

// Stylefile
import './Footer.scss'

const Footer = () => {
    return (
        <div className='footerPage'>
            <div className='footerPageBottom1'>
                <div className='footerAbout'>
                    <h1>About Us</h1>
                    <div className='footerAboutContainer'>
                        <p>Our Leadership</p>
                        <p>Career</p>
                    </div>
                </div>
                <div className='footerMedia'>
                    <h1>Media</h1>
                    <div className='footerMediaContainer'>
                        <p>News and Blogs</p>
                        <p>Achievments</p>
                    </div>
                </div>
                <div className='footerResources'>
                    <h1>Resources</h1>
                    <div className='footerResourcesContainer'>
                        <p>Privacy Policy Statement</p>
                        <p>FAQ</p>
                    </div>
                </div>
                <div className='footerContacts'>
                    <h1>Contacts</h1>
                    <div className='footerContactsContainer1'>
                        <span>info@luwikenya.com</span>
                        <span>+254722123123</span>
                        <span>Nyeri, Kenya</span>
                    </div>
                    <div className='footerContactsContainer2'>
                        <FaXTwitter />
                        <FaInstagram />
                        <FaLinkedin />
                        <FaYoutube />
                        <FaFacebook />
                    </div>
                </div>
            </div>
            <div className='footerPageBottom2'>
                <span>2024 Luwi Kenya Limited | Built by DigiKe.africa</span>
            </div>
        </div>
    )
}
export default Footer;