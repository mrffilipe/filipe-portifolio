import styles from './page.module.css'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowCircleRight } from '@mui/icons-material'

import WhatIDo from '@/components/WhatIDo'

import LinkedinSvg from '../assets/svg/linkedin.svg'
import GithubSvg from '../assets/svg/github.svg'
import FeaturedProjects from '@/components/FeaturedProjects'

export default function Home() {
  return (
    <>
      <section id='about_me' className={styles.about_me}>
        <div className={styles.description}>
          <h1>Filipe Ferracioli</h1>
          <h3>Software Engineer</h3>
          <p>
            A backend developer who loves to create solid and effective systems to enhance online experiences, building the foundation of the internet. Check out my project <a>portfolio</a>.
          </p>
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