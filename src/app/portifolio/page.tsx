import styles from './styles.module.css'

import { SendOutlined } from '@mui/icons-material'

import Projects from '@/components/Projects'
import LinkButton from '@/components/LinkButton'

const Portifolio = () => {
    return (
        <section id='portifolio' className={styles.portifolio}>
            <div className={styles.description}>
                <h1>Portifolio</h1>
                <p>
                    Welcome to my online portfolio. Below, you'll find a showcase of my projects. Feel free to explore them to see the real-world examples of my work.
                </p>
                <LinkButton
                    href='/contact'
                    value='Hire Me'
                    icon={SendOutlined}
                />
            </div>
            <Projects />
        </section>
    )
}

export default Portifolio