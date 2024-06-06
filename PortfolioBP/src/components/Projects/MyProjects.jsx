import './MyProjects.css'
import swatch from '../../assets/swatch.png'
import twitterHome from '../../assets/MyTwitter.png'
import live from '../../assets/live.svg'
import { Github,SquareArrowOutUpRight } from 'lucide-react';



export default function MyProjects() {
  return (
    <div className="containerProject">
      <div className='Boxproject'>

        <div className="projectBox">

          <div className="cardProject item1">
            <div className="topBox">
              <img src={swatch} alt="" />
            </div>
            <div className='botBox'>
              <div className="BoxParagraphe">
                <h4> Reproduction of the Swatch website.</h4>
                <p>This is the page about the collaboration between Swatch and Omega.</p>
                <p></p>
              </div>
              <div className='boxStack'>

                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />

                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" />

                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" />



              </div>
              <div className='BoxLinkCard'>
                <a href="https://github.com/pierrick951/Clone-MoonSwatch">
                  <span>Code</span>
                  <Github color="#ffffff" />
                </a>
                <a href="https://pierrick951.github.io/Clone-MoonSwatch/#venus">
                  <span>Live</span>
                  <SquareArrowOutUpRight color="#ffffff" />
                </a>
              </div>
            </div>
          </div>
          <div className="cardProject item2">
            <div className="topBox">
              <img src={twitterHome} alt="" />
            </div>
            <div className='botBox'>
              <div className="BoxParagraphe">
                <h4> Twitter Clone</h4>
                <p>This is a description of my Twitter clone project.</p>
                <p></p>
              </div>
              <div className='boxStack'>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" />

              </div>
              <div className='BoxLinkCard'>
                <a href="https://github.com/pierrick951/CloneTwitter/tree/main">
                  <span>Code</span>
                  <Github color="#ffffff" />
                </a>
                <a href="https://clone-twitter-lac.vercel.app/">
                  <span>Live</span>
                  <SquareArrowOutUpRight color="#ffffff" />
                </a>
              </div>
            </div>

          </div>
     

        </div>
      </div>
    </div>

  )
}