import logo from '../assets/images/logo.jpg'
import '../styles/Header.css'

const Header = () => {
    return (
        <nav className="navigation flex spaced">
            <div className="img-frame-md">
                <a href="">
                    <img
                        className="logo"
                        src={logo}
                        alt="Food Delivery Logo"
                    />
                </a>
            </div>
            <div className="nav-items">
                <ul className='flex gap-lg'>
                    <li className="nav-item">
                        <a href="">Restaurants</a>
                    </li>
                    <li className="nav-item">
                        <a href="">Categories</a>
                    </li>
                    <li className="nav-item">
                        <a href="">Trending</a>
                    </li>
                    <li className="nav-item">
                        <a href="">Cart</a>
                    </li>
                    <li>
                        <a href="">Profile</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Header