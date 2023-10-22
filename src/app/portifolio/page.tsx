import styles from './styles.module.css'

import Link from 'next/link'
import { SendOutlined } from '@mui/icons-material'

import Projects from '@/components/Projects'

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
            <Projects />
        </section>
    )
}

export default Portifolio