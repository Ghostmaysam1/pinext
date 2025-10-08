import telegramIcon from '/icons/telegram.svg';
import instagramIcon from '/icons/instagram.svg';
import whatsupIcon from '/icons/whatsup.svg';
import youtubeIcon from '/icons/youtube.svg';
import pintrestIcon from '/icons/pintrest.svg';
import linkedinIcon from '/icons/linkedin.svg';

import { Mail, Phone } from "lucide-react"

function ContactUs() {
    return (
        <div className="w-full flex flex-col md:flex-row items-center justify-center gap-14">
            <div className="flex flex-col gap-11 justify-between items-center">
                <h2 className=''>راه های ارتباطی</h2>
                <div className="flex flex-col gap-6">
                    <ContactItem icon='phone' title='تلفن همراه' text='09185555555' />
                    <ContactItem icon='email' title='پست الکترونیکی' text='pinext@gmail.com' />
                </div>
            </div>

            <div className="flex flex-col gap-11 justify-between items-center">
                <h2>شبکه های اجتماعی</h2>
                <div className="grid grid-cols-3 grid-rows-2 items-center">
                    <img src={instagramIcon} alt="instagram" />
                    <img src={pintrestIcon} alt="pintrest" />
                    <img src={whatsupIcon} alt="whatsup" />
                    <img src={linkedinIcon} alt="linkedin" />
                    <img src={youtubeIcon} alt="youtube" />
                    <img src={telegramIcon} alt="telegram" />
                </div>
            </div>
        </div>
    )
}

export default ContactUs;

function ContactItem({ icon, title, text }) {
    const Icon = () => {
        switch (icon) {
            case 'phone':
                return <Phone className="absolute left-4" />
            case 'email':
                return <Mail className="absolute left-4" />
        }
    }
    return (
        <div className="w-[240px] flex relative justify-center items-center px-4 py-2 bg-primary-400 rounded-[8px]">
            {Icon()}
            <div className="flex flex-col items-center">
                <h5>{title}</h5>
                <p>{text}</p>
            </div>
        </div>
    )
}