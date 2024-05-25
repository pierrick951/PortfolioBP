import './HeroSection.css'
import HeroSectionSatck from './HeroSectionSatck'
export default function HeroSectionRigthP() {
    return (
        <div className='Container-rigth'>
            <div className='titleEmoji'>
                <h1 className='heading-rigth'>
                    <span>Front-End React Developper</span>
                    <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f44b/512.gif" alt="👋" width="32" height="32"></img>
                </h1>
            </div>
            <div className='textBelow'>
                <p>Hi, im<span className="Name"> Pierrick Bernard</span>. A passionate Front-end React Developper based in Montreal, Canada 📍</p>
                <HeroSectionSatck />
            </div>
           

        </div>
    )
}