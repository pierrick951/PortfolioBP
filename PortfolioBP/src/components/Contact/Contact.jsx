import './Contact.css'
import mail from '../../assets/mail.svg'
import github from '../../assets/github.svg'
import linkedin from '../../assets/linkedin.svg'

export default function Projects() {
  return (
  <footer>
    <div className="containerFooter">

 
       <div className='footerbottomRigth'>
          
             <a href="mailto:bernard.pierrick0@gmail.com">
             <img src={mail} alt="" />
             </a>
      
             <a href="https://github.com/pierrick951">
             <img src={github} alt="" />
             </a>

             <a href="https://www.linkedin.com/in/pierrick-bernard-etuve/">
             <img src={linkedin} alt="" />
             </a>
      
      </div>
    </div>
        </footer>
  )
}