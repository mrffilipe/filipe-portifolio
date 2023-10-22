import styles from './styles.module.css'

import Projects from '../Projects'

const FeaturedProjects = () => {
    return (
        <section id='featured_projects' className={styles.featured_projects}>
            <div className={styles.description}>
                <h2>Featured projects</h2>
            </div>
            <Projects favoritesOnly />
        </section>
    )
}

export default FeaturedProjects