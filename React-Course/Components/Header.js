function Header() {
    return (
        <header className="header">
                <nav className="navBar">
                    <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"/>
                    <ul className="nav-items">
                        <li className="item">Pricing</li>
                        <li className="item">About</li>
                        <li className="item">Contact</li>
                    </ul>
                </nav>
        </header>
    )
}

export default Header;