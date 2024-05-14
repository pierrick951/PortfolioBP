import './Contact.css'

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
 
       <div className='footerbottomRigth'>
           <img src={mail} alt="" /> 
             <p>bernard.pierrick0@gmail.com</p>
      
      </div>
    </div>
        </footer>
  )
}