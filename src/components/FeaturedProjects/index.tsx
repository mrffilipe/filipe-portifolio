import styles from './styles.module.css'

import Image from 'next/image'
import Link from 'next/link'

import Picture from '@/assets/img/projects.jpg'

const FeaturedProjects = () => {
    return (
        <section id='featured_projects' className={styles.featured_projects}>
            <div className={styles.description}>
                <h2>Featured projects</h2>
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

export default FeaturedProjects