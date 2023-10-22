import styles from './styles.module.css'

import Link from 'next/link'
import { SendOutlined } from '@mui/icons-material'

import Projects from '@/components/Projects'

const Portifolio = () => {
    return (
        <section id='portifolio' className={styles.portifolio}>
            <div className={styles.description}>
                <h1>Portifolio</h1>
                <p>
                    Welcome to my online portfolio. Below, you'll find a showcase of my projects. Feel free to explore them to see the real-world examples of my work.
                </p>
                <Link href='/contact'>
                    <SendOutlined />
                    Hire Me
                </Link>
            </div>
            <Projects />
        </section>
    )
}

export default Portifolio