import styles from './styles.module.css'

import Skills from '@/services/skillService'

import SkillCard from '../SkillCard'

const WhatIDo = () => {
    const skills = Skills.map((skill, index) =>
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
                    Specializing in developing scalable and solid APIs, my work revolves around software architecture. I am passionate about testing and clean code, ensuring that every system I develop meets the highest quality standards.
                </p>
            </div>
            <div className={styles.skills}>
                {skills}
            </div>
        </section>
    )
}

export default WhatIDo