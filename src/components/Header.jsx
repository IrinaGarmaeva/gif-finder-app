import logo from '../assets/logo.gif';
import {useNavigate, Link} from 'react-router-dom'

function Header() {
  const navigate = useNavigate();

  return (
    <div className="header">
      <img src={logo} width='300px' className='header__logo'/>
      <nav className="navbar">
        <ul className="nav">
          <li className="nav__item" onClick={() => navigate('/')}>Поиск</li>
          <li className="nav__item" onClick={() => navigate('/trends')}>Тренды</li>
          <li className="nav__item" onClick={() => navigate('/random-gif')}>Случайный гиф</li>
        {/* <Link to="/" className='nav__link'>Поиск</Link>
        <Link to="/trends" className='nav__link'>Тренды</Link>
        <Link to="/random-gif" className='nav__link'>Случайный гиф</Link> */}
        </ul>
      </nav>
    </div>
  )
}

export default Header
