import thisme from '../../assets/thisme.png'
import HeroSectionRigthP from './HeroSectionRigthP'
import Contact from '../Contact/Contact'

import './HeroSection.css'





export default function HeroSection() {
  return (
    <div className='containerHs'>
        <div className='container-u'>
            <div className="containerImg">
                <a href="https://bento.me/etuve">
                  <img
                  className='card'
                  src={thisme} alt="it's me " />
                </a>
            </div>
            <div>
                <HeroSectionRigthP/>
            </div>
        </div>
       

    </div>
  )
}