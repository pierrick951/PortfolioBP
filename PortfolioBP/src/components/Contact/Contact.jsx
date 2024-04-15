import './Contact.css'
import map from '../../assets/map.svg'
import mail from '../../assets/mail.svg'

export default function Projects() {
  return (
  <footer>
    <div className="containerFooter">
      <h2>CONTACT</h2>
      <h1>
          <span>Don't be shy! Hit me up! </span>
         <img className='rotateImage' src="https://fonts.gstatic.com/s/e/notoemoji/latest/261d_fe0f/512.gif" alt="☝" width="32" height="32"/>
      </h1>
      <div className="bottom">
       <div className='footerbottomLeft'>
              <img src={map} alt="" />
              <div className='textBleft'>
                <p className='titlebottom'>Location</p>
                <p>Montreal, Canada</p>
              </div>
       </div>
       <div className='footerbottomRigth'>
           <img src={mail} alt="" />
           <div>
             <p className='titlebottom'>E-mail</p>
             <p>bernard.pierrick0@gmail.com</p>
           </div>
       </div>
      </div>
    </div>
        </footer>
  )
}