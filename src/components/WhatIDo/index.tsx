import styles from './styles.module.css'

import Skills from '@/services/skillService'

import SkillCard from '../SkillCard'

const WhatIDo = () => {
    let skills = Skills.map((skill, index) =>
        <SkillCard
            icons={skill.icons}
            title={skill.title}
            text={skill.text}
            key={index}
        />
    )

    return (
        <section id='what_i_do' className={styles.what_i_do}>
            <div className={styles.description}>
                <h2>What I do</h2>
                <p>
                    A backend developer who loves to create solid and effective systems to enhance online experiences, building the foundation of the internet. Check out my project <a>portfolio</a>.
                </p>
            </div>
            <div className={styles.skills}>
                {skills}
            </div>
        </section>
    )
}

export default WhatIDo