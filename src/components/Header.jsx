import logo from '../assets/logo.gif';
import {useNavigate, useLocation} from 'react-router-dom'

function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const pathMatchRoute = (route) => {
    if (route === location.pathname) {
      return true;
    }
  }

  return (
    <div className="header">
      <img src={logo} className='header__logo'/>
      <nav className="navbar">
        <ul className="nav">
          <li className={pathMatchRoute('/') ? 'nav__item_active' : 'nav__item'} onClick={() => navigate('/')}>Поиск</li>
          <li className={pathMatchRoute('/trends') ? 'nav__item_active' : 'nav__item'} onClick={() => navigate('/trends')}>Тренды</li>
          <li className={pathMatchRoute('/random-gif') ? 'nav__item_active' : 'nav__item'} onClick={() => navigate('/random-gif')}>Случайная гиф</li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
