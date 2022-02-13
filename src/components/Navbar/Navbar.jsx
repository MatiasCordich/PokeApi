import './navbar.css'
import ultraball from './ultraball.png'
import {useState} from 'react'

const Navbar = () => {

    const [popUpOpen, setPopUpOpen] = useState(false)

    const handleToggle = () => {
        setPopUpOpen(!popUpOpen)
    }


  return (
    
    <nav className='navbar'>
        <div className='navbar__content'>
            <img onClick={handleToggle} className='btn-menu' src={ultraball} alt="ultraball" />
            <h2>More</h2>
        </div>
        <div className={`pop-up ${popUpOpen ? " showPopUp" : ""}`}>
            <h2>Hi! I'm Matias</h2>
            <ul className='pop-up__links'>
                <li className='pop-up__link'>
                    <a href="https://portfoliov2-kohl.vercel.app/" target="_blank" rel='noreferrer'>
                        <i className="icon fa-solid fa-briefcase"></i>Portfolio
                    </a>
                </li>
                <li className='pop-up__link'>
                    <a href="https://www.linkedin.com/in/matiassiocordich/" target="_blank" rel='noreferrer'>
                        <i className="icon fa-brands fa-linkedin-in"></i>Linkedin
                    </a>
                </li>
                <li className='pop-up__link'>
                    <a href="https://github.com/MatiasCordich/Pokemon-API" target="_blank" rel='noreferrer'>
                        <i className="icon fa-brands fa-github"></i>Github
                    </a>
                </li>
            </ul>
        </div>
    </nav>
    


  )
}

export default Navbar