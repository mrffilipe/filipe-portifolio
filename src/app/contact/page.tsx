import styles from './styles.module.css'

import { AlternateEmailOutlined, CallOutlined } from '@mui/icons-material'
import Image from 'next/image'

import LinkedingSvg from '../../assets/svg/linkedin.svg'

const Contact = () => {
    return (
        <section className={styles.contact}>
            <h1>Contact</h1>
            <div>
                <Image src={LinkedingSvg} alt="Linkedin icons8" />
                <a href="https://www.linkedin.com/in/filipemrf/" target='_blank'>filipemrf</a>
            </div>
            <div>
                <AlternateEmailOutlined />
                <span>mrffilipe@outlook.com</span>
            </div>
            <div>
                <CallOutlined />
                <span>+55 (64) 9 9645-9874</span>
            </div>
        </section>
    )
}

export default Contact