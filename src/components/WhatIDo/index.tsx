import styles from './styles.module.css'

import Image from 'next/image'

import LinkedinIcon from '@/assets/svg/linkedin.svg'

const WhatIDo = () => {
    return (
        <section id='what_i_do' className={styles.what_i_do}>
            <div className={styles.description}>
                <h2>What I do</h2>
                <p>
                    A backend developer who loves to create solid and effective systems to enhance online experiences, building the foundation of the internet. Check out my project <a>portfolio</a>.
                </p>
            </div>
            <div className={styles.skills}>
                <div className={styles.card}>
                    <div className={styles.icon}>
                        <Image src={LinkedinIcon} alt='' />
                        <Image src={LinkedinIcon} alt='' />
                        <Image src={LinkedinIcon} alt='' />
                    </div>
                    <span>TypeScript</span>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac tellus aliquam, sagittis massa posuere.
                    </p>
                </div>
                <div className={styles.card}>
                    <div className={styles.icon}>
                        <Image src={LinkedinIcon} alt='' />
                        <Image src={LinkedinIcon} alt='' />
                        <Image src={LinkedinIcon} alt='' />
                    </div>
                    <span>TypeScript</span>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac tellus aliquam, sagittis massa posuere.
                    </p>
                </div>
                <div className={styles.card}>
                    <div className={styles.icon}>
                        <Image src={LinkedinIcon} alt='' />
                        <Image src={LinkedinIcon} alt='' />
                        <Image src={LinkedinIcon} alt='' />
                    </div>
                    <span>TypeScript</span>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac tellus aliquam, sagittis massa posuere.
                    </p>
                </div>
                <div className={styles.card}>
                    <div className={styles.icon}>
                        <Image src={LinkedinIcon} alt='' />
                        <Image src={LinkedinIcon} alt='' />
                        <Image src={LinkedinIcon} alt='' />
                    </div>
                    <span>TypeScript</span>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac tellus aliquam, sagittis massa posuere.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default WhatIDo