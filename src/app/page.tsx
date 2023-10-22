import styles from './page.module.css'

import Link from 'next/link'
import { ArrowCircleRight } from '@mui/icons-material'

import LinkButton from '@/components/LinkButton'
import Links from '@/components/Links'
import WhatIDo from '@/components/WhatIDo'
import FeaturedProjects from '@/components/FeaturedProjects'

export default function Home() {
  return (
    <>
      <section id='home' className={styles.home}>
        <div className={styles.about_me}>
          <div className={styles.description}>
            <h1>Filipe Ferracioli</h1>
            <span>Software Engineer</span>
            <p>
              I'm a passionate backend developer with a strong focus on creating robust systems to elevate online experiences. Although my specialty is back-end development, I am also proficient in front-end. My main experience revolves around creating APIs and I have delved into software architecture. My favorite languages are C# and TypeScript/JS. Check out my project <Link href='/portifolio'>portfolio</Link>.
            </p>
          </div>
          <div className={styles.profile}></div>
        </div>
        <div className={styles.actions}>
          <LinkButton
            href='/portifolio'
            value='View Portifolio'
            icon={ArrowCircleRight}
          />
          <Links />
        </div>
      </section>
      <WhatIDo />
      <FeaturedProjects />
    </>
  )
}