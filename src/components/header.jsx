function Header({toggleMenu}) {
    return (
        <header>
            <div className="logo">
                <img src="https://page.waafi.com/_next/static/media/logo.0d6eceaa.svg" alt="" />
            </div>
            <nav>
                <a href="#">Our Products</a>
                <a href="#">Features</a>
                <a href="#">Help</a>
                <a href="#">About Us</a>
                <a href="#">Our Team</a>
                <a href="#">Contact Us</a>
                <a href="#">Terms & Conditions</a>
            </nav>
            <div className="menu-icon">
                <button onClick={toggleMenu}><ion-icon name="menu-outline"></ion-icon></button>
            </div>
            <div className="btn-download">
                <button>Download</button>
            </div>
        </header>
    );
}
export default Header;