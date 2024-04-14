import './AboutSection.css'
import AboutLeft from './AboutLeft'
import AboutRigth from './AboutRigth'

export default function AboutSection() {
  return (
    <div className='ContainerCard'>
        <div className='Card'>
          <div>
            <AboutLeft/>
          </div>
          <div>
            <AboutRigth/>
          </div>
        </div>
    </div>
  )
}