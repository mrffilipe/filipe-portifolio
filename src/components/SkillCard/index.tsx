import styles from './styles.module.css'

import Image from 'next/image'

type Icon = {
    src: string,
    alt: string
}

export type Skill = {
    icons: Array<Icon>,
    title: string,
    text: string
}

const SkillCard = (skill: Skill) => {
    const icons = skill.icons.map((icon, index) =>
        <Image src={icon.src} alt={icon.src} key={index} />
    )

    return (
        <div className={styles.card}>
            <div className={styles.icons}>
                {icons}
            </div>
            <span>{skill.title}</span>
            <p>{skill.text}</p>
        </div>
    )
}

export default SkillCard