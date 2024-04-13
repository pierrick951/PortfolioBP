import thisme from '../../assets/thisme.png'
import HeroSectionRigthP from './HeroSectionRigthP'
import './HeroSection.css'


export default function HeroSection() {
  return (
    <div className='containerHs'>
        <div className='container-u'>
            <div className="containerImg">
                <img src={thisme} alt="it's me " />
            </div>
            <div>
                <HeroSectionRigthP/>
            </div>
        </div>
       
    </div>
  )
}