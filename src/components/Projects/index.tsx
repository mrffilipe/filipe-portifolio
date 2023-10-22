import styles from './styles.module.css'

import { default as Projs } from '@/services/projectService'

import ProjectCard from '../ProjectCard'

export type Props = {
    favoritesOnly?: boolean
}

const Projects = (props: Props) => {
    const projects = Projs.map((project, index) => {
        if (props.favoritesOnly) {
            if (project.favorite) {
                return <ProjectCard
                    link={project.link}
                    image={project.image}
                    title={project.title}
                    text={project.text}
                    favorite
                    key={index}
                />
            }
        } else {
            return <ProjectCard
                link={project.link}
                image={project.image}
                title={project.title}
                text={project.text}
                key={index}
            />
        }
    })

    return (
        <div className={styles.projects}>
            {projects}
        </div>
    )
}

export default Projects