import './menu.scss'

const Menu = ({menuOpen, setMenuOpen}) => {
    return (
        <div className={"menu " +  (menuOpen && "active")}>
            <ul>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#">Home</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#">Portfolio</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#">Works</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#">Testimonials</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#">Contact</a>
                </li>
            </ul>
        </div>
    )
}

export default Menu;
