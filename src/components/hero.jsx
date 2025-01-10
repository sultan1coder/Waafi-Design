// hero.jsx
const Hero = ({isMenuVisible}) => {
    return (
        <div className="hero">
            <div className={`item-left ${isMenuVisible ? "show" : ""}`}>
                <nav>
                <a href="#">Our Products</a>
                <a href="#">Features</a>
                <a href="#">Help</a>
                <a href="#">About Us</a>
                <a href="#">Our Team</a>
                <a href="#">Contact Us</a>
                <a href="#">Terms & Conditions</a>
                <div className="btn-download">
                <button>Download</button>
                </div>
                </nav>
            </div>
            <div className="hero-section">
                <div className="text-section">
                    <h1>WAAFI Financials &</h1>
                    <h2>communications I</h2>
                    <p>Is your new life-style combining mobile money, <br /> communication entertainment & protductivity in <br /> a unified app.</p>
                    <div className="learn">
                        <button>Learn More</button>
                    </div>
                </div>
                <div className="image-section">
                    <div className="one">
                        <img src="https://page.waafi.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fframe7.77065a54.webp&w=2048&q=75" alt="" className="img1" />
                        <img src="https://page.waafi.com/_next/static/media/frame10.08fead3f.svg" alt="" />
                    </div>
                    <div className="two">
                        <img src="https://page.waafi.com/_next/static/media/frame9.90ebc086.svg" alt="" className="voice-one"/>
                        <img src="https://page.waafi.com/_next/static/media/voice.48c53b15.svg" alt="" className="voice-two" />
                        <img src="https://page.waafi.com/_next/static/media/frame8.53d7152c.svg" alt="" />
                    </div>
                </div>
            </div>

            <div className="hero-section-2">
                <div className="text">
                    <h2>Empowering you to express <br /> yourself according to your <br /> preferences.</h2>
                    <p>WAAFI is your new life-style combining mobile money, <br /> communication, entertainment and productivity in a unified app.</p>
                </div>
                <div className="btn-6">
                    <div className="one">
                        <img src="https://page.waafi.com/_next/static/media/bank.775d065f.svg" alt="" />
                        <h3>Mobile Money</h3>
                        <p>Watch unlimited Live Videos, Browse & Download Your Favorite Videos and Ringtones.</p>
                    </div>
                    <div className="one">
                        <img src="https://page.waafi.com/_next/static/media/entertainment.2dc172b0.svg" alt="" />
                        <h3>Entertainment</h3>
                        <p>Make Instant Bill Payments for your shopping mobile app, utility and bookings through WAAFI.</p>
                    </div>
                    <div className="one">
                        <img src="https://page.waafi.com/_next/static/media/payments.5f2218bb.svg" alt="" />
                        <h3>Payments</h3>
                        <p>Book your travels, hotels and flights from within WAAFI & get Special discount from our Channel Partners.</p>
                    </div>
                    <div className="one">
                        <img src="https://page.waafi.com/_next/static/media/booking.2d9bb44d.svg" alt="" />
                        <h3>Booking / Reservations</h3>
                        <p>Connect with your loved ones effortlessly while enjoying the most competitive rates available in the market.</p>
                    </div>
                    <div className="one">
                        <img src="https://page.waafi.com/_next/static/media/communication.dc33d33c.svg" alt="" />
                        <h3>Communication</h3>
                        <p>Shop through our online stores and make instant payment though integrated payment features.</p>
                    </div>
                    <div className="one">
                        <img src="https://page.waafi.com/_next/static/media/shopping.32081d4c.svg" alt="" />
                        <h3>Online Shopping</h3>
                        <p>WAAFI is your true Mobile <br /> Wallet, you can Send, Receive <br /> Money Instantly & Securely from <br /> our large network of our Agents</p>
                    </div>
                </div>
            </div>
            <div className="center-image">
                <div className="text">
                    <h3>Empowering you to <br /> express yourself <br /> according to your <br /> preferences.</h3>
                    <p>WAAFI is your new life-style combining mobile <br /> money, communication, entertainment and <br /> productivity in a unified app.</p>
                </div>
                <div className="image">
                    <img src="https://page.waafi.com/_next/static/media/card.3e21cec5.svg" alt="" />
                </div>
            </div>
        </div>
    );
    
};

export default Hero;