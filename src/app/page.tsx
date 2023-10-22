import styles from './page.module.css'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowCircleRight } from '@mui/icons-material'

import WhatIDo from '@/components/WhatIDo'
import FeaturedProjects from '@/components/FeaturedProjects'

import LinkedinSvg from '@/assets/svg/linkedin.svg'
import GithubSvg from '@/assets/svg/github.svg'

export default function Home() {
  return (
    <>
      <section id='about_me' className={styles.about_me}>
        <div className={styles.presentation}>
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
          <Link href='/portifolio'>
            <ArrowCircleRight />
            View Portifolio
          </Link>
          <div className={styles.links}>
            <Link href="https://www.linkedin.com/in/filipemrf/" target='_blank'>
              <Image src={LinkedinSvg} alt="Linkedin icons8" />
            </Link>
            <Link href="https://github.com/mrffilipe" target='_blank'>
              <Image src={GithubSvg} alt="GitHub icons8" />
            </Link>
          </div>
        </div>
      </section>
      <WhatIDo />
      <FeaturedProjects />
    </>
  )
}