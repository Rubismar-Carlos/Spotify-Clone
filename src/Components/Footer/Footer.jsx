// css
import './Footer.css'

// React router
import { Link } from "react-router-dom"

// react icons
import { TfiWorld } from 'react-icons/tfi'

const Footer = () => {
  return (
    <footer>
        <Link>
          Cookies
        </Link>
        <div>
          <button className='btn-footer'>
            <TfiWorld /> <h4>Português do Brasil</h4>
          </button>
        </div>
    </footer>
  )
}

export default Footer