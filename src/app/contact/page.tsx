import styles from './styles.module.css'

import Image from 'next/image'
import Link from 'next/link'

import Links from '@/components/Links'

import LinkedinSvg from '@/assets/svg/linkedin.svg'
import GithubSvg from '@/assets/svg/github.svg'

const Contact = () => {
    return (
        <section id='contact' className={styles.contact}>
            <div className={styles.description}>
                <h1>Contact</h1>
                <p>
                    Interested in hiring me for your project or just to say hi? You can fill in the contact from below or send me an email to <span>mrffilipe@outlook.com</span>
                </p>
            </div>
            <div className={styles.social_channels}>
                <p>
                    Want to get connected? Follow me on the social channels below.
                </p>
                <Links />
            </div>
        </section>
    )
}

export default Contact