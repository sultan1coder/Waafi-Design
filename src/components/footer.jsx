function Footer() {
    return(
        <footer>
            <div className="container">
                <div className="logo">
                <img src="https://page.waafi.com/_next/static/media/logo2.9038b5de.svg" alt="" />
                <p>WAAFI is your new life-style <br />combining mobile money, <br />communication, entertainment <br />and productivity in a unified app.</p>
                </div>
                <div className="pro">
                    <p className="p1">Our products</p>
                    <p>Money</p>
                    <p>Communication</p>
                    <p>Entertainment</p>
                    <p>Booking/Reservation</p>
                    <p>Online Shopping</p>
                </div>
                <div className="com">
                    <p className="p2">Company</p>
                    <p>About us</p>
                    <p>Careers</p>
                    <p>FAQs</p>
                    <p>Teams</p>
                    <p>Contact us</p>
                </div>
                <div className="follow">
                    <p className="p3">Follow Us</p>
                    <a href="#"><i class="ri-facebook-fill"></i></a>
                    <a href="#"><i class="ri-gitlab-line"></i></a>
                    <a href="#"><i class="ri-github-line"></i></a>
                    <a href="#"><i class="ri-instagram-line"></i></a>
                    <a href="#"><i class="ri-whatsapp-line"></i></a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;