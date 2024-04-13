import './HeroSection.css'
import linkedin from '../../assets/linkedin.svg'
import github from '../../assets/github.svg'

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
                <p>Hi, im Pierrick Bernard. A passionate Front-end React Developper based in Montreal, Canada 📍</p>
            </div>
            <div className="BoxLink">
                <a href="">
                    <img src={github} alt="https://github.com/pierrick951" />
                </a>
                <a href="https://www.linkedin.com/in/pierrick-bernard-etuve/">
                    <img src={linkedin} alt=" Visit my linkedin" />
                </a>
            </div>
        </div>
    )
}