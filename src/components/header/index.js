import './index.css'

import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

const Header = props => {
  const removeCookies = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }

  return (
    <nav className="nav-menu">
      <Link to="/">
        <img
          src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
          alt="website logo"
        />
      </Link>
      <ul className="menuContainer">
        <li className="list-item">
          <Link to="/">
            <button type="button" className="menuBtn">
              Home
            </button>
          </Link>
        </li>
        <li className="list-item">
          <Link to="/jobs">
            <button type="button" className="menuBtn">
              Jobs
            </button>
          </Link>
        </li>
      </ul>
      <li className="list-item">
        <Link to="/login">
          <button type="button" className="LogoutBtn" onClick={removeCookies}>
            Logout
          </button>
        </Link>
      </li>
    </nav>
  )
}
export default withRouter(Header)
