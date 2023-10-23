import styles from './styles.module.css'

import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Link from 'next/link'
import Image from 'next/image'

type Image = {
    src: string | StaticImport,
    alt: string
}

export type Project = {
    link: string,
    image: Image,
    title: string,
    text: string,
    favorite?: boolean
}

const ProjectCard = (project: Project) => {
    return (
        <Link href={project.link} className={styles.card}>
            <Image src={project.image.src} alt={project.image.alt} />
            <div className={styles.desc}>
                <span>{project.title}</span>
                <p>{project.text}</p>
            </div>
        </Link>
    )
}

export default ProjectCard