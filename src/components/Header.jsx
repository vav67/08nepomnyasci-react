function Header() {
    return (
    <nav className="green darken-1">
        <div className="nav-wrapper">
            <a href='/' className="brand-logo">React Shop</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><a href= 'https://github.com/vav67/08nepomnyasci-react'
                       target='_blank' rel="noreferrer" > Repozitori</a></li>
            </ul>
        </div>
    </nav>
    )
}
export {Header}