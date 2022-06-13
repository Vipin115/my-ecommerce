import React from "react";
 import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-div">
                
                <div className="footer-text"><span>products by Language:</span>Hindi | English |</div>
                <div className="footer-text"><span>electronics by Genre:</span>Laptops| Printers| Routers| Ink & Toner Cartridges| Monitors| Video Games| Unboxed & Refurbished Laptops| Assembled Desktops| Data Cards | Hardisk</div>
                <div className="footer-text"><span>TV, Audio & Large Appliances:</span>TVs & DTH| Home Theatre Systems| Hidden Cameras & CCTVs| Refrigerators| Washing Machines| Air Conditioners| Cameras| Speakers</div>
                <div className="footer-text"><span>clothing:</span>Men's Clothing| Women's Clothing | Mobile Cases & Covers| Pen Drives| External Hard Disk| Womens;s Clothing</div>
                <div className="footer-text"><span>Explore More:</span>Trimmers| Hair Dryers| Emergency Lights| Water Purifiers| Electric Kettles| Hair Straighteners| Induction Cooktops| Sewing Machines| Geysers</div>
                <ul className="footer-meta">
                    <li>Terms of Use</li>
                    <li>Privacy Policy</li>
                    <li>FAQs</li>
                    <li>Contact Us: 7978627875, email address: <a href="#">vipinawd115@gmail.com</a></li>
                    <li>Advertise With Us</li>
                    <li>Content Redressal mechanism</li>
                    <li></li>
                </ul>
                <div className="footer-text">
                    <span>Social</span>
                    <ul className="footer-social">
                        <li>
                            <a href=""><i class="uil uil-linkedin"></i></a>
                        </li>
                        <li>
                            <a href="#"><i class="uil uil-instagram-alt"></i></a>
                        </li>
                        <li>
                            <a href="#"><i class="uil uil-facebook"></i></a>
                        </li>
                        <li>
                            <a href="#"><i class="uil uil-twitter"></i></a>
                        </li>
                    </ul>
                    <div className="footer-text">Build by vipin Awadhiya</div>
                </div>
                
            </div>
        </footer>
    )
}

export { Footer };