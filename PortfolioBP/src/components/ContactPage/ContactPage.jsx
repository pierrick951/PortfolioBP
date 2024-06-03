import './ContactPage.css'
import { Mail } from 'lucide-react';
export default function ContactPage() {
    return (
        <div className="ContainerPage">
            <div className='boxContact'>
                <h1>Don't be shy contact me </h1>

                <p>
                    <Mail color="#ffffff" />
                    <span>bernard.pierrick0@gmail.com</span>
                </p>
            </div>
        </div>
    )
}