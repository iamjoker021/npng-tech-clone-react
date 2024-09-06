import Equiry from "./Enquiry";
import NavList from "./NavList";

const Footer = () => {
    return (
        <footer id="contact" className="scroll-margin">
        <h2 className="section-header text-center">Contact Us</h2>
        <Equiry />
        <div className="footer-section">
            <div className="contact">
                <div className="brand-logo">
                    <a href=""><img className="logo" src="https://npngtech.in/assets/large-DIFPjkXK.png" alt="npng-logo" /><h1 className="brand-name">NPNG Tech</h1></a>
                </div>
                <p className="text-center">Have an idea or an epic project in mind? Talk to us. Let's work together and make something great. Drop us a line at</p>
                <ul>
                    <li><a href="">Facebook</a></li>
                    <li><a href="">Instagram</a></li>
                    <li><a href="">Twitter</a></li>
                </ul>
            </div>
            <div className="quick-links text-center">
                <h4 className="section-header">Qucik Links</h4>
                <NavList />
            </div>
            <div className="address text-center">
                <h4 className="section-header">Contact Us</h4>
                <table>
                    <tbody>
                    <tr>
                        <td>Email:</td>
                        <td>abc@example.com</td>
                    </tr>
                    <tr>
                        <td>Phone No:</td>
                        <td>+91 9876543210</td>
                    </tr>
                    <tr>
                        <td>Address:</td>
                        <td>No 18, 2nd St, Balakrishnapuram, Adambakkam, Ramapuram, Chennai, Tamil Nadu 600088</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <hr />
        <p className="text-center copywrite">© Made by Joker021. All rights reserved.</p>
        </footer>
    )
}

export default Footer;