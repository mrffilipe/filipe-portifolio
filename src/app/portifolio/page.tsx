import styles from './styles.module.css'

import Image from 'next/image'
import Link from 'next/link'
import { SendOutlined } from '@mui/icons-material'

import Picture from '@/assets/img/projects.jpg'

const Portifolio = () => {
    return (
        <section id='portifolio' className={styles.portifolio}>
            <div className={styles.description}>
                <h2>Portifolio</h2>
                <p>
                    Welcome to my online portifolio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet elit eu dolor malesuada auctor.
                </p>
                <Link href='/contact'>
                    <SendOutlined />
                    Hire Me
                </Link>
            </div>
            <div className={styles.projects}>
                <div className={styles.card}>
                    <Link href='#'>
                        <Image src={Picture} alt='' />
                        <div className={styles.desc}>
                            <span>Planar website</span>
                            <p>
                                A backend developer who loves to create solid and effective systems to enhance online experiences, building the foundation of the internet.
                            </p>
                        </div>
                    </Link>
                </div>
                <div className={styles.card}>
                    <Link href='#'>
                        <Image src={Picture} alt='' />
                        <div className={styles.desc}>
                            <span>Planar website</span>
                            <p>
                                A backend developer who loves to create solid and effective systems to enhance online experiences, building the foundation of the internet.
                            </p>
                        </div>
                    </Link>
                </div>
                <div className={styles.card}>
                    <Link href='#'>
                        <Image src={Picture} alt='' />
                        <div className={styles.desc}>
                            <span>Planar website</span>
                            <p>
                                A backend developer who loves to create solid and effective systems to enhance online experiences, building the foundation of the internet.
                            </p>
                        </div>
                    </Link>
                </div>
                <div className={styles.card}>
                    <Link href='#'>
                        <Image src={Picture} alt='' />
                        <div className={styles.desc}>
                            <span>Planar website</span>
                            <p>
                                A backend developer who loves to create solid and effective systems to enhance online experiences, building the foundation of the internet.
                            </p>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Portifolio