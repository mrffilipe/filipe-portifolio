import styles from './styles.module.css'

import Projects from '../Projects'

const FeaturedProjects = () => {
    return (
        <section id='featured_projects' className={styles.featured_projects}>
            <h2>Featured projects</h2>
            <Projects favoritesOnly />
        </section>
    )
}

export default FeaturedProjects