import './MyProjects.css'
import github from '../../assets/github.svg'
import swatch from '../../assets/swatch.png'
import twitterHome from '../../assets/TwitterHome.png'
import live from '../../assets/live.svg'
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
                <a href="">
                  <span>Code</span>
                  <img src={github} alt="" />
                </a>
                <a href="">
                  <span>Live</span>
                  <img src={live} alt="" />
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
                <p>This is a description of my Twitter clone project, which includes messaging, scrolling, and posting .</p>
                <p></p>
              </div>
              <div className='boxStack'>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" />

              </div>
              <div className='BoxLinkCard'>
                <a href="">
                  <span>Code</span>
                  <img src={github} alt="" />
                </a>
                <a href="">
                  <span>Live</span>
                  <img src={live} alt="" />
                </a>
              </div>
            </div>

          </div>
          <div className="cardProject item3">t</div>
          <div className="cardProject item4"></div>
          <div className="cardProject item4"></div>
          <div className="cardProject item4"></div>

        </div>
      </div>
    </div>

  )
}